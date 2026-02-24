# 🚀 Portofolio Flask — Deploy ke Vercel (GRATIS)

## 📁 Struktur Folder

```
portfolio/
├── app.py              ← Flask application (entry point)
├── vercel.json         ← Konfigurasi Vercel deployment
├── requirements.txt    ← Python dependencies
├── README.md
├── templates/
│   └── index.html      ← Template HTML utama
└── static/
    ├── css/
    │   └── style.css   ← Styling website
    ├── js/
    │   └── main.js     ← JavaScript (load projects, animasi)
    └── images/
        └── (foto kamu) ← Taruh foto di sini
```

---

## 🛠️ Cara Jalankan Lokal

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Jalankan Flask
python app.py

# 3. Buka browser
http://localhost:5000
```

---

## ☁️ Deploy ke Vercel (GRATIS)

### Prasyarat
- Akun GitHub (gratis)
- Akun Vercel (gratis di vercel.com)

### Langkah-Langkah

**1. Upload ke GitHub**
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

**2. Deploy ke Vercel**
1. Buka https://vercel.com → Login dengan GitHub
2. Klik **"Add New → Project"**
3. Import repo GitHub kamu
4. Vercel otomatis detect Python → klik **Deploy**
5. Selesai! Kamu dapat URL gratis seperti: `https://portfolio-namakamu.vercel.app`

---

## ✏️ Cara Kustomisasi

| Apa yang diubah | Di mana |
|---|---|
| Nama & deskripsi | `templates/index.html` |
| Warna & font | `static/css/style.css` (bagian `:root`) |
| Data proyek | `app.py` → fungsi `projects()` |
| Email & sosmed | `templates/index.html` bagian contact |
| Foto profil | `static/images/` lalu update HTML |

---

## ⚡ Tips

- **Custom Domain**: Di Vercel → Settings → Domains → tambah domain kamu sendiri (jika punya)
- **Update**: Setiap `git push` ke GitHub, Vercel otomatis redeploy
- **Analytics**: Aktifkan Vercel Analytics (gratis) untuk lihat traffic








------------------



index.html


<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Saya</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">Portfolio</div>
            <ul class="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <h1 class="hero-title">Halo, Saya <span class="highlight">Nama Anda</span></h1>
            <p class="hero-subtitle">Web Developer | Designer | Programmer</p>
            <a href="#projects" class="btn">Lihat Karya Saya</a>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">Tentang Saya</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Saya adalah seorang web developer yang passionate dalam menciptakan aplikasi web yang fungsional dan menarik. Dengan pengalaman dalam Python, JavaScript, dan berbagai framework modern.</p>
                    <p>Saya selalu tertarik untuk belajar teknologi baru dan mengerjakan proyek yang menantang.</p>
                </div>
                <div class="skills">
                    <h3>Skills</h3>
                    <div class="skill-item">
                        <span>Python</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 90%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <span>Flask/Django</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <span>HTML/CSS</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 95%"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <span>JavaScript</span>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 80%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Proyek Saya</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">
                        <img src="{{ url_for('static', filename='images/project1.jpg') }}" alt="Project 1">
                    </div>
                    <div class="project-info">
                        <h3>E-Commerce Website</h3>
                        <p>Website e-commerce lengkap dengan sistem pembayaran dan manajemen produk</p>
                        <div class="project-tags">
                            <span>Python</span>
                            <span>Flask</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="{{ url_for('static', filename='images/project2.jpg') }}" alt="Project 2">
                    </div>
                    <div class="project-info">
                        <h3>Portfolio Website</h3>
                        <p>Website portfolio responsif dengan desain modern dan interaktif</p>
                        <div class="project-tags">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </div>

                <div class="project-card">
                    <div class="project-image">
                        <img src="{{ url_for('static', filename='images/project3.jpg') }}" alt="Project 3">
                    </div>
                    <div class="project-info">
                        <h3>Data Analysis Dashboard</h3>
                        <p>Dashboard interaktif untuk visualisasi dan analisis data</p>
                        <div class="project-tags">
                            <span>Python</span>
                            <span>Pandas</span>
                            <span>Plotly</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Hubungi Saya</h2>
            <div class="contact-content">
                <form class="contact-form">
                    <input type="text" placeholder="Nama" required>
                    <input type="email" placeholder="Email" required>
                    <textarea placeholder="Pesan Anda" rows="5" required></textarea>
                    <button type="submit" class="btn">Kirim Pesan</button>
                </form>
                <div class="contact-info">
                    <div class="info-item">
                        <h3>Email</h3>
                        <p>email@example.com</p>
                    </div>
                    <div class="info-item">
                        <h3>Phone</h3>
                        <p>+62 812 3456 7890</p>
                    </div>
                    <div class="info-item">
                        <h3>Social Media</h3>
                        <div class="social-links">
                            <a href="#">GitHub</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Portfolio Saya. All rights reserved.</p>
        </div>
    </footer>

    <script src="{{ url_for('static', filename='js/script.js') }}"></script>
</body>

</html>






-------------------------
style.css


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navbar */
.navbar {
    background: #2c3e50;
    color: white;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.nav-menu a:hover {
    color: #3498db;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 150px 0 100px;
    text-align: center;
    margin-top: 60px;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.highlight {
    color: #f39c12;
}

.hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
}

.btn:hover {
    background: #2980b9;
}

/* Sections */
section {
    padding: 80px 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #2c3e50;
}

/* About Section */
.about {
    background: #f8f9fa;
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.about-text p {
    margin-bottom: 1rem;
    line-height: 1.8;
}

.skills h3 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-bar {
    background: #ddd;
    height: 10px;
    border-radius: 5px;
    margin-top: 0.5rem;
    overflow: hidden;
}

.skill-progress {
    background: linear-gradient(90deg, #667eea, #764ba2);
    height: 100%;
    border-radius: 5px;
    transition: width 1s;
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image {
    height: 200px;
    background: #ddd;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.project-info {
    padding: 1.5rem;
}

.project-info h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.project-tags {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.project-tags span {
    padding: 5px 10px;
    background: #e8f4f8;
    color: #3498db;
    border-radius: 3px;
    font-size: 0.85rem;
}

/* Contact Section */
.contact {
    background: #f8f9fa;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.info-item h3 {
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    color: #3498db;
    text-decoration: none;
}

/* Footer */
.footer {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

/* Responsive */
@media (max-width: 768px) {
    .about-content,
    .contact-content {
        grid-template-columns: 1fr;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .nav-menu {
        display: none;
    }

}





















---

Made with Flask 🐍 + Vercel ▲
