// ── CURSOR ──
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  setTimeout(() => {
    trail.style.left = mx + 'px';
    trail.style.top = my + 'px';
  }, 80);
});

document.addEventListener('mousedown', () => {
  cursor.style.width = '20px';
  cursor.style.height = '20px';
});
document.addEventListener('mouseup', () => {
  cursor.style.width = '12px';
  cursor.style.height = '12px';
});

// Reason cards: spotlight effect
document.querySelectorAll('.reason-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
});

// ── PARTICLES ──
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.pulse = Math.random() * Math.PI * 2;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.pulse += 0.02;
    const dist = Math.hypot(this.x - mx, this.y - my);
    if (dist < 120) {
      const angle = Math.atan2(this.y - my, this.x - mx);
      this.x += Math.cos(angle) * 0.8;
      this.y += Math.sin(angle) * 0.8;
    }
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    const o = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse));
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(232,160,180,${o})`;
    ctx.fill();
  }
}

for (let i = 0; i < 120; i++) particles.push(new Particle());

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ── SCROLL OBSERVER ──
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('lit');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.letter-line, .future-item').forEach(el => io.observe(el));

// NAV DOTS
const sections = document.querySelectorAll('section');
const dots = document.querySelectorAll('.nav-dot');
const sectionIds = ['hero','name-section','letter-section','reasons-section','future-section','bestie-section','secret-section','reply-section'];

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const idx = sectionIds.indexOf(e.target.id);
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    document.getElementById(sectionIds[i]).scrollIntoView({ behavior: 'smooth' });
  });
});

// ── 100 REASONS ──
const reasons = [
  "The way your voice light up when u talk about movie's u lovee",
  "How ur voice can change my mood..despite 13 days away!",
  "How we find time for each other despite everything",
  "The sound of your laugh...I could live inside it",
  "Ur excitement towards cute babies",
  "The way u make me look forward to ur call all day",
  "How u wish me ALL THE BEST before every exam",
  "How ur goodnight texts feels like a hug at the end of the day!",
  "How ur goodmrng texts feels like a a hug at the start of a day!",
  "Your softness in a world that tells u to be hard",
  "How deeply u feel things which is not a weakness u know, it's a gift",
  //
  "The quiet strength u carry without even realising it",
  "The way we have built something that is ours",
  "Ur beautiful and cute! offcourse",
  "The way ur voice just ur voice can flip my terrible mood", //
  "Ur voicenotes bby...purely addicting part of my meal", //
  "How u feel like a home even from a distance",
  "The way u r exited about food",
//   "The way you make me want to be better",
//   "How you laugh at your own jokes before the punchline",
//   "Your stubbornness when it comes to things that matter",
//   "The way you feel like home",
//   "How you overthink things because you genuinely care so much",
//   "Your patience — more than you give yourself credit for",
//   "The way you notice when someone's having a hard day",
//   "How you pour yourself completely into the things you love",
//   "Your heart — the size of it, the depth of it",
//   "The way you make everyone feel seen",
//   "How you've never once made me feel alone",
//   "The way you roll your eyes when I say something ridiculous",
//   "Your voice — talking to you is my favourite part of every day",
//   "How you know when I need your hand without me saying anything",
//   "Your hope — you believe in good endings even when it's hard",
//   "The way you love things without apology",
//   "How you carry your sensitivity like armour, not a wound",
//   "Your mind — the way it moves, the way it surprises me",
//   "The way you fight for the people you care about",
//   "How you try to understand before you judge",
//   "Your gentleness with living things",
//   "The way you get genuinely excited about little things",
//   "How honest your face is — every feeling written clearly",
//   "Your ability to make anywhere feel like somewhere special",
//   "The way you ask good questions",
//   "How you make me feel like the luckiest person alive",
//   "Your kindness — it's not performative, it's just who you are",
//   "The way you take care of yourself even when it's hard",
//   "How you let yourself be loved",
//   "Your trust in me — I don't take it lightly",
//   "The way you say my name",
//   "How you are with children and animals and old people",
//   "Your taste — in everything, always",
//   "The way you sit in comfortable silence and make it feel like enough",
//   "How you never stop learning",
//   "Your ability to laugh at yourself",
//   "The way you make mornings worth waking up for",
//   "How your presence is its own kind of calm",
//   "The way you've grown and kept growing",
//   "Your dreams — how big they are, how real you make them feel",
//   "How you never give less than everything",
//   "Your capacity for joy — it's contagious",
//   "The way you apologise when you're wrong, without drama",
//   "How you've taught me things I didn't know I needed to learn",
//   "Your attention — when you're present, you're really present",
//   "The way you get lost in things you love",
//   "How you always make time for the people who matter",
//   "Your sense of what's fair — I deeply admire it",
//   "The way you handle hard things without asking for applause",
//   "How you love me on the days I'm hardest to love",
//   "Your ability to find the funny in almost everything",
//   "The way you carry grief without letting it hollow you out",
//   "How you are exactly who you say you are — no performance",
//   "Your softness with yourself on the days you try to be harsh",
//   "The way your mind works — lateral, creative, surprising",
//   "How you show up for people even when you're exhausted",
//   "Your beauty — inside and absolutely outside too",
//   "The way you hold your convictions without needing everyone to agree",
//   "How you've made me braver",
//   "Your warmth with strangers — you see people",
//   "The way you talk about your future like it's already worth arriving at",
//   "How your smile changes the whole room",
//   "Your faith in the people around you",
//   "The way you keep promises",
//   "How you love deeply and without conditions",
//   "Your work ethic — the quiet dedication you bring to everything",
//   "The way you let yourself dream out loud with me",
//   "How you've stood in rooms full of doubt and kept walking forward",
//   "Your tenderness",
//   "The way you are when no one is watching",
//   "How you carry your family in your heart everywhere you go",
//   "Your gratitude — you notice what you have",
//   "The way you handle pressure without letting it change who you are",
//   "How you make everything more interesting",
//   "Your capacity to grow from hard things",
//   "The way you never waste a sunset",
//   "How deeply rooted you are in your values",
  "Your VOICE....favourite thing about my day , maybee!",
  "The way you are entirely, completely yourself",
  "How being with you feels like the best decision I ever made"
];

// ── REASONS REVEAL ──
let reasonsRevealed = 0;
const grid = document.getElementById('reasons-grid');

function revealReason() {
  if (reasonsRevealed >= reasons.length) return;
  const i = reasonsRevealed;
  const el = document.createElement('div');
  el.className = 'reason-card reason-card-new';
  el.innerHTML = `<span class="reason-num">${String(i+1).padStart(2,'0')}</span><p class="reason-text">${reasons[i]}</p>`;
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
  });
  grid.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('reason-card-visible')));
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  reasonsRevealed++;
//   document.getElementById('reason-counter').textContent = reasonsRevealed + ' / 100';
  const sub = document.getElementById('btn-sub');
  if (reasonsRevealed === reasons.length) {
    document.getElementById('reveal-btn').classList.add('done');
    document.getElementById('all-done').style.display = 'block';
  } else if (reasonsRevealed === 1) {
    sub.textContent = 'keep going →';
  } else {
    sub.textContent = (reasons.length - reasonsRevealed) + ' more';
  }
}

// ── AI MESSAGE GENERATOR ──
async function generateMessage() {
  const name = document.getElementById('name-input').value.trim();
  if (!name) return;
  const output = document.getElementById('message-output');
  const loading = document.getElementById('message-loading');
  loading.style.display = 'none';

  const message = `Lessgooo ur finally free babeee....I got u to type ur name bcz ur name is beautiful..So why not`; 

  output.textContent = message;
  output.classList.add('visible');
}

document.getElementById('name-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') generateMessage();
});

// ── PASSWORD ──
// ── PASSWORD ──
const SECRET_PASSWORD = 'yashruti';

function checkPassword() {
  const val = document.getElementById('pw-input').value.trim().toLowerCase();
  const err = document.getElementById('pw-error');
  if (val === SECRET_PASSWORD) {
    document.getElementById('secret-content').style.display = 'block';
    document.getElementById('lock-icon').textContent = '🔓';
    document.getElementById('lock-icon').classList.add('unlocked');
    err.style.display = 'none';
    document.getElementById('pw-input').closest('.pw-wrap').style.opacity = '0.4';
  } else {
    err.style.display = 'block';
    document.getElementById('pw-input').value = '';
    document.getElementById('pw-input').style.borderColor = '#e87070';
    setTimeout(() => document.getElementById('pw-input').style.borderColor = '', 1000);
  }
}

// Works on both desktop (click) and mobile (touchend)
const unlockBtn = document.getElementById('unlock-btn');
if (unlockBtn) {
  ['click', 'touchend'].forEach(evt => {
    unlockBtn.addEventListener(evt, e => {
      e.preventDefault();
      checkPassword();
    });
  });
}

document.getElementById('pw-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') checkPassword();
});

// ── REPLY (uses Claude API to store/acknowledge) ──
async function sendReply() {
  const text = document.getElementById('reply-text').value.trim();
  if (!text) return;
  const btn = document.querySelector('.reply-btn');
  btn.textContent = 'sending…';
  btn.disabled = true;

  // Store in localStorage as fallback (in real deployment, use a backend)
  const replies = JSON.parse(localStorage.getItem('her-replies') || '[]');
  replies.push({ text, time: new Date().toISOString() });
  localStorage.setItem('her-replies', JSON.stringify(replies));

  await new Promise(r => setTimeout(r, 1000));
  document.getElementById('reply-thanks').style.display = 'block';
  document.getElementById('reply-text').value = '';
  btn.style.display = 'none';
}