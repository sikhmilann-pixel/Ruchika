import './index.css';

// =========================================================================
// 1. SILKY SCROLL REVEAL OBSERVER
// =========================================================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('is-revealed'));
  }
}

// =========================================================================
// 2. SMOOTH READING PROGRESS BAR
// =========================================================================
function initProgressBar() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.transform = `scaleX(${progress / 100})`;
    }
  }, { passive: true });
}

// =========================================================================
// 3. TRANQUIL CLOSING SCREEN
// =========================================================================
function initClosingScreen() {
  const openBtn = document.getElementById('btn-close-letter');
  const reopenBtn = document.getElementById('btn-reopen-letter');
  const mainContent = document.getElementById('main-content');
  const closedScreen = document.getElementById('closed-screen');
  const progressBar = document.getElementById('scroll-progress');

  if (openBtn && closedScreen && mainContent) {
    openBtn.addEventListener('click', () => {
      mainContent.style.transition = 'opacity 0.8s ease';
      mainContent.style.opacity = '0';
      if (progressBar) progressBar.style.display = 'none';

      setTimeout(() => {
        mainContent.style.display = 'none';
        closedScreen.classList.remove('hidden');
        closedScreen.classList.add('flex');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, 750);
    });
  }

  if (reopenBtn && closedScreen && mainContent) {
    reopenBtn.addEventListener('click', () => {
      closedScreen.classList.add('hidden');
      closedScreen.classList.remove('flex');
      mainContent.style.display = 'block';
      if (progressBar) progressBar.style.display = 'block';
      
      requestAnimationFrame(() => {
        mainContent.style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }
}

// =========================================================================
// 4. AMBIENT SOFT MUSIC SYNTHESIZER (WEB AUDIO API - CLICK ONLY)
// =========================================================================
function initAudioPlayer() {
  const audioBtn = document.getElementById('btn-audio-toggle');
  const iconMuted = document.getElementById('audio-icon-muted');
  const iconPlaying = document.getElementById('audio-icon-playing');
  const audioText = document.getElementById('audio-text');
  const audioPing = document.getElementById('audio-ping');

  if (!audioBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let masterGain = null;
  let loopTimer = null;

  const chords = [
    [155.56, 196.00, 233.08, 293.66, 311.13, 466.16],
    [130.81, 196.00, 233.08, 261.63, 311.13, 392.00],
    [103.83, 155.56, 207.65, 261.63, 311.13, 415.30],
    [116.54, 174.61, 233.08, 293.66, 349.23, 466.16],
  ];

  const playNote = (freq, time, duration = 4.5, gainVal = 0.04) => {
    if (!audioCtx || !masterGain) return;
    
    const osc = audioCtx.createOscillator();
    const noteGain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(850, time);
    filter.frequency.exponentialRampToValueAtTime(300, time + duration);

    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.exponentialRampToValueAtTime(gainVal, time + 0.6);
    noteGain.gain.exponentialRampToValueAtTime(0.00001, time + duration);

    const overtone = audioCtx.createOscillator();
    const overGain = audioCtx.createGain();
    overtone.type = 'triangle';
    overtone.frequency.setValueAtTime(freq * 2.002, time);
    overGain.gain.setValueAtTime(0.00001, time);
    overGain.gain.exponentialRampToValueAtTime(gainVal * 0.25, time + 0.4);
    overGain.gain.exponentialRampToValueAtTime(0.00001, time + duration * 0.7);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(masterGain);

    overtone.connect(overGain);
    overGain.connect(masterGain);

    osc.start(time);
    osc.stop(time + duration);
    overtone.start(time);
    overtone.stop(time + duration);
  };

  const startAmbientLoop = () => {
    let chordIdx = 0;
    const tick = () => {
      if (!audioCtx || audioCtx.state !== 'running') return;
      const now = audioCtx.currentTime;
      const chord = chords[chordIdx];

      chord.forEach((note, i) => {
        const delay = i * 0.35 + Math.random() * 0.08;
        playNote(note, now + delay, 5.5, i === 0 ? 0.06 : 0.035);
      });

      chordIdx = (chordIdx + 1) % chords.length;
      loopTimer = setTimeout(tick, 3800);
    };
    tick();
  };

  audioBtn.addEventListener('click', () => {
    if (!isPlaying) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.35, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      isPlaying = true;
      startAmbientLoop();

      // Update UI to Playing state
      audioBtn.classList.remove('bg-white/65', 'text-[#8E5365]', 'border-[rgba(180,35,77,0.15)]');
      audioBtn.classList.add('bg-[#B4234D]/90', 'text-[#FFF4F6]', 'border-[#E85D7A]/50');
      if (iconMuted) iconMuted.classList.add('hidden');
      if (iconPlaying) iconPlaying.classList.remove('hidden');
      if (audioPing) audioPing.classList.remove('hidden');
      if (audioText) audioText.textContent = 'Soft Music (On)';
    } else {
      isPlaying = false;
      if (loopTimer) clearTimeout(loopTimer);
      if (masterGain && audioCtx) {
        masterGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.5);
      }

      // Update UI to Muted state
      audioBtn.classList.add('bg-white/65', 'text-[#8E5365]', 'border-[rgba(180,35,77,0.15)]');
      audioBtn.classList.remove('bg-[#B4234D]/90', 'text-[#FFF4F6]', 'border-[#E85D7A]/50');
      if (iconMuted) iconMuted.classList.remove('hidden');
      if (iconPlaying) iconPlaying.classList.add('hidden');
      if (audioPing) audioPing.classList.add('hidden');
      if (audioText) audioText.textContent = 'Soft Music (Optional)';
    }
  });
}

// =========================================================================
// 5. LIGHTWEIGHT BACKGROUND CANVAS (PETALS & PARTICLES)
// =========================================================================
function initCanvasParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const isMobile = window.innerWidth < 768;

  const drawPetal = (ctx, x, y, size, angle, opacity) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.bezierCurveTo(size * 0.8, -size * 0.6, size * 0.9, size * 0.5, 0, size);
    ctx.bezierCurveTo(-size * 0.9, size * 0.5, -size * 0.8, -size * 0.6, 0, -size);
    ctx.closePath();
    
    const grad = ctx.createLinearGradient(0, -size, 0, size);
    grad.addColorStop(0, `rgba(255, 220, 230, ${opacity * 0.9})`);
    grad.addColorStop(0.6, `rgba(243, 166, 185, ${opacity * 0.8})`);
    grad.addColorStop(1, `rgba(232, 93, 122, ${opacity * 0.5})`);
    
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.restore();
  };

  const drawHeart = (ctx, x, y, size, opacity) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    const topH = size * 0.3;
    ctx.moveTo(0, topH);
    ctx.bezierCurveTo(-size / 2, -topH, -size, topH / 3, 0, size);
    ctx.bezierCurveTo(size, topH / 3, size / 2, -topH, 0, topH);
    ctx.closePath();
    ctx.fillStyle = `rgba(232, 93, 122, ${opacity * 0.85})`;
    ctx.fill();
    ctx.restore();
  };

  const drawRing = (ctx, x, y, radius, opacity) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(243, 166, 185, ${opacity * 0.35})`;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  };

  const petals = Array.from({ length: isMobile ? 6 : 12 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 8 + 6,
    angle: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.008,
    speedY: Math.random() * 0.35 + 0.18,
    speedX: (Math.random() - 0.5) * 0.25,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: Math.random() * 0.015 + 0.005,
    opacity: Math.random() * 0.35 + 0.2,
  }));

  const hearts = Array.from({ length: isMobile ? 4 : 7 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 5 + 4,
    speedY: -(Math.random() * 0.25 + 0.1),
    speedX: (Math.random() - 0.5) * 0.15,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: Math.random() * 0.012 + 0.004,
    opacity: Math.random() * 0.3 + 0.15,
  }));

  const particles = Array.from({ length: isMobile ? 14 : 26 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.8 + 0.8,
    speedY: -(Math.random() * 0.2 + 0.08),
    speedX: (Math.random() - 0.5) * 0.2,
    opacity: Math.random() * 0.45 + 0.2,
    isWhite: Math.random() > 0.4,
  }));

  const rings = Array.from({ length: isMobile ? 2 : 3 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 35 + 25,
    speedY: (Math.random() - 0.5) * 0.08,
    opacity: Math.random() * 0.2 + 0.1,
  }));

  const render = () => {
    ctx.clearRect(0, 0, width, height);

    rings.forEach((r) => {
      r.y += r.speedY;
      if (r.y < -50) r.y = height + 50;
      if (r.y > height + 50) r.y = -50;
      drawRing(ctx, r.x, r.y, r.radius, r.opacity);
    });

    particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;
      if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isWhite ? `rgba(255, 255, 255, ${p.opacity})` : `rgba(243, 166, 185, ${p.opacity})`;
      ctx.fill();
    });

    hearts.forEach((h) => {
      h.y += h.speedY;
      h.wobble += h.wobbleSpeed;
      h.x += h.speedX + Math.sin(h.wobble) * 0.2;
      if (h.y < -20) { h.y = height + 20; h.x = Math.random() * width; }
      if (h.x < -20) h.x = width + 20;
      if (h.x > width + 20) h.x = -20;
      drawHeart(ctx, h.x, h.y, h.size, h.opacity);
    });

    petals.forEach((pt) => {
      pt.y += pt.speedY;
      pt.wobble += pt.wobbleSpeed;
      pt.angle += pt.rotSpeed;
      pt.x += pt.speedX + Math.cos(pt.wobble) * 0.35;
      if (pt.y > height + 25) { pt.y = -25; pt.x = Math.random() * width; }
      if (pt.x < -25) pt.x = width + 25;
      if (pt.x > width + 25) pt.x = -25;
      drawPetal(ctx, pt.x, pt.y, pt.size, pt.angle, pt.opacity);
    });

    requestAnimationFrame(render);
  };

  // Start after browser initial paint
  setTimeout(() => {
    requestAnimationFrame(render);
  }, 80);
}

// =========================================================================
// INITIALIZE ON DOM READY
// =========================================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initProgressBar();
    initClosingScreen();
    initAudioPlayer();
    initCanvasParticles();
  });
} else {
  initScrollReveal();
  initProgressBar();
  initClosingScreen();
  initAudioPlayer();
  initCanvasParticles();
}
