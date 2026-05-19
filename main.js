// ─── Loader ───────────────────────────────────
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderCount = document.getElementById('loader-count');
let count = 0;
const interval = setInterval(() => {
  count += Math.floor(Math.random() * 6) + 2;
  if (count >= 100) { count = 100; clearInterval(interval); setTimeout(() => { loader.classList.add('hidden'); }, 300); }
  loaderBar.style.width = count + '%';
  loaderCount.textContent = String(count).padStart(3, '0');
}, 60);

// ─── Cursor ───────────────────────────────────
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.left = mx + 'px'; cursor.style.top = my + 'px'; });
function animateRing() { rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12; cursorRing.style.left = rx + 'px'; cursorRing.style.top = ry + 'px'; requestAnimationFrame(animateRing); }
animateRing();

// ─── Scroll reveal ────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => observer.observe(el));

// ─── Nav background on scroll ─────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) nav.style.background = 'rgba(5,5,8,0.97)';
  else nav.style.background = 'linear-gradient(to bottom, rgba(5,5,8,0.95) 0%, transparent 100%)';
});

// ─── Magnetic buttons ─────────────────────────
document.querySelectorAll('.btn-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const r = btn.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width/2);
    const dy = e.clientY - (r.top + r.height/2);
    btn.style.transform = `translate(${dx*0.18}px, ${dy*0.22}px)`;
  });
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});