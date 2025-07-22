import team_work from "/src/assets/undraw_team-work_i1f3.svg";
import goals from "/src/assets/undraw_goals_0pov.svg";
import growth from "/src/assets//undraw_growth-analytics_bhy7.svg";
import aboutHeroBg from "/src/images/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function About() {
    // Fungsi untuk menggulir ke section berikutnya
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('siapa-kami-section'); // ID dari section berikutnya
        if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: 'smooth'
        });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
        {/* Hero Section: Dengan Gambar Latar Belakang dan Overlay */}
        <section
            className="relative py-52 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center flex flex-col justify-center items-center" // Tambahkan flexbox untuk memusatkan konten secara vertikal
            style={{ backgroundImage: `url(${aboutHeroBg})` }}
        >
            {/* Overlay gelap untuk membuat teks lebih mudah dibaca */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Konten Hero (pastikan z-index lebih tinggi dari overlay) */}
            <div className="relative z-10 container mx-auto text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Mengenal Lebih Dekat TodoList Pintar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                Kami adalah tim yang bersemangat dalam membantu Anda mengelola waktu dan tugas,
                mengubah kekacauan menjadi keteraturan.
            </p>
            </div>

            {/* Ikon Panah ke Bawah dengan Fitur Scroll */}
            <div
            className="relative z-10 mt-16 animate-bounce cursor-pointer" // mt-16 untuk jarak, animate-bounce untuk efek
            onClick={scrollToNextSection} // Tambahkan event handler onClick
            >
            <FontAwesomeIcon
                icon={faChevronDown}
                className="text-white text-4xl" // Ukuran ikon dan warna
            />
            </div>
        </section>
        <div className="h-16" id="siapa-kami-section"></div>
        {/* Content Section: Pengantar - Gambar Kiri, Teks Kanan */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Gambar di sisi kiri (atau atas di mobile) */}
            <div className="md:w-1/2 flex justify-center">
                <img
                src={team_work}
                alt="Teamwork and Collaboration illustration"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
            {/* Teks di sisi kanan (atau bawah di mobile) */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-6">Siapa Kami?</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                TodoList Pintar didirikan dengan satu visi sederhana: membuat pengelolaan tugas menjadi lebih mudah, intuitif, dan efektif bagi setiap orang. Kami percaya bahwa dengan alat yang tepat, siapa pun dapat mencapai produktivitas maksimal dan mengurangi stres dalam kehidupan sehari-hari.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                Sejak diluncurkan, kami terus berinovasi untuk menyediakan fitur-fitur yang benar-benar Anda butuhkan, didukung oleh antarmuka yang bersih dan mudah digunakan. Kami bukan hanya sekadar aplikasi ToDo, kami adalah mitra Anda dalam meraih keteraturan dan keberhasilan.
                </p>
            </div>
            </div>
        </section>

        {/* Content Section: Misi dan Visi - Teks Kiri, Gambar Kanan */}
        <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row-reverse items-center justify-between gap-12"> {/* Menggunakan flex-row-reverse */}
            {/* Gambar di sisi kanan (atau atas di mobile karena reverse) */}
            <div className="md:w-1/2 flex justify-center">
                <img
                src={goals}
                alt="Goals and achievements illustration"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
            {/* Teks di sisi kiri (atau bawah di mobile karena reverse) */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-12">Visi dan Misi Kami</h2> {/* h2 utama untuk bagian ini */}
                <div className="grid grid-cols-1 gap-8"> {/* Dibuat satu kolom agar lebih mudah dibaca dengan gambar di samping */}
                <div>
                    <h3 className="text-[#004030] text-2xl font-bold mb-4">Visi</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    Menjadi aplikasi manajemen tugas terkemuka yang diakui secara global karena inovasi, kemudahan penggunaan, dan kontribusinya dalam meningkatkan kualitas hidup dan produktivitas penggunanya.
                    </p>
                </div>
                <div>
                    <h3 className="text-[#004030] text-2xl font-bold mb-4">Misi</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                    Memberdayakan individu dan tim untuk mengelola tugas, proyek, dan tujuan mereka dengan efisien, memastikan tidak ada lagi hal penting yang terlewatkan. Kami berkomitmen untuk menyediakan platform yang andal, aman, dan mudah diakses.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Content Section: Nilai-nilai - Gambar Kiri, Teks Kanan (Mirip Pengantar) */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Gambar di sisi kiri (atau atas di mobile) */}
            <div className="md:w-1/2 flex justify-center">
                <img
                src={growth}
                alt="Growth and analytics illustration"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                />
            </div>
            {/* Teks (nilai-nilai) di sisi kanan (atau bawah di mobile) */}
            <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-12">Nilai-nilai Kami</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Tetap 2 kolom untuk desktop, karena 4 elemen akan terdistribusi rapi */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-[#004030] text-xl font-semibold mb-3">Sederhana & Intuitif</h3>
                        <p className="text-gray-600 text-base">Kami merancang dengan fokus pada kemudahan penggunaan, agar Anda bisa langsung produktif.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-[#004030] text-xl font-semibold mb-3">Keandalan</h3>
                        <p className="text-gray-600 text-base">Data Anda aman dan aplikasi kami selalu siap mendukung aktivitas Anda.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-[#004030] text-xl font-semibold mb-3">Inovasi Berkelanjutan</h3>
                        <p className="text-gray-600 text-base">Kami selalu mencari cara baru untuk membuat pengalaman Anda lebih baik.</p>
                    </div>
                    {/* Nilai Baru Ditambahkan di Sini */}
                    <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-[#004030] text-xl font-semibold mb-3">Berorientasi Pengguna</h3>
                        <p className="text-gray-600 text-base">Setiap fitur dan pembaruan didasarkan pada kebutuhan dan masukan dari pengguna kami.</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        {/* Call to Action (sudah diupdate dengan styling tombol terbaru) */}
        <section className="bg-white text-[#004030] py-33 px-6 sm:px-6 lg:px-20 text-center"> 
            <div className="container mx-auto">
            <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-4">Siap untuk Hidup Lebih Teratur?</h2>
            <p className="text-[#004030] text-lg opacity-90 mb-8">
                Mulai perjalanan produktivitas Anda bersama kami hari ini!
            </p>
            <button className="inline-flex text-[#004030] border border-[#004030] py-3 px-8 focus:outline-none hover:bg-[#004030] hover:text-white rounded-lg text-lg transition-colors duration-300">
                Mulai Sekarang
            </button>
            </div>
        </section>
    </div>
    );
}

export default About;