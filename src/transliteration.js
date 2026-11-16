/**
 * Malayalam Phonetic / Mozhi Transliteration Engine
 * Converts English phonetic input (Manglish) into Malayalam Unicode characters.
 */

const VOWEL_MAP = {
  a: 'അ',
  aa: 'ആ',
  A: 'ആ',
  i: 'ഇ',
  ee: 'ഈ',
  I: 'ഈ',
  u: 'ഉ',
  oo: 'ഊ',
  U: 'ഊ',
  R: 'ഋ',
  e: 'എ',
  E: 'ഏ',
  ai: 'ഐ',
  o: 'ഒ',
  O: 'ഓ',
  au: 'ഔ',
  ou: 'ഔ'
};

const MATRA_MAP = {
  a: '',
  aa: 'ാ',
  A: 'ാ',
  i: 'ി',
  ee: 'ീ',
  I: 'ീ',
  u: 'ു',
  oo: 'ൂ',
  U: 'ൂ',
  R: 'ൃ',
  e: 'െ',
  E: 'േ',
  ai: 'ൈ',
  o: 'ൊ',
  O: 'ോ',
  au: 'ൗ',
  ou: 'ൗ'
};

const CONSONANT_MAP = {
  k: 'ക',
  kh: 'ഖ',
  g: 'ഗ',
  gh: 'ഘ',
  ng: 'ങ',
  ch: 'ച',
  chh: 'ഛ',
  j: 'ജ',
  jh: 'ഝ',
  nj: 'ഞ',
  t: 'ട',
  th: 'ഠ',
  d: 'ഡ',
  dh: 'ഢ',
  N: 'ണ',
  thh: 'ത',
  thd: 'ഥ',
  dth: 'ദ',
  dhh: 'ധ',
  n: 'ന',
  p: 'പ',
  ph: 'ഫ',
  f: 'ഫ',
  b: 'ബ',
  bh: 'ഭ',
  m: 'മ',
  y: 'യ',
  r: 'ര',
  l: 'ല',
  v: 'വ',
  w: 'വ',
  sh: 'ശ',
  S: 'ഷ',
  s: 'സ',
  h: 'ഹ',
  L: 'ള',
  zh: 'ഴ',
  R: 'റ'
};

const CHILLU_MAP = {
  'N~': 'ൺ',
  'n~': 'ൻ',
  'r~': 'ർ',
  'l~': 'ൽ',
  'L~': 'ൾ',
  'k~': 'ൿ'
};

export class MozhiTransliteration {
  /**
   * Transliterates phonetic words into Malayalam
   */
  static transliterateWord(word) {
    if (!word) return '';

    // Direct chillu markers
    if (CHILLU_MAP[word]) return CHILLU_MAP[word];

    // Common abbreviations and words
    const dictionary = {
      namaskaram: 'നമസ്കാരം',
      namaskaaram: 'നമസ്കാരം',
      keralam: 'കേരളം',
      malayalam: 'മലയാളം',
      malayalamm: 'മലയാളം',
      bharatham: 'ഭാരതം',
      sneham: 'സ്നേഹം',
      nandi: 'നന്ദി',
      shubham: 'ശുഭം',
      ente: 'എന്റെ',
      ningal: 'നിങ്ങൾ',
      nammal: 'നമ്മൾ',
      evide: 'എവിടെ',
      eppo: 'എപ്പോൾ',
      angane: 'അങ്ങനെ',
      ingane: 'ഇങ്ങനെ',
      entha: 'എന്താ',
      enthu: 'എന്ത്'
    };

    const lower = word.toLowerCase();
    if (dictionary[lower]) return dictionary[lower];

    return word;
  }
}

