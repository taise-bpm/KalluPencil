# മലയാളം ഇൻസ്ക്രിപ്റ്റ് ടൈപ്പിംഗ് (Malayalam InScript Typing Interface)

A modern, high-performance Malayalam InScript typing web application designed specifically to solve the limitations of existing online tools on **mobile phones, tablets, and desktop computers**, while providing pristine **Malayalam Unicode ligature rendering and editing**.

---

## 🌟 Why This is Better Than Traditional Online Tools

### 1. True Mobile & Tablet Support (No Broken Native Keyboard Overlays)
* **The Problem with Existing Tools:** Online Indic typing web tools only intercept desktop `keydown` events. On Android or iOS mobile/tablet browsers, the native soft keyboard (Gboard, iOS keyboard) pops up, triggers `composition` / `keyCode 229`, violently shifts the viewport, covers 50% of the screen, and fails to map to InScript.
* **Our Solution:** 
  * Features an **adaptive On-Screen InScript Touch Keyboard** specifically engineered for mobile phones and tablets.
  * **Touch Input Mode:** Sets `inputmode="none"` so the native device keyboard is prevented from blocking the screen, allowing smooth, native-app-like typing.
  * **Haptic & Acoustic Feedback:** Real tactile response on mobile taps via the Vibration API (`navigator.vibrate`) and synthesized typewriter audio via the Web Audio API (no external sound files required).
  * **Dynamic Shift & Caps Lock:** Single tap enables Shift for the next character; double-tap locks Caps.

### 2. Solves Malayalam Unicode & Textarea Flaws
* **The Problem with Standard Textareas:** 
  * Standard textareas treat complex Malayalam conjuncts and chillus as raw UTF-16 code units. Pressing Backspace often leaves "floating" or "orphan" combining marks (dotted circles `◌ി`, `◌്`) or invisible ZWJ/ZWNJ characters.
  * System fonts often fail to shape complex conjunct ligatures (കൂട്ടക്ഷരങ്ങൾ) correctly.
* **Our Solution:**
  * **Smart Grapheme Cluster Engine:** Powered by `Intl.Segmenter('ml', { granularity: 'grapheme' })`, Backspace deletes whole linguistic grapheme clusters cleanly, eliminating ghost characters or broken ligatures.
  * **Atomic Chillu Normalizer:** Automatically normalizes traditional consonant + virama + ZWJ sequences into modern Unicode 5.1+ atomic chillu characters (`ൺ`, `ൻ`, `ർ`, `ൽ`, `ൾ`, `ൿ`).
  * **High-Fidelity Malayalam Web Fonts:** Integrated with top OpenType fonts (**Manjari**, **Noto Sans Malayalam**, **Gayathri**, and **Chilanka**) with `font-feature-settings: "liga" 1, "calt" 1, "kern" 1` for flawless ligature shaping.
  * **Live Linguistic Stats:** Real-time calculation of true Malayalam Aksharams (syllables), words, Unicode code points, and lines.

### 3. Dedicated Access Trays
* **InScript QWERTY Layout:** Standard BIS / C-DAC InScript layout with visual English key hints to assist beginners.
* **ചില്ലുകൾ (Chillus) Tray:** One-touch insertion of all 6 atomic chillus (`ൺ`, `ൻ`, `ർ`, `ൽ`, `ൾ`, `ൿ`) and zero-width joiners (`ZWJ`, `ZWNJ`).
* **കൂട്ടക്ഷരങ്ങൾ (Conjuncts) Tray:** Quick palette of 20+ common Malayalam ligatures (`ക്ഷ`, `ജ്ഞ`, `ത്ര`, `ശ്ര`, `പ്ര`, `ക്ക`, `ങ്ങ`, `ച്ച`, `ഞ്ച`, `ട്ട`, `ണ്ട`, `ത്ത`, `ന്ത`, `പ്പ`, `മ്പ`, `മ്മ`, `റ്റ`).
* **അക്കങ്ങൾ (Numerals) Tray:** Malayalam numerals (`൦`, `൧`, `൨`, `൩`, `൪`, `൫`, `൬`, `൭`, `൮`, `൯`) and currency symbol `₹`.

### 4. ⚡ Malayalam Typing Speed Test (1 - 5 Minutes)
* **Customizable Test Durations:** Pick between **1, 2, 3, 4, or 5-minute** timed tests.
* **Authentic Malayalam Passages:** Randomized rich passages covering Kerala literature, science & technology, nature, inspiring quotes, and history.
* **Real-time Live Metrics:** 
  - Live countdown timer with warning alerts.
  - Interactive word stream with real-time green (correct) / red (mistyped) word highlighting.
  - Live Net WPM, Accuracy %, and correct word counters.
* **Comprehensive Results Card:**
  - Net WPM vs Gross WPM.
  - Accuracy percentage and total keystrokes.
  - Performance Rank badges: 🌱 Beginner, 🚀 Intermediate, ⚡ Advanced, 👑 InScript Master.
  - One-click **Copy Result Card** with formatted emoji text to share on WhatsApp, Telegram, or social media!
* **Works on All Devices:** Compatible with both the On-Screen Touch InScript Keyboard (phones/tablets) and Hardware Keyboards (desktops/laptops).

