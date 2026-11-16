/**
 * Malayalam InScript (Indian Script) Keyboard Specification
 * Standard Bureau of Indian Standards (BIS) & C-DAC Malayalam InScript Mapping
 */

export const INSCRIPT_MAP = {
  // Number row
  Backquote: { normal: '\u0D4A', shift: '\u0D12', labelNormal: 'ൊ', labelShift: 'ഒ', keyName: '`' }, // Vowel sign o / Letter o
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
  Minus: { normal: '-', shift: '\u0D03', labelNormal: '-', labelShift: 'ഃ', keyName: '-' }, // Visarga
  Equal: { normal: '\u0D43', shift: '\u0D0B', labelNormal: 'ൃ', labelShift: 'ഋ', keyName: '=' }, // Vocalic R sign / Letter

  // Top row (QWERTY)
  KeyQ: { normal: '\u0D57', altNormal: '\u0D4C', shift: '\u0D14', labelNormal: 'ൗ', labelShift: 'ഔ', keyName: 'Q' }, // Au length mark / Au letter
  KeyW: { normal: '\u0D48', shift: '\u0D10', labelNormal: 'ൈ', labelShift: 'ഐ', keyName: 'W' }, // Ai sign / Ai letter
  KeyE: { normal: '\u0D3E', shift: '\u0D06', labelNormal: 'ാ', labelShift: 'ആ', keyName: 'E' }, // Aa sign / Aa letter
  KeyR: { normal: '\u0D40', shift: '\u0D08', labelNormal: 'ീ', labelShift: 'ഈ', keyName: 'R' }, // Ii sign / Ii letter
  KeyT: { normal: '\u0D42', shift: '\u0D0A', labelNormal: 'ൂ', labelShift: 'ഊ', keyName: 'T' }, // Uu sign / Uu letter
  KeyY: { normal: '\u0D2C', shift: '\u0D2D', labelNormal: 'ബ', labelShift: 'ഭ', keyName: 'Y' }, // Ba / Bha
  KeyU: { normal: '\u0D39', shift: '\u0D19', labelNormal: 'ഹ', labelShift: 'ങ', keyName: 'U' }, // Ha / Nga
  KeyI: { normal: '\u0D17', shift: '\u0D18', labelNormal: 'ഗ', labelShift: 'ഘ', keyName: 'I' }, // Ga / Gha
  KeyO: { normal: '\u0D26', shift: '\u0D27', labelNormal: 'ദ', labelShift: 'ധ', keyName: 'O' }, // Da / Dha
  KeyP: { normal: '\u0D1C', shift: '\u0D1D', labelNormal: 'ജ', labelShift: 'ഝ', keyName: 'P' }, // Ja / Jha
  BracketLeft: { normal: '\u0D21', shift: '\u0D22', labelNormal: 'ഡ', labelShift: 'ഢ', keyName: '[' }, // Dda / Ddha
  BracketRight: { normal: '\u200D', shift: '\u0D1E', labelNormal: 'ZWJ', labelShift: 'ഞ', keyName: ']' }, // ZWJ / Nya
  Backslash: { normal: '\\', shift: '|', labelNormal: '\\', labelShift: '|', keyName: '\\' },

  // Home row (ASDF)
  KeyA: { normal: '\u0D4B', shift: '\u0D13', labelNormal: 'ോ', labelShift: 'ഓ', keyName: 'A' }, // Oo sign / Oo letter
  KeyS: { normal: '\u0D47', shift: '\u0D0F', labelNormal: 'േ', labelShift: 'ഏ', keyName: 'S' }, // Ee sign / Ee letter
  KeyD: { normal: '\u0D4D', shift: '\u0D05', labelNormal: '്', labelShift: 'അ', keyName: 'D' }, // Virama / A letter
  KeyF: { normal: '\u0D3F', shift: '\u0D07', labelNormal: 'ി', labelShift: 'ഇ', keyName: 'F' }, // I sign / I letter
  KeyG: { normal: '\u0D41', shift: '\u0D09', labelNormal: 'ു', labelShift: 'ഉ', keyName: 'G' }, // U sign / U letter
  KeyH: { normal: '\u0D2A', shift: '\u0D2B', labelNormal: 'പ', labelShift: 'ഫ', keyName: 'H' }, // Pa / Pha
  KeyJ: { normal: '\u0D30', shift: '\u0D31', labelNormal: 'ര', labelShift: 'റ', keyName: 'J' }, // Ra / Rra
  KeyK: { normal: '\u0D15', shift: '\u0D16', labelNormal: 'ക', labelShift: 'ഖ', keyName: 'K' }, // Ka / Kha
  KeyL: { normal: '\u0D24', shift: '\u0D25', labelNormal: 'ത', labelShift: 'ഥ', keyName: 'L' }, // Ta / Tha
  Semicolon: { normal: '\u0D1A', shift: '\u0D1B', labelNormal: 'ച', labelShift: 'ഛ', keyName: ';' }, // Ca / Cha
  Quote: { normal: '\u0D1F', shift: '\u0D20', labelNormal: 'ട', labelShift: 'ഠ', keyName: "'" }, // Tta / Ttha

  // Bottom row (ZXCV)
  KeyZ: { normal: '\u0D46', shift: '\u0D0E', labelNormal: 'െ', labelShift: 'എ', keyName: 'Z' }, // E sign / E letter
  KeyX: { normal: '\u0D02', shift: '\u200C', labelNormal: 'ം', labelShift: 'ZWNJ', keyName: 'X' }, // Anusvara / ZWNJ
  KeyC: { normal: '\u0D2E', shift: '\u0D23', labelNormal: 'മ', labelShift: 'ണ', keyName: 'C' }, // Ma / Nna
  KeyV: { normal: '\u0D28', shift: '\u0D29', labelNormal: 'ന', labelShift: 'ഩ', keyName: 'V' }, // Na / Alveolar Na
  KeyB: { normal: '\u0D35', shift: '\u0D34', labelNormal: 'വ', labelShift: 'ഴ', keyName: 'B' }, // Va / Zha
  KeyN: { normal: '\u0D32', shift: '\u0D33', labelNormal: 'ല', labelShift: 'ള', keyName: 'N' }, // La / Lla
  KeyM: { normal: '\u0D38', shift: '\u0D36', labelNormal: 'സ', labelShift: 'ശ', keyName: 'M' }, // Sa / Sha
  Comma: { normal: ',', shift: '\u0D37', labelNormal: ',', labelShift: 'ഷ', keyName: ',' }, // Comma / Ssa
  Period: { normal: '.', shift: '\u0D3D', labelNormal: '.', labelShift: 'ഽ', keyName: '.' }, // Period / Avagraha
  Slash: { normal: '\u0D2F', shift: '?', labelNormal: 'യ', labelShift: '?', keyName: '/' }, // Ya / ?
  Space: { normal: ' ', shift: ' ', labelNormal: 'സ്പേസ്', labelShift: 'സ്പേസ്', keyName: 'Space' }
};

