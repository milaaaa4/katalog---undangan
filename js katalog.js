// Menjalankan script setelah semua konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    // Mengambil semua elemen yang dibutuhkan
    const pageLinks = document.querySelectorAll('.page-link');
    const pageContents = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    /**
     * Fungsi untuk menampilkan halaman berdasarkan ID yang diberikan
     * dan menyembunyikan halaman lainnya.
     * @param {string} pageId - ID dari elemen halaman yang akan ditampilkan.
     */
    function showPage(pageId) {
        // 1. Sembunyikan semua konten halaman
        pageContents.forEach(page => {
            page.classList.add('hidden');
        });

        // 2. Tampilkan halaman yang dipilih
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.remove('hidden');
            window.scrollTo(0, 0); // Selalu scroll ke atas saat halaman baru ditampilkan
        }

        // 3. Perbarui status 'active' pada link navigasi
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Jika link navigasi sesuai dengan halaman yang aktif, tambahkan kelas 'active'
            if (link.dataset.page === pageId) {
                link.classList.add('active');
            }
        });
        
        // 4. Tutup menu mobile (jika terbuka) setelah link diklik
        mobileMenu.classList.add('hidden');
        mobileMenuButton.querySelector('svg:first-child').classList.remove('hidden');
        mobileMenuButton.querySelector('svg:last-child').classList.add('hidden');
    }

    // Tambahkan event listener untuk semua link yang berfungsi sebagai navigasi halaman
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah perilaku default link (pindah halaman)
            const pageId = this.dataset.page;
            showPage(pageId);
        });
    });

    // Logika untuk tombol buka/tutup menu mobile
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        // Ganti ikon hamburger dengan ikon silang (close)
        mobileMenuButton.querySelector('svg:first-child').classList.toggle('hidden');
        mobileMenuButton.querySelector('svg:last-child').classList.toggle('hidden');
    });

    // Tampilkan halaman default (Pernikahan) saat website pertama kali dibuka
    showPage('pernikahan');
});
