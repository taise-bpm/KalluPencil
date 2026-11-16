/**
 * Standalone Malayalam InScript Master Typing Tutor Application
 * Complete offline, zero-CORS, deep-linkable, localized progress persistence.
 */

(function () {
  'use strict';

  /* =========================================================
     1. InScript Mapping & Finger Definitions
     ========================================================= */
  const INSCRIPT_MAP = {
    Backquote: { normal: 'ൊ', shift: 'ഒ', keyName: '`', labelNormal: 'ൊ', labelShift: 'ഒ' },
    Digit1: { normal: '൧', shift: '!', keyName: '1', labelNormal: '൧', labelShift: '!' },
    Digit2: { normal: '൨', shift: '@', keyName: '2', labelNormal: '൨', labelShift: '@' },
    Digit3: { normal: '൩', shift: '#', keyName: '3', labelNormal: '൩', labelShift: '#' },
    Digit4: { normal: '൪', shift: '$', keyName: '4', labelNormal: '൪', labelShift: '$' },
    Digit5: { normal: '൫', shift: '%', keyName: '5', labelNormal: '൫', labelShift: '%' },
    Digit6: { normal: '൬', shift: '^', keyName: '6', labelNormal: '൬', labelShift: '^' },
    Digit7: { normal: '൭', shift: '&', keyName: '7', labelNormal: '൭', labelShift: '&' },
    Digit8: { normal: '൮', shift: '*', keyName: '8', labelNormal: '൮', labelShift: '*' },
    Digit9: { normal: '൯', shift: '(', keyName: '9', labelNormal: '൯', labelShift: '(' },
    Digit0: { normal: '൦', shift: ')', keyName: '0', labelNormal: '൦', labelShift: ')' },
    Minus: { normal: '-', shift: 'ഃ', keyName: '-', labelNormal: '-', labelShift: 'ഃ' },
    Equal: { normal: 'ൃ', shift: 'ഋ', keyName: '=', labelNormal: 'ൃ', labelShift: 'ഋ' },

    KeyQ: { normal: 'ൗ', shift: 'ഔ', keyName: 'Q', labelNormal: 'ൗ', labelShift: 'ഔ' },
    KeyW: { normal: 'ൈ', shift: 'ഐ', keyName: 'W', labelNormal: 'ൈ', labelShift: 'ഐ' },
    KeyE: { normal: 'ാ', shift: 'ആ', keyName: 'E', labelNormal: 'ാ', labelShift: 'ആ' },
    KeyR: { normal: 'ീ', shift: 'ഈ', keyName: 'R', labelNormal: 'ീ', labelShift: 'ഈ' },
    KeyT: { normal: 'ൂ', shift: 'ഊ', keyName: 'T', labelNormal: 'ൂ', labelShift: 'ഊ' },
    KeyY: { normal: 'ബ', shift: 'ഭ', keyName: 'Y', labelNormal: 'ബ', labelShift: 'ഭ' },
    KeyU: { normal: 'ഹ', shift: 'ങ', keyName: 'U', labelNormal: 'ഹ', labelShift: 'ങ' },
    KeyI: { normal: 'ഗ', shift: 'ഘ', keyName: 'I', labelNormal: 'ഗ', labelShift: 'ഘ' },
    KeyO: { normal: 'ദ', shift: 'ധ', keyName: 'O', labelNormal: 'ദ', labelShift: 'ധ' },
    KeyP: { normal: 'ജ', shift: 'ഝ', keyName: 'P', labelNormal: 'ജ', labelShift: 'ഝ' },
    BracketLeft: { normal: 'ഡ', shift: 'ഢ', keyName: '[', labelNormal: 'ഡ', labelShift: 'ഢ' },
    BracketRight: { normal: '\u200D', shift: 'ഞ', keyName: ']', labelNormal: 'ZWJ', labelShift: 'ഞ' },
    Backslash: { normal: '\\', shift: '|', keyName: '\\', labelNormal: '\\', labelShift: '|' },

    KeyA: { normal: 'ോ', shift: 'ഓ', keyName: 'A', labelNormal: 'ോ', labelShift: 'ഓ' },
    KeyS: { normal: 'േ', shift: 'ഏ', keyName: 'S', labelNormal: 'േ', labelShift: 'ഏ' },
    KeyD: { normal: '്', shift: 'അ', keyName: 'D', labelNormal: '്', labelShift: 'അ' },
    KeyF: { normal: 'ി', shift: 'ഇ', keyName: 'F', labelNormal: 'ി', labelShift: 'ഇ' },
    KeyG: { normal: 'ു', shift: 'ഉ', keyName: 'G', labelNormal: 'ു', labelShift: 'ഉ' },
    KeyH: { normal: 'പ', shift: 'ഫ', keyName: 'H', labelNormal: 'പ', labelShift: 'ഫ' },
    KeyJ: { normal: 'ര', shift: 'റ', keyName: 'J', labelNormal: 'ര', labelShift: 'റ' },
    KeyK: { normal: 'ക', shift: 'ഖ', keyName: 'K', labelNormal: 'ക', labelShift: 'ഖ' },
    KeyL: { normal: 'ത', shift: 'ഥ', keyName: 'L', labelNormal: 'ത', labelShift: 'ഥ' },
    Semicolon: { normal: 'ച', shift: 'ഛ', keyName: ';', labelNormal: 'ച', labelShift: 'ഛ' },
    Quote: { normal: 'ട', shift: 'ഠ', keyName: "'", labelNormal: 'ട', labelShift: 'ഠ' },

    KeyZ: { normal: 'െ', shift: 'എ', keyName: 'Z', labelNormal: 'െ', labelShift: 'എ' },
    KeyX: { normal: 'ം', shift: '\u200C', keyName: 'X', labelNormal: 'ം', labelShift: 'ZWNJ' },
    KeyC: { normal: 'മ', shift: 'ണ', keyName: 'C', labelNormal: 'മ', labelShift: 'ണ' },
    KeyV: { normal: 'ന', shift: 'ന', keyName: 'V', labelNormal: 'ന', labelShift: 'ന' },
    KeyB: { normal: 'വ', shift: 'ഴ', keyName: 'B', labelNormal: 'വ', labelShift: 'ഴ' },
    KeyN: { normal: 'ല', shift: 'ള', keyName: 'N', labelNormal: 'ല', labelShift: 'ള' },
    KeyM: { normal: 'സ', shift: 'ശ', keyName: 'M', labelNormal: 'സ', labelShift: 'ശ' },
    Comma: { normal: ',', shift: 'ഷ', keyName: ',', labelNormal: ',', labelShift: 'ഷ' },
    Period: { normal: '.', shift: '।', keyName: '.', labelNormal: '.', labelShift: '।' },
    Slash: { normal: 'യ', shift: '?', keyName: '/', labelNormal: 'യ', labelShift: '?' }
  };

  const FINGER_NAMES = {
    LP: { en: 'Left Pinky', ml: 'ഇടതു കൈ ചെറുവിരൽ', color: '#ec4899' },
    LR: { en: 'Left Ring', ml: 'ഇടതു കൈ മോതിരവിരൽ', color: '#8b5cf6' },
    LM: { en: 'Left Middle', ml: 'ഇടതു കൈ നടുവിരൽ', color: '#3b82f6' },
    LI: { en: 'Left Index', ml: 'ഇടതു കൈ ചൂണ്ടുവിരൽ', color: '#10b981' },
    LT: { en: 'Left Thumb', ml: 'ഇടതു തള്ളവിരൽ', color: '#64748b' },
    RT: { en: 'Right Thumb', ml: 'വലതു തള്ളവിരൽ', color: '#64748b' },
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

  const CHILLU_MAP = {
    'ർ': {
      name: 'ചില്ല് ർ',
      keys: [
        { char: 'ര', code: 'KeyJ', shift: false },
        { char: '്', code: 'KeyD', shift: false },
        { char: '\u200D', code: 'BracketRight', shift: false }
      ]
    },
    'ൽ': {
      name: 'ചില്ല് ൽ',
      keys: [
        { char: 'ല', code: 'KeyN', shift: false },
        { char: '്', code: 'KeyD', shift: false },
        { char: '\u200D', code: 'BracketRight', shift: false }
      ]
    },
    'ൾ': {
      name: 'ചില്ല് ൾ',
      keys: [
        { char: 'ള', code: 'KeyN', shift: true },
        { char: '്', code: 'KeyD', shift: false },
        { char: '\u200D', code: 'BracketRight', shift: false }
      ]
    },
    'ൻ': {
      name: 'ചില്ല് ൻ',
      keys: [
        { char: 'ന', code: 'KeyV', shift: false },
        { char: '്', code: 'KeyD', shift: false },
        { char: '\u200D', code: 'BracketRight', shift: false }
      ]
    },
    'ൺ': {
      name: 'ചില്ല് ൺ',
      keys: [
        { char: 'ണ', code: 'KeyC', shift: true },
        { char: '്', code: 'KeyD', shift: false },
        { char: '\u200D', code: 'BracketRight', shift: false }
      ]
    },
    'ൿ': {
      name: 'ചില്ല് ൿ',
      keys: [
        { char: 'ക', code: 'KeyK', shift: false },
        { char: '്', code: 'KeyD', shift: false },
        { char: '\u200D', code: 'BracketRight', shift: false }
      ]
    }
  };

  const CHILLU_CHARS = [
    { char: 'ൺ', label: 'ൺ' },
    { char: 'ൻ', label: 'ൻ' },
    { char: 'ർ', label: 'ർ' },
    { char: 'ൽ', label: 'ൽ' },
    { char: 'ൾ', label: 'ൾ' },
    { char: 'ൿ', label: 'ൿ' }
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
        const baseFreq = isSpecial ? 150 : 290;
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
      } catch {}
    }

    triggerHaptic(duration = 10) {
      if (!this.hapticEnabled) return;
      if ('vibrate' in navigator) {
        try { navigator.vibrate(duration); } catch {}
      }
    }

    feedback(isSpecial = false) {
      this.playKeyClick(isSpecial);
      this.triggerHaptic(isSpecial ? 20 : 10);
    }
  }

  const feedback = new SoundAndHaptics();

  /* =========================================================
     3. Tutor Curriculum (7 Levels, 20 Progressive Lessons)
     ========================================================= */
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
          instructions: 'Shift+D = അ | Shift+E = ആ | Shift+F = ഇ | Shift+R = ഈ | Shift+G = ഉ | Shift+T = ഊ | Shift+Z = എ | Shift+S = ഏ'
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
        },
        {
          id: '5-3',
          title: 'പാഠം 5.3: ചില്ല് വാക്യങ്ങൾ',
          description: 'ചില്ലക്ഷരങ്ങൾ അടങ്ങിയ ലളിത വാക്യങ്ങൾ',
          targetText: 'അവൻ പാൽ കുടിച്ചു ആൾ കാർ കണ്ടു തേൻ മധുരമാണ് വാൾ മൂർച്ചയുള്ളതാണ്',
          instructions: 'ചില്ലുകൾ കൃത്യമായി ടൈപ്പ് ചെയ്ത് വാക്യങ്ങൾ പരിശീലിക്കുക'
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

  /* =========================================================
     4. Tutor Engine with Step-by-Step Chillu Support
     ========================================================= */
  class TutorEngine {
    constructor(options = {}) {
      this.storageKey = 'ml_tutor_progress';
      this.currentStage = null;
      this.targetText = '';
      this.currentIndex = 0;
      this.chilluSubStep = 0;

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

      // Spacebar
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
      this.chilluSubStep = 0;
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

      // Check if this character is an atomic Chillu that requires sub-step sequence
      if (CHILLU_MAP[char]) {
        const chillu = CHILLU_MAP[char];
        const stepIdx = this.chilluSubStep || 0;
        const stepKey = chillu.keys[stepIdx] || chillu.keys[0];
        const info = this.charToKeyInfo.get(stepKey.char);
        const finger = (info && info.finger) || KEY_FINGER_MAP[stepKey.code] || 'RI';
        const fingerObj = FINGER_NAMES[finger] || FINGER_NAMES.RI;
        const keyLabel = stepKey.char === '\u200D' ? '] (ZWJ)' : (info?.keyName || stepKey.code);

        return {
          char,
          subChar: stepKey.char,
          code: stepKey.code,
          keyName: keyLabel,
          shift: stepKey.shift || false,
          fingerCode: finger,
          fingerMl: fingerObj.ml,
          fingerEn: fingerObj.en,
          fingerColor: fingerObj.color,
          stepTitle: `${chillu.name} (സ്റ്റെപ്പ് ${stepIdx + 1}/3: ${stepKey.char === '\u200D' ? 'ZWJ' : stepKey.char})`,
          isChillu: true
        };
      }

      const info = this.charToKeyInfo.get(char);
      if (!info) {
        return {
          char,
          code: null,
          keyName: char,
          shift: false,
          fingerCode: 'RT',
          fingerMl: 'തള്ളവിരൽ',
          fingerEn: 'Thumb',
          fingerColor: '#64748b',
          stepTitle: `അക്ഷരം: ${char}`
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
        fingerColor: fingerObj.color,
        stepTitle: `അക്ഷരം: ${char}`
      };
    }

    completeOrAdvance() {
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
    }

    processKeyInput(typedChar) {
      if (!this.isActive) {
        this.start();
      }

      const expected = this.getCurrentChar();
      if (!expected) return { finished: true };

      // Handle Chillu Characters
      if (CHILLU_MAP[expected]) {
        // 1. Direct atomic chillu match (e.g. from Virtual Keyboard direct chillu button)
        if (typedChar === expected) {
          this.correctCount++;
          this.currentIndex++;
          this.chilluSubStep = 0;
          return this.completeOrAdvance();
        }

        // 2. Step-by-step keystrokes (e.g. ര -> ് -> ZWJ)
        const chillu = CHILLU_MAP[expected];
        const currentSubKey = chillu.keys[this.chilluSubStep || 0];

        if (typedChar === currentSubKey.char) {
          this.chilluSubStep = (this.chilluSubStep || 0) + 1;

          if (this.chilluSubStep >= chillu.keys.length) {
            // All 3 sub-keystrokes completed! Chillu fully formed!
            this.correctCount++;
            this.currentIndex++;
            this.chilluSubStep = 0;
            return this.completeOrAdvance();
          } else {
            // Advance to next sub-step (e.g. ് or ZWJ)
            this.notify();
            return {
              correct: true,
              finished: false,
              nextGuide: this.getCurrentKeyGuide()
            };
          }
        } else {
          // Wrong keystroke for this sub-step
          this.errorCount++;
          this.notify();
          return {
            correct: false,
            finished: false,
            nextGuide: this.getCurrentKeyGuide()
          };
        }
      }

      // Normal single-keystroke characters
      if (typedChar === expected) {
        this.correctCount++;
        this.currentIndex++;
        this.chilluSubStep = 0;
        return this.completeOrAdvance();
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
      if (!this.isActive) return;
      if (this.chilluSubStep > 0) {
        this.chilluSubStep--;
        this.notify();
        return;
      }
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.chilluSubStep = 0;
        this.notify();
      }
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
        targetText: this.targetText,
        currentIndex: this.currentIndex,
        chilluSubStep: this.chilluSubStep,
        currentChar: this.getCurrentChar(),
        guide: this.getCurrentKeyGuide(),
        metrics: this.getMetrics()
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

    getAllProgress() {
      try {
        return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      } catch {
        return {};
      }
    }
  }

  /* =========================================================
     5. Standalone Virtual Keyboard Component
     ========================================================= */
  class StandaloneKeyboard {
    constructor(container, options = {}) {
      this.container = container;
      this.options = options;
      this.isShifted = false;
      this.isCapsLocked = false;
      this.keyElementsMap = new Map();
      this.activeTab = 'main'; // 'main', 'chillus'

      this.render();
      this.setupPhysicalKeyboardListeners();
    }

    render() {
      const rows = [
        ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'],
        ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
        ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
        ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash']
      ];

      this.container.innerHTML = `
        <div class="keyboard-wrapper">
          <div class="keyboard-toolbar">
            <div class="kb-tab-group">
              <button type="button" class="kb-tab-btn active" data-tab="main">ഇൻസ്ക്രിപ്റ്റ് പ്രധാന കീകൾ</button>
              <button type="button" class="kb-tab-btn" data-tab="chillus">ചില്ലക്ഷരങ്ങൾ (${CHILLU_CHARS.length})</button>
            </div>
            <div class="kb-tools">
              <span class="kb-layout-pill">InScript (BIS Layout)</span>
            </div>
          </div>

          <!-- Main Layout -->
          <div class="kb-tab-pane active" id="pane-main">
            <!-- Row 1: Numbers & Diacritics -->
            <div class="kb-row">
              ${rows[0].map((code) => this.renderKey(code)).join('')}
              <button type="button" class="kb-key key-func key-backspace" title="Backspace" data-code="Backspace">
                <span class="key-hint">Bksp</span>
                <span class="key-char">⌫ മായ്ക്കുക</span>
              </button>
            </div>

            <!-- Row 2: QWERTY -->
            <div class="kb-row">
              <button type="button" class="kb-key key-func key-tab" title="Tab" data-code="Tab">
                <span class="key-hint">Tab</span>
                <span class="key-char">⇥ ടാബ്</span>
              </button>
              ${rows[1].map((code) => this.renderKey(code)).join('')}
            </div>

            <!-- Row 3: Home Row (ASDF) -->
            <div class="kb-row">
              <button type="button" class="kb-key key-func key-caps" title="Caps Lock" data-code="CapsLock">
                <span class="key-hint">Caps</span>
                <span class="key-char">⇪ ക്യാപ്സ്</span>
              </button>
              ${rows[2].map((code) => this.renderKey(code)).join('')}
              <button type="button" class="kb-key key-func key-enter" title="Enter" data-code="Enter">
                <span class="key-hint">Enter</span>
                <span class="key-char">↵ എന്റർ</span>
              </button>
            </div>

            <!-- Row 4: Bottom Row (ZXCV) -->
            <div class="kb-row">
              <button type="button" class="kb-key key-func key-shift key-shift-left" title="Shift" data-code="ShiftLeft">
                <span class="key-hint">Shift</span>
                <span class="key-char">⇧ ഷിഫ്റ്റ്</span>
              </button>
              ${rows[3].map((code) => this.renderKey(code)).join('')}
              <button type="button" class="kb-key key-func key-shift key-shift-right" title="Shift" data-code="ShiftRight">
                <span class="key-hint">Shift</span>
                <span class="key-char">⇧ ഷിഫ്റ്റ്</span>
              </button>
            </div>

            <!-- Row 5: Spacebar & Trays -->
            <div class="kb-row kb-row-bottom">
              <button type="button" class="kb-key key-func key-switch-tray" data-action="switch-chillus">
                <span class="key-char">ൺ ൻ ർ ൽ ൾ ൿ</span>
              </button>
              <button type="button" class="kb-key key-space" data-code="Space" title="സ്പേസ് ബാർ (Spacebar)">
                <span class="key-char">സ്പേസ് ബാർ (Spacebar)</span>
              </button>
            </div>
          </div>

          <!-- Chillus Pane (Hidden by default; switches when Chillus tab clicked) -->
          <div class="kb-tab-pane" id="pane-chillus">
            <div class="special-tray-section">
              <div class="special-tray-header">
                <h4>നേരിട്ട് അടിക്കാവുന്ന ചില്ലക്ഷരങ്ങൾ (Atomic Chillu Keys)</h4>
                <button type="button" class="btn btn-secondary btn-sm" data-action="switch-main" style="padding: 4px 10px; font-size: 0.8rem;">
                  <span>← പ്രധാന കീബോർഡിലേക്ക് മടങ്ങുക</span>
                </button>
              </div>
              <div class="tray-grid">
                ${CHILLU_CHARS.map((ch) => `
                  <button type="button" class="kb-key special-insert-btn" data-insert="${ch.char}">
                    <span class="char-large">${ch.label}</span>
                    <small>${ch.char}</small>
                  </button>
                `).join('')}
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
      const finger = KEY_FINGER_MAP[code] || '';

      return `
        <button type="button" class="kb-key ${finger ? 'finger-' + finger : ''}" data-code="${code}" data-finger="${finger}" data-normal="${data.normal}" data-shift="${data.shift}">
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

    setShift(shifted, capsLocked = null) {
      this.isShifted = shifted;
      if (capsLocked !== null) {
        this.isCapsLocked = capsLocked;
      }
      this.updateKeyLabels();
      this.updateShiftButtons();
    }

    toggleShift() {
      this.setShift(!this.isShifted, this.isCapsLocked);
    }

    switchTab(tabName) {
      this.activeTab = tabName;
      this.container.querySelectorAll('.kb-tab-btn').forEach((b) => {
        b.classList.toggle('active', b.getAttribute('data-tab') === tabName);
      });
      this.container.querySelectorAll('.kb-tab-pane').forEach((p) => {
        p.classList.toggle('active', p.id === `pane-${tabName}`);
      });
    }

    highlightTutorKey(code, isShift = false) {
      this.clearTutorHighlights();
      if (!code) return;

      const keyEl = this.keyElementsMap.get(code);
      if (keyEl) {
        keyEl.classList.add('practice-target');
        keyEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }

      if (isShift && !this.isShifted) {
        this.container.querySelectorAll('.key-shift').forEach((el) => {
          el.classList.add('practice-target');
        });
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
    }

    smartBackspace() {
      if (this.options.getActiveTarget) {
        const target = this.options.getActiveTarget();
        if (target && target.smartBackspace) {
          target.smartBackspace();
          return;
        }
      }
    }

    attachEventListeners() {
      this.container.querySelectorAll('.kb-tab-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');
          this.switchTab(tab);
          feedback.feedback(true);
        });
      });

      this.container.querySelectorAll('.special-insert-btn').forEach((btn) => {
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

      this.container.querySelectorAll('[data-action="switch-main"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.switchTab('main');
          feedback.feedback(true);
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
        // If dropdown is focused, allow navigation or blur on keypress
        if (e.target && e.target.id === 'tutorStageSelect') {
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Tab' || e.key === 'Enter') {
            return;
          }
          e.target.blur();
        }

        if (e.ctrlKey || e.metaKey || e.altKey) {
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

        if (mapEntry) {
          e.preventDefault();
          const isShift = e.shiftKey || this.isCapsLocked;
          const charToInsert = isShift ? mapEntry.shift : mapEntry.normal;
          if (charToInsert) {
            this.insertText(charToInsert);
            feedback.feedback(false);
          }
        } else if (code === 'Backspace') {
          e.preventDefault();
          this.smartBackspace();
          feedback.feedback(true);
        } else if (code === 'Space') {
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
     6. Standalone Tutor Application Controller
     ========================================================= */
  class StandaloneTutorApp {
    constructor() {
      this.storage = {
        get: (k, def = null) => {
          try { return localStorage.getItem(k) ?? def; } catch { return def; }
        },
        set: (k, v) => {
          try { localStorage.setItem(k, v); } catch {}
        }
      };

      this.theme = this.storage.get('ml_theme', 'dark');
      this.soundEnabled = this.storage.get('ml_sound') === '1';
      this.hapticEnabled = this.storage.get('ml_haptics', '1') === '1';
      this.fingerColorsEnabled = this.storage.get('ml_finger_colors', '1') === '1';

      feedback.soundEnabled = this.soundEnabled;
      feedback.hapticEnabled = this.hapticEnabled;

      // DOM Elements
      this.stageSelect = document.getElementById('tutorStageSelect');
      this.targetStreamEl = document.getElementById('targetTextStream');
      this.keyboardContainer = document.getElementById('tutorKeyboardContainer');
      this.totalStarsEl = document.getElementById('totalStarsPill');
      this.overallProgressEl = document.getElementById('overallProgressBar');

      // Modals
      this.curriculumModal = document.getElementById('curriculumModal');
      this.completionModal = document.getElementById('completionModal');
      this.toastEl = document.getElementById('tutorToast');

      this.init();
    }

    init() {
      this.applyTheme(this.theme);

      // Initialize Tutor Engine
      this.tutorEngine = new TutorEngine({
        onStateChange: (state) => this.onTutorStateChanged(state),
        onStageComplete: (stage, metrics) => this.onStageCompleted(stage, metrics)
      });

      // Initialize Virtual Keyboard
      this.keyboard = new StandaloneKeyboard(this.keyboardContainer, {
        getActiveTarget: () => ({
          insertText: (ch) => this.handleKeyInput(ch),
          smartBackspace: () => this.handleBackspace()
        })
      });

      // Determine initial stage: URL Hash > LocalStorage > Default '1-1'
      this.populateStageSelect();
      const initialStageId = this.parseInitialStageId();
      this.loadStage(initialStageId, false);

      this.setupEventListeners();
      this.updateOverallStats();
      this.applyFingerColors(this.fingerColorsEnabled);

      // Start the lesson
      this.startLesson();
    }

    populateStageSelect() {
      if (!this.stageSelect) return;
      this.stageSelect.innerHTML = TUTOR_LEVELS.map((lvl) => {
        const options = lvl.stages.map((stg) => {
          return `<option value="${stg.id}">${stg.id}: ${stg.title}</option>`;
        }).join('');
        return `<optgroup label="${lvl.title}">${options}</optgroup>`;
      }).join('');
    }

    parseInitialStageId() {
      // 1. Check URL Hash (e.g. #stage=5-1 or #5-1)
      const hash = window.location.hash || '';
      const hashMatch = hash.match(/stage=([0-9]-[0-9])/i) || hash.match(/#([0-9]-[0-9])/i);
      if (hashMatch) {
        return hashMatch[1];
      }

      // 2. Check URL Search Param (?stage=5-1)
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const stageParam = urlParams.get('stage');
        if (stageParam && /^[0-9]-[0-9]$/.test(stageParam)) {
          return stageParam;
        }
      } catch {}

      // 3. Check LocalStorage
      const lastStage = this.storage.get('ml_tutor_last_stage');
      if (lastStage && /^[0-9]-[0-9]$/.test(lastStage)) {
        return lastStage;
      }

      return '1-1';
    }

    loadStage(stageId, updateUrl = true) {
      if (!this.tutorEngine) return;
      this.tutorEngine.loadStage(stageId);

      // Update URL Hash for easy sharing/bookmarking
      if (updateUrl) {
        try {
          history.replaceState(null, '', `#stage=${stageId}`);
        } catch {}
      }

      // Save to localStorage
      this.storage.set('ml_tutor_last_stage', stageId);

      // Sync select dropdown
      if (this.stageSelect) {
        this.stageSelect.value = stageId;
      }

      // Update Level Titles
      const stage = this.tutorEngine.currentStage;
      const currentLevel = TUTOR_LEVELS.find((lvl) => lvl.stages.some((s) => s.id === stageId));
      const lvlTitleEl = document.getElementById('currentLevelTitle');
      const lvlSubEl = document.getElementById('currentLevelSubtitle');

      if (lvlTitleEl && currentLevel) lvlTitleEl.textContent = currentLevel.title;
      if (lvlSubEl && currentLevel) lvlSubEl.textContent = `${stage.title} • ${stage.description}`;

      this.startLesson();
    }

    startLesson() {
      if (!this.tutorEngine) return;
      this.tutorEngine.start();
      this.renderStageStars();
    }

    handleKeyInput(char) {
      if (!this.tutorEngine || !this.tutorEngine.isActive) {
        this.startLesson();
      }

      const res = this.tutorEngine.processKeyInput(char);
      if (res && res.correct) {
        feedback.feedback(false);
      } else {
        feedback.feedback(true);
        const currentEl = this.targetStreamEl ? this.targetStreamEl.querySelector('.char-current') : null;
        if (currentEl) {
          currentEl.classList.add('char-error-shake');
          setTimeout(() => currentEl.classList.remove('char-error-shake'), 250);
        }
      }
    }

    handleBackspace() {
      if (!this.tutorEngine || !this.tutorEngine.isActive) return;
      this.tutorEngine.backspace();
      feedback.feedback(true);
    }

    onTutorStateChanged(state) {
      this.renderTargetStream(state.targetText, state.currentIndex);
      this.updateGuideCard(state.guide);

      if (this.keyboard && state.guide) {
        this.keyboard.highlightTutorKey(state.guide.code, state.guide.shift);
      }

      this.updateHUDMetrics(state.metrics);
    }

    renderTargetStream(targetText, currentIndex) {
      if (!this.targetStreamEl) return;
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

      this.targetStreamEl.innerHTML = html.join('');

      const currentEl = this.targetStreamEl.querySelector('.char-current');
      if (currentEl) {
        currentEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    updateGuideCard(guide) {
      if (!guide) return;
      const targetCharEl = document.getElementById('guideTargetChar');
      const targetNameEl = document.getElementById('guideTargetName');
      const fingerDot = document.getElementById('guideFingerDot');
      const fingerName = document.getElementById('guideFingerName');
      const keyName = document.getElementById('guideKeyName');
      const shiftReq = document.getElementById('guideShiftReq');
      const guideDesc = document.getElementById('guideDescription');

      if (targetCharEl) targetCharEl.textContent = guide.char === ' ' ? '␣' : guide.char;
      if (targetNameEl) targetNameEl.textContent = guide.stepTitle || `അക്ഷരം: ${guide.char === ' ' ? 'സ്പേസ്' : guide.char}`;

      if (fingerDot && guide.fingerColor) fingerDot.style.background = guide.fingerColor;
      if (fingerName) fingerName.textContent = `${guide.fingerMl} (${guide.fingerEn})`;

      if (keyName) keyName.textContent = guide.keyName ? `Key ${guide.keyName}` : 'Spacebar';

      if (shiftReq) {
        if (guide.shift) {
          shiftReq.textContent = '⇧ Shift അമർത്തിപ്പിടിക്കുക';
          shiftReq.className = 'pill-req pill-shift';
        } else if (guide.subChar === '\u200D') {
          shiftReq.textContent = 'ZWJ കീ അമർത്തുക';
          shiftReq.className = 'pill-req pill-zwj';
        } else {
          shiftReq.textContent = 'നേരിട്ട് അമർത്തുക (Normal)';
          shiftReq.className = 'pill-req pill-normal';
        }
      }

      if (guideDesc && this.tutorEngine && this.tutorEngine.currentStage) {
        guideDesc.textContent = this.tutorEngine.currentStage.instructions || '';
      }

      // Update Dual-Hand Vector SVG illuminated finger
      const svgFingers = document.querySelectorAll('.hand-finger');
      svgFingers.forEach((f) => {
        f.classList.remove('active-finger');
        f.style.fill = '';
        f.style.filter = '';
      });

      if (guide.fingerCode) {
        const fingerEl = document.getElementById(`finger-${guide.fingerCode}`);
        if (fingerEl) {
          fingerEl.classList.add('active-finger');
          fingerEl.style.fill = guide.fingerColor || '#f59e0b';
          fingerEl.style.filter = `drop-shadow(0 0 8px ${guide.fingerColor || '#f59e0b'})`;
        }
      }
    }

    updateHUDMetrics(metrics) {
      const progEl = document.getElementById('hudProgress');
      const progBar = document.getElementById('hudProgressBarFill');
      const accEl = document.getElementById('hudAccuracy');
      const wpmEl = document.getElementById('hudWpm');
      const errEl = document.getElementById('hudErrors');

      if (progEl) progEl.textContent = `${metrics.progress}%`;
      if (progBar) progBar.style.width = `${metrics.progress}%`;
      if (accEl) accEl.textContent = `${metrics.accuracy}%`;
      if (wpmEl) wpmEl.textContent = metrics.wpm;
      if (errEl) errEl.textContent = metrics.errors;
    }

    renderStageStars() {
      const starsEl = document.getElementById('currentStageStars');
      if (!starsEl || !this.tutorEngine || !this.tutorEngine.currentStage) return;

      const saved = this.tutorEngine.getStageSavedData(this.tutorEngine.currentStage.id);
      if (saved && saved.stars > 0) {
        starsEl.textContent = '⭐'.repeat(saved.stars);
        starsEl.title = `മികച്ച സ്പീഡ്: ${saved.wpm} WPM | കൃത്യത: ${saved.accuracy}%`;
      } else {
        starsEl.textContent = '☆☆☆';
        starsEl.title = 'ഈ പാഠം ഇതുവരെ പൂർത്തിയാക്കിയിട്ടില്ല';
      }
    }

    onStageCompleted(stage, metrics) {
      feedback.feedback(true);
      this.updateOverallStats();

      // Show Completion Celebration Modal
      if (this.completionModal) {
        const titleEl = document.getElementById('celebrationTitle');
        const starsEl = document.getElementById('celebrationStars');
        const summaryEl = document.getElementById('celebrationSummary');
        const statWpm = document.getElementById('statFinalWpm');
        const statAcc = document.getElementById('statFinalAcc');
        const statErr = document.getElementById('statFinalErrors');

        if (titleEl) titleEl.textContent = `പാഠം ${stage.id} വിജയകരമായി പൂർത്തിയായി!`;
        if (starsEl) starsEl.textContent = '⭐'.repeat(metrics.stars);
        if (statWpm) statWpm.textContent = `${metrics.wpm} WPM`;
        if (statAcc) statAcc.textContent = `${metrics.accuracy}%`;
        if (statErr) statErr.textContent = metrics.errors;

        if (summaryEl) {
          summaryEl.textContent = metrics.stars === 3
            ? 'അത്യുജ്ജ്വലം! 3 സ്റ്റാറുകളോടെ നിങ്ങൾ ഈ പാഠത്തിൽ പൂർണ്ണ വൈദഗ്ധ്യം നേടി.'
            : metrics.stars === 2
            ? 'നല്ല പ്രകടനം! കുറച്ചുകൂടി വേഗത കൈവരിച്ചാൽ 3 സ്റ്റാർ നേടാം.'
            : 'പാഠം പൂർത്തിയായി. കൂടുതൽ വേഗതയ്ക്കും കൃത്യതയ്ക്കുമായി വീണ്ടും പരിശീലിക്കുക.';
        }

        this.completionModal.classList.remove('hidden');
      }
    }

    updateOverallStats() {
      const allProgress = this.tutorEngine.getAllProgress();
      let totalStars = 0;
      let completedStages = 0;
      let totalStages = 0;

      TUTOR_LEVELS.forEach((lvl) => {
        lvl.stages.forEach((stg) => {
          totalStages++;
          if (allProgress[stg.id]) {
            totalStars += allProgress[stg.id].stars || 0;
            if (allProgress[stg.id].stars > 0) completedStages++;
          }
        });
      });

      if (this.totalStarsEl) {
        this.totalStarsEl.textContent = `⭐ ${totalStars} / ${totalStages * 3}`;
      }

      const percent = totalStages > 0 ? Math.round((completedStages / totalStages) * 100) : 0;
      if (this.overallProgressEl) {
        this.overallProgressEl.style.width = `${percent}%`;
        this.overallProgressEl.title = `മൊത്തം പുരോഗതി: ${percent}% (${completedStages}/${totalStages} പാഠങ്ങൾ)`;
      }
    }

    loadNextStage() {
      if (!this.tutorEngine || !this.tutorEngine.currentStage) return;
      const currentId = this.tutorEngine.currentStage.id;

      const allStageIds = [];
      TUTOR_LEVELS.forEach((lvl) => lvl.stages.forEach((s) => allStageIds.push(s.id)));

      const currentIdx = allStageIds.indexOf(currentId);
      if (currentIdx >= 0 && currentIdx < allStageIds.length - 1) {
        const nextId = allStageIds[currentIdx + 1];
        this.loadStage(nextId);
        this.closeCompletionModal();
        this.showToast(`അടുത്ത പാഠം ലോഡ് ചെയ്തു: ${nextId}`);
      } else {
        this.showToast('അഭിനന്ദനങ്ങൾ! എല്ലാ പാഠങ്ങളും പൂർത്തിയായി. നിങ്ങൾ ഇൻസ്ക്രിപ്റ്റ് മാസ്റ്ററായി!');
        this.closeCompletionModal();
      }
    }

    loadPrevStage() {
      if (!this.tutorEngine || !this.tutorEngine.currentStage) return;
      const currentId = this.tutorEngine.currentStage.id;

      const allStageIds = [];
      TUTOR_LEVELS.forEach((lvl) => lvl.stages.forEach((s) => allStageIds.push(s.id)));

      const currentIdx = allStageIds.indexOf(currentId);
      if (currentIdx > 0) {
        const prevId = allStageIds[currentIdx - 1];
        this.loadStage(prevId);
        this.showToast(`മുൻപത്തെ പാഠം ലോഡ് ചെയ്തു: ${prevId}`);
      }
    }

    openCurriculumModal() {
      if (!this.curriculumModal) return;
      this.renderCurriculumList();
      this.curriculumModal.classList.remove('hidden');
    }

    closeCurriculumModal() {
      if (this.curriculumModal) this.curriculumModal.classList.add('hidden');
    }

    closeCompletionModal() {
      if (this.completionModal) this.completionModal.classList.add('hidden');
    }

    renderCurriculumList() {
      const container = document.getElementById('curriculumListContainer');
      if (!container) return;

      const allProgress = this.tutorEngine.getAllProgress();
      const currentId = this.tutorEngine.currentStage ? this.tutorEngine.currentStage.id : '1-1';

      const html = TUTOR_LEVELS.map((lvl) => {
        const stagesHtml = lvl.stages.map((stg) => {
          const saved = allProgress[stg.id];
          const isCurrent = stg.id === currentId;
          const stars = saved && saved.stars > 0 ? '⭐'.repeat(saved.stars) : '☆☆☆';
          const scoreInfo = saved ? `${saved.wpm} WPM • ${saved.accuracy}%` : 'പൂർത്തിയാക്കിയിട്ടില്ല';

          return `
            <div class="curriculum-stage-item ${isCurrent ? 'current-active' : ''}" data-stage-id="${stg.id}">
              <div class="stage-info">
                <span class="stage-code">${stg.id}</span>
                <div class="stage-text">
                  <strong>${stg.title}</strong>
                  <small>${stg.description}</small>
                </div>
              </div>
              <div class="stage-stats-badge">
                <span class="stars-icon">${stars}</span>
                <span class="score-desc">${scoreInfo}</span>
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="curriculum-level-block">
            <h4 class="curriculum-level-title">${lvl.title}</h4>
            <div class="curriculum-stage-grid">${stagesHtml}</div>
          </div>
        `;
      }).join('');

      container.innerHTML = html;

      // Click to load stage
      container.querySelectorAll('.curriculum-stage-item').forEach((item) => {
        item.addEventListener('click', () => {
          const stageId = item.getAttribute('data-stage-id');
          if (stageId) {
            this.loadStage(stageId);
            this.closeCurriculumModal();
            this.showToast(`പാഠം ${stageId} ആരംഭിച്ചു`);
          }
        });
      });
    }

    copyScorecard() {
      const metrics = this.tutorEngine.getMetrics();
      const stage = this.tutorEngine.currentStage;
      const stars = '⭐'.repeat(metrics.stars);

      const text = `🏆 മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ് ട്യൂട്ടർ ഫലം 🏆
-----------------------------------------
📚 പാഠം: ${stage.id} - ${stage.title}
⭐ സ്റ്റാർ റേറ്റിംഗ്: ${stars}
⚡ വേഗത: ${metrics.wpm} WPM
🎯 കൃത്യത: ${metrics.accuracy}%
❌ തെറ്റുകൾ: ${metrics.errors}
-----------------------------------------
മലയാളം ഇൻസ്ക്രിപ്റ്റ് മാസ്റ്റർ ടൈപ്പിംഗ് ട്യൂട്ടർ വഴി പരിശീലിച്ചത്`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('സ്കോർ കാർഡ് കോപ്പി ചെയ്തു! (Copied)');
        });
      } else {
        alert(text);
      }
    }

    applyFingerColors(enabled) {
      this.fingerColorsEnabled = enabled;
      this.storage.set('ml_finger_colors', enabled ? '1' : '0');

      if (this.keyboardContainer) {
        this.keyboardContainer.classList.toggle('finger-colors-enabled', enabled);
      }

      const btn = document.getElementById('toggleFingerColorsBtn');
      if (btn) {
        btn.classList.toggle('active', enabled);
        btn.innerHTML = enabled
          ? '<span>🖐️ വിരൽ നിറങ്ങൾ: ഓൺ</span>'
          : '<span>🖐️ വിരൽ നിറങ്ങൾ: ഓഫ്</span>';
      }
    }

    applyTheme(theme) {
      this.theme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      this.storage.set('ml_theme', theme);

      const btn = document.getElementById('themeToggleBtn');
      if (btn) {
        btn.innerHTML = theme === 'dark'
          ? '<span class="icon">☀️</span> <span>ലൈറ്റ്</span>'
          : '<span class="icon">🌙</span> <span>ഡാർക്ക്</span>';
      }
    }

    showToast(message) {
      if (!this.toastEl) return;
      this.toastEl.textContent = message;
      this.toastEl.classList.add('visible');
      clearTimeout(this.toastTimeout);
      this.toastTimeout = setTimeout(() => {
        this.toastEl.classList.remove('visible');
      }, 2600);
    }

    setupEventListeners() {
      // Stage Select Dropdown
      if (this.stageSelect) {
        this.stageSelect.addEventListener('change', (e) => {
          this.loadStage(e.target.value);
        });
      }

      // Prev / Next Stage Buttons
      const prevBtn = document.getElementById('prevStageBtn');
      const nextBtn = document.getElementById('nextStageBtn');
      if (prevBtn) prevBtn.addEventListener('click', () => this.loadPrevStage());
      if (nextBtn) nextBtn.addEventListener('click', () => this.loadNextStage());

      // Restart / Reset Button
      const restartBtn = document.getElementById('restartLessonBtn');
      if (restartBtn) restartBtn.addEventListener('click', () => this.startLesson());

      // Curriculum Drawer Modal
      const openCurriculumBtn = document.getElementById('openCurriculumBtn');
      const closeCurriculumBtn = document.getElementById('closeCurriculumBtn');
      if (openCurriculumBtn) openCurriculumBtn.addEventListener('click', () => this.openCurriculumModal());
      if (closeCurriculumBtn) closeCurriculumBtn.addEventListener('click', () => this.closeCurriculumModal());

      if (this.curriculumModal) {
        this.curriculumModal.addEventListener('click', (e) => {
          if (e.target === this.curriculumModal) this.closeCurriculumModal();
        });
      }

      // Completion Modal Buttons
      const nextLessonCelebrationBtn = document.getElementById('nextLessonCelebrationBtn');
      const restartCelebrationBtn = document.getElementById('restartCelebrationBtn');
      const copyScorecardBtn = document.getElementById('copyScorecardBtn');
      const closeCompletionBtn = document.getElementById('closeCompletionBtn');

      if (nextLessonCelebrationBtn) nextLessonCelebrationBtn.addEventListener('click', () => this.loadNextStage());
      if (restartCelebrationBtn) {
        restartCelebrationBtn.addEventListener('click', () => {
          this.closeCompletionModal();
          this.startLesson();
        });
      }
      if (copyScorecardBtn) copyScorecardBtn.addEventListener('click', () => this.copyScorecard());
      if (closeCompletionBtn) closeCompletionBtn.addEventListener('click', () => this.closeCompletionModal());

      // Toggles
      const toggleFingerColorsBtn = document.getElementById('toggleFingerColorsBtn');
      if (toggleFingerColorsBtn) {
        toggleFingerColorsBtn.addEventListener('click', () => {
          this.applyFingerColors(!this.fingerColorsEnabled);
        });
      }

      const soundToggle = document.getElementById('soundToggleBtn');
      if (soundToggle) {
        soundToggle.classList.toggle('active', this.soundEnabled);
        soundToggle.addEventListener('click', () => {
          this.soundEnabled = !this.soundEnabled;
          feedback.soundEnabled = this.soundEnabled;
          this.storage.set('ml_sound', this.soundEnabled ? '1' : '0');
          soundToggle.classList.toggle('active', this.soundEnabled);
          soundToggle.innerHTML = this.soundEnabled ? '<span>🔊 ശബ്ദം: ഓൺ</span>' : '<span>🔇 ശബ്ദം: ഓഫ്</span>';
          if (this.soundEnabled) feedback.feedback(true);
        });
      }

      const hapticToggle = document.getElementById('hapticToggleBtn');
      if (hapticToggle) {
        hapticToggle.classList.toggle('active', this.hapticEnabled);
        hapticToggle.addEventListener('click', () => {
          this.hapticEnabled = !this.hapticEnabled;
          feedback.hapticEnabled = this.hapticEnabled;
          this.storage.set('ml_haptics', this.hapticEnabled ? '1' : '0');
          hapticToggle.classList.toggle('active', this.hapticEnabled);
          hapticToggle.innerHTML = this.hapticEnabled ? '<span>📳 വൈബ്രേഷൻ: ഓൺ</span>' : '<span>📳 വൈബ്രേഷൻ: ഓഫ്</span>';
          if (this.hapticEnabled) feedback.triggerHaptic(25);
        });
      }

      const themeBtn = document.getElementById('themeToggleBtn');
      if (themeBtn) {
        themeBtn.addEventListener('click', () => {
          const next = this.theme === 'dark' ? 'light' : 'dark';
          this.applyTheme(next);
        });
      }

      // Listen for browser forward/back buttons (hash changes)
      window.addEventListener('hashchange', () => {
        const hashStage = this.parseInitialStageId();
        if (hashStage && this.tutorEngine && this.tutorEngine.currentStage.id !== hashStage) {
          this.loadStage(hashStage, false);
        }
      });
    }
  }

  // Auto-initialize Standalone App
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.tutorApp = new StandaloneTutorApp();
    });
  } else {
    window.tutorApp = new StandaloneTutorApp();
  }
})();
