/**
 * Main Application Controller for Malayalam InScript Typing
 */

import { MalayalamEditorEngine } from './editor-engine.js';
import { VirtualKeyboard } from './virtual-keyboard.js';
import { feedback } from './audio.js';

class MalayalamTypingApp {
  constructor() {
    this.editorEl = document.getElementById('mlEditor');
    this.keyboardContainer = document.getElementById('virtualKeyboard');
    this.toastEl = document.getElementById('appToast');
    this.modalEl = document.getElementById('helpModal');

    this.inputMode = this.detectDefaultInputMode(); // 'touch' | 'physical' | 'system'
    this.theme = localStorage.getItem('ml_theme') || 'dark';
    this.fontFamily = localStorage.getItem('ml_font') || "'Manjari', 'Noto Sans Malayalam', sans-serif";
    this.fontSize = parseInt(localStorage.getItem('ml_fontsize') || '22', 10);

    this.init();
  }

  detectDefaultInputMode() {
    // Detect mobile or tablet by touch capability and screen width
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isSmallScreen = window.innerWidth <= 1024;
    return isTouch && isSmallScreen ? 'touch' : 'physical';
  }

  init() {
    // Initialize Editor Engine
    this.editor = new MalayalamEditorEngine(this.editorEl, {
      autoNormalizeChillus: true
    });

    // Initialize Virtual Keyboard
    this.keyboard = new VirtualKeyboard(this.keyboardContainer, this.editor, {
      physicalKeyboardEnabled: this.inputMode === 'physical',
      onClearRequest: () => this.confirmClear()
    });

    // Restore saved text from localStorage
    const savedText = localStorage.getItem('ml_typed_text');
    if (savedText) {
      this.editor.setText(savedText);
    }

    // Apply saved settings
    this.applyTheme(this.theme);
    this.applyFont(this.fontFamily);
    this.applyFontSize(this.fontSize);
    this.applyInputMode(this.inputMode);

    // Setup event listeners
    this.setupUIEventListeners();
    this.setupEditorListeners();

    // Auto-save debounced
    this.editor.subscribe((stats) => {
      this.updateStatsUI(stats);
      localStorage.setItem('ml_typed_text', stats.text);
    });

    // Initial stats update
    this.updateStatsUI(this.editor.getStats());
  }

  setupEditorListeners() {
    // When in touch mode on mobile/tablet, prevent mobile virtual keyboard from popping up
    this.editorEl.addEventListener('focus', () => {
      if (this.inputMode === 'touch') {
        this.editorEl.setAttribute('inputmode', 'none');
      } else if (this.inputMode === 'system') {
        this.editorEl.removeAttribute('inputmode');
      }
    });

    // Click anywhere on editor keeps cursor responsive
    this.editorEl.addEventListener('click', () => {
      if (this.inputMode === 'touch') {
        this.editorEl.setAttribute('inputmode', 'none');
      }
    });
  }

  setupUIEventListeners() {
    // Mode Selector (Touch / Physical / System)
    const modeSelect = document.getElementById('inputModeSelect');
    if (modeSelect) {
      modeSelect.value = this.inputMode;
      modeSelect.addEventListener('change', (e) => {
        this.applyInputMode(e.target.value);
        this.showToast(`ഇൻപുട്ട് മോഡ് മാറ്റി: ${this.getInputModeName(e.target.value)}`);
      });
    }

    // Font family selector
    const fontSelect = document.getElementById('fontFamilySelect');
    if (fontSelect) {
      fontSelect.value = this.fontFamily;
      fontSelect.addEventListener('change', (e) => {
        this.applyFont(e.target.value);
      });
    }

    // Font size slider
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

    // Copy Button
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    // Undo / Redo buttons
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

    // Clear Button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => this.confirmClear());
    }

    // Download Button (Dropdown or direct .txt)
    const downloadTxtBtn = document.getElementById('downloadTxtBtn');
    if (downloadTxtBtn) {
      downloadTxtBtn.addEventListener('click', () => this.downloadAsTxt());
    }

    const downloadDocBtn = document.getElementById('downloadDocBtn');
    if (downloadDocBtn) {
      downloadDocBtn.addEventListener('click', () => this.downloadAsDoc());
    }

    // Share Button
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
      shareBtn.addEventListener('click', () => this.shareContent());
    }

    // Normalize Chillus Button
    const normalizeBtn = document.getElementById('normalizeBtn');
    if (normalizeBtn) {
      normalizeBtn.addEventListener('click', () => {
        this.editor.checkAndNormalize();
        this.showToast('യൂണികോഡ് ചില്ലക്ഷരങ്ങൾ ക്രമീകരിച്ചു (Normalized)');
        feedback.feedback(true);
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const newTheme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
      });
    }

    // Sound Toggle
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
      soundToggle.checked = feedback.soundEnabled;
      soundToggle.addEventListener('change', (e) => {
        feedback.soundEnabled = e.target.checked;
        localStorage.setItem('ml_sound', e.target.checked ? '1' : '0');
        if (e.target.checked) feedback.feedback(true);
      });
      if (localStorage.getItem('ml_sound') === '1') {
        soundToggle.checked = true;
        feedback.soundEnabled = true;
      }
    }

    // Haptics Toggle
    const hapticToggle = document.getElementById('hapticToggle');
    if (hapticToggle) {
      hapticToggle.checked = feedback.hapticEnabled;
      hapticToggle.addEventListener('change', (e) => {
        feedback.hapticEnabled = e.target.checked;
        localStorage.setItem('ml_haptics', e.target.checked ? '1' : '0');
        if (e.target.checked) feedback.triggerHaptic(20);
      });
    }

    // Help Modal Toggle
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

    // Keyboard collapse toggle for mobile
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
      // physical
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
    localStorage.setItem('ml_theme', theme);

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
    localStorage.setItem('ml_font', fontFamily);
  }

  applyFontSize(size) {
    this.fontSize = size;
    this.editorEl.style.fontSize = `${size}px`;
    localStorage.setItem('ml_fontsize', size.toString());
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

    // Include UTF-8 BOM so Windows Notepad and other editors properly recognize Malayalam
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
        .catch(() => {
          // User cancelled or share failed
        });
    } else {
      this.copyToClipboard();
      this.showToast('ഷെയർ സാധ്യമല്ല, ടെക്സ്റ്റ് ക്ലിപ്പ്ബോർഡിലേക്ക് കോപ്പി ചെയ്തു');
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

// Instantiate on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MalayalamTypingApp();
});