### 5. 🎯 InScript Master Typing Tutor (Standalone Web App - `tutor.html`)
* **Dedicated Standalone App (`tutor.html`):** Can be run standalone or directly opened via URL (`tutor.html#stage=5-1`).
* **Clean, Aligned User Interface:**
  - **Aligned 3-Column Guidance Arena:** Target character highlight box, step-by-step key & finger instruction badges, and an interactive vector SVG dual-hand diagram.
  - **Color-Coded Finger Layout Keyboard:** Interactive on-screen InScript keyboard color-coded by finger zones (Pinky, Ring, Middle, Index, Thumb) with a toggle button.
  - **Live HUD Metrics Bar:** Real-time progress bar, accuracy %, live WPM, and error counter.
  - **Large Streaming Character Ribbon:** Visual cursor highlight, completed text in green, and shake animation on mistyped keys.
* **Atomic Chillu Typing Guidance:** Built-in step-by-step decomposed resolution for Indian standard InScript chillus (`ർ`, `ൽ`, `ൾ`, `ൻ`, `ൺ`, `ൿ`) via `[Consonant] + [്] + [ZWJ]`.
* **Full Local Progress Persistence (`localStorage`):** Remembers all completed lessons, star ratings (up to 60 ⭐ across 20 stages), best WPM, accuracy %, and automatically resumes your last lesson on return.
* **Curriculum Modal:** Interactive drawer listing all 20 lessons across 7 progressive levels with instant lesson jumping.
* **Celebration & Scorecard Sharing:** Stage completion celebration modal with 1-click clipboard scorecard copy for sharing.

### 6. Productive Utilities
* **One-Tap Clipboard Copy:** With instant toast notification.
* **Export Options:** Download as clean UTF-8 text (`.txt` with BOM for universal Notepad/editor compatibility) or Word Document (`.doc` formatted with Malayalam typography).
* **Native Web Share:** Share text directly to WhatsApp, Telegram, or Gmail on mobile (`navigator.share`).
* **Auto-Save:** Continuously persists your draft to `localStorage`—no lost text on browser reload or accidental tab closure.
* **Light / Dark Theme:** Beautiful, accessible glassmorphism UI.
* **Offline PWA Support:** Installable as a standalone app on Android, iOS, iPadOS, macOS, and Windows.

---

## 🚀 How to Run

### Option 1: Direct Browser Access (Zero Installation)
Simply open `index.html` (Editor & Speed Test) or `tutor.html` (Standalone InScript Typing Tutor) directly in any modern web browser. Everything runs client-side with zero external build dependencies!

### Option 2: Local Node.js Server
If you prefer running via a local web server:
```bash
npm start
```
Then open:
* Editor & Speed Test: `http://localhost:3000/` or `http://localhost:3000/index.html`
* Standalone Typing Tutor App: `http://localhost:3000/tutor.html`
* Deep-linked Lessons: `http://localhost:3000/tutor.html#stage=5-1` (or any stage e.g. `1-1` to `7-2`)

---

## ⌨️ InScript Layout Quick Reference

| English Key | Normal (Unshifted) | Shift |
| :---: | :---: | :---: |
| **D** | ് (ചന്ദ്രക്കല / Virama) | അ (A) |
| **E** | ാ (Aa matra) | ആ (AA) |
| **F** | ി (I matra) | ഇ (I) |
| **R** | ീ (Ii matra) | ഈ (II) |
| **G** | ു (U matra) | ഉ (U) |
| **T** | ൂ (Uu matra) | ഊ (UU) |
| **Z** | െ (E matra) | എ (E) |
| **S** | േ (Ee matra) | ഏ (EE) |
| **W** | ൈ (Ai matra) | ഐ (AI) |
| **A** | ോ (Oo matra) | ഓ (OO) |
| **Q** | ൗ (Au matra) | ഔ (AU) |
| **X** | ം (അനുസ്വാരം / Anusvara) | ZWNJ (വിഘടകം) |
| **K** | ക (Ka) | ഖ (Kha) |
| **I** | ഗ (Ga) | ഘ (Gha) |
| **U** | ഹ (Ha) | ങ (Nga) |
| **H** | പ (Pa) | ഫ (Pha) |
| **J** | ര (Ra) | റ (Rra) |
| **L** | ത (Ta) | ഥ (Tha) |
| **;** | ച (Ca) | ഛ (Cha) |
| **'** | ട (Tta) | ഠ (Ttha) |
| **C** | മ (Ma) | ണ (Nna) |
| **V** | ന (Na) | ഩ (Alveolar Na) |
| **B** | വ (Va) | ഴ (Zha) |
| **N** | ല (La) | ള (Lla) |
| **M** | സ (Sa) | ശ (Sha) |
| **,** | , | ഷ (Ssa) |
| **.** | . | ഽ (Avagraha) |
| **/** | യ (Ya) | ? |
| **]** | ZWJ (ലിഗേച്ചർ) | ഞ (Nya) |

---

## 📱 Mobile Installation (PWA)
1. Open the web interface in mobile Safari or Chrome.
2. Tap **Share** (iOS) or the **⋮** menu (Android).
3. Select **"Add to Home Screen"** (ഹോം സ്ക്രീനിലേക്ക് ചേർക്കുക).
4. The Malayalam InScript typing app will open full-screen like a native app with offline support.

