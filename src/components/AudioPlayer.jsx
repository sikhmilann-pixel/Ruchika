import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);
  const masterGainRef = useRef(null);

  // Soothing chord progression notes in Hz (Eb Major 7, Cm9, Ab Maj7, Bb add9)
  const chords = [
    [155.56, 196.00, 233.08, 293.66, 311.13, 466.16],
    [130.81, 196.00, 233.08, 261.63, 311.13, 392.00],
    [103.83, 155.56, 207.65, 261.63, 311.13, 415.30],
    [116.54, 174.61, 233.08, 293.66, 349.23, 466.16],
  ];

  const playNote = (freq, time, duration = 4.5, gainVal = 0.04) => {
    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    
    const osc = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(850, time);
    filter.frequency.exponentialRampToValueAtTime(300, time + duration);

    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.exponentialRampToValueAtTime(gainVal, time + 0.6);
    noteGain.gain.exponentialRampToValueAtTime(0.00001, time + duration);

    const overtone = ctx.createOscillator();
    const overGain = ctx.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2.002, time);
    overGain.gain.setValueAtTime(0.00001, time);
    overGain.gain.exponentialRampToValueAtTime(gainVal * 0.25, time + 0.4);
    overGain.gain.exponentialRampToValueAtTime(0.00001, time + duration * 0.7);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(masterGainRef.current);

    overtone.connect(overGain);
    overGain.connect(masterGainRef.current);

    osc.start(time);
    osc.stop(time + duration);
    overtone.start(time);
    overtone.stop(time + duration);
  };

  const startAmbientLoop = () => {
    let currentChordIdx = 0;
    
    const tick = () => {
      if (!audioCtxRef.current || audioCtxRef.current.state !== 'running') return;
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      const chord = chords[currentChordIdx];

      chord.forEach((note, i) => {
        const delay = i * 0.35 + Math.random() * 0.08;
        playNote(note, now + delay, 5.5, i === 0 ? 0.06 : 0.035);
      });

      currentChordIdx = (currentChordIdx + 1) % chords.length;
      timerRef.current = setTimeout(tick, 3800);
    };

    tick();
  };

  const toggleAudio = () => {
    if (!isPlaying) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
        const master = audioCtxRef.current.createGain();
        master.gain.setValueAtTime(0.35, audioCtxRef.current.currentTime);
        master.connect(audioCtxRef.current.destination);
        masterGainRef.current = master;
      }
      
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);
      startAmbientLoop();
    } else {
      setIsPlaying(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (masterGainRef.current && audioCtxRef.current) {
        masterGainRef.current.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.5);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch(e) {}
      }
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
        className={`group flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-400 backdrop-blur-md text-xs tracking-wider uppercase font-medium shadow-xs ${
          isPlaying
            ? 'bg-[#B4234D]/90 text-[#FFF4F6] border-[#E85D7A]/50 shadow-rose-950/20'
            : 'bg-white/65 text-[#8E5365] border-[rgba(180,35,77,0.15)] hover:border-[#E85D7A]/40 hover:bg-white/85 hover:text-[#4A1527]'
        }`}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F3A6B9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F3A6B9]"></span>
            </span>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#FFF4F6]" />
            <span className="hidden sm:inline font-sans text-[11px] font-medium tracking-widest text-[#FFF4F6]">Soft Music (On)</span>
            <span className="sm:hidden font-sans text-[10px]">On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-[#8E5365] group-hover:text-[#4A1527] transition-colors" />
            <span className="hidden sm:inline font-sans text-[11px] text-[#8E5365] group-hover:text-[#4A1527] transition-colors">Soft Music (Optional)</span>
            <span className="sm:hidden font-sans text-[10px] text-[#8E5365]">Music</span>
          </>
        )}
      </button>
    </div>
  );
}
