// ===== MOBILE MENU =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav')) {
    document.getElementById('navLinks').classList.remove('open');
  }
});

// ===== NAV SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ===== ACTIVE NAV LINKS =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 130) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ===== SCROLL REVEAL =====
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

// ===== LOAD PROJECTS FROM API =====
async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  try {
    const res = await fetch('/api/projects');
    if (!res.ok) throw new Error('Network error');
    const projects = await res.json();

    grid.innerHTML = projects.map((p, i) => `
      <div class="project-card reveal" style="transition-delay:${i * 0.08}s">
        <div class="project-num">0${i + 1}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.link && p.link !== '#' ? `<a href="${p.link}" target="_blank" rel="noopener">GitHub ↗</a>` : ''}
          ${p.live && p.live !== '#' ? `<a href="${p.live}" target="_blank" rel="noopener">Live Demo ↗</a>` : ''}
        </div>
      </div>
    `).join('');

    // Re-observe new elements
    observeReveal();
  } catch (e) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:3rem; color:var(--muted); font-family:var(--font-mono); font-size:0.82rem">
        Gagal memuat proyek. Pastikan server berjalan.
      </div>`;
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Mark reveal targets
  document.querySelectorAll('.about-grid > *, .contact-inner, .skill-group, .stat').forEach(el => {
    el.classList.add('reveal');
  });

  observeReveal();
  loadProjects();
});
