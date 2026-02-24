// // Smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// // Navbar background on scroll
// window.addEventListener('scroll', () => {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 50) {
//         navbar.style.background = '#1a252f';
//     } else {
//         navbar.style.background = '#2c3e50';
//     }
// });

// // Form submission
// document.querySelector('.contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Terima kasih! Pesan Anda telah terkirim.');
//     e.target.reset();

// });


// ===== MOBILE MENU =====
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ===== LOAD PROJECTS FROM API =====
async function loadProjects() {
  const grid = document.getElementById('projects-grid');
  try {
    const res = await fetch('/api/projects');
    const projects = await res.json();
    grid.innerHTML = projects.map((p, i) => `
      <div class="project-card reveal" style="transition-delay:${i * 0.1}s">
        <div class="project-num">0${i+1}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
    observeReveal();
  } catch(e) {
    grid.innerHTML = '<p style="color:var(--muted);font-family:var(--font-mono);font-size:0.85rem">Gagal memuat proyek.</p>';
  }
}

// ===== SCROLL REVEAL =====
function observeReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

// Mark sections as reveal targets
document.querySelectorAll('.about-grid, .skills-grid, .contact-inner, .stat').forEach(el => {
  el.classList.add('reveal');
});

// ===== ACTIVE NAV =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
  });
}, { passive: true });

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  loadProjects();
  observeReveal();
});
