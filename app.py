from flask import Flask, render_template, jsonify

app = Flask(__name__)

# ==============================
# DATA — Edit sesuai kebutuhan!
# ==============================

PROFILE = {
    "name": "Farhan Alifviandi",
    "role": "Full-Stack Developer & Problem Solver",
    "tagline": "Saya membangun produk digital yang elegan, cepat, dan berdampak nyata.",
    "bio1": "Dengan pengalaman lebih dari 3 tahun membangun aplikasi web dan mobile, saya fokus menciptakan solusi yang tidak hanya bekerja — tetapi <strong>bekerja dengan indah</strong>.",
    "bio2": "Saya percaya bahwa kode yang baik seperti prosa yang baik: mudah dibaca, jelas tujuannya, dan efisien.",
    "stats": [
        {"num": "20+", "label": "Proyek Selesai"},
        {"num": "15+", "label": "Klien Puas"},
        {"num": "3+",  "label": "Tahun Pengalaman"},
    ],
    "email": "farhanalifviandi60@gmail.com",
    "github": "https://github.com/farhanalifviandi",
    "linkedin": "https://linkedin.com/in/farhan-alifviandi",
    "instagram": "https://instagram.com/farhan_alifviandi",
    "photo": "PRD04682.jpg",
}

PROJECTS = [
    {
        "id": 1,
        "title": "E-Commerce Platform",
        "desc": "Full-stack marketplace dengan payment gateway dan sistem manajemen produk.",
        "tech": ["Python", "Django", "PostgreSQL", "Stripe"],
        "link": "#",
        "live": "#",
    },
    {
        "id": 2,
        "title": "AI Chat Dashboard",
        "desc": "Real-time analytics dashboard untuk monitoring penggunaan LLM.",
        "tech": ["React", "FastAPI", "Redis", "WebSocket"],
        "link": "#",
        "live": "#",
    },
    {
        "id": 3,
        "title": "Mobile Banking App",
        "desc": "Aplikasi fintech dengan autentikasi biometrik dan transfer real-time.",
        "tech": ["Flutter", "Go", "AWS", "Firebase"],
        "link": "#",
        "live": "#",
    },
    {
        "id": 4,
        "title": "Data Pipeline ETL",
        "desc": "Pipeline otomatis untuk memproses lebih dari 10 juta record per hari.",
        "tech": ["Airflow", "Spark", "BigQuery", "Python"],
        "link": "#",
        "live": "#",
    },
]

SKILLS = [
    {"category": "Backend",        "items": ["Python", "Flask", "Django", "FastAPI", "Node.js", "Go"]},
    {"category": "Frontend",       "items": ["HTML/CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"]},
    {"category": "Database",       "items": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "BigQuery"]},
    {"category": "DevOps & Tools", "items": ["Docker", "Git", "Vercel", "AWS", "Linux", "CI/CD"]},
]

@app.route('/')
def index():
    return render_template('index.html', profile=PROFILE, skills=SKILLS)

@app.route('/api/projects')
def projects():
    return jsonify(PROJECTS)

if __name__ == '__main__':
    app.run(debug=True)

