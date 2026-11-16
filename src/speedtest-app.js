/**
 * കല്ലുപെൻസിൽ സ്പീഡ് ടെസ്റ്റ് (Kallu Pencil Speed Test)
 * Standalone Malayalam Typing Speed Test Application Engine
 * Zero CORS / file:/// protocol compatible.
 */

(function () {
  'use strict';

  // 1. Authentic Malayalam Passages & Word Lists
  const MALAYALAM_PASSAGES = [
    {
      id: 1,
      title: 'കേരളവും പ്രകൃതിയും',
      category: 'സാഹിത്യം & സംസ്കാരം',
      text: 'കേരളം പ്രകൃതിഭംഗിയാൽ അനുഗൃഹീതമായ ഒരു നാടാണ്. പച്ചപ്പുനിറഞ്ഞ മലനിരകളും കായലുകളും തെങ്ങിൻതോപ്പുകളും നിറഞ്ഞ മനോഹരമായ ഭൂപ്രകൃതി കേരളത്തിന്റെ സവിശേഷതയാണ്. മലയാള ഭാഷയുടെ മാധുര്യവും സാംസ്കാരിക പാരമ്പര്യവും ലോകമെമ്പാടും പ്രശസ്തമാണ്. തുഞ്ചത്തെഴുത്തച്ഛനും കുഞ്ചൻ നമ്പ്യാരും ചെറുശ്ശേരിയും മലയാള സാഹിത്യത്തിന് നൽകിയ സംഭാവനകൾ നിസ്തുലമാണ്. അറിവും സംസ്കാരവും പരസ്പര സ്നേഹവും സമന്വയിക്കുന്ന പുണ്യഭൂമിയാണ് കേരളം. നമ്മുടെ പാരമ്പര്യവും പ്രകൃതിസൗന്ദര്യവും വരുംതലമുറയ്ക്കായി കാത്തുസൂക്ഷിക്കേണ്ടത് ഓരോ മലയാളിയുടെയും കടമയാണ്.'
    },
    {
      id: 2,
      title: 'സാങ്കേതികവിദ്യയും ആധുനികതയും',
      category: 'ശാസ്ത്രം & സാങ്കേതികവിദ്യ',
      text: 'ആധുനിക ലോകത്ത് സാങ്കേതികവിദ്യയുടെ വളർച്ച അതിവേഗത്തിലാണ് മുന്നേറുന്നത്. വിവരസാങ്കേതികവിദ്യ മനുഷ്യന്റെ നിത്യജീവിതത്തിൽ വലിയ മാറ്റങ്ങൾ സൃഷ്ടിച്ചിരിക്കുന്നു. കമ്പ്യൂട്ടറുകളും സ്മാർട്ട്ഫോണുകളും ഇന്റർനെറ്റും നമ്മുടെ ദൈനംദിന ആശയവിനിമയത്തെയും തൊഴിലിനെയും എളുപ്പമാക്കി. ആർട്ടിഫിഷ്യൽ ഇന്റലിജൻസും മെഷീൻ ലേണിംഗും പുതിയ തൊഴിലവസരങ്ങൾ തുറക്കുകയും ലോകത്തെ മാറ്റിമറിക്കുകയും ചെയ്യുന്നു. വിജ്ഞാനവും ശാസ്ത്രബോധവും വളർത്തിയെടുക്കുക എന്നത് പുതിയ കാലഘട്ടത്തിന്റെ പ്രധാന ആവശ്യമാണ്. സാങ്കേതികവിദ്യയെ നന്മയ്ക്കായി ഉപയോഗിക്കാൻ നാം ശീലിക്കണം.'
    },
    {
      id: 3,
      title: 'വിജയത്തിലേക്കുള്ള വഴി',
      category: 'ജീവിതവിജയം & പ്രചോദനം',
      text: 'ജീവിതത്തിൽ വിജയം നേടാൻ കഠിനാധ്വാനവും ആത്മവിശ്വാസവും അത്യന്താപേക്ഷിതമാണ്. പ്രതിസന്ധികളെ അവസരങ്ങളാക്കി മാറ്റാൻ പഠിക്കുന്നവരാണ് ചരിത്രം സൃഷ്ടിക്കുന്നത്. വിദ്യയിലൂടെ മാത്രമേ ഒരു സമൂഹത്തിന് സാംസ്കാരികവും സാമ്പത്തികവുമായ പുരോഗതി കൈവരിക്കാൻ സാധിക്കൂ. പുസ്തകങ്ങൾ അറിവിന്റെ അക്ഷയഖനികളാണ്. വായിച്ചു വളരുക എന്ന കുഞ്ഞുണ്ണിമാഷിന്റെ ലളിതമായ വരികൾ എന്നും നമുക്ക് പ്രചോദനമാണ്. പരാജയങ്ങളിൽ തളരാതെ ലക്ഷ്യത്തിലേക്ക് നിരന്തരം മുന്നേറുന്നവർക്ക് വിജയം സുനിശ്ചിതമാണ്.'
    },
    {
      id: 4,
      title: 'കലകളും സാംസ്കാരിക പൈതൃകവും',
      category: 'കല & പാരമ്പര്യം',
      text: 'കേരളത്തിന്റെ കലകളും ഉത്സവങ്ങളും ഐക്യത്തിന്റെയും സാഹോദര്യത്തിന്റെയും മഹനീയ പ്രതീകങ്ങളാണ്. കഥകളിയും മോഹിനിയാട്ടവും തുള്ളലും കൂടിയാട്ടവും ലോകപ്രസിദ്ധമാണ്. ഓണവും വിഷുവും കേരളീയർ ജാതിമതഭേദമെന്യേ ഒന്നായി ആഘോഷിക്കുന്നു. പൂക്കളവും ഓണസദ്യയും ഓണപ്പാട്ടുകളും മലയാളിയുടെ ഗൃഹാതുരതയുണർത്തുന്ന ഓർമ്മകളാണ്. പരസ്പര സ്നേഹവും സഹിഷ്ണുതയുമാണ് നമ്മുടെ നാടിന്റെ ഏറ്റവും വലിയ കരുത്ത്.'
    },
    {
      id: 5,
      title: 'പരിസ്ഥിതി സംരക്ഷണത്തിന്റെ പ്രാധാന്യം',
      category: 'പരിസ്ഥിതി & പ്രകൃതി',
      text: 'പരിസ്ഥിതി സംരക്ഷണവും ശുചിത്വവും ആരോഗ്യകരമായ ജീവിതത്തിന് ഒഴിച്ചുകൂടാനാവാത്തതാണ്. വനങ്ങളും പുഴകളും തണ്ണീർത്തടങ്ങളും സംരക്ഷിക്കേണ്ടത് വരുംതലമുറയ്ക്കായുള്ള നമ്മുടെ കടമയാണ്. ശുദ്ധവായുവും ശുദ്ധജലവും ഭൂമിയിലെ ഓരോ ജീവന്റെയും അവകാശമാണ്. പ്രകൃതിയെ ചൂഷണം ചെയ്യാതെ പരിപാലിക്കുന്നതിലൂടെ മാത്രമേ ഭൂമിയുടെ നിലനിൽപ്പ് ഉറപ്പാക്കാൻ കഴിയൂ. ഓരോ മരവും ഓരോ തണലാണ് എന്ന ചിന്ത ഓരോരുത്തരിലും വളരണം.'
    },
    {
      id: 6,
      title: 'നവോത്ഥാന മൂല്യങ്ങളും സമൂഹവും',
      category: 'ചരിത്രം & സമൂഹം',
      text: 'മഹത്തായ നവോത്ഥാന പ്രസ്ഥാനങ്ങളുടെ ഫലമായാണ് ഇന്നത്തെ പുരോഗമന കേരളം രൂപപ്പെട്ടത്. ശ്രീനാരായണഗുരുവും അയ്യങ്കാളിയും ചട്ടമ്പിസ്വാമികളും സാമൂഹിക അസമത്വങ്ങൾക്കെതിരെ ധീരമായി പോരാടി. ഒരു ജാതി ഒരു മതം ഒരു ദൈവം മനുഷ്യന് എന്ന ഗുരുദേവന്റെ സന്ദേശം മാനവരാശിക്ക് എക്കാലവും വെളിച്ചം പകരുന്നു. വിദ്യ കൊണ്ട് പ്രബുദ്ധരാവുക എന്ന ആഹ്വാനം ഇന്നും എന്നും വളരെ പ്രസക്തമാണ്.'
    },
    {
      id: 7,
      title: 'വായനയുടെ വസന്തം',
      category: 'സാഹിത്യം & ചിന്ത',
      text: 'വായന മനുഷ്യനെ പൂർണ്ണനാക്കുന്നു. പുസ്തകങ്ങളിലൂടെ നാം സഞ്ചരിക്കുന്നത് പുതിയ ലോകങ്ങളിലേക്കും അപരിചിതമായ സംസ്കാരങ്ങളിലേക്കുമാണ്. ചിന്തകളെ വികസിപ്പിക്കാനും ഭാഷാശുദ്ധി കൈവരിക്കാനും നിത്യേനയുള്ള വായന സഹായിക്കുന്നു. എഴുത്തുകാരുടെ അനുഭവങ്ങളും ഭാവനകളും അറിവായി നമ്മുടെ മനസ്സിനെ സമ്പന്നമാക്കുന്നു. വായിക്കുന്ന സമൂഹം എപ്പോഴും ചിന്തിക്കുന്ന സമൂഹമായി നിലകൊള്ളും.'
    },
    {
      id: 8,
      title: 'ആരോഗ്യവും വ്യായാമവും',
      category: 'ആരോഗ്യം & ജീവിതശൈലി',
      text: 'ആരോഗ്യമാണ് ഏറ്റവും വലിയ സമ്പത്ത്. കൃത്യമായ വ്യായാമവും സമീകൃതാഹാരവും മനസ്സിന്റെ ശാന്തതയും ദീർഘായുസ്സിന് അത്യന്താപേക്ഷിതമാണ്. നിത്യേനയുള്ള നടത്തവും യോഗയും ശരീരത്തിന്റെ ഊർജ്ജസ്വലത വർദ്ധിപ്പിക്കുന്നു. ദുശ്ശീലങ്ങൾ ഒഴിവാക്കി ആരോഗ്യമുള്ള ഒരു ജീവിതശൈലി നാം തെരഞ്ഞെടുക്കണം. മനസ്സ് പ്രസന്നമായിരിക്കുമ്പോൾ ശരീരം കൂടുതൽ കാര്യക്ഷമമായി പ്രവർത്തിക്കും.'
    }
  ];

  // Frequent Malayalam words for Jumble Mode
  const MALAYALAM_JUMBLE_WORDS = [
    'കേരളം', 'മലയാളം', 'ഭാരതം', 'ജനത', 'പുഴകൾ', 'കാടുകൾ', 'മഴ', 'വെയിൽ', 'കാറ്റ്', 'ഭൂമി',
    'ആകാശം', 'നക്ഷത്രം', 'സൂര്യൻ', 'ചന്ദ്രൻ', 'സത്യം', 'ധർമ്മം', 'സ്നേഹം', 'സമാധാനം', 'വിദ്യ', 'അറിവ്',
    'പുസ്തകം', 'എഴുത്ത്', 'വായന', 'കവിത', 'കഥ', 'കല', 'സംഗീതം', 'നൃത്തം', 'നാടകം', 'സിനിമ',
    'കാലം', 'നേരം', 'പകൽ', 'രാത്രി', 'പ്രഭാതം', 'സന്ധ്യ', 'വെളിച്ചം', 'നിഴൽ', 'പൂവ്', 'കായ്',
    'മരം', 'ചെടി', 'വള്ളി', 'ഇല', 'വേര്', 'മണ്ണ്', 'പാറ', 'കടൽ', 'തീരം', 'തോണി'
  ];

  // Standard InScript Key Mapping
  const INSCRIPT_MAP = {
    Backquote: { normal: '\u0D4A', shift: '\u0D12' },
    Digit1: { normal: '1', shift: '!' },
    Digit2: { normal: '2', shift: '@' },
    Digit3: { normal: '3', shift: '#' },
    Digit4: { normal: '4', shift: '$' },
    Digit5: { normal: '5', shift: '%' },
    Digit6: { normal: '6', shift: '^' },
    Digit7: { normal: '7', shift: '&' },
    Digit8: { normal: '8', shift: '*' },
    Digit9: { normal: '9', shift: '(' },
    Digit0: { normal: '0', shift: ')' },
    Minus: { normal: '-', shift: '\u0D03' },
    Equal: { normal: '\u0D43', shift: '\u0D0B' },

    KeyQ: { normal: '\u0D57', altNormal: '\u0D4C', shift: '\u0D14' },
    KeyW: { normal: '\u0D48', shift: '\u0D10' },
    KeyE: { normal: '\u0D3E', shift: '\u0D06' },
    KeyR: { normal: '\u0D40', shift: '\u0D08' },
    KeyT: { normal: '\u0D42', shift: '\u0D0A' },
    KeyY: { normal: '\u0D2C', shift: '\u0D2D' },
    KeyU: { normal: '\u0D39', shift: '\u0D19' },
    KeyI: { normal: '\u0D17', shift: '\u0D18' },
    KeyO: { normal: '\u0D26', shift: '\u0D27' },
    KeyP: { normal: '\u0D1C', shift: '\u0D1D' },
    BracketLeft: { normal: '\u0D21', shift: '\u0D22' },
    BracketRight: { normal: '\u200D', shift: '\u0D1E' },
    Backslash: { normal: '\\', shift: '|' },

    KeyA: { normal: '\u0D4B', shift: '\u0D13' },
    KeyS: { normal: '\u0D47', shift: '\u0D0F' },
    KeyD: { normal: '\u0D4D', shift: '\u0D05' },
    KeyF: { normal: '\u0D3F', shift: '\u0D07' },
    KeyG: { normal: '\u0D41', shift: '\u0D09' },
    KeyH: { normal: '\u0D2A', shift: '\u0D2B' },
    KeyJ: { normal: '\u0D30', shift: '\u0D31' },
    KeyK: { normal: '\u0D15', shift: '\u0D16' },
    KeyL: { normal: '\u0D24', shift: '\u0D25' },
    Semicolon: { normal: '\u0D1A', shift: '\u0D1B' },
    Quote: { normal: '\u0D1F', shift: '\u0D20' },

    KeyZ: { normal: '\u0D46', shift: '\u0D0E' },
    KeyX: { normal: '\u0D02', shift: '\u200C' },
    KeyC: { normal: '\u0D2E', shift: '\u0D23' },
    KeyV: { normal: '\u0D28', shift: '\u0D29' },
    KeyB: { normal: '\u0D35', shift: '\u0D34' },
    KeyN: { normal: '\u0D32', shift: '\u0D33' },
    KeyM: { normal: '\u0D38', shift: '\u0D36' },
    Comma: { normal: ',', shift: '\u0D37' },
    Period: { normal: '.', shift: '\u0D3D' },
    Slash: { normal: '\u0D2F', shift: '?' }
  };

  // 2. Malayalam Unicode Chillu & Ligature Normalization
  const CHILLU_MAP = {
    '\u0D23\u0D4D\u200D': '\u0D7A', // ൺ
    '\u0D28\u0D4D\u200D': '\u0D7B', // ൻ
    '\u0D30\u0D4D\u200D': '\u0D7C', // ർ
    '\u0D32\u0D4D\u200D': '\u0D7D', // ൽ
    '\u0D33\u0D4D\u200D': '\u0D7E', // ൾ
    '\u0D15\u0D4D\u200D': '\u0D7F'  // ൿ
  };

  const ATOMIC_TO_DECOMPOSED = {
    '\u0D7A': '\u0D23\u0D4D\u200D',
    '\u0D7B': '\u0D28\u0D4D\u200D',
    '\u0D7C': '\u0D30\u0D4D\u200D',
    '\u0D7D': '\u0D32\u0D4D\u200D',
    '\u0D7E': '\u0D33\u0D4D\u200D',
    '\u0D7F': '\u0D15\u0D4D\u200D'
  };

  function toAtomicChillus(str) {
    if (!str) return '';
    let s = str.normalize('NFC');
    for (const [k, v] of Object.entries(CHILLU_MAP)) {
      s = s.split(k).join(v);
    }
    return s;
  }

  function toDecomposedChillus(str) {
    if (!str) return '';
    let s = str.normalize('NFC');
    for (const [k, v] of Object.entries(ATOMIC_TO_DECOMPOSED)) {
      s = s.split(k).join(v);
    }
    return s;
  }

  function isMalayalamWordMatch(a, b, lenientPunctuation = true) {
    if (!a || !b) return false;
    const aTrim = a.trim();
    const bTrim = b.trim();
    if (aTrim === bTrim) return true;
    const aNorm = aTrim.normalize('NFC').replace(/\u0D4C/g, '\u0D57');
    const bNorm = bTrim.normalize('NFC').replace(/\u0D4C/g, '\u0D57');
    if (aNorm === bNorm) return true;
    if (toAtomicChillus(aNorm) === toAtomicChillus(bNorm)) return true;
    if (toDecomposedChillus(aNorm) === toDecomposedChillus(bNorm)) return true;

    // Lenient trailing punctuation matching (e.g. typing sans full-stop '.' or comma ',')
    if (lenientPunctuation) {
      const punctRegex = /[.,:;!?\u0D3D"'\(\)]+$/g;
      const aNoPunct = aNorm.replace(punctRegex, '');
      const bNoPunct = bNorm.replace(punctRegex, '');
      if (aNoPunct && bNoPunct) {
        if (aNoPunct === bNoPunct) return true;
        if (toAtomicChillus(aNoPunct) === toAtomicChillus(bNoPunct)) return true;
        if (toDecomposedChillus(aNoPunct) === toDecomposedChillus(bNoPunct)) return true;
      }
    }

    return false;
  }

  function isMalayalamPrefixMatch(input, target) {
    if (!input) return true;
    if (!target) return false;

    const inNorm = input.normalize('NFC').replace(/\u0D4C/g, '\u0D57');
    const tgtNorm = target.normalize('NFC').replace(/\u0D4C/g, '\u0D57');

    // 1. Direct match
    if (tgtNorm.startsWith(inNorm)) return true;

    // 2. Atomic chillu match
    const inAtom = toAtomicChillus(inNorm);
    const tgtAtom = toAtomicChillus(tgtNorm);
    if (tgtAtom.startsWith(inAtom)) return true;

    // 3. Decomposed chillu match (vital while typing decomposed chillu: e.g. ല, ല്)
    const inDecomp = toDecomposedChillus(inNorm);
    const tgtDecomp = toDecomposedChillus(tgtNorm);
    if (tgtDecomp.startsWith(inDecomp)) return true;
    if (tgtDecomp.startsWith(inNorm)) return true;
    if (tgtAtom.startsWith(inNorm)) return true;

    return false;
  }

  function getAtomicChilluForConsonant(consonant) {
    switch (consonant) {
      case '\u0D23': return '\u0D7A'; // ണ -> ൺ
      case '\u0D28': return '\u0D7B'; // ന -> ൻ
      case '\u0D30': return '\u0D7C'; // ര -> ർ
      case '\u0D32': return '\u0D7D'; // ല -> ൽ
      case '\u0D33': return '\u0D7E'; // ള -> ൾ
      case '\u0D15': return '\u0D7F'; // ക -> ൿ
      default: return null;
    }
  }

  // 3. Audio Feedback Synthesizer (Web Audio API)
  class AudioFeedback {
    constructor() {
      this.ctx = null;
      this.soundEnabled = true;
      this.hapticEnabled = true;
    }

    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioClass = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioClass();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playKeyClick(isSpecial = false) {
      if (!this.soundEnabled) return;
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const freq = isSpecial ? 160 : 310;
        const now = this.ctx.currentTime;

        osc.type = isSpecial ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.4, now + 0.035);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.035);
      } catch {}
    }

    triggerHaptic(ms = 10) {
      if (!this.hapticEnabled) return;
      if ('vibrate' in navigator) {
        try { navigator.vibrate(ms); } catch {}
      }
    }
  }

  // 3. Speed Test Session Logic
  class SpeedTestSession {
    constructor(durationMinutes = 1, wordsList = []) {
      this.durationSeconds = durationMinutes * 60;
      this.remainingSeconds = this.durationSeconds;
      this.words = wordsList.length > 0 ? [...wordsList] : [];
      this.currentWordIndex = 0;
      this.currentInput = '';
      this.results = []; // { target, typed, isCorrect }

      this.isActive = false;
      this.isCompleted = false;
      this.isPaused = false;

      this.timerInterval = null;
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
      this.isPaused = false;
      this.remainingSeconds = this.durationSeconds;
      this.onTick = onTick;
      this.onFinish = onFinish;

      this.timerInterval = setInterval(() => {
        if (this.isPaused) return;

        this.remainingSeconds--;
        if (this.onTick) this.onTick(this.remainingSeconds, this.getMetrics());

        if (this.remainingSeconds <= 0) {
          this.finish();
        }
      }, 1000);
    }

    togglePause() {
      if (!this.isActive || this.isCompleted) return false;
      this.isPaused = !this.isPaused;
      return this.isPaused;
    }

    submitWord(typedWord) {
      if (this.currentWordIndex >= this.words.length) return;

      const targetWord = this.words[this.currentWordIndex];
      const isCorrect = isMalayalamWordMatch(typedWord, targetWord);

      this.results.push({
        target: targetWord,
        typed: typedWord,
        isCorrect
      });

      if (isCorrect) {
        this.correctWordsCount++;
        this.correctChars += targetWord.length;
      } else {
        this.incorrectWordsCount++;
        this.incorrectChars += typedWord.length;
      }

      this.totalTypedChars += typedWord.length + 1; // +1 for space
      this.currentWordIndex++;

      // If approaching end of words, append more words
      if (this.currentWordIndex >= this.words.length - 5) {
        this.words = this.words.concat(this.words.slice(0, 30));
      }

      return isCorrect;
    }

    finish() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.isActive = false;
      this.isCompleted = true;

      // Submit any trailing input
      if (this.currentInput.trim()) {
        this.submitWord(this.currentInput.trim());
        this.currentInput = '';
      }

      const metrics = this.getMetrics();
      if (this.onFinish) this.onFinish(metrics);
      return metrics;
    }

    stop() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.isActive = false;
      this.isPaused = false;
    }

    getMetrics() {
      const elapsedSeconds = Math.max(1, this.durationSeconds - this.remainingSeconds);
      const elapsedMinutes = Math.max(elapsedSeconds / 60, 0.016);

      // Standard Indic / WPM formula: (Gross Chars / 5) / Minutes
      const grossWpm = Math.round((this.totalTypedChars / 5) / elapsedMinutes);
      const netWpm = Math.max(0, Math.round((this.correctChars / 5) / elapsedMinutes));
      const cpm = Math.round(this.totalTypedChars / elapsedMinutes);

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
      } else if (netWpm >= 18) {
        rank = 'വളരുന്ന ടൈപ്പിസ്റ്റ് (Intermediate)';
        badge = '🚀';
      }

      return {
        netWpm,
        grossWpm,
        cpm,
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

  // 4. Standalone Speed Test App Controller
  class SpeedTestApp {
    constructor() {
      this.durationMinutes = 1;
      this.testMode = 'standard'; // 'standard', 'jumble', 'custom'
      this.customText = '';
      this.inputMethod = 'inscript'; // 'inscript', 'native'
      this.session = null;
      this.audio = new AudioFeedback();

      this.bestScores = this.loadBestScores();
      this.history = this.loadHistory();

      this.cacheDomElements();
      this.readUrlParameters();
      this.initTheme();
      this.bindEvents();
      this.prepareNewTest();
      this.renderHistory();
      this.renderBestScores();
    }

    cacheDomElements() {
      // Header & Navigation
      this.themeToggleBtn = document.getElementById('themeToggleBtn');
      this.soundToggleBtn = document.getElementById('soundToggleBtn');

      // Configuration Dropdowns
      this.durationSelect = document.getElementById('durationSelect');
      this.modeSelect = document.getElementById('modeSelect');
      this.methodSelect = document.getElementById('methodSelect');
      this.toggleKeyboardBtn = document.getElementById('toggleKeyboardBtn');
      this.customTextDrawer = document.getElementById('customTextDrawer');
      this.customPassageInput = document.getElementById('customPassageInput');
      this.applyCustomTextBtn = document.getElementById('applyCustomTextBtn');
      this.cancelCustomTextBtn = document.getElementById('cancelCustomTextBtn');

      // Live Test Arena
      this.timerValEl = document.getElementById('timerVal');
      this.timerProgressEl = document.getElementById('timerProgress');
      this.liveWpmEl = document.getElementById('liveWpm');
      this.liveAccEl = document.getElementById('liveAcc');
      this.liveCpmEl = document.getElementById('liveCpm');
      this.liveErrorsEl = document.getElementById('liveErrors');

      this.passageTitleEl = document.getElementById('passageTitle');
      this.wordsStreamEl = document.getElementById('wordsStream');
      this.testInputField = document.getElementById('testInputField');

      this.startTestBtn = document.getElementById('startTestBtn');
      this.restartTestBtn = document.getElementById('restartTestBtn');
      this.pauseTestBtn = document.getElementById('pauseTestBtn');
      this.finishEarlyBtn = document.getElementById('finishEarlyBtn');

      // Keyboard Assist Drawer
      this.keyboardDrawer = document.getElementById('keyboardDrawer');
      this.vkContainer = document.getElementById('vkContainer');

      // Results Modal
      this.resultsModal = document.getElementById('resultsModal');
      this.closeResultsBtn = document.getElementById('closeResultsBtn');
      this.retakeTestBtn = document.getElementById('retakeTestBtn');
      this.copyScorecardBtn = document.getElementById('copyScorecardBtn');
      this.shareScorecardBtn = document.getElementById('shareScorecardBtn');

      this.resultHeroWpm = document.getElementById('resultHeroWpm');
      this.resultBadge = document.getElementById('resultBadge');
      this.resultRank = document.getElementById('resultRank');
      this.resultNewRecordBadge = document.getElementById('resultNewRecordBadge');
      this.statNetWpm = document.getElementById('statNetWpm');
      this.statGrossWpm = document.getElementById('statGrossWpm');
      this.statAccuracy = document.getElementById('statAccuracy');
      this.statCorrectWords = document.getElementById('statCorrectWords');
      this.statIncorrectWords = document.getElementById('statIncorrectWords');
      this.statTotalChars = document.getElementById('statTotalChars');
      this.statDuration = document.getElementById('statDuration');

      // Mistakes Review in Results
      this.mistakesReviewBox = document.getElementById('mistakesReviewBox');
      this.mistakesCountHeading = document.getElementById('mistakesCountHeading');
      this.mistakesList = document.getElementById('mistakesList');

      // History & Best Cards
      this.best1mEl = document.getElementById('best1m');
      this.best2mEl = document.getElementById('best2m');
      this.best3mEl = document.getElementById('best3m');
      this.best5mEl = document.getElementById('best5m');
      this.historyTableBody = document.getElementById('historyTableBody');
      this.clearHistoryBtn = document.getElementById('clearHistoryBtn');

      // Toast
      this.toastEl = document.getElementById('speedToast');
    }

    readUrlParameters() {
      // Support hash: #duration=2 or #mode=jumble or search ?duration=2
      const hashStr = window.location.hash.replace(/^#/, '');
      const queryStr = window.location.search.replace(/^\?/, '');
      const params = new URLSearchParams(hashStr || queryStr);

      const d = parseInt(params.get('duration') || params.get('d'), 10);
      if ([1, 2, 3, 5].includes(d)) {
        this.durationMinutes = d;
      }

      const m = params.get('mode') || params.get('m');
      if (['standard', 'jumble', 'custom'].includes(m)) {
        this.testMode = m;
      }

      // Update UI dropdowns
      this.syncConfigDropdowns();
    }

    syncConfigDropdowns() {
      if (this.durationSelect) {
        this.durationSelect.value = String(this.durationMinutes);
      }
      if (this.modeSelect) {
        this.modeSelect.value = this.testMode;
      }
      if (this.methodSelect) {
        this.methodSelect.value = this.inputMethod;
      }
    }

    initTheme() {
      const savedTheme = localStorage.getItem('ml_speedtest_theme') || localStorage.getItem('ml_theme') || 'dark';
      this.applyTheme(savedTheme);
    }

    applyTheme(theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('ml_speedtest_theme', theme);
      if (this.themeToggleBtn) {
        const isDark = theme === 'dark';
        this.themeToggleBtn.innerHTML = isDark
          ? '<span class="icon">☀️</span> <span>ലൈറ്റ് മോഡ്</span>'
          : '<span class="icon">🌙</span> <span>ഡാർക്ക് മോഡ്</span>';
      }
    }

    toggleTheme() {
      const cur = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = cur === 'dark' ? 'light' : 'dark';
      this.applyTheme(next);
      this.showToast(`തീം മാറ്റി: ${next === 'dark' ? 'ഡാർക്ക്' : 'ലൈറ്റ്'}`);
    }

    // Audio Click & Vibration
    toggleSound() {
      this.audio.soundEnabled = !this.audio.soundEnabled;
      if (this.soundToggleBtn) {
        this.soundToggleBtn.innerHTML = this.audio.soundEnabled
          ? '<span class="icon">🔊</span> <span>ശബ്ദം: ഓൺ</span>'
          : '<span class="icon">🔇</span> <span>ശബ്ദം: ഓഫ്</span>';
      }
      this.showToast(`ശബ്ദം: ${this.audio.soundEnabled ? 'ഓൺ' : 'ഓഫ്'}`);
    }

    // Setup Event Listeners
    bindEvents() {
      // Theme & Sound
      if (this.themeToggleBtn) this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
      if (this.soundToggleBtn) this.soundToggleBtn.addEventListener('click', () => this.toggleSound());

      // Duration Dropdown Selection
      if (this.durationSelect) {
        this.durationSelect.addEventListener('change', () => {
          const val = parseInt(this.durationSelect.value, 10);
          this.setDuration(val);
        });
      }

      // Mode Dropdown Selection
      if (this.modeSelect) {
        this.modeSelect.addEventListener('change', () => {
          const mode = this.modeSelect.value;
          this.setMode(mode);
        });
      }

      // Input Method Dropdown Selection
      if (this.methodSelect) {
        this.methodSelect.addEventListener('change', () => {
          const method = this.methodSelect.value;
          this.setInputMethod(method);
        });
      }

      // Keyboard Guide Toggle
      if (this.toggleKeyboardBtn) {
        this.toggleKeyboardBtn.addEventListener('click', () => {
          if (!this.keyboardDrawer) return;
          const isHidden = this.keyboardDrawer.classList.toggle('hidden');
          this.toggleKeyboardBtn.classList.toggle('active', !isHidden);
        });
      }

      // Custom Text Drawer
      if (this.applyCustomTextBtn) {
        this.applyCustomTextBtn.addEventListener('click', () => {
          const text = this.customPassageInput ? this.customPassageInput.value.trim() : '';
          if (text.length < 20) {
            this.showToast('ദയവായി കുറഞ്ഞത് 20 അക്ഷരങ്ങളുള്ള മലയാളം പാഠം നൽകുക.');
            return;
          }
          this.customText = text;
          if (this.customTextDrawer) this.customTextDrawer.classList.add('hidden');
          this.showToast('കസ്റ്റം പാഠം ലോഡ് ചെയ്തു.');
          this.prepareNewTest();
        });
      }

      if (this.cancelCustomTextBtn) {
        this.cancelCustomTextBtn.addEventListener('click', () => {
          if (this.customTextDrawer) this.customTextDrawer.classList.add('hidden');
          this.setMode('standard');
        });
      }

      // Action Buttons
      if (this.startTestBtn) this.startTestBtn.addEventListener('click', () => this.startTest());
      if (this.restartTestBtn) this.restartTestBtn.addEventListener('click', () => this.prepareNewTest());
      if (this.pauseTestBtn) this.pauseTestBtn.addEventListener('click', () => this.togglePause());
      if (this.finishEarlyBtn) this.finishEarlyBtn.addEventListener('click', () => this.finishTest());

      // Typing Input Field Events
      if (this.testInputField) {
        this.testInputField.addEventListener('keydown', (e) => this.handleInputKeydown(e));
        this.testInputField.addEventListener('input', () => this.handleInputChange());
      }

      // Global Keyboard Shortcuts
      window.addEventListener('keydown', (e) => {
        // Esc to restart
        if (e.key === 'Escape') {
          if (this.isResultsOpen()) {
            this.closeResultsModal();
          } else {
            this.prepareNewTest();
          }
        }
      });

      // Results Modal
      if (this.closeResultsBtn) this.closeResultsBtn.addEventListener('click', () => this.closeResultsModal());
      if (this.retakeTestBtn) {
        this.retakeTestBtn.addEventListener('click', () => {
          this.closeResultsModal();
          this.prepareNewTest();
          this.startTest();
        });
      }
      if (this.copyScorecardBtn) this.copyScorecardBtn.addEventListener('click', () => this.copyScorecard());
      if (this.shareScorecardBtn) this.shareScorecardBtn.addEventListener('click', () => this.shareScorecard());

      if (this.resultsModal) {
        this.resultsModal.addEventListener('click', (e) => {
          if (e.target === this.resultsModal) this.closeResultsModal();
        });
      }

      // Clear History
      if (this.clearHistoryBtn) {
        this.clearHistoryBtn.addEventListener('click', () => {
          if (confirm('മുൻപത്തെ എല്ലാ സ്പീഡ് ടെസ്റ്റ് റെക്കോർഡുകളും മായ്ക്കണമെന്നുറപ്പാണോ?')) {
            this.clearAllHistory();
          }
        });
      }
    }

    setDuration(minutes) {
      if (this.session && this.session.isActive) {
        if (!confirm('ഇപ്പോൾ നടക്കുന്ന ടെസ്റ്റ് നിർത്തി പുതിയ സമയം ക്രമീകരിക്കണോ?')) {
          if (this.durationSelect) this.durationSelect.value = String(this.durationMinutes);
          return;
        }
      }
      this.durationMinutes = minutes;
      this.syncConfigDropdowns();
      window.location.hash = `duration=${minutes}`;
      this.prepareNewTest();
      this.showToast(`സമയം: ${minutes} മിനിറ്റ്`);
    }

    setMode(mode) {
      this.testMode = mode;
      this.syncConfigDropdowns();

      if (mode === 'custom') {
        if (this.customTextDrawer) {
          this.customTextDrawer.classList.remove('hidden');
          if (this.customPassageInput) this.customPassageInput.focus();
        }
      } else {
        if (this.customTextDrawer) this.customTextDrawer.classList.add('hidden');
        this.prepareNewTest();
      }
    }

    setInputMethod(method) {
      this.inputMethod = method;
      this.syncConfigDropdowns();
      this.showToast(`ഇൻപുട്ട് രീതി: ${method === 'inscript' ? 'ഫിസിക്കൽ ഇൻസ്ക്രിപ്റ്റ്' : 'സിസ്റ്റം കീബോർഡ്'}`);
    }

    prepareNewTest() {
      if (this.session) {
        this.session.stop();
      }

      // Generate Words List
      let words = [];
      let passageTitle = '';

      if (this.testMode === 'custom' && this.customText.trim()) {
        words = this.customText.trim().split(/\s+/).filter(Boolean);
        passageTitle = '✍️ സ്വന്തം പാഠം (Custom Text)';
      } else if (this.testMode === 'jumble') {
        // Shuffle jumble words
        const count = this.durationMinutes * 90;
        for (let i = 0; i < count; i++) {
          const w = MALAYALAM_JUMBLE_WORDS[Math.floor(Math.random() * MALAYALAM_JUMBLE_WORDS.length)];
          words.push(w);
        }
        passageTitle = '🔀 പദാവലി മിശ്രണം (Frequent Words Jumble)';
      } else {
        // Standard Authentic Passage
        const randPassage = MALAYALAM_PASSAGES[Math.floor(Math.random() * MALAYALAM_PASSAGES.length)];
        words = randPassage.text.split(/\s+/).filter(Boolean);
        passageTitle = `📚 ${randPassage.title} (${randPassage.category})`;
      }

      // Ensure words is long enough for test
      if (words.length < 50) {
        words = words.concat(words);
      }

      this.session = new SpeedTestSession(this.durationMinutes, words);

      // Reset HUD
      this.updateHud(this.session.remainingSeconds, {
        netWpm: 0,
        grossWpm: 0,
        cpm: 0,
        accuracy: 100,
        incorrectWords: 0
      });

      // Update Header & Stream
      if (this.passageTitleEl) this.passageTitleEl.textContent = passageTitle;
      this.renderWordsStream();

      // Reset Input
      if (this.testInputField) {
        this.testInputField.value = '';
        this.testInputField.disabled = false;
        this.testInputField.classList.remove('input-error');
        this.testInputField.placeholder = 'ഇവിടെ ടൈപ്പ് ചെയ്ത് തുടങ്ങുക (Type here to begin)...';
        this.testInputField.focus();
      }

      // Buttons State
      if (this.startTestBtn) this.startTestBtn.classList.remove('hidden');
      if (this.pauseTestBtn) {
        this.pauseTestBtn.classList.add('hidden');
        this.pauseTestBtn.innerHTML = '<span>⏸️ താൽക്കാലികമായി നിർത്തുക</span>';
      }
      if (this.finishEarlyBtn) this.finishEarlyBtn.classList.add('hidden');
    }

    startTest() {
      if (!this.session || this.session.isActive) return;

      this.session.start(
        (remainingSeconds, metrics) => this.onTick(remainingSeconds, metrics),
        (finalMetrics) => this.onFinish(finalMetrics)
      );

      if (this.startTestBtn) this.startTestBtn.classList.add('hidden');
      if (this.pauseTestBtn) this.pauseTestBtn.classList.remove('hidden');
      if (this.finishEarlyBtn) this.finishEarlyBtn.classList.remove('hidden');

      if (this.testInputField) {
        this.testInputField.disabled = false;
        this.testInputField.placeholder = 'മുകളിലെ വാക്ക് കണ്ട് സ്പേസ് ബാർ അടിച്ച് ടൈപ്പ് ചെയ്യുക...';
        this.testInputField.focus();
      }
    }

    togglePause() {
      if (!this.session || !this.session.isActive) return;
      const isPaused = this.session.togglePause();

      if (this.pauseTestBtn) {
        this.pauseTestBtn.innerHTML = isPaused
          ? '<span>▶️ തുടരുക (Resume)</span>'
          : '<span>⏸️ താൽക്കാലികമായി നിർത്തുക</span>';
      }

      if (this.testInputField) {
        this.testInputField.disabled = isPaused;
        if (!isPaused) this.testInputField.focus();
      }

      this.showToast(isPaused ? 'ടെസ്റ്റ് താൽക്കാലികമായി നിർത്തി' : 'ടെസ്റ്റ് തുടരുന്നു');
    }

    finishTest() {
      if (this.session && this.session.isActive) {
        this.session.finish();
      }
    }

    onTick(remainingSeconds, metrics) {
      this.updateHud(remainingSeconds, metrics);
    }

    onFinish(finalMetrics) {
      this.updateHud(0, finalMetrics);
      if (this.testInputField) {
        this.testInputField.disabled = true;
        this.testInputField.value = '';
      }
      this.audio.playKeyClick(true);
      this.audio.triggerHaptic(50);

      // Save to History & Personal Best
      const isNewRecord = this.saveResult(finalMetrics);
      this.showResultsModal(finalMetrics, isNewRecord);
    }

    updateHud(remainingSeconds, metrics) {
      if (this.timerValEl) {
        const mins = Math.floor(remainingSeconds / 60);
        const secs = remainingSeconds % 60;
        this.timerValEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }

      if (this.timerProgressEl) {
        const totalSecs = this.durationMinutes * 60;
        const pct = Math.max(0, Math.min(100, ((totalSecs - remainingSeconds) / totalSecs) * 100));
        this.timerProgressEl.style.width = `${pct}%`;
      }

      if (this.liveWpmEl) this.liveWpmEl.textContent = `${metrics.netWpm} WPM`;
      if (this.liveAccEl) this.liveAccEl.textContent = `${metrics.accuracy}%`;
      if (this.liveCpmEl) this.liveCpmEl.textContent = `${metrics.cpm || 0} CPM`;
      if (this.liveErrorsEl) this.liveErrorsEl.textContent = metrics.incorrectWords;
    }

    renderWordsStream() {
      if (!this.wordsStreamEl || !this.session) return;

      const words = this.session.words;
      const curIndex = this.session.currentWordIndex;
      const results = this.session.results;

      const html = words.map((w, idx) => {
        if (idx < curIndex) {
          const res = results[idx];
          if (res && res.isCorrect) {
            return `<span class="test-word correct" data-word-idx="${idx}">${w}</span>`;
          } else {
            const typedVal = res && res.typed ? res.typed : '(ശൂന്യം)';
            return `<span class="test-word incorrect" data-word-idx="${idx}" data-target="${w}" data-typed="${typedVal}" title="🎯 ശരി: ${w}&#10;⌨️ നിങ്ങൾ ടൈപ്പ് ചെയ്തത്: ${typedVal}">${w}</span>`;
          }
        } else if (idx === curIndex) {
          return `<span class="test-word active" data-word-idx="${idx}">${w}</span>`;
        } else {
          return `<span class="test-word future" data-word-idx="${idx}">${w}</span>`;
        }
      }).join(' ');

      this.wordsStreamEl.innerHTML = html;
      this.scrollActiveWordIntoView();
    }

    scrollActiveWordIntoView() {
      if (!this.wordsStreamEl) return;
      const activeEl = this.wordsStreamEl.querySelector('.test-word.active');
      if (activeEl) {
        const container = this.wordsStreamEl;
        const elTop = activeEl.offsetTop;
        const elHeight = activeEl.offsetHeight;
        const containerHeight = container.clientHeight;

        // Keep active element vertically centered in stream box
        container.scrollTo({
          top: elTop - containerHeight / 2 + elHeight / 2,
          behavior: 'smooth'
        });
      }
    }

    handleInputKeydown(e) {
      // Start test automatically on first typed key if not yet started
      if (this.session && !this.session.isActive && !this.session.isCompleted) {
        if (e.key.length === 1 || e.code === 'Space') {
          this.startTest();
        }
      }

      // Spacebar completes current word
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        this.submitCurrentWord();
        return;
      }

      // InScript Keyboard Mapping (if enabled and typing in English physical keyboard mode)
      if (this.inputMethod === 'inscript' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const code = e.code;
        const mapping = INSCRIPT_MAP[code];

        if (mapping) {
          e.preventDefault();
          const char = e.shiftKey ? mapping.shift : mapping.normal;
          if (char) {
            this.insertCharIntoInput(char);
            this.audio.playKeyClick(false);
          }
        }
      }
    }

    handleInputChange() {
      if (!this.session || !this.testInputField) return;

      const val = this.testInputField.value;

      // Check if space was typed (e.g. on mobile keyboards)
      if (val.endsWith(' ')) {
        this.submitCurrentWord();
        return;
      }

      this.session.currentInput = val;
      this.audio.playKeyClick(false);

      // Prefix error detection using smart Malayalam Unicode chillu & ligature matcher
      const curIndex = this.session.currentWordIndex;
      const targetWord = this.session.words[curIndex] || '';

      if (val.length > 0 && !isMalayalamPrefixMatch(val, targetWord)) {
        this.testInputField.classList.add('input-error');
      } else {
        this.testInputField.classList.remove('input-error');
      }
    }

    insertCharIntoInput(char) {
      if (!this.testInputField) return;
      const el = this.testInputField;
      let start = el.selectionStart;
      let end = el.selectionEnd;
      const val = el.value;

      let before = val.substring(0, start);
      const after = val.substring(end);

      // Auto-normalize legacy decomposed chillu sequence (consonant + virama + ZWJ) to atomic chillu
      if (char === '\u200D' && before.endsWith('\u0D4D')) {
        const baseBeforeVirama = before.slice(0, -1);
        const lastConsonant = baseBeforeVirama.slice(-1);
        const atomicChillu = getAtomicChilluForConsonant(lastConsonant);
        if (atomicChillu) {
          before = baseBeforeVirama.slice(0, -1) + atomicChillu;
          char = '';
        }
      }

      el.value = before + char + after;
      const newCursor = before.length + char.length;
      el.selectionStart = el.selectionEnd = newCursor;

      this.handleInputChange();
    }

    submitCurrentWord() {
      if (!this.session || !this.testInputField) return;

      const typed = this.testInputField.value.trim();
      if (typed.length === 0) return;

      const isCorrect = this.session.submitWord(typed);
      this.testInputField.value = '';
      this.testInputField.classList.remove('input-error');

      this.audio.playKeyClick(!isCorrect);
      this.audio.triggerHaptic(isCorrect ? 10 : 25);

      this.renderWordsStream();
      this.updateHud(this.session.remainingSeconds, this.session.getMetrics());
    }

    // Results Modal Handling
    isResultsOpen() {
      return this.resultsModal && !this.resultsModal.classList.contains('hidden');
    }

    showResultsModal(metrics, isNewRecord) {
      if (!this.resultsModal) return;

      if (this.resultHeroWpm) this.resultHeroWpm.textContent = `${metrics.netWpm} WPM`;
      if (this.resultBadge) this.resultBadge.textContent = metrics.badge;
      if (this.resultRank) this.resultRank.textContent = metrics.rank;

      if (this.resultNewRecordBadge) {
        this.resultNewRecordBadge.classList.toggle('hidden', !isNewRecord);
      }

      if (this.statNetWpm) this.statNetWpm.textContent = `${metrics.netWpm} WPM`;
      if (this.statGrossWpm) this.statGrossWpm.textContent = `${metrics.grossWpm} WPM`;
      if (this.statAccuracy) this.statAccuracy.textContent = `${metrics.accuracy}%`;
      if (this.statCorrectWords) this.statCorrectWords.textContent = metrics.correctWords;
      if (this.statIncorrectWords) this.statIncorrectWords.textContent = metrics.incorrectWords;
      if (this.statTotalChars) this.statTotalChars.textContent = metrics.totalChars;
      if (this.statDuration) this.statDuration.textContent = `${this.durationMinutes} മിനിറ്റ്`;

      // Mistakes Review
      const mistakes = this.session && this.session.results
        ? this.session.results.filter((r) => !r.isCorrect)
        : [];

      if (this.mistakesReviewBox) {
        if (mistakes.length === 0) {
          this.mistakesReviewBox.classList.add('hidden');
        } else {
          this.mistakesReviewBox.classList.remove('hidden');
          if (this.mistakesCountHeading) {
            this.mistakesCountHeading.innerHTML = `<span>🔍 തെറ്റുകൾ അവലോകനം (${mistakes.length} വാക്കുകൾ):</span>`;
          }

          if (this.mistakesList) {
            this.mistakesList.innerHTML = mistakes.map((m) => {
              const tgt = m.target;
              const typ = m.typed || '(ശൂന്യം)';

              let reason = '❌ അക്ഷര വ്യത്യാസം (Typo)';
              const punctRegex = /[.,:;!?\u0D3D"'\(\)]+$/;
              if (tgt.replace(punctRegex, '') === typ.replace(punctRegex, '')) {
                reason = '⚠️ ചിഹ്നം വിട്ടുപോയി (Punctuation)';
              } else if (tgt.length !== typ.length) {
                reason = tgt.length > typ.length ? '⚠️ അക്ഷരങ്ങൾ കുറവാണ്' : '⚠️ അക്ഷരങ്ങൾ അധികമാണ്';
              }

              return `
                <div class="mistake-card">
                  <div class="mistake-pair">
                    <div class="mistake-part target-part">
                      <span class="tag-lbl">ശരി:</span>
                      <strong class="tag-val">${tgt}</strong>
                    </div>
                    <span style="color: var(--text-muted); font-size: 0.8rem;">➔</span>
                    <div class="mistake-part typed-part">
                      <span class="tag-lbl">നിങ്ങൾ ടൈപ്പ് ചെയ്തത്:</span>
                      <span class="tag-val">${typ}</span>
                    </div>
                  </div>
                  <span class="mistake-reason-pill">${reason}</span>
                </div>
              `;
            }).join('');
          }
        }
      }

      this.resultsModal.classList.remove('hidden');
      this.renderHistory();
      this.renderBestScores();
    }

    closeResultsModal() {
      if (this.resultsModal) this.resultsModal.classList.add('hidden');
    }

    // LocalStorage History & Best Scores
    loadBestScores() {
      try {
        const raw = localStorage.getItem('ml_speedtest_bests');
        return raw ? JSON.parse(raw) : {};
      } catch {
        return {};
      }
    }

    saveBestScores(bests) {
      this.bestScores = bests;
      localStorage.setItem('ml_speedtest_bests', JSON.stringify(bests));
    }

    loadHistory() {
      try {
        const raw = localStorage.getItem('ml_speedtest_history');
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }

    saveHistory(history) {
      this.history = history;
      localStorage.setItem('ml_speedtest_history', JSON.stringify(history));
    }

    saveResult(metrics) {
      const now = new Date();
      const dateStr = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      // Check Best
      const durKey = String(this.durationMinutes);
      const priorBest = this.bestScores[durKey] || 0;
      let isNewRecord = false;

      if (metrics.netWpm > priorBest) {
        this.bestScores[durKey] = metrics.netWpm;
        this.saveBestScores(this.bestScores);
        isNewRecord = true;
      }

      // Add to History
      const record = {
        id: Date.now(),
        date: dateStr,
        duration: this.durationMinutes,
        netWpm: metrics.netWpm,
        grossWpm: metrics.grossWpm,
        cpm: metrics.cpm,
        accuracy: metrics.accuracy,
        errors: metrics.incorrectWords,
        rank: metrics.rank,
        badge: metrics.badge
      };

      const updatedHistory = [record, ...this.history].slice(0, 30);
      this.saveHistory(updatedHistory);

      return isNewRecord;
    }

    clearAllHistory() {
      this.saveHistory([]);
      this.saveBestScores({});
      this.renderHistory();
      this.renderBestScores();
      this.showToast('എല്ലാ സ്പീഡ് ടെസ്റ്റ് ഹിസ്റ്ററിയും മായ്ച്ചു');
    }

    renderBestScores() {
      const b = this.bestScores;
      if (this.best1mEl) this.best1mEl.textContent = `${b['1'] || 0} WPM`;
      if (this.best2mEl) this.best2mEl.textContent = `${b['2'] || 0} WPM`;
      if (this.best3mEl) this.best3mEl.textContent = `${b['3'] || 0} WPM`;
      if (this.best5mEl) this.best5mEl.textContent = `${b['5'] || 0} WPM`;
    }

    renderHistory() {
      if (!this.historyTableBody) return;

      if (this.history.length === 0) {
        this.historyTableBody.innerHTML = `
          <tr>
            <td colspan="6" class="table-empty-msg">
              🌱 ഇതുവരെ സ്പീഡ് ടെസ്റ്റുകൾ ചെയ്തിട്ടില്ല. മുകളിലെ ടെസ്റ്റ് ആരംഭിച്ച് നിങ്ങളുടെ വേഗത കണ്ടെത്തൂ!
            </td>
          </tr>
        `;
        return;
      }

      const rowsHtml = this.history.map((h, i) => `
        <tr>
          <td><span class="history-rank">${i + 1}</span></td>
          <td>${h.date}</td>
          <td><span class="badge duration-badge">${h.duration} മിനിറ്റ്</span></td>
          <td><strong class="history-wpm">${h.netWpm} WPM</strong></td>
          <td><span class="history-acc">${h.accuracy}%</span></td>
          <td><span class="history-badge">${h.badge} ${h.rank}</span></td>
        </tr>
      `).join('');

      this.historyTableBody.innerHTML = rowsHtml;
    }

    // Share & Copy
    generateScorecardText(metrics) {
      const best = this.bestScores[String(this.durationMinutes)] || metrics.netWpm;
      return [
        `🏆 കല്ലുപെൻസിൽ മലയാളം ടൈപ്പിംഗ് സ്പീഡ് ടെസ്റ്റ് 🏆`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `⚡ വേഗത: ${metrics.netWpm} WPM (CPM: ${metrics.cpm || 0})`,
        `🎯 കൃത്യത: ${metrics.accuracy}%`,
        `⏱️ ടെസ്റ്റ് സമയം: ${this.durationMinutes} മിനിറ്റ്`,
        `🏅 റാങ്ക്: ${metrics.badge} ${metrics.rank}`,
        `⭐ വ്യക്തിഗത റെക്കോർഡ്: ${best} WPM`,
        `📅 തീയതി: ${new Date().toLocaleDateString('ml-IN')}`,
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        `കല്ലുപെൻസിൽ (Kallu Pencil) - സ്വതന്ത്ര മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ്`
      ].join('\n');
    }

    copyScorecard() {
      if (!this.session) return;
      const metrics = this.session.getMetrics();
      const text = this.generateScorecardText(metrics);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('സ്കോർ കാർഡ് ക്ലിപ്ബോർഡിലേക്ക് കോപ്പി ചെയ്തു! 📋');
        }).catch(() => {
          alert(text);
        });
      } else {
        alert(text);
      }
    }

    shareScorecard() {
      if (!this.session) return;
      const metrics = this.session.getMetrics();
      const text = this.generateScorecardText(metrics);

      if (navigator.share) {
        navigator.share({
          title: 'കല്ലുപെൻസിൽ സ്പീഡ് ടെസ്റ്റ് സ്കോർ കാർഡ്',
          text
        }).catch(() => {});
      } else {
        this.copyScorecard();
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
  }

  // Initialize App on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.speedTestApp = new SpeedTestApp();
    });
  } else {
    window.speedTestApp = new SpeedTestApp();
  }
})();
