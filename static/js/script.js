// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#1a252f';
    } else {
        navbar.style.background = '#2c3e50';
    }
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
    e.target.reset();
});