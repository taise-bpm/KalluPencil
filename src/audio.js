/**
 * Sound & Haptics Engine
 * Web Audio API synthesized typewriter / soft click sound (zero external asset requests)
 * Vibration API for mobile devices
 */

class SoundAndHaptics {
  constructor() {
    this.audioCtx = null;
    this.soundEnabled = false;
    this.hapticEnabled = true;
    this.initAudio = this.initAudio.bind(this);
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
      // Audio not permitted or suspended, ignore gracefully
    }
  }

  triggerHaptic(duration = 10) {
    if (!this.hapticEnabled) return;
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate(duration);
      } catch {
        // Ignore haptics restriction
      }
    }
  }

  feedback(isSpecial = false) {
    this.playKeyClick(isSpecial);
    this.triggerHaptic(isSpecial ? 18 : 10);
  }
}

export const feedback = new SoundAndHaptics();

