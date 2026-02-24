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

---

Made with Flask 🐍 + Vercel ▲
