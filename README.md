# Portfolio

# Personal Portfolio Website 🚀

Ini adalah repositori untuk website portofolio pribadi saya. Website ini dirancang dengan gaya *dark mode* yang modern, tipografi yang kuat, dan animasi interaktif. 

Untuk memudahkan proses *maintenance* dan pengembangan, struktur HTML pada website ini telah dipecah menjadi komponen-komponen modular menggunakan PHP.

## ✨ Fitur Utama
- **Modular Component:** Menggunakan fungsi `include` PHP untuk memisahkan bagian header, navbar, hero, about, dll.
- **Custom Cursor & Animasi:** Dilengkapi dengan kursor kustom, efek *scroll reveal*, teks *glitch*, dan tombol magnetik menggunakan Vanilla JavaScript.
- **Responsive Design:** Tata letak yang beradaptasi dengan baik di perangkat seluler maupun desktop.

## 🛠️ Tech Stack
- **Struktur & Logika:** HTML5, PHP 
- **Styling:** CSS3, [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Interaktivitas:** Vanilla JavaScript
- **Fonts:** Google Fonts (Syne, DM Mono, DM Sans)

## 📂 Struktur Direktori

```text
/
├── index.php             # Halaman utama yang merakit semua komponen
├── styles.css            # Custom CSS untuk kursor, grain overlay, dan animasi
├── tailwind.config.js    # Konfigurasi kustom tema Tailwind
├── main.js               # Skrip logika untuk animasi dan interaksi
├── ETR06798-min.jpg      # Aset gambar/foto profil
└── /components           # Folder berisi potongan-potongan section UI
    ├── head.php
    ├── loader.php
    ├── navbar.php
    ├── hero.php
    ├── about.php
    ├── projects.php
    ├── skills.php
    ├── blog.php
    └── contact.php
    └── footer.php