// Direct character lookup by character code or English key
export const CHAR_TO_INSCRIPT = {};
Object.entries(INSCRIPT_MAP).forEach(([code, data]) => {
  if (data.keyName) {
    CHAR_TO_INSCRIPT[data.keyName.toLowerCase()] = data.normal;
    CHAR_TO_INSCRIPT[data.keyName.toUpperCase()] = data.shift;
  }
});
// Special symbols and punctuation
CHAR_TO_INSCRIPT['`'] = INSCRIPT_MAP.Backquote.normal;
CHAR_TO_INSCRIPT['~'] = INSCRIPT_MAP.Backquote.shift;
CHAR_TO_INSCRIPT['-'] = INSCRIPT_MAP.Minus.normal;
CHAR_TO_INSCRIPT['_'] = INSCRIPT_MAP.Minus.shift;
CHAR_TO_INSCRIPT['='] = INSCRIPT_MAP.Equal.normal;
CHAR_TO_INSCRIPT['+'] = INSCRIPT_MAP.Equal.shift;
CHAR_TO_INSCRIPT['['] = INSCRIPT_MAP.BracketLeft.normal;
CHAR_TO_INSCRIPT['{'] = INSCRIPT_MAP.BracketLeft.shift;
CHAR_TO_INSCRIPT[']'] = INSCRIPT_MAP.BracketRight.normal;
CHAR_TO_INSCRIPT['}'] = INSCRIPT_MAP.BracketRight.shift;
CHAR_TO_INSCRIPT[';'] = INSCRIPT_MAP.Semicolon.normal;
CHAR_TO_INSCRIPT[':'] = INSCRIPT_MAP.Semicolon.shift;
CHAR_TO_INSCRIPT["'"] = INSCRIPT_MAP.Quote.normal;
CHAR_TO_INSCRIPT['"'] = INSCRIPT_MAP.Quote.shift;
CHAR_TO_INSCRIPT[','] = INSCRIPT_MAP.Comma.normal;
CHAR_TO_INSCRIPT['<'] = INSCRIPT_MAP.Comma.shift;
CHAR_TO_INSCRIPT['.'] = INSCRIPT_MAP.Period.normal;
CHAR_TO_INSCRIPT['>'] = INSCRIPT_MAP.Period.shift;
CHAR_TO_INSCRIPT['/'] = INSCRIPT_MAP.Slash.normal;
CHAR_TO_INSCRIPT['?'] = INSCRIPT_MAP.Slash.shift;

