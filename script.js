/**
 * JIMLY ASIDIQ ANWAR — PORTFOLIO INTERACTION ENGINE
 * Features:
 * - Dynamic Neon Accent Picker (Violet, Cyan, Emerald, Amber)
 * - Bento Grid Interactive Cursor Light & Card Hover Glow
 * - Interactive Project Modal Lightbox with Full Details
 * - Filter System for Academic & Technical Projects
 * - Copy Email to Clipboard with Toast Notification
 * - Smooth Scroll & Active Nav Spy
 * - Mobile Navigation Drawer
 */

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. PROJECT & MODAL DATA STORE
    // ==========================================
    const projectDetails = {
        'modal-optihouse': {
            title: 'Sistem Informasi Penjualan Web — Optik Optihouse',
            subtitle: 'Proyek Skripsi S1 Teknik Informatika Universitas Pancasila (Lulus 2026)',
            date: '2025 — 2026',
            category: 'Web Engineering & Fullstack',
            img: 'assets/optihouse.jpg',
            description: `
                <p><strong>Optik Optihouse</strong> adalah sistem informasi penjualan berbasis web komprehensif yang dirancang dan dikembangkan sebagai tugas akhir skripsi S1 Teknik Informatika di Universitas Pancasila. Sistem ini menyelesaikan permasalahan operasional optik dengan <strong>mengintegrasikan transaksi offline (toko fisik) dan online (e-commerce customer)</strong> ke dalam satu basis data terpusat secara real-time.</p>
                <br>
                <p><strong>Fitur Unggulan & Inovasi Sistem:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li><strong>Integrasi Hybrid (Offline & Online):</strong> Menggabungkan alur kasir offline di gerai fisik dengan toko online berbasis web, menjamin sinkronisasi stok frame kacamata, lensa, softlens, dan aksesoris secara instan tanpa selisih inventaris.</li>
                    <li><strong>Sistem Point of Sale (POS) Kasir Lengkap:</strong> Dirancang khusus untuk kasir toko optik dengan antarmuka cepat, pencarian rekam customer, input kustomisasi lensa resep, pembayaran tunai atau QRIS, hingga cetak nota transaksi.</li>
                    <li><strong>Virtual Try-On (VTO) Interaktif:</strong> Fitur inovatif pencocokan kacamata berbasis kalibrasi bentuk wajah pengguna (oval, bulat, kotak, hati, segitiga) untuk pengalaman belanja interaktif yang akurat.</li>
                    <li><strong>Manajemen Resep Medis Kacamata (Prescriptions):</strong> Fitur penyimpanan dan penerapan resep mata presisi (Spherical/SPH, Cylinder/CYL, Axis, Addition/ADD, dan Pupillary Distance/PD) langsung saat proses checkout produk.</li>
                    <li><strong>Manajemen 6 Aktor (Role-Based Access Control):</strong> Pembagian wewenang sistem yang ketat dan aman untuk <em>Customer, Kasir (POS), Petugas Stok (Inventory & Pengadaan), Admin Master Data, Pemilik (Owner),</em> dan <em>Mitra Supplier</em>.</li>
                    <li><strong>Pengadaan Barang (Procurement) & Laporan Analytics:</strong> Modul pencatatan restok pesanan ke supplier optik, pemantauan status pesanan progressive, serta otomasi ekspor laporan penjualan PDF untuk audit pemilik usaha.</li>
                </ul>
                <p><strong>Arsitektur Teknologi:</strong> Dibangun dengan framework <strong>Laravel (PHP)</strong> berbasis arsitektur MVC, database relasional <strong>MySQL</strong> teroptimasi, antarmuka modern responsif dengan <strong>Tailwind CSS & Blade</strong>, serta interaksi dinamis menggunakan JavaScript.</p>
            `,
            tags: [
                'Laravel PHP',
                'MySQL Database',
                'Point of Sale (POS)',
                'Virtual Try-On (VTO)',
                'Hybrid Online & Offline',
                'Prescription Management',
                'Tailwind CSS',
                '6 Multi-Role RBAC',
                'Laporan PDF Export',
                'Proyek Skripsi S1'
            ]
        },
        'modal-menara': {
            title: 'PT Menara Indonesia — UI/UX Designer (Magang Industri)',
            subtitle: 'Pengalaman Magang Profesional di Tangerang, Indonesia',
            date: 'Agu 2025 — Jan 2026',
            category: 'UI/UX Design',
            img: 'assets/menara.jpg',
            description: `
                <p>Menjalani program magang profesional sebagai <strong>UI/UX Designer</strong> di <strong>PT Menara Indonesia</strong> (Tangerang), bertanggung jawab penuh dalam perancangan produk digital berskala nyata, riset kebutuhan antarmuka pengguna, hingga penyelarasan implementasi teknis bersama tim developer.</p>
                <br>
                <p><strong>Tanggung Jawab & Capaian Kunci Selama Magang:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li><strong>Perancangan Menyeluruh Kerjadiluar.id:</strong> Menyusun rancangan UI/UX secara menyeluruh untuk website <em>Kerjadiluar.id</em> menggunakan Figma, mulai dari pembuatan wireframe (low-fidelity), perancangan alur navigasi pengguna (user flow), penyusunan prototipe interaktif, hingga penyelesaian high-fidelity design akhir.</li>
                    <li><strong>Desain Antarmuka Mknows.com:</strong> Mendesain antarmuka <em>Mknows.com</em> yang difokuskan pada kemudahan membaca konten (content readability) serta navigasi yang lebih intuitif dan nyaman bagi pengguna.</li>
                    <li><strong>Kolaborasi Intensif dengan Tim Developer:</strong> Bekerja sama secara aktif dengan tim developer guna memastikan hasil coding website di sisi frontend sejalan dan presisi dengan mockup desain yang telah dibuat (developer handoff).</li>
                    <li><strong>Iterasi & Umpan Balik Pengguna:</strong> Melakukan penyesuaian dan perbaikan desain secara berkala berdasarkan masukan dari tim internal serta kebutuhan analitis pengguna.</li>
                </ul>
                <div style="margin-top: 16px; padding: 14px 16px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
                    <p style="font-size: 0.88rem; font-weight: 700; color: #fff; margin: 0 0 6px 0;">Proyek Desain Unggulan yang Dihasilkan Selama Magang:</p>
                    <p style="font-size: 0.82rem; color: var(--text-secondary); margin: 0; line-height: 1.6;">
                        &bull; <strong>Kerjadiluar.id:</strong> Desain portal lowongan karir & peluang kerja luar negeri.<br>
                        &bull; <strong>Mknows.com:</strong> Redesain antarmuka portal pelatihan edukasi & corporate training.
                    </p>
                </div>
            `,
            tags: [
                'PT Menara Indonesia',
                'UI/UX Designer',
                'Magang Industri',
                'Figma',
                'Kerjadiluar.id',
                'Mknows.com',
                'Wireframing',
                'Interactive Prototyping',
                'Developer Handoff',
                'Design System'
            ]
        },
        'modal-kerjadiluar': {
            title: 'Kerjadiluar.id — Desain UI/UX Platform Karir Global',
            subtitle: 'Proyek Magang UI/UX Designer di PT Menara Indonesia',
            date: 'Agu 2025 — Jan 2026',
            category: 'UI/UX Design',
            img: 'assets/kerjadiluar.jpg',
            figmaLink: 'https://www.figma.com/design/XRwCkEVjMxSPdJn62f0wqR/Copy-kerjadiluar?node-id=0-1&t=RrYliyDZ1nCOEMH0-1',
            description: `
                <p>Selama magang di <strong>PT Menara Indonesia</strong> (Tangerang), saya merancang antarmuka pengguna (UI/UX) secara menyeluruh untuk platform <strong>Kerjadiluar.id</strong> — sebuah portal informasi lowongan karir dan peluang kerja internasional terpercaya bagi tenaga kerja profesional Indonesia.</p>
                <br>
                <p><strong>Capaian & Alur Kerja Desain:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li><strong>Riset Pengguna & Wireframing:</strong> Memetakan user journey pelamar kerja internasional dan merancang wireframe struktural (low-fidelity) dengan fokus navigasi pencarian berbasis negara tujuan (Jepang, Jerman, Australia, Singapura, dll).</li>
                    <li><strong>Design System & High-Fidelity Mockups:</strong> Membangun komponen UI reusable di <strong>Figma</strong> (search filter cards, job detail modal, dashboard pelamar, dan status lamaran) dengan estetika modern, kartu lowongan intuitif, dan tipografi clean.</li>
                    <li><strong>Interactive Prototyping:</strong> Menyusun interaksi alur klik prototipe interaktif untuk pengujian kelancaran alur pelamaran kerja lintas perangkat (desktop & mobile).</li>
                    <li><strong>Developer Handoff:</strong> Bekerja sama aktif dengan tim frontend developer guna memastikan hasil coding website konsisten piksel-demi-piksel dengan mockup Figma yang telah disepakati.</li>
                </ul>
                <div style="margin-top: 16px; padding: 12px 14px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 12px;">
                    <img src="assets/menara.jpg" alt="Tim PT Menara Indonesia" style="width: 64px; height: 46px; object-fit: cover; border-radius: 8px; flex-shrink: 0;">
                    <div>
                        <p style="font-size: 0.85rem; font-weight: 700; color: #fff; margin: 0;">Magang di PT Menara Indonesia (Tangerang)</p>
                        <p style="font-size: 0.76rem; color: var(--text-muted); margin: 0;">Kolaborasi intensif bersama tim tech developer & product management.</p>
                    </div>
                </div>
            `,
            tags: ['Figma', 'UI/UX Design', 'Kerjadiluar.id', 'PT Menara Indonesia', 'Interactive Prototype', 'Design System', 'Developer Handoff', 'User Research']
        },
        'modal-mknows': {
            title: 'Mknows.com — Redesain UI/UX Portal Edukasi & Pelatihan',
            subtitle: 'Proyek Magang UI/UX Designer di PT Menara Indonesia',
            date: 'Agu 2025 — Jan 2026',
            category: 'UI/UX Design',
            img: 'assets/mknows.jpg',
            figmaLink: 'https://www.figma.com/design/VVdGpqaQl1z3NPHXt4FyGM/Mknows?node-id=0-1&t=2BZrXD5KIG2Oj3mj-1',
            description: `
                <p>Proyek perancangan antarmuka untuk <strong>Mknows.com</strong> di bawah naungan <strong>PT Menara Indonesia</strong>. Mknows adalah portal knowledge management, pelatihan korporat, dan kursus pengembangan kompetensi profesional.</p>
                <br>
                <p><strong>Capaian & Alur Kerja Desain:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li><strong>Peningkatan Readability & Navigasi:</strong> Menata ulang arsitektur informasi modul pelatihan, memprioritaskan keterbacaan materi silabus (content readability), dan menyederhanakan alur pendaftaran pelatihan korporat.</li>
                    <li><strong>Eksplorasi Visual & Design System:</strong> Mengembangkan palet warna emerald korporat, kartu modul pembelajaran, kartu instruktur, serta dashboard tracking progres belajar siswa.</li>
                    <li><strong>Prototipe Interaktif Komprehensif:</strong> Menghubungkan puluhan artboard di <strong>Figma</strong> menjadi prototipe yang siap diuji kelayakannya (usability testing).</li>
                    <li><strong>Penyelarasan dengan Tim Teknis:</strong> Mendampingi tim developer dalam implementasi frontend untuk menjamin keselarasan desain responsif pada berbagai resolusi layar.</li>
                </ul>
                <div style="margin-top: 16px; padding: 12px 14px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; gap: 12px;">
                    <img src="assets/menara.jpg" alt="Tim PT Menara Indonesia" style="width: 64px; height: 46px; object-fit: cover; border-radius: 8px; flex-shrink: 0;">
                    <div>
                        <p style="font-size: 0.85rem; font-weight: 700; color: #fff; margin: 0;">Magang di PT Menara Indonesia (Tangerang)</p>
                        <p style="font-size: 0.76rem; color: var(--text-muted); margin: 0;">Kolaborasi intensif bersama tim tech developer & product management.</p>
                    </div>
                </div>
            `,
            tags: ['Figma', 'UI/UX Design', 'Mknows.com', 'PT Menara Indonesia', 'Corporate EdTech', 'Information Architecture', 'Prototyping', 'Usability Testing']
        },
        'modal-gama': {
            title: 'Gama Multi Group — Cyber Security Engineer',
            subtitle: 'Studi Independen Bersertifikat (Kampus Merdeka)',
            date: 'Sep 2024 — Des 2024',
            category: 'Cyber Security',
            img: 'assets/MULTIGAMA.png',
            description: `
                <p>Selama program Studi Independen di Gama Multi Group, saya berperan aktif sebagai <strong>Cyber Security Engineer</strong> dengan fokus utama pada penetration testing (uji penetrasi keamanan sistem) dan analisis kerentanan pada aplikasi web dan infrastruktur jaringan.</p>
                <br>
                <p><strong>Capaian & Tanggung Jawab Utama:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li>Melakukan vulnerability assessment menyeluruh menggunakan <strong>Burp Suite</strong>, Nmap, dan tool exploit analysis standar industri.</li>
                    <li>Berhasil mendeteksi lebih dari <strong>20 celah keamanan</strong>, di mana <strong>10 di antaranya merupakan celah bertingkat kritis</strong> (High & Critical Risk).</li>
                    <li>Menyusun laporan komprehensif terkait kerentanan situs instansi pemerintah dan memberikan langkah perbaikan (remediation recommendations).</li>
                    <li>Berkolaborasi intensif dengan tim keamanan siber dalam simulasi skenario deteksi ancaman dan penambalan celah.</li>
                </ul>
            `,
            tags: ['Burp Suite', 'Web Penetration Testing', 'Vulnerability Assessment', 'Government Site Reporting', 'OWASP Top 10', 'Cyber Defense']
        },
        'modal-upay': {
            title: 'Desain Web Upay — UI/UX Platform Keuangan',
            subtitle: 'Desain Antarmuka Pengguna & Prototipe Interaktif',
            date: '2024',
            category: 'UI/UX Design',
            img: 'assets/upay.png',
            description: `
                <p>Proyek perancangan UI/UX untuk platform <strong>Upay</strong> dengan pendekatan <em>Design Thinking</em> yang berpusat pada kenyamanan pengguna (Human-Centered Design).</p>
                <br>
                <p><strong>Proses Kerja & Implementasi:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li>Melakukan riset pengguna (user interviews & persona mapping) untuk memetakan pain points dalam transaksi digital.</li>
                    <li>Membuat wireframing (low-fidelity) hingga mockups (high-fidelity) menggunakan <strong>Figma</strong> dengan komponen design system terpadu.</li>
                    <li>Menghubungkan screen flow menjadi prototipe interaktif yang responsif dan mudah dinavigasikan.</li>
                    <li>Menerjemahkan konsep visual ke dalam kode dasar <strong>HTML/CSS</strong> untuk memastikan kelayakan teknis implementasi di sisi frontend.</li>
                </ul>
            `,
            tags: ['Figma', 'UI/UX Research', 'Interactive Prototyping', 'Design System', 'HTML5', 'CSS3', 'Usability Testing']
        },
        'modal-apertix': {
            title: 'Platform Penjualan Foto Apertix — Web Application',
            subtitle: 'Sistem Informasi E-Commerce Fotografi Berbasis Web',
            date: '2024',
            category: 'Web Development',
            img: 'assets/apertix.png',
            description: `
                <p><strong>Apertix</strong> adalah platform sistem informasi e-commerce berbasis web yang dirancang khusus untuk memfasilitasi transaksi penjualan karya fotografi secara digital dan terstruktur.</p>
                <br>
                <p><strong>Fitur & Arsitektur Sistem:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li>Dibangun menggunakan pola arsitektur MVC dengan framework <strong>Laravel (PHP)</strong> dan database relasional <strong>MySQL</strong>.</li>
                    <li>Menerapkan prinsip UI/UX modern agar katalog foto tampil jernih, navigasi checkout intuitif, dan responsif di berbagai perangkat.</li>
                    <li>Fitur manajemen autentikasi pengguna, unggah katalog foto berresolusi tinggi dengan watermark otomatis, dan simulasi keranjang belanja.</li>
                    <li>Pengelolaan struktur basis data yang optimal untuk menjaga kecepatan query pencarian foto.</li>
                </ul>
            `,
            tags: ['PHP', 'Laravel Framework', 'MySQL Database', 'UI/UX Interface', 'MVC Architecture', 'Responsive Design', 'Web System']
        },
        'modal-photoup': {
            title: 'Photo UP — BPH (Badan Pengurus Harian)',
            subtitle: 'Organisasi Fotografi Mahasiswa Kampus',
            date: 'Des 2023 — Selesai',
            category: 'Organisasi & Kepemimpinan',
            img: 'assets/RTD.jpg',
            description: `
                <p>Sebagai <strong>Badan Pengurus Harian (BPH)</strong> di komunitas Photo UP, saya memegang peranan krusial dalam keberlangsungan kegiatan teknis dan manajerial organisasi.</p>
                <br>
                <p><strong>Tanggung Jawab:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li>Mengelola dan memelihara seluruh inventaris perangkat fotografi, lensa, lighting, dan studio di sekretariat Photo UP.</li>
                    <li>Menyiapkan segala kebutuhan teknis dan logistik untuk berbagai event, hunting foto akbar, dan workshop fotografi.</li>
                    <li>Memastikan keteraturan, keamanan, dan kedisiplinan penggunaan sarana prasarana komunitas.</li>
                </ul>
            `,
            tags: ['Leadership', 'Inventory Management', 'Event Logistics', 'Teamwork', 'Photography Gear']
        },
        'modal-diklat': {
            title: 'Pameran Fotografi DIKLAT 21 — Bendahara',
            subtitle: 'Kepanitiaan Pameran Karya Angkatan 21',
            date: 'Jul 2023 — Agu 2023',
            category: 'Organisasi & Keuangan',
            img: 'assets/PAMERAN.jpg',
            description: `
                <p>Dipercaya sebagai <strong>Bendahara Pelaksana</strong> pada perhelatan Pameran Fotografi DIKLAT 21 dengan tanggung jawab penuh terhadap stabilitas finansial acara.</p>
                <br>
                <p><strong>Capaian & Aktivitas:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li>Merancang dan merealisasikan Rencana Anggaran Biaya (RAB) pameran dari awal hingga evaluasi akhir.</li>
                    <li>Melakukan pengawasan ketat terhadap arus kas masuk (tiket, merchandise, sponsor) dan pengeluaran logistik venue pameran.</li>
                    <li>Berkoordinasi aktif dengan divisi perlengkapan, dekorasi, dan konsumsi guna memastikan seluruh kebutuhan dana terpenuhi tepat waktu secara transparan.</li>
                </ul>
            `,
            tags: ['Financial Planning', 'Budgeting & RAB', 'Cashflow Audit', 'Inter-divisional Coordination', 'Reporting']
        },
        'modal-bts': {
            title: 'Panitia Buku Tahunan Siswa (BTS) — Desain & Dokumentasi',
            subtitle: 'Kepanitiaan Kreatif Tahunan SMA Negeri 1 Sukabumi',
            date: 'Jan 2022 — Selesai',
            category: 'Kreatif & Multimedia',
            img: 'assets/BTS.jpg',
            description: `
                <p>Bergabung dalam <strong>Divisi Desain dan Dokumentasi</strong> dalam proyek pembuatan buku tahunan sekolah SMA Negeri 1 Sukabumi.</p>
                <br>
                <p><strong>Peran & Karya:</strong></p>
                <ul style="margin: 12px 0 16px 20px; line-height: 1.8; color: var(--text-secondary);">
                    <li>Mencetuskan konsep desain visual bertema modern, moodboard, dan layout acuan awal bagi vendor percetakan.</li>
                    <li>Mengoperasikan kamera profesional dan drone pribadi untuk menangkap footage foto udara dan video dokumentasi kegiatan angkatan.</li>
                    <li>Menjalin komunikasi berkelanjutan dengan vendor kreatif untuk memastikan akurasi warna dan kualitas cetak sesuai harapan.</li>
                </ul>
            `,
            tags: ['Graphic Layout', 'Drone Videography', 'Photography', 'Creative Direction', 'Vendor Collaboration']
        }
    };

    // ==========================================
    // 2. THEME ACCENT PICKER
    // ==========================================
    const accentBtns = document.querySelectorAll('.accent-btn');
    const savedAccent = localStorage.getItem('jimly_accent') || 'violet';
    
    function applyAccent(color) {
        document.documentElement.setAttribute('data-accent', color);
        accentBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.color === color);
        });
        localStorage.setItem('jimly_accent', color);
    }
    
    applyAccent(savedAccent);

    accentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            applyAccent(btn.dataset.color);
        });
    });

    // ==========================================
    // 3. CURSOR GLOW & BENTO CARD SHINE
    // ==========================================
    const cursorGlow = document.getElementById('cursor-glow');
    const bentoCards = document.querySelectorAll('.bento-card');

    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    }

    // Interactive mouse glow position on each bento card
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // ==========================================
    // 4. PROJECT CATEGORY FILTERS
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            projectCards.forEach(card => {
                const category = card.dataset.category || '';
                const categories = category.split(' ');
                if (filterValue === 'all' || category === filterValue || categories.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        });
    });

    // ==========================================
    // 5. PROJECT & ORG MODAL LIGHTBOX
    // ==========================================
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');
    const clickableCards = document.querySelectorAll('[data-modal]');

    function openModal(modalKey) {
        const data = projectDetails[modalKey];
        if (!data) return;

        const tagListHTML = data.tags.map(t => `<span class="tag">${t}</span>`).join('');

        modalContent.innerHTML = `
            <div class="modal-hero-img-wrap">
                <img src="${data.img}" alt="${data.title}" class="modal-hero-img">
            </div>
            <div class="modal-body">
                <div class="modal-header-meta">
                    <span class="modal-category">${data.category}</span>
                    <span class="modal-date">&bull; ${data.date}</span>
                </div>
                <h2 class="modal-title">${data.title}</h2>
                <div class="modal-desc-full">
                    ${data.description}
                </div>
                <div class="modal-section-subtitle">Keahlian & Teknologi Terlibat</div>
                <div class="modal-tag-list">
                    ${tagListHTML}
                </div>
                <div class="modal-actions">
                    ${data.figmaLink ? `
                        <a href="${data.figmaLink}" target="_blank" rel="noopener noreferrer" class="btn btn-figma">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>
                            <span>Buka Desain di Figma ↗</span>
                        </a>
                    ` : ''}
                    <button class="btn btn-primary" onclick="document.getElementById('modal-close').click()">
                        <span>Tutup Pratinjau</span>
                    </button>
                    <a href="mailto:jimlyasidiq@gmail.com?subject=Tanya%20Proyek%20${encodeURIComponent(data.title)}" class="btn btn-glass">
                        <span>Diskusikan Proyek Ini ↗</span>
                    </a>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    clickableCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalKey = card.dataset.modal;
            if (modalKey) openModal(modalKey);
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // ==========================================
    // 6. COPY EMAIL & TOAST NOTIFICATION
    // ==========================================
    const copyHeroBtn = document.getElementById('copy-email-hero-btn');
    const copyContactBtn = document.getElementById('copy-email-btn');
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    let toastTimeout;

    function showToast(message) {
        if (!toast) return;
        toastMsg.textContent = message;
        toast.classList.add('active');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('active');
        }, 3500);
    }

    function copyEmailToClipboard(e) {
        if (e && e.preventDefault) e.preventDefault();
        const email = 'jimlyasidiq@gmail.com';
        try {
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(email).catch(() => fallbackCopy(email));
            } else {
                fallbackCopy(email);
            }
        } catch (err) {
            fallbackCopy(email);
        }
        showToast('Email jimlyasidiq@gmail.com berhasil disalin! 📋');

        const btn = e && e.currentTarget ? e.currentTarget : copyHeroBtn;
        if (btn) {
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 1800);
        }
    }

    function fallbackCopy(text) {
        try {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        } catch (e) {
            console.log('Copy fallback handled');
        }
    }

    if (copyHeroBtn) copyHeroBtn.addEventListener('click', copyEmailToClipboard);
    if (copyContactBtn) copyContactBtn.addEventListener('click', copyEmailToClipboard);

    // ==========================================
    // 7. ACTIVE NAVIGATION SCROLL SPY
    // ==========================================
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // 8. MOBILE DRAWER NAVIGATION
    // ==========================================
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileDrawerClose = document.getElementById('mobile-drawer-close');

    function setMobileDrawer(open) {
        if (!hamburgerBtn || !mobileDrawer) return;
        hamburgerBtn.classList.toggle('active', open);
        mobileDrawer.classList.toggle('active', open);
        hamburgerBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    if (hamburgerBtn && mobileDrawer) {
        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = !mobileDrawer.classList.contains('active');
            setMobileDrawer(isOpen);
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                setMobileDrawer(false);
            });
        });

        if (mobileDrawerClose) {
            mobileDrawerClose.addEventListener('click', (e) => {
                e.stopPropagation();
                setMobileDrawer(false);
            });
        }

        // Close on clicking anywhere outside drawer
        document.addEventListener('click', (e) => {
            if (mobileDrawer.classList.contains('active') && 
                !mobileDrawer.contains(e.target) && 
                !hamburgerBtn.contains(e.target)) {
                setMobileDrawer(false);
            }
        });

        // Close on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileDrawer.classList.contains('active')) {
                setMobileDrawer(false);
            }
        });
    }
});