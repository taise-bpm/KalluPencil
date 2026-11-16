/**
 * Virtual InScript Keyboard Component
 * Optimized for Touch Devices (Mobile Phones, Tablets) and Desktop Hardware Keyboards
 */

import {
  INSCRIPT_MAP,
  CHILLU_CHARS,
  CONJUNCT_PRESETS,
  VOWEL_PRESETS,
  MALAYALAM_NUMERALS,
  SPECIAL_SIGNS
} from './inscript-data.js';
import { feedback } from './audio.js';

export class VirtualKeyboard {
  constructor(containerElement, editorEngine, options = {}) {
    this.container = containerElement;
    this.editor = editorEngine;
    this.options = options;

    this.isShifted = false;
    this.isCapsLocked = false;
    this.activeTab = 'inscript'; // 'inscript' | 'chillus' | 'conjuncts' | 'numbers'
    this.lastShiftTapTime = 0;

    // Physical key highlight mapping
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
      // Double tap: lock caps
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
        <!-- Quick Accessory / Category Bar -->
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

        <!-- Dynamic Keyboard Panel -->
        <div class="keyboard-panel-container">
          <div class="keyboard-panel inscript-panel ${this.activeTab === 'inscript' ? 'active' : 'hidden'}">
            <!-- Row 0: Numbers / Specials -->
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

            <!-- Row 1: QWERTY -->
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

            <!-- Row 2: ASDF -->
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

            <!-- Row 3: ZXCV -->
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

            <!-- Row 4: Space & Navigation -->
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

          <!-- Secondary Panel: Chillus & Special Signs -->
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

          <!-- Tertiary Panel: Common Conjuncts (കൂട്ടക്ഷരങ്ങൾ) -->
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

          <!-- Quaternary Panel: Numbers & Malayalam Digits -->
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

  attachEventListeners() {
    // Tab buttons
    this.container.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
        feedback.feedback(true);
      });
    });

    // Quick signs
    this.container.querySelectorAll('.quick-sign-btn, .special-insert-btn').forEach((btn) => {
      this.bindTouchAndClick(btn, () => {
        const insert = btn.getAttribute('data-insert');
        if (insert) {
          this.editor.insertText(insert);
          feedback.feedback(false);
        }
      });
    });

    // InScript character keys
    this.container.querySelectorAll('.kb-key[data-code]').forEach((keyEl) => {
      this.bindTouchAndClick(keyEl, () => {
        const normalVal = keyEl.getAttribute('data-normal');
        const shiftVal = keyEl.getAttribute('data-shift');
        const isShift = this.isShifted || this.isCapsLocked;
        const charToInsert = isShift ? shiftVal : normalVal;

        if (charToInsert) {
          this.editor.insertText(charToInsert);
          feedback.feedback(false);

          // Reset shift if not caps locked
          if (this.isShifted && !this.isCapsLocked) {
            this.setShift(false, false);
          }
        }
      });
    });

    // Action keys
    const backspaceBtn = this.container.querySelector('.key-backspace');
    if (backspaceBtn) {
      this.bindTouchAndClick(backspaceBtn, () => {
        this.editor.smartBackspace();
        feedback.feedback(true);
      });
    }

    const spaceBtn = this.container.querySelector('.key-space');
    if (spaceBtn) {
      this.bindTouchAndClick(spaceBtn, () => {
        this.editor.insertText(' ');
        feedback.feedback(false);
      });
    }

    const enterBtn = this.container.querySelector('.key-enter');
    if (enterBtn) {
      this.bindTouchAndClick(enterBtn, () => {
        this.editor.insertText('\n');
        feedback.feedback(true);
      });
    }

    const tabBtn = this.container.querySelector('.key-tab');
    if (tabBtn) {
      this.bindTouchAndClick(tabBtn, () => {
        this.editor.insertText('\t');
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

    // Switch buttons inside row-4
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

  /**
   * Helper to handle both fast touch on mobile and mouse click on desktop
   * without ghost clicks or delayed triggers.
   */
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

  /**
   * Listen to physical hardware keyboard (Desktop, Laptop, or Tablet with Bluetooth keyboard)
   */
  setupPhysicalKeyboardListeners() {
    window.addEventListener('keydown', (e) => {
      // If typing in another input element, skip
      if (e.target !== this.editor.textarea && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) {
        return;
      }

      // Check modifier keys
      if (e.ctrlKey || e.metaKey || e.altKey) {
        // Allow browser hotkeys like Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+A
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

      // Physical key mapping when user focuses editor or wants Inscript typing
      if (mapEntry && this.options.physicalKeyboardEnabled !== false) {
        e.preventDefault();
        const isShift = e.shiftKey || this.isCapsLocked;
        const charToInsert = isShift ? mapEntry.shift : mapEntry.normal;
        if (charToInsert) {
          this.editor.insertText(charToInsert);
          feedback.feedback(false);
        }
      } else if (code === 'Backspace' && this.options.physicalKeyboardEnabled !== false) {
        e.preventDefault();
        this.editor.smartBackspace();
        feedback.feedback(true);
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

