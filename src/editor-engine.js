/**
 * Malayalam Unicode Editor Engine
 * Handles complex grapheme clusters, atomic chillus, smart backspacing,
 * cursor synchronization, and full history undo/redo.
 */

export class MalayalamEditorEngine {
  constructor(textareaElement, options = {}) {
    this.textarea = textareaElement;
    this.autoNormalizeChillus = options.autoNormalizeChillus !== false;
    this.history = [];
    this.historyIndex = -1;
    this.maxHistory = 80;
    this.lastSavedTime = 0;
    this.listeners = new Set();

    // Segmenter for Malayalam grapheme clusters
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      this.segmenter = new Intl.Segmenter('ml', { granularity: 'grapheme' });
    } else {
      this.segmenter = null;
    }

    this.init();
  }

  init() {
    this.saveState(this.textarea.value, this.textarea.selectionStart, this.textarea.selectionEnd, true);

    this.textarea.addEventListener('input', () => {
      this.checkAndNormalize();
      this.saveState(this.textarea.value, this.textarea.selectionStart, this.textarea.selectionEnd);
      this.notify();
    });

    this.textarea.addEventListener('select', () => {
      this.notify();
    });

    this.textarea.addEventListener('click', () => {
      this.notify();
    });

    this.textarea.addEventListener('keyup', () => {
      this.notify();
    });
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) => cb(this.getStats()));
  }

  saveState(value, selStart, selEnd, force = false) {
    const now = Date.now();
    if (!force && this.historyIndex >= 0) {
      const current = this.history[this.historyIndex];
      if (current && current.value === value) {
        current.selStart = selStart;
        current.selEnd = selEnd;
        return;
      }
      // Debounce states within 350ms of rapid typing only when growing text
      if (now - this.lastSavedTime < 350 && this.history.length > 0) {
        const last = this.history[this.historyIndex];
        if (value.startsWith(last.value)) {
          last.value = value;
          last.selStart = selStart;
          last.selEnd = selEnd;
          this.lastSavedTime = now;
          return;
        }
      }
    }

    // Truncate redo stack
    this.history = this.history.slice(0, this.historyIndex + 1);
    this.history.push({ value, selStart, selEnd });
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    } else {
      this.historyIndex++;
    }
    this.lastSavedTime = now;
  }

  undo() {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      const state = this.history[this.historyIndex];
      this.applyState(state);
      this.notify();
      return true;
    }
    return false;
  }

  redo() {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      const state = this.history[this.historyIndex];
      this.applyState(state);
      this.notify();
      return true;
    }
    return false;
  }

  canUndo() {
    return this.historyIndex > 0;
  }

  canRedo() {
    return this.historyIndex < this.history.length - 1;
  }

  applyState(state) {
    this.textarea.value = state.value;
    this.setSelection(state.selStart, state.selEnd);
  }

  setSelection(start, end) {
    this.textarea.focus();
    this.textarea.setSelectionRange(start, end);
  }

  /**
   * Insert text at current cursor or replace selection.
   */
  insertText(textToInsert) {
    const el = this.textarea;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const oldVal = el.value;

    let before = oldVal.slice(0, start);
    let after = oldVal.slice(end);

    // Prevent duplicate consecutive viramas (്്)
    if (textToInsert === '\u0D4D' && before.endsWith('\u0D4D')) {
      return;
    }

    // Auto-fix standalone matras at start of text or after whitespace/punctuation
    // to prevent broken dotted circles (◌ാ -> ആ, ◌ി -> ഇ)
    if (before.length === 0 || /[\s\n\r\t.,!?;:()[\]{}'"]$/.test(before)) {
      textToInsert = this.convertMatraToIndependentVowel(textToInsert);
    }

    // Auto-normalize legacy chillu sequence to atomic chillu if enabled
    if (this.autoNormalizeChillus && textToInsert === '\u200D' && before.endsWith('\u0D4D')) {
      // Check character preceding virama
      const baseBeforeVirama = before.slice(0, -1);
      const lastConsonant = baseBeforeVirama.slice(-1);
      const atomicChillu = this.getAtomicChillu(lastConsonant);
      if (atomicChillu) {
        before = baseBeforeVirama.slice(0, -1) + atomicChillu;
        textToInsert = ''; // Already consumed into atomic chillu
      }
    }

    const newVal = before + textToInsert + after;
    const newCursor = before.length + textToInsert.length;

    el.value = newVal;
    this.setSelection(newCursor, newCursor);
    this.saveState(newVal, newCursor, newCursor);
    this.notify();
  }

  convertMatraToIndependentVowel(char) {
    switch (char) {
      case '\u0D3E': return '\u0D06'; // ാ -> ആ
      case '\u0D3F': return '\u0D07'; // ി -> ഇ
      case '\u0D40': return '\u0D08'; // ീ -> ഈ
      case '\u0D41': return '\u0D09'; // ു -> ഉ
      case '\u0D42': return '\u0D0A'; // ൂ -> ഊ
      case '\u0D43': return '\u0D0B'; // ൃ -> ഋ
      case '\u0D46': return '\u0D0E'; // െ -> എ
      case '\u0D47': return '\u0D0F'; // േ -> ഏ
      case '\u0D48': return '\u0D10'; // ൈ -> ഐ
      case '\u0D4A': return '\u0D12'; // ൊ -> ഒ
      case '\u0D4B': return '\u0D13'; // ോ -> ഓ
      case '\u0D4C':
      case '\u0D57': return '\u0D14'; // ൗ -> ഔ
      default: return char;
    }
  }

  getAtomicChillu(consonant) {
    switch (consonant) {
      case '\u0D23': return '\u0D7A'; // ണ + ് + ZWJ => ൺ
      case '\u0D28': return '\u0D7B'; // ന + ് + ZWJ => ൻ
      case '\u0D30': return '\u0D7C'; // ര + ് + ZWJ => ർ
      case '\u0D32': return '\u0D7D'; // ല + ് + ZWJ => ൽ
      case '\u0D33': return '\u0D7E'; // ള + ് + ZWJ => ൾ
      case '\u0D15': return '\u0D7F'; // ക + ് + ZWJ => ൿ
      default: return null;
    }
  }

  /**
   * Smart Backspace: Grapheme cluster aware deletion
   * Prevents leaving orphan combining marks (dotted circles) or ghost ZWJ/ZWNJ characters
   */
  smartBackspace() {
    const el = this.textarea;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const val = el.value;

    if (start !== end) {
      // Deleting a selection range
      const before = val.slice(0, start);
      const after = val.slice(end);
      el.value = before + after;
      this.setSelection(start, start);
      this.saveState(el.value, start, start);
      this.notify();
      return;
    }

    if (start === 0) return;

    const before = val.slice(0, start);
    const after = val.slice(start);

    let deleteLength = 1;

    // Use Intl.Segmenter if available to identify preceding grapheme cluster
    if (this.segmenter) {
      try {
        const segments = Array.from(this.segmenter.segment(before));
        if (segments.length > 0) {
          const lastSeg = segments[segments.length - 1];
          deleteLength = before.length - lastSeg.index;
        }
      } catch {
        deleteLength = 1;
      }
    } else {
      // Fallback heuristics: check for ZWJ/ZWNJ compound sequences
      if (before.endsWith('\u200D') || before.endsWith('\u200C')) {
        // e.g., consonant + virama + ZWJ
        if (before.length >= 3 && before.charAt(before.length - 2) === '\u0D4D') {
          deleteLength = 3;
        } else {
          deleteLength = 2;
        }
      }
    }

    const newBefore = before.slice(0, before.length - deleteLength);
    const newCursor = newBefore.length;
    el.value = newBefore + after;
    this.setSelection(newCursor, newCursor);
    this.saveState(el.value, newCursor, newCursor, true);
    this.notify();
  }

  deleteForward() {
    const el = this.textarea;
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const val = el.value;

    if (start !== end) {
      const before = val.slice(0, start);
      const after = val.slice(end);
      el.value = before + after;
      this.setSelection(start, start);
      this.saveState(el.value, start, start);
      this.notify();
      return;
    }

    if (start >= val.length) return;

    const before = val.slice(0, start);
    const after = val.slice(start);

    let deleteLength = 1;
    if (this.segmenter) {
      try {
        const segments = Array.from(this.segmenter.segment(after));
        if (segments.length > 0) {
          deleteLength = segments[0].segment.length;
        }
      } catch {
        deleteLength = 1;
      }
    }

    const newAfter = after.slice(deleteLength);
    el.value = before + newAfter;
    this.setSelection(start, start);
    this.saveState(el.value, start, start);
    this.notify();
  }

  clear() {
    this.textarea.value = '';
    this.setSelection(0, 0);
    this.saveState('', 0, 0, true);
    this.notify();
  }

  setText(newText) {
    this.textarea.value = newText;
    const len = newText.length;
    this.setSelection(len, len);
    this.saveState(newText, len, len, true);
    this.notify();
  }

  checkAndNormalize() {
    if (!this.autoNormalizeChillus) return;
    const val = this.textarea.value;
    // Replace traditional ZWJ chillu patterns with modern atomic chillus
    const normalized = val
      .replace(/\u0D23\u0D4D\u200D/g, '\u0D7A')
      .replace(/\u0D28\u0D4D\u200D/g, '\u0D7B')
      .replace(/\u0D30\u0D4D\u200D/g, '\u0D7C')
      .replace(/\u0D32\u0D4D\u200D/g, '\u0D7D')
      .replace(/\u0D33\u0D4D\u200D/g, '\u0D7E')
      .replace(/\u0D15\u0D4D\u200D/g, '\u0D7F')
      .replace(/\u0D4D\u0D4D+/g, '\u0D4D'); // Remove duplicate viramas

    if (normalized !== val) {
      const cur = this.textarea.selectionStart;
      this.textarea.value = normalized;
      this.setSelection(cur, cur);
    }
  }

  /**
   * Full text statistics: Words, Graphemes/Aksharams, Unicode Code Points, Lines
   */
  getStats() {
    const text = this.textarea.value || '';
    const charCount = text.length;

    // Word count (Malayalam & English tokens)
    const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;

    // Aksharam count (Malayalam Syllables/Graphemes)
    let aksharamCount = 0;
    if (this.segmenter) {
      try {
        const segments = Array.from(this.segmenter.segment(text));
        aksharamCount = segments.filter((s) => !/\s/.test(s.segment)).length;
      } catch {
        aksharamCount = text.replace(/\s+/g, '').length;
      }
    } else {
      aksharamCount = text.replace(/\s+/g, '').length;
    }

    const lines = text ? text.split('\n').length : 1;

    return {
      text,
      words,
      aksharams: aksharamCount,
      chars: charCount,
      lines,
      canUndo: this.canUndo(),
      canRedo: this.canRedo()
    };
  }
}
