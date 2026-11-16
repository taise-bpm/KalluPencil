/**
 * Comprehensive Malayalam InScript Typing Tutor Curriculum
 * Structured progressively from Home Row to Full Real-world Malayalam Text.
 * Includes Finger Placements, Shift Requirements, and Detailed Guides.
 */

export const FINGER_NAMES = {
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

export const KEY_FINGER_MAP = {
  // Top Row
  Backquote: 'LP', Digit1: 'LP', Digit2: 'LR', Digit3: 'LM', Digit4: 'LI', Digit5: 'LI',
  Digit6: 'RI', Digit7: 'RI', Digit8: 'RM', Digit9: 'RR', Digit0: 'RP', Minus: 'RP', Equal: 'RP',

  // QWERTY Row
  KeyQ: 'LP', KeyW: 'LR', KeyE: 'LM', KeyR: 'LI', KeyT: 'LI',
  KeyY: 'RI', KeyU: 'RI', KeyI: 'RM', KeyO: 'RR', KeyP: 'RP', BracketLeft: 'RP', BracketRight: 'RP', Backslash: 'RP',

  // Home Row
  KeyA: 'LP', KeyS: 'LR', KeyD: 'LM', KeyF: 'LI', KeyG: 'LI',
  KeyH: 'RI', KeyJ: 'RI', KeyK: 'RM', KeyL: 'RR', Semicolon: 'RP', Quote: 'RP',

  // Bottom Row
  KeyZ: 'LP', KeyX: 'LR', KeyC: 'LM', KeyV: 'LI', KeyB: 'LI',
  KeyN: 'RI', KeyM: 'RI', Comma: 'RM', Period: 'RR', Slash: 'RP',
  Space: 'RT'
};

export const TUTOR_LEVELS = [
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

