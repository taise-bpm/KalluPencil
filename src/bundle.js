/**
 * Malayalam InScript Typing Interface - Consolidated Bundle
 * Self-contained for seamless execution on both file:/// protocol and HTTP/HTTPS servers.
 */

(function () {
  'use strict';

  /* =========================================================
     1. InScript Keyboard Data & Specifications
     ========================================================= */
  const INSCRIPT_MAP = {
    // Number row
    Backquote: { normal: '\u0D4A', shift: '\u0D12', labelNormal: 'ൊ', labelShift: 'ഒ', keyName: '`' },
    Digit1: { normal: '1', shift: '!', altNormal: '\u0D67', labelNormal: '1', labelShift: '!', keyName: '1' },
    Digit2: { normal: '2', shift: '@', altNormal: '\u0D68', labelNormal: '2', labelShift: '@', keyName: '2' },
    Digit3: { normal: '3', shift: '#', altNormal: '\u0D69', labelNormal: '3', labelShift: '#', keyName: '3' },
    Digit4: { normal: '4', shift: '$', altNormal: '\u0D6A', labelNormal: '4', labelShift: '$', keyName: '4' },
    Digit5: { normal: '5', shift: '%', altNormal: '\u0D6B', labelNormal: '5', labelShift: '%', keyName: '5' },
    Digit6: { normal: '6', shift: '^', altNormal: '\u0D6C', labelNormal: '6', labelShift: '^', keyName: '6' },
    Digit7: { normal: '7', shift: '&', altNormal: '\u0D6D', labelNormal: '7', labelShift: '&', keyName: '7' },
    Digit8: { normal: '8', shift: '*', altNormal: '\u0D6E', labelNormal: '8', labelShift: '*', keyName: '8' },
    Digit9: { normal: '9', shift: '(', altNormal: '\u0D6F', labelNormal: '9', labelShift: '(', keyName: '9' },
    Digit0: { normal: '0', shift: ')', altNormal: '\u0D66', labelNormal: '0', labelShift: ')', keyName: '0' },
    Minus: { normal: '-', shift: '\u0D03', labelNormal: '-', labelShift: 'ഃ', keyName: '-' },
    Equal: { normal: '\u0D43', shift: '\u0D0B', labelNormal: 'ൃ', labelShift: 'ഋ', keyName: '=' },

    // Top row (QWERTY)
    KeyQ: { normal: '\u0D4C', shift: '\u0D14', labelNormal: 'ൗ', labelShift: 'ഔ', keyName: 'Q' },
    KeyW: { normal: '\u0D48', shift: '\u0D10', labelNormal: 'ൈ', labelShift: 'ഐ', keyName: 'W' },
    KeyE: { normal: '\u0D3E', shift: '\u0D06', labelNormal: 'ാ', labelShift: 'ആ', keyName: 'E' },
    KeyR: { normal: '\u0D40', shift: '\u0D08', labelNormal: 'ീ', labelShift: 'ഈ', keyName: 'R' },
    KeyT: { normal: '\u0D42', shift: '\u0D0A', labelNormal: 'ൂ', labelShift: 'ഊ', keyName: 'T' },
    KeyY: { normal: '\u0D2C', shift: '\u0D2D', labelNormal: 'ബ', labelShift: 'ഭ', keyName: 'Y' },
    KeyU: { normal: '\u0D39', shift: '\u0D19', labelNormal: 'ഹ', labelShift: 'ങ', keyName: 'U' },
    KeyI: { normal: '\u0D17', shift: '\u0D18', labelNormal: 'ഗ', labelShift: 'ഘ', keyName: 'I' },
    KeyO: { normal: '\u0D26', shift: '\u0D27', labelNormal: 'ദ', labelShift: 'ധ', keyName: 'O' },
    KeyP: { normal: '\u0D1C', shift: '\u0D1D', labelNormal: 'ജ', labelShift: 'ഝ', keyName: 'P' },
    BracketLeft: { normal: '\u0D21', shift: '\u0D22', labelNormal: 'ഡ', labelShift: 'ഢ', keyName: '[' },
    BracketRight: { normal: '\u200D', shift: '\u0D1E', labelNormal: 'ZWJ', labelShift: 'ഞ', keyName: ']' },
    Backslash: { normal: '\\', shift: '|', labelNormal: '\\', labelShift: '|', keyName: '\\' },

    // Home row (ASDF)
    KeyA: { normal: '\u0D4B', shift: '\u0D13', labelNormal: 'ോ', labelShift: 'ഓ', keyName: 'A' },
    KeyS: { normal: '\u0D47', shift: '\u0D0F', labelNormal: 'േ', labelShift: 'ഏ', keyName: 'S' },
    KeyD: { normal: '\u0D4D', shift: '\u0D05', labelNormal: '്', labelShift: 'അ', keyName: 'D' },
    KeyF: { normal: '\u0D3F', shift: '\u0D07', labelNormal: 'ി', labelShift: 'ഇ', keyName: 'F' },
    KeyG: { normal: '\u0D41', shift: '\u0D09', labelNormal: 'ു', labelShift: 'ഉ', keyName: 'G' },
    KeyH: { normal: '\u0D2A', shift: '\u0D2B', labelNormal: 'പ', labelShift: 'ഫ', keyName: 'H' },
    KeyJ: { normal: '\u0D30', shift: '\u0D31', labelNormal: 'ര', labelShift: 'റ', keyName: 'J' },
    KeyK: { normal: '\u0D15', shift: '\u0D16', labelNormal: 'ക', labelShift: 'ഖ', keyName: 'K' },
    KeyL: { normal: '\u0D24', shift: '\u0D25', labelNormal: 'ത', labelShift: 'ഥ', keyName: 'L' },
    Semicolon: { normal: '\u0D1A', shift: '\u0D1B', labelNormal: 'ച', labelShift: 'ഛ', keyName: ';' },
    Quote: { normal: '\u0D1F', shift: '\u0D20', labelNormal: 'ട', labelShift: 'ഠ', keyName: "'" },

    // Bottom row (ZXCV)
    KeyZ: { normal: '\u0D46', shift: '\u0D0E', labelNormal: 'െ', labelShift: 'എ', keyName: 'Z' },
    KeyX: { normal: '\u0D02', shift: '\u200C', labelNormal: 'ം', labelShift: 'ZWNJ', keyName: 'X' },
    KeyC: { normal: '\u0D2E', shift: '\u0D23', labelNormal: 'മ', labelShift: 'ണ', keyName: 'C' },
    KeyV: { normal: '\u0D28', shift: '\u0D29', labelNormal: 'ന', labelShift: 'ഩ', keyName: 'V' },
    KeyB: { normal: '\u0D35', shift: '\u0D34', labelNormal: 'വ', labelShift: 'ഴ', keyName: 'B' },
    KeyN: { normal: '\u0D32', shift: '\u0D33', labelNormal: 'ല', labelShift: 'ള', keyName: 'N' },
    KeyM: { normal: '\u0D38', shift: '\u0D36', labelNormal: 'സ', labelShift: 'ശ', keyName: 'M' },
    Comma: { normal: ',', shift: '\u0D37', labelNormal: ',', labelShift: 'ഷ', keyName: ',' },
    Period: { normal: '.', shift: '\u0D3D', labelNormal: '.', labelShift: 'ഽ', keyName: '.' },
    Slash: { normal: '\u0D2F', shift: '?', labelNormal: 'യ', labelShift: '?', keyName: '/' },
    Space: { normal: ' ', shift: ' ', labelNormal: 'സ്പേസ്', labelShift: 'സ്പേസ്', keyName: 'Space' }
  };

  const CHILLU_CHARS = [
    { char: '\u0D7A', label: 'ൺ', name: 'Chillu NN (ൺ)', sequence: '\u0D23\u0D4D\u200D' },
    { char: '\u0D7B', label: 'ൻ', name: 'Chillu N (ൻ)', sequence: '\u0D28\u0D4D\u200D' },
    { char: '\u0D7C', label: 'ർ', name: 'Chillu R (ർ)', sequence: '\u0D30\u0D4D\u200D' },
    { char: '\u0D7D', label: 'ൽ', name: 'Chillu L (ൽ)', sequence: '\u0D32\u0D4D\u200D' },
    { char: '\u0D7E', label: 'ൾ', name: 'Chillu LL (ൾ)', sequence: '\u0D33\u0D4D\u200D' },
    { char: '\u0D7F', label: 'ൿ', name: 'Chillu K (ൿ)', sequence: '\u0D15\u0D4D\u200D' }
  ];

  const CONJUNCT_PRESETS = [
    { char: 'ക്ഷ', label: 'ക്ഷ', name: 'ക + ് + ഷ' },
    { char: 'ജ്ഞ', label: 'ജ്ഞ', name: 'ജ + ് + ഞ' },
    { char: 'ത്ര', label: 'ത്ര', name: 'ത + ് + ര' },
    { char: 'ശ്ര', label: 'ശ്ര', name: 'ശ + ് + ര' },
    { char: 'പ്ര', label: 'പ്ര', name: 'പ + ് + ര' },
    { char: 'ഗ്ര', label: 'ഗ്ര', name: 'ഗ + ് + ര' },
    { char: 'ദ്ര', label: 'ദ്ര', name: 'ദ + ് + ര' },
    { char: 'ക്ക', label: 'ക്ക', name: 'ക + ് + ക' },
    { char: 'ങ്ങ', label: 'ങ്ങ', name: 'ങ + ് + ങ' },
    { char: 'ച്ച', label: 'ച്ച', name: 'ച + ് + ച' },
    { char: 'ഞ്ച', label: 'ഞ്ച', name: 'ഞ + ് + ച' },
    { char: 'ട്ട', label: 'ട്ട', name: 'ട + ് + ട' },
    { char: 'ണ്ട', label: 'ണ്ട', name: 'ണ + ് + ട' },
    { char: 'ത്ത', label: 'ത്ത', name: 'ത + ് + ത' },
    { char: 'ന്ത', label: 'ന്ത', name: 'ന + ് + ത' },
    { char: 'പ്പ', label: 'പ്പ', name: 'പ + ് + പ' },
    { char: 'മ്പ', label: 'മ്പ', name: 'മ + ് + പ' },
    { char: 'മ്മ', label: 'മ്മ', name: 'മ + ് + മ' },
    { char: 'യ്യ', label: 'യ്യ', name: 'യ + ് + യ' },
    { char: 'ല്ല', label: 'ല്ല', name: 'ല + ് + ല' },
    { char: 'വ്വ', label: 'വ്വ', name: 'വ + ് + വ' },
    { char: 'സ്സ', label: 'സ്സ', name: 'സ + ് + സ' },
    { char: 'റ്റ', label: 'റ്റ', name: 'റ + ് + റ' }
  ];

  const VOWEL_PRESETS = ['അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ', 'ഋ', 'എ', 'ഏ', 'ഐ', 'ഒ', 'ഓ', 'ഔ'];

  const MALAYALAM_NUMERALS = [
    { ml: '൦', en: '0' },
    { ml: '൧', en: '1' },
    { ml: '൨', en: '2' },
    { ml: '൩', en: '3' },
    { ml: '൪', en: '4' },
    { ml: '൫', en: '5' },
    { ml: '൬', en: '6' },
    { ml: '൭', en: '7' },
    { ml: '൮', en: '8' },
    { ml: '൯', en: '9' }
  ];

  const SPECIAL_SIGNS = [
    { char: '\u0D4D', label: '് (ചന്ദ്രക്കല)', desc: 'Virama / Chandrakkala' },
    { char: '\u0D02', label: 'ം (അനുസ്വാരം)', desc: 'Anusvara' },
    { char: '\u0D03', label: 'ഃ (വിസർഗ്ഗം)', desc: 'Visarga' },
    { char: '\u200D', label: 'ZWJ (ലിഗേച്ചർ)', desc: 'Zero-Width Joiner' },
    { char: '\u200C', label: 'ZWNJ (വിഘടനം)', desc: 'Zero-Width Non-Joiner' },
    { char: '\u0D3D', label: 'ഽ (അവഗ്രഹം)', desc: 'Avagraha' }
  ];

  /* =========================================================
     2. Sound & Haptics Engine
     ========================================================= */
  class SoundAndHaptics {
    constructor() {
      this.audioCtx = null;
      this.soundEnabled = false;
      this.hapticEnabled = true;
    }

    initAudio() {
      if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    playKeyClick(isSpecial = false) {
      if (!this.soundEnabled) return;
      try {
        this.initAudio();
        if (!this.audioCtx) return;

        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const baseFreq = isSpecial ? 160 : 280;
        const now = this.audioCtx.currentTime;

        osc.type = isSpecial ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.4, now + 0.04);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.04);
      } catch {
        // Ignore audio errors
      }
    }

    triggerHaptic(duration = 10) {
      if (!this.hapticEnabled) return;
      if ('vibrate' in navigator) {
        try {
          navigator.vibrate(duration);
        } catch {
          // Ignore vibration errors
        }
      }
    }

    feedback(isSpecial = false) {
      this.playKeyClick(isSpecial);
      this.triggerHaptic(isSpecial ? 18 : 10);
    }
  }

  const feedback = new SoundAndHaptics();

  /* =========================================================
     3. Malayalam Unicode Editor Engine
     ========================================================= */
  class MalayalamEditorEngine {
    constructor(textareaElement, options = {}) {
      this.textarea = textareaElement;
      this.autoNormalizeChillus = options.autoNormalizeChillus !== false;
      this.history = [];
      this.historyIndex = -1;
      this.maxHistory = 80;
      this.lastSavedTime = 0;
      this.listeners = new Set();

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

      this.textarea.addEventListener('select', () => this.notify());
      this.textarea.addEventListener('click', () => this.notify());
      this.textarea.addEventListener('keyup', () => this.notify());
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

    insertText(textToInsert) {
      const el = this.textarea;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const oldVal = el.value;

      let before = oldVal.slice(0, start);
      let after = oldVal.slice(end);

      if (textToInsert === '\u0D4D' && before.endsWith('\u0D4D')) {
        return;
      }

      if (before.length === 0 || /[\s\n\r\t.,!?;:()[\]{}'"]$/.test(before)) {
        textToInsert = this.convertMatraToIndependentVowel(textToInsert);
      }

      if (this.autoNormalizeChillus && textToInsert === '\u200D' && before.endsWith('\u0D4D')) {
        const baseBeforeVirama = before.slice(0, -1);
        const lastConsonant = baseBeforeVirama.slice(-1);
        const atomicChillu = this.getAtomicChillu(lastConsonant);
        if (atomicChillu) {
          before = baseBeforeVirama.slice(0, -1) + atomicChillu;
          textToInsert = '';
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
        case '\u0D3E': return '\u0D06';
        case '\u0D3F': return '\u0D07';
        case '\u0D40': return '\u0D08';
        case '\u0D41': return '\u0D09';
        case '\u0D42': return '\u0D0A';
        case '\u0D43': return '\u0D0B';
        case '\u0D46': return '\u0D0E';
        case '\u0D47': return '\u0D0F';
        case '\u0D48': return '\u0D10';
        case '\u0D4A': return '\u0D12';
        case '\u0D4B': return '\u0D13';
        case '\u0D4C': return '\u0D14';
        default: return char;
      }
    }

    getAtomicChillu(consonant) {
      switch (consonant) {
        case '\u0D23': return '\u0D7A';
        case '\u0D28': return '\u0D7B';
        case '\u0D30': return '\u0D7C';
        case '\u0D32': return '\u0D7D';
        case '\u0D33': return '\u0D7E';
        case '\u0D15': return '\u0D7F';
        default: return null;
      }
    }

    smartBackspace() {
      const el = this.textarea;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const val = el.value;

      if (start !== end) {
        const before = val.slice(0, start);
        const after = val.slice(end);
        el.value = before + after;
        this.setSelection(start, start);
        this.saveState(el.value, start, start, true);
        this.notify();
        return;
      }

      if (start === 0) return;

      const before = val.slice(0, start);
      const after = val.slice(start);

      let deleteLength = 1;

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
        if (before.endsWith('\u200D') || before.endsWith('\u200C')) {
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
      const normalized = val
        .replace(/\u0D23\u0D4D\u200D/g, '\u0D7A')
        .replace(/\u0D28\u0D4D\u200D/g, '\u0D7B')
        .replace(/\u0D30\u0D4D\u200D/g, '\u0D7C')
        .replace(/\u0D32\u0D4D\u200D/g, '\u0D7D')
        .replace(/\u0D33\u0D4D\u200D/g, '\u0D7E')
        .replace(/\u0D15\u0D4D\u200D/g, '\u0D7F')
        .replace(/\u0D4D\u0D4D+/g, '\u0D4D');

      if (normalized !== val) {
        const cur = this.textarea.selectionStart;
        this.textarea.value = normalized;
        this.setSelection(cur, cur);
      }
    }

    getStats() {
      const text = this.textarea.value || '';
      const charCount = text.length;
      const words = text.trim() ? text.trim().split(/\s+/).filter(Boolean).length : 0;

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

  /* =========================================================
     4. Virtual Keyboard Component
     ========================================================= */
  class VirtualKeyboard {
    constructor(containerElement, editorEngine, options = {}) {
      this.container = containerElement;
      this.editor = editorEngine;
      this.options = options;

      this.isShifted = false;
      this.isCapsLocked = false;
      this.activeTab = 'inscript';
      this.lastShiftTapTime = 0;
      this.keyElementsMap = new Map();

      this.init();
    }

    init() {
      this.render();
      this.setupPhysicalKeyboardListeners();
    }

    setShift(shifted, locked = false) {
      this.isShifted = shifted;
      this.isCapsLocked = locked;
      this.updateKeyLabels();
      this.updateShiftButtons();
    }

    toggleShift() {
      const now = Date.now();
      if (this.isShifted && now - this.lastShiftTapTime < 350) {
        this.setShift(true, true);
      } else if (this.isCapsLocked) {
        this.setShift(false, false);
      } else {
        this.setShift(!this.isShifted, false);
      }
      this.lastShiftTapTime = now;
    }

    render() {
      this.container.innerHTML = `
        <div class="keyboard-wrapper">
          <div class="keyboard-toolbar">
            <div class="toolbar-tabs">
              <button type="button" class="tab-btn ${this.activeTab === 'inscript' ? 'active' : ''}" data-tab="inscript">
                ഇൻസ്ക്രിപ്റ്റ് (InScript)
              </button>
              <button type="button" class="tab-btn ${this.activeTab === 'chillus' ? 'active' : ''}" data-tab="chillus">
                ചില്ലുകൾ (Chillus)
              </button>
              <button type="button" class="tab-btn ${this.activeTab === 'conjuncts' ? 'active' : ''}" data-tab="conjuncts">
                കൂട്ടക്ഷരങ്ങൾ (Conjuncts)
              </button>
              <button type="button" class="tab-btn ${this.activeTab === 'numbers' ? 'active' : ''}" data-tab="numbers">
                അക്കങ്ങൾ (0-9)
              </button>
            </div>
            <div class="toolbar-actions">
              <button type="button" class="quick-sign-btn" data-insert="\u0D4D" title="ചന്ദ്രക്കല / Virama">്</button>
              <button type="button" class="quick-sign-btn" data-insert="\u0D02" title="അനുസ്വാരം / Anusvara">ം</button>
              <button type="button" class="quick-sign-btn" data-insert="\u200D" title="ZWJ (ലിഗേച്ചർ)">ZWJ</button>
              <button type="button" class="quick-sign-btn" data-insert="\u200C" title="ZWNJ (വിഘടനം)">ZWNJ</button>
            </div>
          </div>

          <div class="keyboard-panel-container">
            <div class="keyboard-panel inscript-panel ${this.activeTab === 'inscript' ? 'active' : 'hidden'}">
              <div class="kb-row row-0">
                ${this.renderKey('Backquote')}
                ${this.renderKey('Digit1')}
                ${this.renderKey('Digit2')}
                ${this.renderKey('Digit3')}
                ${this.renderKey('Digit4')}
                ${this.renderKey('Digit5')}
                ${this.renderKey('Digit6')}
                ${this.renderKey('Digit7')}
                ${this.renderKey('Digit8')}
                ${this.renderKey('Digit9')}
                ${this.renderKey('Digit0')}
                ${this.renderKey('Minus')}
                ${this.renderKey('Equal')}
                <button type="button" class="kb-key key-action key-backspace" data-action="backspace" title="മായ്ക്കുക (Backspace)">
                  <span class="icon-backspace">⌫</span>
                </button>
              </div>

              <div class="kb-row row-1">
                <button type="button" class="kb-key key-action key-tab" data-action="tab">
                  <span>Tab ⇥</span>
                </button>
                ${this.renderKey('KeyQ')}
                ${this.renderKey('KeyW')}
                ${this.renderKey('KeyE')}
                ${this.renderKey('KeyR')}
                ${this.renderKey('KeyT')}
                ${this.renderKey('KeyY')}
                ${this.renderKey('KeyU')}
                ${this.renderKey('KeyI')}
                ${this.renderKey('KeyO')}
                ${this.renderKey('KeyP')}
                ${this.renderKey('BracketLeft')}
                ${this.renderKey('BracketRight')}
                ${this.renderKey('Backslash')}
              </div>

              <div class="kb-row row-2">
                <button type="button" class="kb-key key-action key-caps" data-action="caps" title="Caps Lock">
                  <span class="caps-indicator"></span>
                  <span>Caps</span>
                </button>
                ${this.renderKey('KeyA')}
                ${this.renderKey('KeyS')}
                ${this.renderKey('KeyD')}
                ${this.renderKey('KeyF')}
                ${this.renderKey('KeyG')}
                ${this.renderKey('KeyH')}
                ${this.renderKey('KeyJ')}
                ${this.renderKey('KeyK')}
                ${this.renderKey('KeyL')}
                ${this.renderKey('Semicolon')}
                ${this.renderKey('Quote')}
                <button type="button" class="kb-key key-action key-enter" data-action="enter" title="വരി മാറുക (Enter)">
                  <span>Enter ↵</span>
                </button>
              </div>

              <div class="kb-row row-3">
                <button type="button" class="kb-key key-action key-shift key-shift-left" data-action="shift" title="Shift">
                  <span class="shift-icon">⇧</span>
                </button>
                ${this.renderKey('KeyZ')}
                ${this.renderKey('KeyX')}
                ${this.renderKey('KeyC')}
                ${this.renderKey('KeyV')}
                ${this.renderKey('KeyB')}
                ${this.renderKey('KeyN')}
                ${this.renderKey('KeyM')}
                ${this.renderKey('Comma')}
                ${this.renderKey('Period')}
                ${this.renderKey('Slash')}
                <button type="button" class="kb-key key-action key-shift key-shift-right" data-action="shift" title="Shift">
                  <span class="shift-icon">⇧</span>
                </button>
              </div>

              <div class="kb-row row-4">
                <button type="button" class="kb-key key-mode-switch" data-action="switch-chillus">
                  <span>ചില്ലുകൾ</span>
                </button>
                <button type="button" class="kb-key key-space" data-action="space" title="Space">
                  <span class="space-text">സ്പേസ് ബാർ (Space)</span>
                </button>
                <button type="button" class="kb-key key-mode-switch" data-action="switch-conjuncts">
                  <span>കൂട്ടക്ഷരം</span>
                </button>
                <button type="button" class="kb-key key-action key-clear" data-action="clear-confirm" title="എല്ലാം മായ്ക്കുക">
                  <span>Clear</span>
                </button>
              </div>
            </div>

            <div class="keyboard-panel chillus-panel ${this.activeTab === 'chillus' ? 'active' : 'hidden'}">
              <div class="chillus-grid">
                <div class="panel-section-title">ചില്ലക്ഷരങ്ങൾ (Atomic Chillu Characters)</div>
                <div class="grid-row">
                  ${CHILLU_CHARS.map(
                    (c) => `
                    <button type="button" class="special-insert-btn chillu-btn" data-insert="${c.char}">
                      <span class="char-large">${c.label}</span>
                      <span class="char-sub">${c.name}</span>
                    </button>
                  `
                  ).join('')}
                </div>

                <div class="panel-section-title">സ്വര ചിഹ്നങ്ങൾ (Signs & Marks)</div>
                <div class="grid-row">
                  ${SPECIAL_SIGNS.map(
                    (s) => `
                    <button type="button" class="special-insert-btn" data-insert="${s.char}">
                      <span class="char-large">${s.label}</span>
                      <span class="char-sub">${s.desc}</span>
                    </button>
                  `
                  ).join('')}
                </div>

                <div class="panel-section-title">സ്വതന്ത്ര സ്വരങ്ങൾ (Independent Vowels)</div>
                <div class="grid-row wrap">
                  ${VOWEL_PRESETS.map(
                    (v) => `
                    <button type="button" class="special-insert-btn small-btn" data-insert="${v}">
                      <span class="char-large">${v}</span>
                    </button>
                  `
                  ).join('')}
                </div>
              </div>
            </div>

            <div class="keyboard-panel conjuncts-panel ${this.activeTab === 'conjuncts' ? 'active' : 'hidden'}">
              <div class="panel-section-title">പ്രധാന കൂട്ടക്ഷരങ്ങൾ (Frequently Used Ligatures)</div>
              <div class="conjuncts-grid">
                ${CONJUNCT_PRESETS.map(
                  (item) => `
                  <button type="button" class="special-insert-btn conjunct-btn" data-insert="${item.char}" title="${item.name}">
                    <span class="char-large">${item.label}</span>
                    <span class="char-formula">${item.name}</span>
                  </button>
                `
                ).join('')}
              </div>
            </div>

            <div class="keyboard-panel numbers-panel ${this.activeTab === 'numbers' ? 'active' : 'hidden'}">
              <div class="panel-section-title">മലയാള അക്കങ്ങളും ചിഹ്നങ്ങളും (Malayalam Numerals & Currency)</div>
              <div class="numbers-grid">
                <div class="num-column">
                  <span class="column-header">മലയാളം അക്കങ്ങൾ</span>
                  <div class="num-buttons-row">
                    ${MALAYALAM_NUMERALS.map(
                      (n) => `
                      <button type="button" class="special-insert-btn num-btn" data-insert="${n.ml}">
                        <span class="char-large">${n.ml}</span>
                        <span class="char-sub">${n.en}</span>
                      </button>
                    `
                    ).join('')}
                  </div>
                </div>
                <div class="num-column">
                  <span class="column-header">ഇംഗ്ലീഷ് അക്കങ്ങൾ</span>
                  <div class="num-buttons-row">
                    ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                      (d) => `
                      <button type="button" class="special-insert-btn num-btn" data-insert="${d}">
                        <span class="char-large">${d}</span>
                      </button>
                    `
                    ).join('')}
                  </div>
                </div>
                <div class="num-column">
                  <span class="column-header">ചിഹ്നങ്ങൾ</span>
                  <div class="num-buttons-row">
                    ${['₹', '%', '+', '-', '×', '÷', '=', '(', ')', '[', ']', '{', '}', '!', '?', '@', '#', '*', '/', ',', '.', ';', ':'].map(
                      (sym) => `
                      <button type="button" class="special-insert-btn sym-btn" data-insert="${sym}">
                        <span class="char-large">${sym}</span>
                      </button>
                    `
                    ).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      this.cacheKeyElements();
      this.attachEventListeners();
    }

    renderKey(code) {
      const data = INSCRIPT_MAP[code];
      if (!data) return '';

      const normal = data.labelNormal || data.normal;
      const shift = data.labelShift || data.shift;
      const keyHint = data.keyName || '';

      return `
        <button type="button" class="kb-key" data-code="${code}" data-normal="${data.normal}" data-shift="${data.shift}">
          <span class="key-hint">${keyHint}</span>
          <span class="key-char primary-char">${normal}</span>
          <span class="key-char shift-char">${shift}</span>
        </button>
      `;
    }

    cacheKeyElements() {
      this.keyElementsMap.clear();
      const keyEls = this.container.querySelectorAll('.kb-key[data-code]');
      keyEls.forEach((el) => {
        const code = el.getAttribute('data-code');
        if (code) {
          this.keyElementsMap.set(code, el);
        }
      });
    }

    updateKeyLabels() {
      const isShift = this.isShifted || this.isCapsLocked;
      const keys = this.container.querySelectorAll('.kb-key[data-code]');
      keys.forEach((keyEl) => {
        if (isShift) {
          keyEl.classList.add('shift-active');
        } else {
          keyEl.classList.remove('shift-active');
        }
      });
    }

    updateShiftButtons() {
      const shiftBtns = this.container.querySelectorAll('.key-shift');
      const capsBtn = this.container.querySelector('.key-caps');

      shiftBtns.forEach((btn) => {
        if (this.isShifted && !this.isCapsLocked) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      if (capsBtn) {
        if (this.isCapsLocked) {
          capsBtn.classList.add('active');
        } else {
          capsBtn.classList.remove('active');
        }
      }
    }

    switchTab(tabName) {
      this.activeTab = tabName;
      const tabs = this.container.querySelectorAll('.tab-btn');
      tabs.forEach((tab) => {
        if (tab.getAttribute('data-tab') === tabName) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });

      const panels = this.container.querySelectorAll('.keyboard-panel');
      panels.forEach((panel) => {
        if (panel.classList.contains(`${tabName}-panel`)) {
          panel.classList.remove('hidden');
          panel.classList.add('active');
        } else {
          panel.classList.add('hidden');
          panel.classList.remove('active');
        }
      });
    }

    highlightTutorKey(code, isShift = false) {
      this.clearTutorHighlights();
      if (!code) return;

      const keyEl = this.keyElementsMap.get(code);
      if (keyEl) {
        keyEl.classList.add('practice-target');
      }

      if (isShift) {
        const shiftBtns = this.container.querySelectorAll('.key-shift');
        shiftBtns.forEach((btn) => btn.classList.add('practice-target'));
        this.setShift(true, false);
      } else {
        if (!this.isCapsLocked) {
          this.setShift(false, false);
        }
      }
    }

    clearTutorHighlights() {
      const highlighted = this.container.querySelectorAll('.practice-target');
      highlighted.forEach((el) => el.classList.remove('practice-target'));
    }

    insertText(char) {
      if (this.options.getActiveTarget) {
        const target = this.options.getActiveTarget();
        if (target && target.insertText) {
          target.insertText(char);
          return;
        }
      }
      this.editor.insertText(char);
    }

    smartBackspace() {
      if (this.options.getActiveTarget) {
        const target = this.options.getActiveTarget();
        if (target && target.smartBackspace) {
          target.smartBackspace();
          return;
        }
      }
      this.editor.smartBackspace();
    }

    attachEventListeners() {
      this.container.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');
          this.switchTab(tab);
          feedback.feedback(true);
        });
      });

      this.container.querySelectorAll('.quick-sign-btn, .special-insert-btn').forEach((btn) => {
        this.bindTouchAndClick(btn, () => {
          const insert = btn.getAttribute('data-insert');
          if (insert) {
            this.insertText(insert);
            feedback.feedback(false);
          }
        });
      });

      this.container.querySelectorAll('.kb-key[data-code]').forEach((keyEl) => {
        this.bindTouchAndClick(keyEl, () => {
          const normalVal = keyEl.getAttribute('data-normal');
          const shiftVal = keyEl.getAttribute('data-shift');
          const isShift = this.isShifted || this.isCapsLocked;
          const charToInsert = isShift ? shiftVal : normalVal;

          if (charToInsert) {
            this.insertText(charToInsert);
            feedback.feedback(false);

            if (this.isShifted && !this.isCapsLocked) {
              this.setShift(false, false);
            }
          }
        });
      });

      const backspaceBtn = this.container.querySelector('.key-backspace');
      if (backspaceBtn) {
        this.bindTouchAndClick(backspaceBtn, () => {
          this.smartBackspace();
          feedback.feedback(true);
        });
      }

      const spaceBtn = this.container.querySelector('.key-space');
      if (spaceBtn) {
        this.bindTouchAndClick(spaceBtn, () => {
          this.insertText(' ');
          feedback.feedback(false);
        });
      }

      const enterBtn = this.container.querySelector('.key-enter');
      if (enterBtn) {
        this.bindTouchAndClick(enterBtn, () => {
          this.insertText('\n');
          feedback.feedback(true);
        });
      }

      const tabBtn = this.container.querySelector('.key-tab');
      if (tabBtn) {
        this.bindTouchAndClick(tabBtn, () => {
          this.insertText('\t');
          feedback.feedback(true);
        });
      }

      this.container.querySelectorAll('.key-shift').forEach((shiftBtn) => {
        shiftBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleShift();
          feedback.feedback(true);
        });
      });

      const capsBtn = this.container.querySelector('.key-caps');
      if (capsBtn) {
        capsBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.setShift(!this.isCapsLocked, !this.isCapsLocked);
          feedback.feedback(true);
        });
      }

      this.container.querySelectorAll('[data-action="switch-chillus"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.switchTab('chillus');
          feedback.feedback(true);
        });
      });

      this.container.querySelectorAll('[data-action="switch-conjuncts"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.switchTab('conjuncts');
          feedback.feedback(true);
        });
      });

      this.container.querySelectorAll('[data-action="clear-confirm"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          if (this.options.onClearRequest) {
            this.options.onClearRequest();
          } else if (confirm('എല്ലാ അക്ഷരങ്ങളും മായ്ക്കണോ? (Clear all text?)')) {
            this.editor.clear();
            feedback.feedback(true);
          }
        });
      });
    }

    bindTouchAndClick(element, handler) {
      let touched = false;

      element.addEventListener(
        'touchstart',
        (e) => {
          touched = true;
          element.classList.add('pressed');
          handler();
          e.preventDefault();
        },
        { passive: false }
      );

      element.addEventListener(
        'touchend',
        (e) => {
          element.classList.remove('pressed');
          e.preventDefault();
        },
        { passive: false }
      );

      element.addEventListener('mousedown', (e) => {
        if (touched) return;
        element.classList.add('pressed');
        handler();
        e.preventDefault();
      });

      element.addEventListener('mouseup', () => {
        element.classList.remove('pressed');
      });

      element.addEventListener('mouseleave', () => {
        element.classList.remove('pressed');
      });
    }

    setupPhysicalKeyboardListeners() {
      window.addEventListener('keydown', (e) => {
        const isTutorActive = this.options.isTutorActive && this.options.isTutorActive();
        const isSpeedInput = e.target && e.target.id === 'speedTestInput';

        if (isTutorActive) {
          // If stage dropdown is focused, allow navigation keys or blur on typing
          if (e.target && e.target.id === 'practiceStageSelect') {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Tab' || e.key === 'Enter') {
              return;
            }
            e.target.blur();
          }
        } else if (!isSpeedInput && e.target !== this.editor.textarea && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) {
          return;
        }

        if (e.ctrlKey || e.metaKey || e.altKey) {
          if (e.ctrlKey && e.key.toLowerCase() === 'z') {
            e.preventDefault();
            if (e.shiftKey) {
              this.editor.redo();
            } else {
              this.editor.undo();
            }
            feedback.feedback(true);
          } else if (e.ctrlKey && e.key.toLowerCase() === 'y') {
            e.preventDefault();
            this.editor.redo();
            feedback.feedback(true);
          }
          return;
        }

        if (e.key === 'Shift') {
          this.setShift(true, this.isCapsLocked);
          return;
        }

        if (e.key === 'CapsLock') {
          this.setShift(!this.isCapsLocked, !this.isCapsLocked);
          return;
        }

        const code = e.code;
        const keyEl = this.keyElementsMap.get(code);

        if (keyEl) {
          keyEl.classList.add('pressed');
        }

        const mapEntry = INSCRIPT_MAP[code];
        const allowPhysical = isTutorActive || this.options.physicalKeyboardEnabled !== false;

        if (mapEntry && allowPhysical) {
          e.preventDefault();
          const isShift = e.shiftKey || this.isCapsLocked;
          const charToInsert = isShift ? mapEntry.shift : mapEntry.normal;
          if (charToInsert) {
            this.insertText(charToInsert);
            feedback.feedback(false);
          }
        } else if (code === 'Backspace' && allowPhysical) {
          e.preventDefault();
          this.smartBackspace();
          feedback.feedback(true);
        } else if (code === 'Space' && allowPhysical) {
          e.preventDefault();
          this.insertText(' ');
          feedback.feedback(false);
        }
      });

      window.addEventListener('keyup', (e) => {
        if (e.key === 'Shift') {
          if (!this.isCapsLocked) {
            this.setShift(false, false);
          }
        }

        const code = e.code;
        const keyEl = this.keyElementsMap.get(code);
        if (keyEl) {
          keyEl.classList.remove('pressed');
        }
      });
    }
  }

  /* =========================================================
     6. Malayalam Typing Speed Test Engine
     ========================================================= */
  const MALAYALAM_SPEED_PASSAGES = [
    {
      id: 1,
      title: 'കേരളവും പ്രകൃതിയും',
      text: 'കേരളം പ്രകൃതിഭംഗിയാൽ അനുഗൃഹീതമായ ഒരു നാടാണ്. പച്ചപ്പുനിറഞ്ഞ മലനിരകളും കായലുകളും തെങ്ങിൻതോപ്പുകളും നിറഞ്ഞ മനോഹരമായ ഭൂപ്രകൃതി കേരളത്തിന്റെ സവിശേഷതയാണ്. മലയാള ഭാഷയുടെ മാധുര്യവും സാംസ്കാരിക പാരമ്പര്യവും ലോകമെമ്പാടും പ്രശസ്തമാണ്. തുഞ്ചത്തെഴുത്തച്ഛനും കുഞ്ചൻ നമ്പ്യാരും ചെറുശ്ശേരിയും മലയാള സാഹിത്യത്തിന് നൽകിയ സംഭാവനകൾ നിസ്തുലമാണ്. അറിവും സംസ്കാരവും പരസ്പര സ്നേഹവും സമന്വയിക്കുന്ന പുണ്യഭൂമിയാണ് കേരളം. നമ്മുടെ പാരമ്പര്യവും പ്രകൃതിസൗന്ദര്യവും വരുംതലമുറയ്ക്കായി കാത്തുസൂക്ഷിക്കേണ്ടത് ഓരോ മലയാളിയുടെയും കടമയാണ്.'
    },
    {
      id: 2,
      title: 'സാങ്കേതികവിദ്യയും ഭാവിയും',
      text: 'ആധുനിക ലോകത്ത് സാങ്കേതികവിദ്യയുടെ വളർച്ച അതിവേഗത്തിലാണ് മുന്നേറുന്നത്. വിവരസാങ്കേതികവിദ്യ മനുഷ്യന്റെ നിത്യജീവിതത്തിൽ വലിയ മാറ്റങ്ങൾ സൃഷ്ടിച്ചിരിക്കുന്നു. കമ്പ്യൂട്ടറുകളും സ്മാർട്ട്ഫോണുകളും ഇന്റർനെറ്റും നമ്മുടെ ദൈനംദിന ആശയവിനിമയത്തെയും തൊഴിലിനെയും എളുപ്പമാക്കി. ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസും മെഷീൻ ലേണിംഗും പുതിയ തൊഴിലവസരങ്ങൾ തുറക്കുകയും ലോകത്തെ മാറ്റിമറിക്കുകയും ചെയ്യുന്നു. വിജ്ഞാനവും ശാസ്ത്രബോധവും വളർത്തിയെടുക്കുക എന്നത് പുതിയ കാലഘട്ടത്തിന്റെ പ്രധാന ആവശ്യമാണ്. സാങ്കേതികവിദ്യയെ നന്മയ്ക്കായി ഉപയോഗിക്കാൻ നാം ശീലിക്കണം.'
    },
    {
      id: 3,
      title: 'വിജയത്തിലേക്കുള്ള വഴി',
      text: 'ജീവിതത്തിൽ വിജയം നേടാൻ കഠിനാധ്വാനവും ആത്മവിശ്വാസവും അത്യന്താപേക്ഷിതമാണ്. പ്രതിസന്ധികളെ അവസരങ്ങളാക്കി മാറ്റാൻ പഠിക്കുന്നവരാണ് ചരിത്രം സൃഷ്ടിക്കുന്നത്. വിദ്യയിലൂടെ മാത്രമേ ഒരു സമൂഹത്തിന് സാംസ്കാരികവും സാമ്പത്തികവുമായ പുരോഗതി കൈവരിക്കാൻ സാധിക്കൂ. പുസ്തകങ്ങൾ അറിവിന്റെ അക്ഷയഖനികളാണ്. വായിച്ചു വളരുക എന്ന കുഞ്ഞുണ്ണിമാഷിന്റെ ലളിതമായ വരികൾ എന്നും നമുക്ക് പ്രചോദനമാണ്. പരാജയങ്ങളിൽ തളരാതെ ലക്ഷ്യത്തിലേക്ക് നിരന്തരം മുന്നേറുന്നവർക്ക് വിജയം സുനിശ്ചിതമാണ്.'
    },
    {
      id: 4,
      title: 'കലകളും സംസ്കാരവും',
      text: 'കേരളത്തിന്റെ കലകളും ഉത്സവങ്ങളും ഐക്യത്തിന്റെയും സാഹോദര്യത്തിന്റെയും മഹനീയ പ്രതീകങ്ങളാണ്. കഥകളിയും മോഹിനിയാട്ടവും തുള്ളലും കൂടിയാട്ടവും ലോകപ്രസിദ്ധമാണ്. ഓണവും വിഷുവും കേരളീയർ ജാതിമതഭേദമെന്യേ ഒന്നായി ആഘോഷിക്കുന്നു. പൂക്കളവും ഓണസദ്യയും ഓണപ്പാട്ടുകളും മലയാളിയുടെ ഗൃഹാതുരതയുണർത്തുന്ന ഓർമ്മകളാണ്. പരസ്പര സ്നേഹവും സഹിഷ്ണുതയുമാണ് നമ്മുടെ നാടിന്റെ ഏറ്റവും വലിയ കരുത്ത്.'
    },
    {
      id: 5,
      title: 'പരിസ്ഥിതി സംരക്ഷണം',
      text: 'പരിസ്ഥിതി സംരക്ഷണവും ശുചിത്വവും ആരോഗ്യകരമായ ജീവിതത്തിന് ഒഴിച്ചുകൂടാനാവാത്തതാണ്. വനങ്ങളും പുഴകളും തണ്ണീർത്തടങ്ങളും സംരക്ഷിക്കേണ്ടത് വരുംതലമുറയ്ക്കായുള്ള നമ്മുടെ കടമയാണ്. ശുദ്ധവായുവും ശുദ്ധജലവും ഭൂമിയിലെ ഓരോ ജീവന്റെയും അവകാശമാണ്. പ്രകൃതിയെ ചൂഷണം ചെയ്യാതെ പരിപാലിക്കുന്നതിലൂടെ മാത്രമേ ഭൂമിയുടെ നിലനിൽപ്പ് ഉറപ്പാക്കാൻ കഴിയൂ. ഓരോ മരവും ഓരോ തണലാണ് എന്ന ചിന്ത ഓരോരുത്തരിലും വളരണം.'
    },
    {
      id: 6,
      title: 'നവോത്ഥാന മൂല്യങ്ങൾ',
      text: 'മഹത്തായ നവോത്ഥാന പ്രസ്ഥാനങ്ങളുടെ ഫലമായാണ് ഇന്നത്തെ പുരോഗമന കേരളം രൂപപ്പെട്ടത്. ശ്രീനാരായണഗുരുവും അയ്യങ്കാളിയും ചട്ടമ്പിസ്വാമികളും സാമൂഹിക അസമത്വങ്ങൾക്കെതിരെ ധീരമായി പോരാടി. ഒരു ജാതി ഒരു മതം ഒരു ദൈവം മനുഷ്യന് എന്ന ഗുരുദേവന്റെ സന്ദേശം മാനവരാശിക്ക് എക്കാലവും വെളിച്ചം പകരുന്നു. വിദ്യ കൊണ്ട് പ്രബുദ്ധരാവുക എന്ന ആഹ്വാനം ഇന്നും എന്നും വളരെ പ്രസക്തമാണ്.'
    }
  ];

  class SpeedTestSession {
    constructor(durationMinutes = 1) {
      this.durationSeconds = durationMinutes * 60;
      this.remainingSeconds = this.durationSeconds;
      this.timerInterval = null;
      this.isActive = false;
      this.isCompleted = false;

      const randomIndex = Math.floor(Math.random() * MALAYALAM_SPEED_PASSAGES.length);
      this.passageData = MALAYALAM_SPEED_PASSAGES[randomIndex];
      this.words = this.passageData.text.split(/\s+/).filter(Boolean);

      this.currentWordIndex = 0;
      this.currentInput = '';
      this.wordResults = [];

      this.totalTypedChars = 0;
      this.correctChars = 0;
      this.incorrectChars = 0;
      this.correctWordsCount = 0;
      this.incorrectWordsCount = 0;

      this.onTick = null;
      this.onFinish = null;
    }

    start(onTick, onFinish) {
      this.isActive = true;
      this.isCompleted = false;
      this.remainingSeconds = this.durationSeconds;
      this.onTick = onTick;
      this.onFinish = onFinish;

      this.timerInterval = setInterval(() => {
        this.remainingSeconds--;
        if (this.onTick) this.onTick(this.remainingSeconds, this.getMetrics());

        if (this.remainingSeconds <= 0) {
          this.finish();
        }
      }, 1000);
    }

    finish() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.isActive = false;
      this.isCompleted = true;

      if (this.currentInput.trim()) {
        this.submitWord(this.currentInput.trim());
      }

      if (this.onFinish) {
        this.onFinish(this.getMetrics());
      }
    }

    stop() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.isActive = false;
    }

    handleInput(input) {
      if (!this.isActive) return { clearInput: false };

      if (input.endsWith(' ')) {
        const cleanWord = input.trim();
        if (cleanWord.length > 0) {
          this.submitWord(cleanWord);
        }
        this.currentInput = '';
        return { clearInput: true };
      } else {
        this.currentInput = input;
        return { clearInput: false };
      }
    }

    submitWord(typedWord) {
      if (this.currentWordIndex >= this.words.length) return;

      const targetWord = this.words[this.currentWordIndex];
      const isCorrect = typedWord === targetWord;

      this.wordResults.push({
        target: targetWord,
        typed: typedWord,
        correct: isCorrect
      });

      if (isCorrect) {
        this.correctWordsCount++;
        this.correctChars += targetWord.length;
      } else {
        this.incorrectWordsCount++;
        this.incorrectChars += typedWord.length;
      }

      this.totalTypedChars += typedWord.length + 1;
      this.currentWordIndex++;

      if (this.currentWordIndex >= this.words.length) {
        const nextPassage = MALAYALAM_SPEED_PASSAGES[Math.floor(Math.random() * MALAYALAM_SPEED_PASSAGES.length)];
        const nextWords = nextPassage.text.split(/\s+/).filter(Boolean);
        this.words = this.words.concat(nextWords);
      }
    }

    getMetrics() {
      const elapsedSeconds = this.durationSeconds - this.remainingSeconds;
      const elapsedMinutes = Math.max(elapsedSeconds / 60, 0.016);

      const grossWpm = Math.round((this.totalTypedChars / 5) / elapsedMinutes);
      const netWpm = Math.max(0, Math.round((this.correctChars / 5) / elapsedMinutes));

      const totalWords = this.correctWordsCount + this.incorrectWordsCount;
      const accuracy = totalWords > 0 ? Math.round((this.correctWordsCount / totalWords) * 100) : 100;

      let rank = 'തുടക്കക്കാരൻ (Beginner)';
      let badge = '🌱';

      if (netWpm >= 45) {
        rank = 'ഇൻസ്ക്രിപ്റ്റ് മാസ്റ്റർ (Master)';
        badge = '👑';
      } else if (netWpm >= 30) {
        rank = 'വേഗതയേറിയ ടൈപ്പിസ്റ്റ് (Advanced)';
        badge = '⚡';
      } else if (netWpm >= 15) {
        rank = 'വളരുന്ന ടൈപ്പിസ്റ്റ് (Intermediate)';
        badge = '🚀';
      }

      return {
        netWpm,
        grossWpm,
        accuracy,
        correctWords: this.correctWordsCount,
        incorrectWords: this.incorrectWordsCount,
        totalChars: this.totalTypedChars,
        correctChars: this.correctChars,
        incorrectChars: this.incorrectChars,
        elapsedSeconds,
        remainingSeconds: this.remainingSeconds,
        rank,
        badge
      };
    }
  }

  /* =========================================================
     7. Malayalam Speech-to-Text Engine (Voice Typing)
     ========================================================= */
  class MalayalamSpeechEngine {
    constructor(options = {}) {
      this.onResult = options.onResult || (() => {});
      this.onStatusChange = options.onStatusChange || (() => {});
      this.onError = options.onError || (() => {});

      this.recognition = null;
      this.isListening = false;
      this.init();
    }

    isSupported() {
      return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
    }

    init() {
      if (!this.isSupported()) return;
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'ml-IN';
      this.recognition.continuous = true;
      this.recognition.interimResults = false;

      this.recognition.onstart = () => {
        this.isListening = true;
        this.onStatusChange(true);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        this.onStatusChange(false);
      };

      this.recognition.onerror = (e) => {
        this.isListening = false;
        this.onStatusChange(false);
        this.onError(e);
      };

      this.recognition.onresult = (e) => {
        let final = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          if (e.results[i].isFinal) {
            final += e.results[i][0].transcript;
          }
        }
        if (final) {
          this.onResult(final);
        }
      };
    }

    toggle() {
      if (!this.isSupported()) {
        alert('നിങ്ങളുടെ ബ്രൗസർ വോയ്‌സ് ടൈപ്പിംഗ് പിന്തുണയ്ക്കുന്നില്ല (Speech recognition not supported in this browser). Google Chrome അല്ലെങ്കിൽ Microsoft Edge ഉപയോഗിക്കുക.');
        return;
      }
      if (this.isListening) {
        this.stop();
      } else {
        this.start();
      }
    }

    start() {
      if (this.recognition && !this.isListening) {
        try { this.recognition.start(); } catch {}
      }
    }

    stop() {
      if (this.recognition && this.isListening) {
        this.recognition.stop();
      }
    }
  }

  /* =========================================================
     8. InScript Typing Practice Tutor Curriculum & Engine
     ========================================================= */
  const FINGER_NAMES = {
    LP: { en: 'Left Pinky', ml: 'ഇടതു കൈ ചെറുവിരൽ', color: '#ec4899' },
    LR: { en: 'Left Ring', ml: 'ഇടതു കൈ മോതിരവിരൽ', color: '#8b5cf6' },
    LM: { en: 'Left Middle', ml: 'ഇടതു കൈ നടുവിരൽ', color: '#3b82f6' },
    LI: { en: 'Left Index', ml: 'ഇടതു കൈ ചൂണ്ടുവിരൽ', color: '#10b981' },
    LT: { en: 'Left Thumb', ml: 'ഇടതു കൈ തള്ളവിരൽ', color: '#64748b' },
    RT: { en: 'Right Thumb', ml: 'വലതു കൈ തള്ളവിരൽ', color: '#64748b' },
    RI: { en: 'Right Index', ml: 'വലതു കൈ ചൂണ്ടുവിരൽ', color: '#f59e0b' },
    RM: { en: 'Right Middle', ml: 'വലതു കൈ നടുവിരൽ', color: '#06b6d4' },
    RR: { en: 'Right Ring', ml: 'വലതു കൈ മോതിരവിരൽ', color: '#a855f7' },
    RP: { en: 'Right Pinky', ml: 'വലതു കൈ ചെറുവിരൽ', color: '#f43f5e' }
  };

  const KEY_FINGER_MAP = {
    Backquote: 'LP', Digit1: 'LP', Digit2: 'LR', Digit3: 'LM', Digit4: 'LI', Digit5: 'LI',
    Digit6: 'RI', Digit7: 'RI', Digit8: 'RM', Digit9: 'RR', Digit0: 'RP', Minus: 'RP', Equal: 'RP',
    KeyQ: 'LP', KeyW: 'LR', KeyE: 'LM', KeyR: 'LI', KeyT: 'LI',
    KeyY: 'RI', KeyU: 'RI', KeyI: 'RM', KeyO: 'RR', KeyP: 'RP', BracketLeft: 'RP', BracketRight: 'RP', Backslash: 'RP',
    KeyA: 'LP', KeyS: 'LR', KeyD: 'LM', KeyF: 'LI', KeyG: 'LI',
    KeyH: 'RI', KeyJ: 'RI', KeyK: 'RM', KeyL: 'RR', Semicolon: 'RP', Quote: 'RP',
    KeyZ: 'LP', KeyX: 'LR', KeyC: 'LM', KeyV: 'LI', KeyB: 'LI',
    KeyN: 'RI', KeyM: 'RI', Comma: 'RM', Period: 'RR', Slash: 'RP',
    Space: 'RT'
  };

  const TUTOR_LEVELS = [
    {
      id: 'lvl-1',
      level: 1,
      title: 'ലെവൽ 1: ഹോം റോ (Home Row Fundamentals)',
      subtitle: 'കൈവിരലുകൾ ഉറപ്പിച്ചു നിർത്തേണ്ട നടുവിലെ വരി (ASDFGHJKL;)',
      stages: [
        {
          id: '1-1',
          title: 'പാഠം 1.1: വലതു കൈ വ്യഞ്ജനങ്ങൾ (പ, ര, ക, ത)',
          description: 'H, J, K, L എന്നീ കീകൾ പഠിക്കുക',
          targetText: 'ക ര പ ത ക ര പ ത കക രര പപ തത കര പത തക രപ',
          instructions: 'ക (K) - നടുവിരൽ | ര (J) - ചൂണ്ടുവിരൽ | പ (H) - ചൂണ്ടുവിരൽ | ത (L) - മോതിരവിരൽ'
        },
        {
          id: '1-2',
          title: 'പാഠം 1.2: ച, ട എന്നിവ കൂട്ടിച്ചേർക്കുക',
          description: ';, \' എന്നീ കീകൾ പഠിക്കുക',
          targetText: 'ച ട ക ര പ ത ചട രക പതി ചര ടക തച കപ',
          instructions: 'ച (;) - ചെറുവിരൽ | ട (\') - ചെറുവിരൽ'
        },
        {
          id: '1-3',
          title: 'പാഠം 1.3: ഇടതു കൈ സ്വരചിഹ്നങ്ങളും ചന്ദ്രക്കലയും (്, ി, ു, േ, ോ)',
          description: 'D, F, G, S, A എന്നീ കീകൾ പഠിക്കുക',
          targetText: '് ി ു േ ോ കി കു തേ പോ ചി ടി ര് പു കി രീ',
          instructions: '് (D) - നടുവിരൽ | ി (F) - ചൂണ്ടുവിരൽ | ു (G) - ചൂണ്ടുവിരൽ | േ (S) - മോതിരവിരൽ | ോ (A) - ചെറുവിരൽ'
        },
        {
          id: '1-4',
          title: 'പാഠം 1.4: ഹോം റോ വാക്കുകൾ (Home Row Words)',
          description: 'ഹോം റോ കീകൾ മാത്രമുപയോഗിച്ച് വാക്കുകൾ ടൈപ്പ് ചെയ്യുക',
          targetText: 'തകിട ചിരി കരി പതി ചരട് തോട് പേര് ചേര് ചോറ് പൊതി പോര്',
          instructions: 'വിരലുകൾ ശരിയായ കീകളിൽ ഉറപ്പിച്ചു വെച്ച് സ്പേസ് ബാർ അടിച്ച് ടൈപ്പ് ചെയ്യുക'
        }
      ]
    },
    {
      id: 'lvl-2',
      level: 2,
      title: 'ലെവൽ 2: മുകളിലെ വരി (Top Row QWERTY)',
      subtitle: 'മുകളിലെ വരിയിലെ സ്വരചിഹ്നങ്ങളും വ്യഞ്ജനങ്ങളും (QWERTYUIOP[])',
      stages: [
        {
          id: '2-1',
          title: 'പാഠം 2.1: മുകളിലെ സ്വരചിഹ്നങ്ങൾ (ാ, ീ, ൂ, ൈ, ൌ)',
          description: 'E, R, T, W, Q എന്നീ കീകൾ പഠിക്കുക',
          targetText: 'ാ ീ ൂ ൈ ൌ കാ കീ കൂ കൈ കൗ പാ പീ പൂ പൈ പൗ',
          instructions: 'ാ (E) - നടുവിരൽ | ീ (R) - ചൂണ്ടുവിരൽ | ൂ (T) - ചൂണ്ടുവിരൽ | ൈ (W) - മോതിരവിരൽ | ൌ (Q) - ചെറുവിരൽ'
        },
        {
          id: '2-2',
          title: 'പാഠം 2.2: മുകളിലെ വ്യഞ്ജനങ്ങൾ (ബ, ഹ, ഗ, ദ, ജ, ഡ)',
          description: 'Y, U, I, O, P, [ എന്നീ കീകൾ പഠിക്കുക',
          targetText: 'ബ ഹ ഗ ദ ജ ഡ ബഹ ഗദ ജഡ ബാ ഹീ ഗൂ ദൈ ജാ ഡാ',
          instructions: 'ബ (Y) & ഹ (U) - ചൂണ്ടുവിരൽ | ഗ (I) - നടുവിരൽ | ദ (O) - മോതിരവിരൽ | ജ (P) & ഡ ([) - ചെറുവിരൽ'
        },
        {
          id: '2-3',
          title: 'പാഠം 2.3: രണ്ടു വരികൾ ചേർത്തുള്ള വാക്കുകൾ',
          description: 'ഹോം റോയും ടോപ് റോയും കൂട്ടിച്ചേർത്തുള്ള പദങ്ങൾ',
          targetText: 'ഗീത ദാഹം ജീവിതം ബാലൻ വീട് പാടം രോഗം കുട ജയം ദയ ബലം',
          instructions: 'വിരലുകൾ മുകളിലെ വരിയിലേക്ക് ഉയർത്തി തിരിച്ചുവന്ന് ഹോം റോയിൽ നിലയുറപ്പിക്കുക'
        }
      ]
    },
    {
      id: 'lvl-3',
      level: 3,
      title: 'ലെവൽ 3: താഴത്തെ വരി (Bottom Row ZXCV)',
      subtitle: 'താഴത്തെ വരിയിലെ വ്യഞ്ജനങ്ങളും ചിഹ്നങ്ങളും (ZXCVBNM,./)',
      stages: [
        {
          id: '3-1',
          title: 'പാഠം 3.1: താഴത്തെ വരി കീകൾ (െ, ം, മ, ന, വ, ല, സ, യ)',
          description: 'Z, X, C, V, B, N, M, / എന്നീ കീകൾ പഠിക്കുക',
          targetText: 'െ ം മ ന വ ല സ യ മന വല സമ യമ മെ നം വം ലം സം',
          instructions: 'െ (Z) - ചെറുവിരൽ | ം (X) - മോതിരവിരൽ | മ (C) - നടുവിരൽ | ന (V) - ചൂണ്ടുവിരൽ | വ (B) & ല (N) - ചൂണ്ടുവിരൽ | സ (M) - ചൂണ്ടുവിരൽ | യ (/) - ചെറുവിരൽ'
        },
        {
          id: '3-2',
          title: 'പാഠം 3.2: മൂന്നു വരികളും ചേർത്തുള്ള വാക്കുകൾ',
          description: 'ഹോം, ടോപ്, ബോട്ടം വരികൾ സംയോജിപ്പിച്ചുള്ള പദങ്ങൾ',
          targetText: 'മനസ്സ് സമയം ലോകം നഗരം സൂര്യൻ മലയാളം വചനം ജലം വയൽ കവിത സേവനം',
          instructions: 'താഴത്തെ വരിയിലേക്ക് വിരലുകൾ നീട്ടുമ്പോൾ കൈപ്പത്തി ഒരുപാട് ചലിപ്പിക്കരുത്'
        }
      ]
    },
    {
      id: 'lvl-4',
      level: 4,
      title: 'ലെവൽ 4: ഷിഫ്റ്റ് കീകൾ - സ്വരങ്ങളും മഹാപ്രാണങ്ങളും (Shift Layer)',
      subtitle: 'Shift അമർത്തിപ്പിടിച്ച് ടൈപ്പ് ചെയ്യുന്ന സ്വതന്ത്ര സ്വരങ്ങളും അക്ഷരങ്ങളും',
      stages: [
        {
          id: '4-1',
          title: 'പാഠം 4.1: സ്വതന്ത്ര സ്വരങ്ങൾ (അ, ആ, ഇ, ഈ, ഉ, ഊ, എ, ഏ, ഐ, ഒ, ഓ, ഔ)',
          description: 'Shift ഉപയോഗിച്ച് സ്വരങ്ങൾ ടൈപ്പ് ചെയ്യുക',
          targetText: 'അ ആ ഇ ഈ ഉ ഊ എ ഏ ഐ ഒ ഓ ഔ അവര് ആകാശം ഇല ഈച്ച ഊണ് ഏട് ഐക്യം ഓട ഔഷധം',
          instructions: 'Shift+D = അ | Shift+E = ആ | Shift+F = ഇ | Shift+R = ഈ | Shift+G = ഉ | Shift+T = ഊ'
        },
        {
          id: '4-2',
          title: 'പാഠം 4.2: മഹാപ്രാണാക്ഷരങ്ങൾ (ഖ, ഘ, ഛ, ഝ, ഠ, ഢ, ഥ, ധ, ഫ, ഭ)',
          description: 'Shift ഉപയോഗിച്ച് കട്ടികൂടിയ അക്ഷരങ്ങൾ ടൈപ്പ് ചെയ്യുക',
          targetText: 'ഖ ഘ ഛ ഝ ഠ ഢ ഥ ധ ഫ ഭ ഖരം ഘടകം ഫലം ഭാരതം ധനം കഥ ധർമ്മം',
          instructions: 'Shift+K = ഖ | Shift+I = ഘ | Shift+H = ഫ | Shift+Y = ഭ | Shift+L = ഥ | Shift+O = ധ'
        },
        {
          id: '4-3',
          title: 'പാഠം 4.3: ശ, ഷ, ള, ഴ, റ, ണ, ങ, ഞ',
          description: 'മറ്റു പ്രധാന ഷിഫ്റ്റ് അക്ഷരങ്ങൾ',
          targetText: 'ശ ഷ ള ഴ റ ണ ങ ഞ ശാന്തി ഭാഷ മഴ കിളി റേഷൻ ഗണം മാങ്ങ ഞണ്ട്',
          instructions: 'Shift+M = ശ | Shift+, = ഷ | Shift+N = ള | Shift+B = ഴ | Shift+J = റ | Shift+C = ണ'
        }
      ]
    },
    {
      id: 'lvl-5',
      level: 5,
      title: 'ലെവൽ 5: ചില്ലക്ഷരങ്ങൾ (Chillu Characters)',
      subtitle: 'ൺ, ൻ, ർ, ൽ, ൾ, ൿ രൂപപ്പെടുത്തുന്ന വിധം',
      stages: [
        {
          id: '5-1',
          title: 'പാഠം 5.1: ർ, ൽ, ൾ ചില്ലുകൾ',
          description: 'അക്ഷരം + ചന്ദ്രക്കല (d) + ZWJ (]) = ചില്ല്',
          targetText: 'ർ ൽ ൾ കാർ പാൽ വാൾ നീർ ചൊൽ ആൾ വേര് കാൽ ചോര ചൊല്ല്',
          instructions: 'ർ = ര (j) + ് (d) + ZWJ (]) | ൽ = ല (n) + ് (d) + ZWJ (]) | ൾ = ള (Shift+N) + ് (d) + ZWJ (])'
        },
        {
          id: '5-2',
          title: 'പാഠം 5.2: ൻ, ൺ, ൿ ചില്ലുകൾ',
          description: 'ൻ, ൺ, ൿ വാക്കുകൾ',
          targetText: 'ൻ ൺ ൿ അവൻ കൺ വാക്ക് മിൻ പെൺ വൻ തേൻ മാൻ പൂൺ',
          instructions: 'ൻ = ന (v) + ് (d) + ZWJ (]) | ൺ = ണ (Shift+C) + ് (d) + ZWJ (])'
        }
      ]
    },
    {
      id: 'lvl-6',
      level: 6,
      title: 'ലെവൽ 6: കൂട്ടക്ഷരങ്ങൾ (Conjuncts)',
      subtitle: 'ചന്ദ്രക്കല ഉപയോഗിച്ച് വ്യഞ്ജനങ്ങൾ ചേർത്തുള്ള കൂട്ടക്ഷരങ്ങൾ',
      stages: [
        {
          id: '6-1',
          title: 'പാഠം 6.1: ക്ഷ, ജ്ഞ, ത്ര, ശ്ര, പ്ര',
          description: 'പ്രധാന സംയുക്താക്ഷരങ്ങൾ',
          targetText: 'ക്ഷ ജ്ഞ ത്ര ശ്ര പ്ര ക്ഷമ ജ്ഞാനം ത്രയം ശ്രുതി പ്രകാശം പ്രണാമം പ്രതിഭ',
          instructions: 'ക്ഷ = ക (k) + ് (d) + ഷ (Shift+,) | ജ്ഞ = ജ (p) + ് (d) + ഞ (Shift+]) | ത്ര = ത (l) + ് (d) + ര (j)'
        },
        {
          id: '6-2',
          title: 'പാഠം 6.2: ഇരട്ട അക്ഷരങ്ങൾ (ക്ക, ച്ച, ട്ട, ത്ത, പ്പ, റ്റ)',
          description: 'ഒരു അക്ഷരം ഇരട്ടിക്കുന്നത് ചന്ദ്രക്കല വഴി',
          targetText: 'ക്ക ച്ച ട്ട ത്ത പ്പ റ്റ പച്ച വട്ട തത്ത കപ്പ് കാറ്റ് അപ്പ പട്ട മച്ച',
          instructions: 'ക്ക = ക + ് + ക | ച്ച = ച + ് + ച | ത്ത = ത + ് + ത | പ്പ = പ + ് + പ'
        },
        {
          id: '6-3',
          title: 'പാഠം 6.3: അനുനാസിക കൂട്ടക്ഷരങ്ങൾ (ങ്ങ, ഞ്ച, ണ്ട, ന്ത, മ്പ, മ്മ)',
          description: 'അനുനാസികങ്ങൾ ചേർന്ന കൂട്ടക്ഷരങ്ങൾ',
          targetText: 'ങ്ങ ഞ്ച ണ്ട ന്ത മ്പ മ്മ പന്ത കൊമ്പ അമ്മ ചന്ത കണ്ണ വണ്ടി മഞ്ച',
          instructions: 'ന്ത = ന + ് + ത | മ്പ = മ + ് + പ | ണ്ട = ണ + ് + ട | ഞ്ച = ഞ + ് + ച'
        }
      ]
    },
    {
      id: 'lvl-7',
      level: 7,
      title: 'ലെവൽ 7: വാക്യങ്ങളും വേഗതയും (Full Sentences & Speed)',
      subtitle: 'പൂർണ്ണ വാക്യങ്ങളും നിത്യോപയോഗ രചനകളും വേഗത്തിൽ ടൈപ്പ് ചെയ്യുക',
      stages: [
        {
          id: '7-1',
          title: 'പാഠം 7.1: ലളിത വാക്യങ്ങൾ (Simple Sentences)',
          description: 'പൂർണ്ണ വാക്യങ്ങൾ ടൈപ്പ് ചെയ്യുക',
          targetText: 'നമസ്കാരം സുഹൃത്തേ. മലയാളം നമ്മുടെ മാതൃഭാഷയാണ്. കേരളം മനോഹരമായ നാടാണ്. വിദ്യ മനുഷ്യന് വെളിച്ചം നൽകുന്നു. നന്ദി ശുഭദിനം നേരുന്നു.',
          instructions: 'വാക്കുകൾക്കിടയിൽ സ്പേസ് ബാർ കൃത്യമായി അടിച്ച് വിരാമചിഹ്നങ്ങളും ടൈപ്പ് ചെയ്യുക'
        },
        {
          id: '7-2',
          title: 'പാഠം 7.2: പ്രചോദനാത്മക വാക്യങ്ങൾ (Inspiring Quotes)',
          description: 'സുഭാഷിതങ്ങളും ആപ്തവാക്യങ്ങളും',
          targetText: 'വായിച്ചു വളരുക ചിന്തിച്ചു വിവേകം നേടുക. ഒരു ജാതി ഒരു മതം ഒരു ദൈവം മനുഷ്യന്. സത്യമേവ ജയതേ. അറിവാണ് യഥാർത്ഥ ശക്തി. സ്നേഹമാണ് ലോകത്തിന്റെ നിലനിൽപ്പ്.',
          instructions: 'വേഗതയേക്കാൾ കൃത്യതയിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുക'
        }
      ]
    }
  ];

  class TutorEngine {
    constructor(options = {}) {
      this.storageKey = 'ml_tutor_progress';
      this.currentStage = null;
      this.targetText = '';
      this.currentIndex = 0;

      this.correctCount = 0;
      this.errorCount = 0;
      this.startTime = null;
      this.endTime = null;
      this.isActive = false;

      this.onStateChange = options.onStateChange || (() => {});
      this.onStageComplete = options.onStageComplete || (() => {});

      this.charToKeyInfo = this.buildCharToKeyMap();
      this.loadStage('1-1');
    }

    buildCharToKeyMap() {
      const map = new Map();

      Object.entries(INSCRIPT_MAP).forEach(([code, data]) => {
        const finger = KEY_FINGER_MAP[code] || 'RI';

        if (data.normal) {
          map.set(data.normal, {
            code,
            keyName: data.keyName || '',
            shift: false,
            finger,
            char: data.normal
          });
        }

        if (data.shift) {
          map.set(data.shift, {
            code,
            keyName: data.keyName || '',
            shift: true,
            finger,
            char: data.shift
          });
        }
      });

      map.set(' ', {
        code: 'Space',
        keyName: 'Space',
        shift: false,
        finger: 'RT',
        char: ' '
      });

      return map;
    }

    loadStage(stageId) {
      let found = null;
      for (const lvl of TUTOR_LEVELS) {
        for (const stg of lvl.stages) {
          if (stg.id === stageId) {
            found = stg;
            break;
          }
        }
        if (found) break;
      }

      if (!found) {
        found = TUTOR_LEVELS[0].stages[0];
      }

      this.currentStage = found;
      this.targetText = found.targetText;
      this.resetStats();
      return this.currentStage;
    }

    resetStats() {
      this.currentIndex = 0;
      this.correctCount = 0;
      this.errorCount = 0;
      this.startTime = null;
      this.endTime = null;
      this.isActive = false;
    }

    start() {
      this.resetStats();
      this.startTime = Date.now();
      this.isActive = true;
      this.notify();
    }

    getCurrentChar() {
      if (this.currentIndex >= this.targetText.length) return null;
      return this.targetText[this.currentIndex];
    }

    getCurrentKeyGuide() {
      const char = this.getCurrentChar();
      if (!char) return null;

      const info = this.charToKeyInfo.get(char);
      if (!info) {
        return {
          char,
          code: null,
          keyName: char,
          shift: false,
          fingerCode: 'RT',
          fingerMl: 'തള്ളവിരൽ',
          fingerEn: 'Thumb'
        };
      }

      const fingerObj = FINGER_NAMES[info.finger] || FINGER_NAMES.RI;

      return {
        char,
        code: info.code,
        keyName: info.keyName,
        shift: info.shift,
        fingerCode: info.finger,
        fingerMl: fingerObj.ml,
        fingerEn: fingerObj.en,
        fingerColor: fingerObj.color
      };
    }

    processKeyInput(typedChar) {
      if (!this.isActive) {
        this.start();
      }

      const expected = this.getCurrentChar();
      if (!expected) return { finished: true };

      if (typedChar === expected) {
        this.correctCount++;
        this.currentIndex++;

        const isCompleted = this.currentIndex >= this.targetText.length;
        if (isCompleted) {
          this.endTime = Date.now();
          this.isActive = false;
          const finalMetrics = this.getMetrics();
          this.saveStageProgress(this.currentStage.id, finalMetrics);
          this.onStageComplete(this.currentStage, finalMetrics);
        }

        this.notify();
        return {
          correct: true,
          finished: isCompleted,
          nextGuide: this.getCurrentKeyGuide()
        };
      } else {
        this.errorCount++;
        this.notify();
        return {
          correct: false,
          finished: false,
          nextGuide: this.getCurrentKeyGuide()
        };
      }
    }

    backspace() {
      if (!this.isActive || this.currentIndex <= 0) return;
      this.currentIndex--;
      this.notify();
    }

    getMetrics() {
      const elapsedMinutes = (Math.max(Date.now(), this.endTime || Date.now()) - (this.startTime || Date.now())) / 60000;
      const totalTyped = this.correctCount + this.errorCount;
      const accuracy = totalTyped > 0 ? Math.round((this.correctCount / totalTyped) * 100) : 100;
      const wordsTyped = this.correctCount / 4;
      const wpm = elapsedMinutes > 0 ? Math.round(wordsTyped / elapsedMinutes) : 0;
      const progress = this.targetText.length > 0 ? Math.round((this.currentIndex / this.targetText.length) * 100) : 0;

      let stars = 1;
      if (accuracy >= 95 && wpm >= 15) {
        stars = 3;
      } else if (accuracy >= 85) {
        stars = 2;
      }

      return {
        progress,
        accuracy,
        wpm,
        correct: this.correctCount,
        errors: this.errorCount,
        stars,
        completed: this.currentIndex >= this.targetText.length
      };
    }

    notify() {
      this.onStateChange({
        stage: this.currentStage,
        metrics: this.getMetrics(),
        guide: this.getCurrentKeyGuide(),
        currentIndex: this.currentIndex,
        targetText: this.targetText
      });
    }

    saveStageProgress(stageId, metrics) {
      try {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        const existing = data[stageId] || { stars: 0, wpm: 0, accuracy: 0 };

        data[stageId] = {
          stars: Math.max(existing.stars, metrics.stars),
          wpm: Math.max(existing.wpm, metrics.wpm),
          accuracy: Math.max(existing.accuracy, metrics.accuracy),
          completedAt: new Date().toISOString()
        };

        localStorage.setItem(this.storageKey, JSON.stringify(data));
      } catch {}
    }

    getStageSavedData(stageId) {
      try {
        const data = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
        return data[stageId] || null;
      } catch {
        return null;
      }
    }
  }

  /* =========================================================
     9. Main Malayalam Typing Application
     ========================================================= */
  class MalayalamTypingApp {
    constructor() {
      this.editorEl = document.getElementById('mlEditor');
      this.keyboardContainer = document.getElementById('virtualKeyboard');
      this.toastEl = document.getElementById('appToast');
      this.modalEl = document.getElementById('helpModal');

      this.speedTestModal = document.getElementById('speedTestModal');
      this.speedTestInput = document.getElementById('speedTestInput');
      this.speedWordsContainer = document.getElementById('speedWordsContainer');
      this.speedTimerEl = document.getElementById('speedTestTimer');
      this.speedResultsCard = document.getElementById('speedTestResultsCard');
      this.speedActiveArea = document.getElementById('speedTestActiveArea');
      this.speedConfigRow = document.getElementById('speedTestConfigRow');
      this.speedTestDuration = 1; // 1, 2, 3, 4, 5 mins
      this.speedSession = null;
      this.lastSpeedMetrics = null;

      // Tutor elements
      this.practiceModal = document.getElementById('practiceModal');
      this.practiceStageSelect = document.getElementById('practiceStageSelect');
      this.practiceTargetStream = document.getElementById('practiceTargetStream');
      this.tutorFingerGuideCard = document.getElementById('tutorFingerGuideCard');
      this.tutorCompletionCard = document.getElementById('tutorCompletionCard');
      this.tutorEngine = null;

      this.speedTestModal = document.getElementById('speedTestModal');
      this.speedTestInput = document.getElementById('speedTestInput');
      this.speedWordsContainer = document.getElementById('speedWordsContainer');
      this.speedTimerEl = document.getElementById('speedTestTimer');
      this.speedResultsCard = document.getElementById('speedTestResultsCard');
      this.speedActiveArea = document.getElementById('speedTestActiveArea');
      this.speedConfigRow = document.getElementById('speedTestConfigRow');
      this.speedTestDuration = 1; // 1, 2, 3, 4, 5 mins
      this.speedSession = null;
      this.lastSpeedMetrics = null;

      // Tutor elements
      this.practiceModal = document.getElementById('practiceModal');
      this.practiceStageSelect = document.getElementById('practiceStageSelect');
      this.practiceTargetStream = document.getElementById('practiceTargetStream');
      this.tutorFingerGuideCard = document.getElementById('tutorFingerGuideCard');
      this.tutorCompletionCard = document.getElementById('tutorCompletionCard');
      this.tutorEngine = null;

      this.storage = {
        get: (k, def = null) => {
          try { return localStorage.getItem(k) ?? def; } catch { return def; }
        },
        set: (k, v) => {
          try { localStorage.setItem(k, v); } catch { /* ignore */ }
        }
      };

      this.inputMode = this.detectDefaultInputMode();
      this.theme = this.storage.get('ml_theme', 'dark');
      this.fontFamily = this.storage.get('ml_font', "'Manjari', 'Noto Sans Malayalam', sans-serif");
      this.fontSize = parseInt(this.storage.get('ml_fontsize', '22'), 10);

      this.init();
    }

    detectDefaultInputMode() {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 1024;
      return isTouch && isSmallScreen ? 'touch' : 'physical';
    }

    init() {
      this.editor = new MalayalamEditorEngine(this.editorEl, {
        autoNormalizeChillus: true
      });

      this.tutorEngine = new TutorEngine({
        onStateChange: (state) => this.onTutorStateChanged(state),
        onStageComplete: (stage, metrics) => this.onTutorStageCompleted(stage, metrics)
      });

      this.keyboard = new VirtualKeyboard(this.keyboardContainer, this.editor, {
        physicalKeyboardEnabled: this.inputMode === 'physical',
        isTutorActive: () => this.isTutorOpen(),
        isSpeedActive: () => this.isSpeedTestOpen(),
        getActiveTarget: () => {
          if (this.isTutorOpen()) {
            return {
              insertText: (ch) => this.handleTutorKeyInput(ch),
              smartBackspace: () => this.handleTutorBackspace()
            };
          }
          if (this.isSpeedTestOpen()) {
            return {
              insertText: (ch) => this.handleSpeedKeyInput(ch),
              smartBackspace: () => this.handleSpeedBackspace()
            };
          }
          return this.editor;
        },
        onClearRequest: () => this.confirmClear()
      });

      const savedText = this.storage.get('ml_typed_text', '');
      if (savedText) {
        this.editor.setText(savedText);
      }

      this.applyTheme(this.theme);
      this.applyFont(this.fontFamily);
      this.applyFontSize(this.fontSize);
      this.applyInputMode(this.inputMode);

      this.setupUIEventListeners();
      this.setupEditorListeners();

      this.editor.subscribe((stats) => {
        this.updateStatsUI(stats);
        this.storage.set('ml_typed_text', stats.text);
      });

      this.updateStatsUI(this.editor.getStats());
    }

    setupEditorListeners() {
      this.editorEl.addEventListener('focus', () => {
        if (this.inputMode === 'touch') {
          this.editorEl.setAttribute('inputmode', 'none');
        } else if (this.inputMode === 'system') {
          this.editorEl.removeAttribute('inputmode');
        }
      });

      this.editorEl.addEventListener('click', () => {
        if (this.inputMode === 'touch') {
          this.editorEl.setAttribute('inputmode', 'none');
        }
      });
    }

    setupUIEventListeners() {
      const modeSelect = document.getElementById('inputModeSelect');
      if (modeSelect) {
        modeSelect.value = this.inputMode;
        modeSelect.addEventListener('change', (e) => {
          this.applyInputMode(e.target.value);
          this.showToast(`ഇൻപുട്ട് മോഡ് മാറ്റി: ${this.getInputModeName(e.target.value)}`);
        });
      }

      const fontSelect = document.getElementById('fontFamilySelect');
      if (fontSelect) {
        fontSelect.value = this.fontFamily;
        fontSelect.addEventListener('change', (e) => {
          this.applyFont(e.target.value);
        });
      }

      const fontSizeSlider = document.getElementById('fontSizeSlider');
      const fontSizeDisplay = document.getElementById('fontSizeDisplay');
      if (fontSizeSlider) {
        fontSizeSlider.value = this.fontSize;
        if (fontSizeDisplay) fontSizeDisplay.textContent = `${this.fontSize}px`;
        fontSizeSlider.addEventListener('input', (e) => {
          const size = parseInt(e.target.value, 10);
          this.applyFontSize(size);
          if (fontSizeDisplay) fontSizeDisplay.textContent = `${size}px`;
        });
      }

      const copyBtn = document.getElementById('copyBtn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => this.copyToClipboard());
      }

      const undoBtn = document.getElementById('undoBtn');
      if (undoBtn) {
        undoBtn.addEventListener('click', () => {
          if (this.editor.undo()) feedback.feedback(true);
        });
      }

      const redoBtn = document.getElementById('redoBtn');
      if (redoBtn) {
        redoBtn.addEventListener('click', () => {
          if (this.editor.redo()) feedback.feedback(true);
        });
      }

      const clearBtn = document.getElementById('clearBtn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => this.confirmClear());
      }

      const downloadTxtBtn = document.getElementById('downloadTxtBtn');
      if (downloadTxtBtn) {
        downloadTxtBtn.addEventListener('click', () => this.downloadAsTxt());
      }

      const downloadDocBtn = document.getElementById('downloadDocBtn');
      if (downloadDocBtn) {
        downloadDocBtn.addEventListener('click', () => this.downloadAsDoc());
      }

      const shareBtn = document.getElementById('shareBtn');
      if (shareBtn) {
        shareBtn.addEventListener('click', () => this.shareContent());
      }

      const normalizeBtn = document.getElementById('normalizeBtn');
      if (normalizeBtn) {
        normalizeBtn.addEventListener('click', () => {
          this.editor.checkAndNormalize();
          this.showToast('യൂണികോഡ് ചില്ലക്ഷരങ്ങൾ ക്രമീകരിച്ചു (Normalized)');
          feedback.feedback(true);
        });
      }

      const themeBtn = document.getElementById('themeToggleBtn');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const newTheme = this.theme === 'dark' ? 'light' : 'dark';
          this.applyTheme(newTheme);
        });
      }

      const soundToggle = document.getElementById('soundToggle');
      if (soundToggle) {
        soundToggle.checked = feedback.soundEnabled;
        soundToggle.addEventListener('change', (e) => {
          feedback.soundEnabled = e.target.checked;
          this.storage.set('ml_sound', e.target.checked ? '1' : '0');
          if (e.target.checked) feedback.feedback(true);
        });
        if (this.storage.get('ml_sound') === '1') {
          soundToggle.checked = true;
          feedback.soundEnabled = true;
        }
      }

      const hapticToggle = document.getElementById('hapticToggle');
      if (hapticToggle) {
        hapticToggle.checked = feedback.hapticEnabled;
        hapticToggle.addEventListener('change', (e) => {
          feedback.hapticEnabled = e.target.checked;
          this.storage.set('ml_haptics', e.target.checked ? '1' : '0');
          if (e.target.checked) feedback.triggerHaptic(20);
        });
      }

      const helpBtn = document.getElementById('helpBtn');
      const closeHelpBtn = document.getElementById('closeHelpBtn');
      if (helpBtn && this.modalEl) {
        helpBtn.addEventListener('click', () => {
          this.modalEl.classList.remove('hidden');
        });
      }
      if (closeHelpBtn && this.modalEl) {
        closeHelpBtn.addEventListener('click', () => {
          this.modalEl.classList.add('hidden');
        });
      }
      if (this.modalEl) {
        this.modalEl.addEventListener('click', (e) => {
          if (e.target === this.modalEl) {
            this.modalEl.classList.add('hidden');
          }
        });
      }

      const printBtn = document.getElementById('printBtn');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }

      // Tutor Listeners
      const practiceBtn = document.getElementById('practiceBtn');
      const closePracticeBtn = document.getElementById('closePracticeBtn');
      if (practiceBtn) {
        practiceBtn.addEventListener('click', () => this.openTutorModal());
      }
      if (closePracticeBtn) {
        closePracticeBtn.addEventListener('click', () => this.closeTutorModal());
      }
      if (this.practiceModal) {
        this.practiceModal.addEventListener('click', (e) => {
          if (e.target === this.practiceModal) {
            this.closeTutorModal();
          }
        });
      }

      if (this.practiceStageSelect) {
        this.practiceStageSelect.addEventListener('change', (e) => {
          if (this.tutorEngine) {
            this.tutorEngine.loadStage(e.target.value);
            this.startTutor();
          }
        });
      }

      const startPracticeBtn = document.getElementById('startPracticeBtn');
      if (startPracticeBtn) {
        startPracticeBtn.addEventListener('click', () => this.startTutor());
      }

      const resetTutorBtn = document.getElementById('resetTutorBtn');
      if (resetTutorBtn) {
        resetTutorBtn.addEventListener('click', () => this.startTutor());
      }

      const restartPracticeBtn = document.getElementById('restartPracticeBtn');
      if (restartPracticeBtn) {
        restartPracticeBtn.addEventListener('click', () => this.startTutor());
      }

      const nextStageBtn = document.getElementById('nextStageBtn');
      if (nextStageBtn) {
        nextStageBtn.addEventListener('click', () => this.loadNextTutorStage());
      }

      // Voice Typing
      const voiceBtn = document.getElementById('voiceBtn');
      if (voiceBtn) {
        this.speechEngine = new MalayalamSpeechEngine({
          onResult: (text) => {
            this.editor.insertText(' ' + text);
            feedback.feedback(false);
          },
          onStatusChange: (listening) => {
            if (listening) {
              voiceBtn.classList.add('recording');
              voiceBtn.innerHTML = '<span class="icon">🛑</span> <span>കേൾക്കുന്നു...</span>';
              this.showToast('ശബ്ദം കേൾക്കുന്നു... സംസാരിക്കുക (Listening...)');
            } else {
              voiceBtn.classList.remove('recording');
              voiceBtn.innerHTML = '<span class="icon">🎙️</span> <span>വോയ്‌സ്</span>';
            }
          }
        });

        voiceBtn.addEventListener('click', () => {
          this.speechEngine.toggle();
          feedback.feedback(true);
        });
      }

      // Keyboard Size
      const kbSizeSelect = document.getElementById('kbSizeSelect');
      if (kbSizeSelect) {
        kbSizeSelect.addEventListener('change', (e) => {
          const size = e.target.value;
          const kbWrap = this.keyboardContainer.querySelector('.keyboard-wrapper');
          if (kbWrap) {
            kbWrap.classList.remove('size-compact', 'size-large');
            if (size === 'compact') kbWrap.classList.add('size-compact');
            if (size === 'large') kbWrap.classList.add('size-large');
          }
        });
      }

      // Speed Test Listeners
      const speedTestBtn = document.getElementById('speedTestBtn');
      const closeSpeedTestBtn = document.getElementById('closeSpeedTestBtn');
      if (speedTestBtn) {
        speedTestBtn.addEventListener('click', () => this.openSpeedTestModal());
      }
      if (closeSpeedTestBtn) {
        closeSpeedTestBtn.addEventListener('click', () => this.closeSpeedTestModal());
      }
      if (this.speedTestModal) {
        this.speedTestModal.addEventListener('click', (e) => {
          if (e.target === this.speedTestModal) {
            this.closeSpeedTestModal();
          }
        });
      }

      const durationBtns = document.querySelectorAll('.duration-btn');
      durationBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          durationBtns.forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          this.speedTestDuration = parseInt(btn.getAttribute('data-minutes') || '1', 10);
          this.prepareSpeedTest();
          feedback.feedback(true);
        });
      });

      const startSpeedTestBtn = document.getElementById('startSpeedTestBtn');
      if (startSpeedTestBtn) {
        startSpeedTestBtn.addEventListener('click', () => {
          this.startSpeedTest();
          feedback.feedback(true);
        });
      }

      const resetSpeedTestBtn = document.getElementById('resetSpeedTestBtn');
      if (resetSpeedTestBtn) {
        resetSpeedTestBtn.addEventListener('click', () => {
          this.prepareSpeedTest();
          feedback.feedback(true);
        });
      }

      const retakeSpeedTestBtn = document.getElementById('retakeSpeedTestBtn');
      if (retakeSpeedTestBtn) {
        retakeSpeedTestBtn.addEventListener('click', () => {
          this.prepareSpeedTest();
          feedback.feedback(true);
        });
      }

      const copyResultCardBtn = document.getElementById('copyResultCardBtn');
      if (copyResultCardBtn) {
        copyResultCardBtn.addEventListener('click', () => {
          this.copySpeedResultCard();
          feedback.feedback(true);
        });
      }

      if (this.speedTestInput) {
        this.speedTestInput.addEventListener('keydown', (e) => {
          if (e.key === ' ' || e.code === 'Space') {
            e.preventDefault();
            this.submitCurrentSpeedWord();
          }
        });

        this.speedTestInput.addEventListener('input', () => {
          if (!this.speedSession || !this.speedSession.isActive) return;
          const val = this.speedTestInput.value;
          if (val.endsWith(' ')) {
            this.submitCurrentSpeedWord();
          } else {
            this.speedSession.currentInput = val;
          }
        });
      }

      const toggleKbBtn = document.getElementById('toggleKbBtn');
      if (toggleKbBtn) {
        toggleKbBtn.addEventListener('click', () => {
          const kb = this.keyboardContainer;
          kb.classList.toggle('collapsed');
          const isCollapsed = kb.classList.contains('collapsed');
          toggleKbBtn.innerHTML = isCollapsed
            ? '<span class="icon">⌨️</span> <span>കീബോർഡ് കാണിക്കുക</span>'
            : '<span class="icon">▼</span> <span>കീബോർഡ് ചുരുക്കുക</span>';
        });
      }
    }

    applyInputMode(mode) {
      this.inputMode = mode;
      this.keyboard.options.physicalKeyboardEnabled = mode === 'physical';

      if (mode === 'touch') {
        this.editorEl.setAttribute('inputmode', 'none');
        this.keyboardContainer.classList.remove('collapsed');
      } else if (mode === 'system') {
        this.editorEl.removeAttribute('inputmode');
      } else {
        this.editorEl.removeAttribute('inputmode');
      }

      const modeSelect = document.getElementById('inputModeSelect');
      if (modeSelect) modeSelect.value = mode;
    }

    getInputModeName(mode) {
      switch (mode) {
        case 'touch': return 'ഓൺ-സ്ക്രീൻ ടച്ച് കീബോർഡ് (Mobile / Tab)';
        case 'physical': return 'കമ്പ്യൂട്ടർ / ഫിസിക്കൽ കീബോർഡ് (Desktop)';
        case 'system': return 'സിസ്റ്റം കീബോർഡ് (Gboard / Native)';
        default: return mode;
      }
    }

    applyTheme(theme) {
      this.theme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      this.storage.set('ml_theme', theme);

      const themeBtn = document.getElementById('themeToggleBtn');
      if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark'
          ? '<span class="icon">☀️</span> <span>ലൈറ്റ് മോഡ്</span>'
          : '<span class="icon">🌙</span> <span>ഡാർക്ക് മോഡ്</span>';
      }
    }

    applyFont(fontFamily) {
      this.fontFamily = fontFamily;
      this.editorEl.style.fontFamily = fontFamily;
      this.storage.set('ml_font', fontFamily);
    }

    applyFontSize(size) {
      this.fontSize = size;
      this.editorEl.style.fontSize = `${size}px`;
      this.storage.set('ml_fontsize', size.toString());
    }

    updateStatsUI(stats) {
      const wordCountEl = document.getElementById('wordCount');
      const aksharamCountEl = document.getElementById('aksharamCount');
      const charCountEl = document.getElementById('charCount');
      const undoBtn = document.getElementById('undoBtn');
      const redoBtn = document.getElementById('redoBtn');

      if (wordCountEl) wordCountEl.textContent = stats.words;
      if (aksharamCountEl) aksharamCountEl.textContent = stats.aksharams;
      if (charCountEl) charCountEl.textContent = stats.chars;

      if (undoBtn) undoBtn.disabled = !stats.canUndo;
      if (redoBtn) redoBtn.disabled = !stats.canRedo;
    }

    copyToClipboard() {
      const text = this.editorEl.value;
      if (!text) {
        this.showToast('പകർത്താൻ അക്ഷരങ്ങളൊന്നുമില്ല (Text is empty)');
        return;
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            this.showToast('മലയാളം ടെക്സ്റ്റ് കോപ്പി ചെയ്തു! (Copied to Clipboard)');
            feedback.feedback(true);
          })
          .catch(() => {
            this.fallbackCopy(text);
          });
      } else {
        this.fallbackCopy(text);
      }
    }

    fallbackCopy(text) {
      this.editorEl.select();
      document.execCommand('copy');
      this.showToast('ടെക്സ്റ്റ് കോപ്പി ചെയ്തു (Copied)');
      feedback.feedback(true);
    }

    confirmClear() {
      if (!this.editorEl.value) return;
      if (confirm('എഴുതിയ മലയാളം മുഴുവൻ മായ്ക്കണോ? (Clear all text?)')) {
        this.editor.clear();
        this.showToast('ടെക്സ്റ്റ് മായ്ച്ചു (Cleared)');
        feedback.feedback(true);
      }
    }

    downloadAsTxt() {
      const text = this.editorEl.value;
      if (!text) {
        this.showToast('ഡൗൺലോഡ് ചെയ്യാൻ ടെക്സ്റ്റ് ഇല്ല');
        return;
      }

      const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
      const blob = new Blob([bom, text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `malayalam-document-${new Date().toISOString().slice(0, 10)}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('ടെക്സ്റ്റ് ഫയൽ ഡൗൺലോഡ് ചെയ്തു (.txt)');
    }

    downloadAsDoc() {
      const text = this.editorEl.value;
      if (!text) {
        this.showToast('ഡൗൺലോഡ് ചെയ്യാൻ ടെക്സ്റ്റ് ഇല്ല');
        return;
      }

      const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>മലയാളം രേഖ</title>
          <style>
            body {
              font-family: 'Manjari', 'Noto Sans Malayalam', Arial, sans-serif;
              font-size: 16pt;
              line-height: 1.6;
              margin: 1in;
            }
            p { margin-bottom: 1em; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <p>${text.replace(/\n/g, '<br/>')}</p>
        </body>
        </html>
      `;

      const blob = new Blob([htmlContent], { type: 'application/msword;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `malayalam-document-${new Date().toISOString().slice(0, 10)}.doc`;
      a.click();
      URL.revokeObjectURL(url);
      this.showToast('ഡോക്യുമെന്റ് ഡൗൺലോഡ് ചെയ്തു (.doc)');
    }

    shareContent() {
      const text = this.editorEl.value;
      if (!text) {
        this.showToast('പങ്കുവെക്കാൻ ടെക്സ്റ്റ് ഇല്ല');
        return;
      }

      if (navigator.share) {
        navigator
          .share({
            title: 'മലയാളം ടൈപ്പിംഗ് രേഖ',
            text: text
          })
          .then(() => {
            this.showToast('വിജയകരമായി പങ്കുവെച്ചു!');
          })
          .catch(() => {});
      } else {
        this.copyToClipboard();
        this.showToast('ഷെയർ സാധ്യമല്ല, ടെക്സ്റ്റ് ക്ലിപ്പ്ബോർഡിലേക്ക് കോപ്പി ചെയ്തു');
      }
    }

    // ==========================================
    // InScript Master Tutor Methods
    // ==========================================
    openTutorModal() {
      if (!this.practiceModal) return;
      this.practiceModal.classList.remove('hidden');
      if (this.tutorCompletionCard) this.tutorCompletionCard.classList.add('hidden');
      if (this.tutorFingerGuideCard) this.tutorFingerGuideCard.classList.remove('hidden');

      // Dock virtual keyboard directly into tutor modal so it is fully visible and touchable
      const kb = document.getElementById('virtualKeyboard');
      const dock = document.getElementById('tutorKeyboardDock');
      if (kb && dock) {
        dock.appendChild(kb);
      }

      this.startTutor();
    }

    closeTutorModal() {
      if (!this.practiceModal) return;
      this.practiceModal.classList.add('hidden');

      // Return virtual keyboard to main page layout
      const kb = document.getElementById('virtualKeyboard');
      const mainSlot = document.getElementById('mainKeyboardSlot');
      if (kb && mainSlot) {
        mainSlot.appendChild(kb);
      }

      if (this.keyboard) {
        this.keyboard.clearTutorHighlights();
      }
      if (this.tutorEngine) {
        this.tutorEngine.resetStats();
      }
    }

    isTutorOpen() {
      return this.practiceModal && !this.practiceModal.classList.contains('hidden');
    }

    startTutor() {
      if (!this.tutorEngine) return;
      if (this.tutorCompletionCard) this.tutorCompletionCard.classList.add('hidden');
      if (this.tutorFingerGuideCard) this.tutorFingerGuideCard.classList.remove('hidden');

      this.tutorEngine.start();
      this.renderTutorStars();
    }

    handleTutorKeyInput(char) {
      if (!this.tutorEngine || !this.tutorEngine.isActive) {
        this.startTutor();
      }
      const res = this.tutorEngine.processKeyInput(char);
      if (res && res.correct) {
        feedback.feedback(false);
      } else {
        feedback.feedback(true);
        const currentEl = this.practiceTargetStream ? this.practiceTargetStream.querySelector('.char-current') : null;
        if (currentEl) {
          currentEl.classList.add('char-error-shake');
          setTimeout(() => currentEl.classList.remove('char-error-shake'), 250);
        }
      }
    }

    handleTutorBackspace() {
      if (!this.tutorEngine || !this.tutorEngine.isActive) return;
      this.tutorEngine.backspace();
      feedback.feedback(true);
    }

    onTutorStateChanged(state) {
      this.renderTutorStream(state.targetText, state.currentIndex);
      this.updateTutorGuide(state.guide);

      if (this.keyboard && state.guide) {
        this.keyboard.highlightTutorKey(state.guide.code, state.guide.shift);
      }

      this.updateTutorMetrics(state.metrics);
    }

    renderTutorStream(targetText, currentIndex) {
      if (!this.practiceTargetStream) return;
      const html = [];

      for (let i = 0; i < targetText.length; i++) {
        const ch = targetText[i];
        const displayChar = ch === ' ' ? '␣' : ch;
        if (i < currentIndex) {
          html.push(`<span class="char-done">${displayChar}</span>`);
        } else if (i === currentIndex) {
          html.push(`<span class="char-current">${displayChar}</span>`);
        } else {
          html.push(`<span class="char-upcoming">${displayChar}</span>`);
        }
      }

      this.practiceTargetStream.innerHTML = html.join('');

      const currentEl = this.practiceTargetStream.querySelector('.char-current');
      if (currentEl) {
        currentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    updateTutorGuide(guide) {
      if (!guide) return;
      const targetCharEl = document.getElementById('guideTargetChar');
      const targetNameEl = document.getElementById('guideTargetName');
      const fingerDot = document.getElementById('guideFingerDot');
      const fingerName = document.getElementById('guideFingerName');
      const keyName = document.getElementById('guideKeyName');
      const shiftReq = document.getElementById('guideShiftReq');
      const guideDesc = document.getElementById('guideDescription');

      if (targetCharEl) targetCharEl.textContent = guide.char === ' ' ? '␣ (Space)' : guide.char;
      if (targetNameEl) targetNameEl.textContent = `അക്ഷരം: ${guide.char === ' ' ? 'സ്പേസ്' : guide.char}`;

      if (fingerDot && guide.fingerColor) fingerDot.style.background = guide.fingerColor;
      if (fingerName) fingerName.textContent = `${guide.fingerMl} (${guide.fingerEn})`;

      if (keyName) keyName.textContent = guide.keyName ? `Key ${guide.keyName}` : 'Spacebar';

      if (shiftReq) {
        if (guide.shift) {
          shiftReq.textContent = '⇧ Shift അമർത്തിപ്പിടിക്കുക';
          shiftReq.style.color = '#f59e0b';
        } else {
          shiftReq.textContent = 'നേരിട്ട് അമർത്തുക (Normal)';
          shiftReq.style.color = 'var(--text-muted)';
        }
      }

      if (guideDesc && this.tutorEngine && this.tutorEngine.currentStage) {
        guideDesc.textContent = this.tutorEngine.currentStage.instructions || '';
      }
    }

    updateTutorMetrics(metrics) {
      const progEl = document.getElementById('practiceProgress');
      const accEl = document.getElementById('practiceAccuracy');
      const wpmEl = document.getElementById('practiceWpm');
      const errEl = document.getElementById('practiceErrors');

      if (progEl) progEl.textContent = `${metrics.progress}%`;
      if (accEl) accEl.textContent = `${metrics.accuracy}%`;
      if (wpmEl) wpmEl.textContent = metrics.wpm;
      if (errEl) errEl.textContent = metrics.errors;
    }

    renderTutorStars() {
      const starsEl = document.getElementById('stageStarsDisplay');
      if (!starsEl || !this.tutorEngine || !this.tutorEngine.currentStage) return;

      const saved = this.tutorEngine.getStageSavedData(this.tutorEngine.currentStage.id);
      if (saved && saved.stars > 0) {
        starsEl.textContent = '⭐'.repeat(saved.stars);
      } else {
        starsEl.textContent = '☆☆☆';
      }
    }

    onTutorStageCompleted(stage, metrics) {
      if (this.keyboard) {
        this.keyboard.clearTutorHighlights();
      }

      if (this.tutorFingerGuideCard) this.tutorFingerGuideCard.classList.add('hidden');
      if (this.tutorCompletionCard) this.tutorCompletionCard.classList.remove('hidden');

      const titleEl = document.getElementById('completionTitle');
      const starsEl = document.getElementById('completionStars');
      const summaryEl = document.getElementById('completionSummary');

      if (titleEl) titleEl.textContent = `അഭിനന്ദനങ്ങൾ! ${stage.title} പൂർത്തിയായി!`;
      if (starsEl) starsEl.textContent = '⭐'.repeat(metrics.stars);
      if (summaryEl) {
        summaryEl.textContent = `കൃത്യത: ${metrics.accuracy}% | വേഗത: ${metrics.wpm} WPM | തെറ്റുകൾ: ${metrics.errors}`;
      }

      this.renderTutorStars();
      feedback.feedback(true);
      this.showToast(`പാഠം പൂർത്തിയായി! ⭐ x ${metrics.stars}`);
    }

    loadNextTutorStage() {
      if (!this.tutorEngine || !this.tutorEngine.currentStage) return;
      const currentId = this.tutorEngine.currentStage.id;

      const allStageIds = [];
      TUTOR_LEVELS.forEach(lvl => lvl.stages.forEach(s => allStageIds.push(s.id)));

      const currentIdx = allStageIds.indexOf(currentId);
      if (currentIdx >= 0 && currentIdx < allStageIds.length - 1) {
        const nextId = allStageIds[currentIdx + 1];
        if (this.practiceStageSelect) {
          this.practiceStageSelect.value = nextId;
        }
        this.tutorEngine.loadStage(nextId);
        this.startTutor();
      } else {
        this.showToast('എല്ലാ പാഠങ്ങളും പൂർത്തിയായി! നിങ്ങൾ ഇൻസ്ക്രിപ്റ്റ് മാസ്റ്ററായി!');
        this.closeTutorModal();
      }
    }

    // ==========================================
    // Speed Test Methods
    // ==========================================
    openSpeedTestModal() {
      if (!this.speedTestModal) return;
      this.speedTestModal.classList.remove('hidden');
      this.prepareSpeedTest();
    }

    closeSpeedTestModal() {
      if (!this.speedTestModal) return;
      this.speedTestModal.classList.add('hidden');
      if (this.speedSession) {
        this.speedSession.stop();
      }
    }

    isSpeedTestOpen() {
      return this.speedTestModal && !this.speedTestModal.classList.contains('hidden');
    }

    prepareSpeedTest() {
      if (this.speedSession) {
        this.speedSession.stop();
      }
      this.speedSession = new SpeedTestSession(this.speedTestDuration);
      this.lastSpeedMetrics = null;

      if (this.speedTestResultsCard) this.speedTestResultsCard.classList.add('hidden');
      if (this.speedActiveArea) this.speedActiveArea.classList.remove('hidden');
      if (this.speedConfigRow) this.speedConfigRow.classList.remove('hidden');

      const startBtn = document.getElementById('startSpeedTestBtn');
      if (startBtn) startBtn.style.display = 'inline-flex';

      if (this.speedTestInput) {
        this.speedTestInput.value = '';
        this.speedTestInput.disabled = true;
        this.speedTestInput.placeholder = 'ടെസ്റ്റ് ആരംഭിക്കാൻ "ടെസ്റ്റ് ആരംഭിക്കുക" അമർത്തുക...';
      }

      this.renderSpeedWords();
      this.updateLiveSpeedTimer(this.speedSession.durationSeconds);
      this.resetLiveSpeedMetrics();
    }

    startSpeedTest() {
      if (!this.speedSession) {
        this.prepareSpeedTest();
      }

      if (this.speedTestInput) {
        this.speedTestInput.disabled = false;
        this.speedTestInput.value = '';
        this.speedTestInput.placeholder = 'മുകളിലെ വാക്ക് കണ്ട് സ്പേസ് ബാർ അടിച്ച് ടൈപ്പ് ചെയ്യുക...';
        this.speedTestInput.focus();
        if (this.inputMode === 'touch') {
          this.speedTestInput.setAttribute('inputmode', 'none');
        }
      }

      const startBtn = document.getElementById('startSpeedTestBtn');
      if (startBtn) startBtn.style.display = 'none';

      this.speedSession.start(
        (remainingSeconds, metrics) => {
          this.updateLiveSpeedTimer(remainingSeconds);
          this.updateLiveSpeedMetrics(metrics);
        },
        (finalMetrics) => {
          this.showSpeedResults(finalMetrics);
        }
      );
    }

    handleSpeedKeyInput(char) {
      if (!this.speedSession || !this.speedSession.isActive || !this.speedTestInput) return;

      if (char === ' ') {
        this.submitCurrentSpeedWord();
      } else {
        this.speedTestInput.value += char;
        this.speedSession.currentInput = this.speedTestInput.value;
      }
    }

    handleSpeedBackspace() {
      if (!this.speedTestInput) return;
      const val = this.speedTestInput.value;
      if (val.length > 0) {
        let newLen = val.length - 1;
        if (typeof Intl !== 'undefined' && Intl.Segmenter) {
          try {
            const seg = new Intl.Segmenter('ml', { granularity: 'grapheme' });
            const segments = Array.from(seg.segment(val));
            if (segments.length > 0) {
              const last = segments[segments.length - 1];
              newLen = last.index;
            }
          } catch {}
        }
        this.speedTestInput.value = val.slice(0, newLen);
        if (this.speedSession) this.speedSession.currentInput = this.speedTestInput.value;
      }
    }

    submitCurrentSpeedWord() {
      if (!this.speedSession || !this.speedTestInput) return;
      const typed = this.speedTestInput.value.trim();
      if (!typed) return;

      this.speedSession.submitWord(typed);
      this.speedTestInput.value = '';
      this.renderSpeedWords();
      const metrics = this.speedSession.getMetrics();
      this.updateLiveSpeedMetrics(metrics);
      feedback.feedback(false);
    }

    renderSpeedWords() {
      if (!this.speedWordsContainer || !this.speedSession) return;
      const words = this.speedSession.words;
      const currentIndex = this.speedSession.currentWordIndex;
      const results = this.speedSession.wordResults;

      const html = words.map((w, idx) => {
        let cls = 'speed-word';
        if (idx === currentIndex) {
          cls += ' active';
        } else if (idx < currentIndex) {
          const res = results[idx];
          if (res && res.correct) {
            cls += ' correct';
          } else {
            cls += ' incorrect';
          }
        }
        return `<span class="${cls}" data-idx="${idx}">${w}</span>`;
      }).join(' ');

      this.speedWordsContainer.innerHTML = html;

      const activeWordEl = this.speedWordsContainer.querySelector('.speed-word.active');
      if (activeWordEl) {
        activeWordEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    updateLiveSpeedTimer(seconds) {
      if (!this.speedTimerEl) return;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      this.speedTimerEl.textContent = formatted;

      if (seconds <= 10) {
        this.speedTimerEl.classList.add('warning');
      } else {
        this.speedTimerEl.classList.remove('warning');
      }
    }

    updateLiveSpeedMetrics(metrics) {
      const netWpmEl = document.getElementById('liveNetWpm');
      const accuracyEl = document.getElementById('liveAccuracy');
      const correctWordsEl = document.getElementById('liveCorrectWords');

      if (netWpmEl) netWpmEl.textContent = metrics.netWpm;
      if (accuracyEl) accuracyEl.textContent = `${metrics.accuracy}%`;
      if (correctWordsEl) correctWordsEl.textContent = metrics.correctWords;
    }

    resetLiveSpeedMetrics() {
      this.updateLiveSpeedMetrics({ netWpm: 0, accuracy: 100, correctWords: 0 });
    }

    showSpeedResults(metrics) {
      this.lastSpeedMetrics = metrics;

      if (this.speedActiveArea) this.speedActiveArea.classList.add('hidden');
      if (this.speedConfigRow) this.speedConfigRow.classList.add('hidden');
      if (this.speedTestResultsCard) this.speedTestResultsCard.classList.remove('hidden');

      const rankBadge = document.getElementById('resultRankBadge');
      const rankTitle = document.getElementById('resultRankTitle');
      const resultNetWpm = document.getElementById('resultNetWpm');
      const resultAccuracy = document.getElementById('resultAccuracy');
      const resultGrossWpm = document.getElementById('resultGrossWpm');
      const resultCorrectWords = document.getElementById('resultCorrectWords');
      const resultIncorrectWords = document.getElementById('resultIncorrectWords');
      const resultTotalChars = document.getElementById('resultTotalChars');

      if (rankBadge) rankBadge.textContent = metrics.badge;
      if (rankTitle) rankTitle.textContent = metrics.rank;
      if (resultNetWpm) resultNetWpm.textContent = metrics.netWpm;
      if (resultAccuracy) resultAccuracy.textContent = `${metrics.accuracy}%`;
      if (resultGrossWpm) resultGrossWpm.textContent = metrics.grossWpm;
      if (resultCorrectWords) resultCorrectWords.textContent = metrics.correctWords;
      if (resultIncorrectWords) resultIncorrectWords.textContent = metrics.incorrectWords;
      if (resultTotalChars) resultTotalChars.textContent = metrics.totalChars;

      feedback.feedback(true);
      this.showToast(`ടെസ്റ്റ് പൂർത്തിയായി! നിങ്ങളുടെ വേഗത: ${metrics.netWpm} WPM`);
    }

    copySpeedResultCard() {
      if (!this.lastSpeedMetrics) return;
      const m = this.lastSpeedMetrics;
      const text = `⚡ മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ് സ്പീഡ് ടെസ്റ്റ് ⚡
-----------------------------------------
🏆 റാങ്ക്: ${m.badge} ${m.rank}
⚡ നെറ്റ് സ്പീഡ്: ${m.netWpm} WPM
🎯 കൃത്യത: ${m.accuracy}%
⌨️ ഗ്രോസ് സ്പീഡ്: ${m.grossWpm} WPM
✅ ശരിയായ വാക്കുകൾ: ${m.correctWords}
❌ തെറ്റായ വാക്കുകൾ: ${m.incorrectWords}
⏱️ സമയം: ${this.speedTestDuration} മിനിറ്റ്
-----------------------------------------
മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ് ഇന്റർഫേസ് ഉപയോഗിച്ച് പരീക്ഷിച്ച ഫലം`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('സ്പീഡ് ടെസ്റ്റ് സ്കോർ കാർഡ് കോപ്പി ചെയ്തു! (Copied)');
        });
      } else {
        this.fallbackCopy(text);
      }
    }

    // ==========================================
    // Speed Test Methods
    // ==========================================
    openSpeedTestModal() {
      if (!this.speedTestModal) return;
      this.speedTestModal.classList.remove('hidden');
      this.prepareSpeedTest();
    }

    closeSpeedTestModal() {
      if (!this.speedTestModal) return;
      this.speedTestModal.classList.add('hidden');
      if (this.speedSession) {
        this.speedSession.stop();
      }
    }

    isSpeedTestOpen() {
      return this.speedTestModal && !this.speedTestModal.classList.contains('hidden');
    }

    prepareSpeedTest() {
      if (this.speedSession) {
        this.speedSession.stop();
      }
      this.speedSession = new SpeedTestSession(this.speedTestDuration);
      this.lastSpeedMetrics = null;

      if (this.speedTestResultsCard) this.speedTestResultsCard.classList.add('hidden');
      if (this.speedActiveArea) this.speedActiveArea.classList.remove('hidden');
      if (this.speedConfigRow) this.speedConfigRow.classList.remove('hidden');

      const startBtn = document.getElementById('startSpeedTestBtn');
      if (startBtn) startBtn.style.display = 'inline-flex';

      if (this.speedTestInput) {
        this.speedTestInput.value = '';
        this.speedTestInput.disabled = true;
        this.speedTestInput.placeholder = 'ടെസ്റ്റ് ആരംഭിക്കാൻ "ടെസ്റ്റ് ആരംഭിക്കുക" അമർത്തുക...';
      }

      this.renderSpeedWords();
      this.updateLiveSpeedTimer(this.speedSession.durationSeconds);
      this.resetLiveSpeedMetrics();
    }

    startSpeedTest() {
      if (!this.speedSession) {
        this.prepareSpeedTest();
      }

      if (this.speedTestInput) {
        this.speedTestInput.disabled = false;
        this.speedTestInput.value = '';
        this.speedTestInput.placeholder = 'മുകളിലെ വാക്ക് കണ്ട് സ്പേസ് ബാർ അടിച്ച് ടൈപ്പ് ചെയ്യുക...';
        this.speedTestInput.focus();
        if (this.inputMode === 'touch') {
          this.speedTestInput.setAttribute('inputmode', 'none');
        }
      }

      const startBtn = document.getElementById('startSpeedTestBtn');
      if (startBtn) startBtn.style.display = 'none';

      this.speedSession.start(
        (remainingSeconds, metrics) => {
          this.updateLiveSpeedTimer(remainingSeconds);
          this.updateLiveSpeedMetrics(metrics);
        },
        (finalMetrics) => {
          this.showSpeedResults(finalMetrics);
        }
      );
    }

    handleSpeedKeyInput(char) {
      if (!this.speedSession || !this.speedSession.isActive || !this.speedTestInput) return;

      if (char === ' ') {
        this.submitCurrentSpeedWord();
      } else {
        this.speedTestInput.value += char;
        this.speedSession.currentInput = this.speedTestInput.value;
      }
    }

    handleSpeedBackspace() {
      if (!this.speedTestInput) return;
      const val = this.speedTestInput.value;
      if (val.length > 0) {
        let newLen = val.length - 1;
        if (typeof Intl !== 'undefined' && Intl.Segmenter) {
          try {
            const seg = new Intl.Segmenter('ml', { granularity: 'grapheme' });
            const segments = Array.from(seg.segment(val));
            if (segments.length > 0) {
              const last = segments[segments.length - 1];
              newLen = last.index;
            }
          } catch {}
        }
        this.speedTestInput.value = val.slice(0, newLen);
        if (this.speedSession) this.speedSession.currentInput = this.speedTestInput.value;
      }
    }

    submitCurrentSpeedWord() {
      if (!this.speedSession || !this.speedTestInput) return;
      const typed = this.speedTestInput.value.trim();
      if (!typed) return;

      this.speedSession.submitWord(typed);
      this.speedTestInput.value = '';
      this.renderSpeedWords();
      const metrics = this.speedSession.getMetrics();
      this.updateLiveSpeedMetrics(metrics);
      feedback.feedback(false);
    }

    renderSpeedWords() {
      if (!this.speedWordsContainer || !this.speedSession) return;
      const words = this.speedSession.words;
      const currentIndex = this.speedSession.currentWordIndex;
      const results = this.speedSession.wordResults;

      const html = words.map((w, idx) => {
        let cls = 'speed-word';
        if (idx === currentIndex) {
          cls += ' active';
        } else if (idx < currentIndex) {
          const res = results[idx];
          if (res && res.correct) {
            cls += ' correct';
          } else {
            cls += ' incorrect';
          }
        }
        return `<span class="${cls}" data-idx="${idx}">${w}</span>`;
      }).join(' ');

      this.speedWordsContainer.innerHTML = html;

      const activeWordEl = this.speedWordsContainer.querySelector('.speed-word.active');
      if (activeWordEl) {
        activeWordEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    updateLiveSpeedTimer(seconds) {
      if (!this.speedTimerEl) return;
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      const formatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      this.speedTimerEl.textContent = formatted;

      if (seconds <= 10) {
        this.speedTimerEl.classList.add('warning');
      } else {
        this.speedTimerEl.classList.remove('warning');
      }
    }

    updateLiveSpeedMetrics(metrics) {
      const netWpmEl = document.getElementById('liveNetWpm');
      const accuracyEl = document.getElementById('liveAccuracy');
      const correctWordsEl = document.getElementById('liveCorrectWords');

      if (netWpmEl) netWpmEl.textContent = metrics.netWpm;
      if (accuracyEl) accuracyEl.textContent = `${metrics.accuracy}%`;
      if (correctWordsEl) correctWordsEl.textContent = metrics.correctWords;
    }

    resetLiveSpeedMetrics() {
      this.updateLiveSpeedMetrics({ netWpm: 0, accuracy: 100, correctWords: 0 });
    }

    showSpeedResults(metrics) {
      this.lastSpeedMetrics = metrics;

      if (this.speedActiveArea) this.speedActiveArea.classList.add('hidden');
      if (this.speedConfigRow) this.speedConfigRow.classList.add('hidden');
      if (this.speedTestResultsCard) this.speedTestResultsCard.classList.remove('hidden');

      const rankBadge = document.getElementById('resultRankBadge');
      const rankTitle = document.getElementById('resultRankTitle');
      const resultNetWpm = document.getElementById('resultNetWpm');
      const resultAccuracy = document.getElementById('resultAccuracy');
      const resultGrossWpm = document.getElementById('resultGrossWpm');
      const resultCorrectWords = document.getElementById('resultCorrectWords');
      const resultIncorrectWords = document.getElementById('resultIncorrectWords');
      const resultTotalChars = document.getElementById('resultTotalChars');

      if (rankBadge) rankBadge.textContent = metrics.badge;
      if (rankTitle) rankTitle.textContent = metrics.rank;
      if (resultNetWpm) resultNetWpm.textContent = metrics.netWpm;
      if (resultAccuracy) resultAccuracy.textContent = `${metrics.accuracy}%`;
      if (resultGrossWpm) resultGrossWpm.textContent = metrics.grossWpm;
      if (resultCorrectWords) resultCorrectWords.textContent = metrics.correctWords;
      if (resultIncorrectWords) resultIncorrectWords.textContent = metrics.incorrectWords;
      if (resultTotalChars) resultTotalChars.textContent = metrics.totalChars;

      feedback.feedback(true);
      this.showToast(`ടെസ്റ്റ് പൂർത്തിയായി! നിങ്ങളുടെ വേഗത: ${metrics.netWpm} WPM`);
    }

    copySpeedResultCard() {
      if (!this.lastSpeedMetrics) return;
      const m = this.lastSpeedMetrics;
      const text = `⚡ മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ് സ്പീഡ് ടെസ്റ്റ് ⚡
-----------------------------------------
🏆 റാങ്ക്: ${m.badge} ${m.rank}
⚡ നെറ്റ് സ്പീഡ്: ${m.netWpm} WPM
🎯 കൃത്യത: ${m.accuracy}%
⌨️ ഗ്രോസ് സ്പീഡ്: ${m.grossWpm} WPM
✅ ശരിയായ വാക്കുകൾ: ${m.correctWords}
❌ തെറ്റായ വാക്കുകൾ: ${m.incorrectWords}
⏱️ സമയം: ${this.speedTestDuration} മിനിറ്റ്
-----------------------------------------
മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ് ഇന്റർഫേസ് ഉപയോഗിച്ച് പരീക്ഷിച്ച ഫലം`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('സ്പീഡ് ടെസ്റ്റ് സ്കോർ കാർഡ് കോപ്പി ചെയ്തു! (Copied)');
        });
      } else {
        this.fallbackCopy(text);
      }
    }

    showToast(message) {
      if (!this.toastEl) return;
      this.toastEl.textContent = message;
      this.toastEl.classList.add('visible');
      clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        this.toastEl.classList.remove('visible');
      }, 2800);
    }
  }

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.app = new MalayalamTypingApp();
    });
  } else {
    window.app = new MalayalamTypingApp();
  }
})();
