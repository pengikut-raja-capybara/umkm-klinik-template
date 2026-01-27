document.addEventListener("DOMContentLoaded", function () {

    // ====================== NAVBAR ======================
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (toggle) {
        toggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        });
    }

    // Tutup mobile menu setelah klik link
    document.querySelectorAll(".mobile-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            iconMenu.classList.remove("hidden");
            iconClose.classList.add("hidden");
        });
    });

    // --- ACTIVE LINK ---
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-link").forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("text-pink-600", "font-bold");
            link.classList.remove("text-gray-500");
        } else {
            link.classList.add("text-gray-500", "hover:text-pink-600");
        }
    });
    // ====================== CAROUSEL DATA ======================
    const carouselItems = [
        {
            category: "Info Kehamilan",
            title: "Pentingnya Gizi Ibu Hamil",
            desc: "Zat besi dan Asam Folat sangat penting untuk mencegah anemia dan menjaga kesehatan ibu & janin.",
            color: "from-pink-500 to-pink-600",
            dot: "bg-pink-500",
            icon: `<svg class="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
             d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
           </svg>`
        },
        {
            category: "Tumbuh Kembang",
            title: "Manfaat ASI Eksklusif",
            desc: "ASI mengandung antibodi alami yang melindungi bayi dari infeksi dan mencegah stunting.",
            color: "from-blue-500 to-blue-600",
            dot: "bg-blue-500",
            icon: `<svg class="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
             d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>`
        },
        {
            category: "Pencegahan",
            title: "Jadwal Imunisasi Dasar",
            desc: "Lindungi bayi dengan imunisasi lengkap seperti BCG, Polio dan Campak.",
            color: "from-green-500 to-green-600",
            dot: "bg-green-500",
            icon: `<svg class="w-20 h-20 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
             d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
           </svg>`
        }
    ];

    // ====================== CAROUSEL LOGIC ======================
    let index = 0;

    const left = document.getElementById("carousel-left");
    const icon = document.getElementById("carousel-icon");
    const category = document.getElementById("carousel-category");
    const title = document.getElementById("carousel-title");
    const desc = document.getElementById("carousel-desc");
    const dotsContainer = document.getElementById("carousel-dots");

    function renderCarousel() {
        const item = carouselItems[index];

        if (!left || !icon || !category || !title || !desc || !dotsContainer) return;

        left.className = `md:w-1/3 p-8 flex flex-col items-center justify-center text-white transition-all duration-500 bg-gradient-to-br ${item.color}`;
        icon.innerHTML = item.icon;
        category.textContent = item.category;
        title.textContent = item.title;
        desc.textContent = item.desc;

        // Update dots
        dotsContainer.innerHTML = "";
        carouselItems.forEach((_, i) => {
            const dot = document.createElement("button");
            dot.className = `${i === index ? `w-8 ${item.dot}` : "w-2 bg-gray-300"} h-2 rounded-full transition-all`;
            dot.addEventListener("click", () => {
                index = i;
                resetAutoplay();
                renderCarousel();
            });
            dotsContainer.appendChild(dot);
        });
    }

    renderCarousel();

    // ====================== NEXT / PREV ======================
    function nextSlide() {
        index = (index + 1) % carouselItems.length;
        renderCarousel();
    }

    function prevSlide() {
        index = (index - 1 + carouselItems.length) % carouselItems.length;
        renderCarousel();
    }

    document.getElementById("nextBtn")?.addEventListener("click", () => { nextSlide(); resetAutoplay(); });
    document.getElementById("prevBtn")?.addEventListener("click", () => { prevSlide(); resetAutoplay(); });

    document.getElementById("nextBtn2")?.addEventListener("click", () => { nextSlide(); resetAutoplay(); });
    document.getElementById("prevBtn2")?.addEventListener("click", () => { prevSlide(); resetAutoplay(); });

    // ====================== AUTOPLAY 5 DETIK ======================
    let auto = setInterval(nextSlide, 5000);
    function resetAutoplay() {
        clearInterval(auto);
        auto = setInterval(nextSlide, 5000);
    }

    // ====================== FORM WHATSAPP ======================
    const form = document.getElementById("formKontak");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // STOP refresh

            const data = {
                nama: form.nama.value.trim(),
                whatsapp: form.whatsapp.value.trim(),
                layanan: form.layanan.value,
                keluhan: form.keluhan.value.trim() || "-"
            };

            const pesan = `
Halo Bidan, saya ingin konsultasi.

Nama: ${data.nama}
WhatsApp: ${data.whatsapp}
Layanan: ${data.layanan}
Keluhan: ${data.keluhan}
`.trim();

            const nomorTujuan = "6281234567890"; // ganti nomor klinik
            const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;

            window.open(url, "_blank"); // buka di tab baru
        });
    } else {
        console.warn("Form kontak tidak ditemukan!");
    }

    // Auto-play relax audio after any user gesture to satisfy browser policies
    const relaxAudio = document.querySelector('audio');
    if (relaxAudio) {
        let started = false;

        const startAudio = () => {
            if (started) return;
            relaxAudio.muted = false;
            relaxAudio.play()
                .then(() => {
                    started = true;
                    document.removeEventListener('click', startAudio);
                    document.removeEventListener('touchstart', startAudio);
                    document.removeEventListener('keydown', startAudio);
                    document.removeEventListener('mousemove', startAudio);
                    document.removeEventListener('scroll', startAudio);
                })
                .catch(() => {
                    // keep listeners so user can try again
                });
        };

        document.addEventListener('click', startAudio, { once: true });
        document.addEventListener('touchstart', startAudio, { once: true });
        document.addEventListener('keydown', startAudio, { once: true });
        document.addEventListener('mousemove', startAudio, { once: true });
        document.addEventListener('scroll', startAudio, { once: true, passive: true });
    }
});