/**
 * Malayalam Chillus (ചില്ലക്ഷരങ്ങൾ)
 * Unicode 5.1+ Atomic Characters & Traditional Consonant+Virama+ZWJ sequences
 */
export const CHILLU_CHARS = [
  { char: '\u0D7A', label: 'ൺ', name: 'Chillu NN (ൺ)', sequence: '\u0D23\u0D4D\u200D' },
  { char: '\u0D7B', label: 'ൻ', name: 'Chillu N (ൻ)', sequence: '\u0D28\u0D4D\u200D' },
  { char: '\u0D7C', label: 'ർ', name: 'Chillu R (ർ)', sequence: '\u0D30\u0D4D\u200D' },
  { char: '\u0D7D', label: 'ൽ', name: 'Chillu L (ൽ)', sequence: '\u0D32\u0D4D\u200D' },
  { char: '\u0D7E', label: 'ൾ', name: 'Chillu LL (ൾ)', sequence: '\u0D33\u0D4D\u200D' },
  { char: '\u0D7F', label: 'ൿ', name: 'Chillu K (ൿ)', sequence: '\u0D15\u0D4D\u200D' }
];

/**
 * Common Malayalam Conjuncts (കൂട്ടക്ഷരങ്ങൾ)
 */
export const CONJUNCT_PRESETS = [
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

/**
 * Malayalam Independent Vowels (സ്വരങ്ങൾ)
 */
export const VOWEL_PRESETS = [
  'അ', 'ആ', 'ഇ', 'ഈ', 'ഉ', 'ഊ', 'ഋ', 'എ', 'ഏ', 'ഐ', 'ഒ', 'ഓ', 'ഔ'
];

/**
 * Malayalam Numerals (മലയാള അക്കങ്ങൾ)
 */
export const MALAYALAM_NUMERALS = [
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

/**
 * Special Malayalam signs
 */
export const SPECIAL_SIGNS = [
  { char: '\u0D4D', label: '് (ചന്ദ്രക്കല)', desc: 'Virama / Chandrakkala' },
  { char: '\u0D02', label: 'ം (അനുസ്വാരം)', desc: 'Anusvara' },
  { char: '\u0D03', label: 'ഃ (വിസർഗ്ഗം)', desc: 'Visarga' },
  { char: '\u200D', label: 'ZWJ (സംയോജകം)', desc: 'Zero-Width Joiner' },
  { char: '\u200C', label: 'ZWNJ (വിയോജകം)', desc: 'Zero-Width Non-Joiner' },
  { char: '\u0D3D', label: 'ഽ (അവഗ്രഹം)', desc: 'Avagraha' }
];

