import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Contact_us_illustration from "/src/assets/undraw_contact-us_kcoa.svg";
import contactHeroBg from "/src/images/claudio-schwarz-aSWSfexoRzk-unsplash.jpg";

function Contact() {
    const scrollToNextSection = (event) => { // Menerima event sebagai argumen
        event.preventDefault(); // Mencegah perilaku default dari anchor link
        const nextSection = document.getElementById('contact-form');
        if (nextSection) {
            window.scrollTo({
                top: nextSection.offsetTop - 80, // Kurangi offset untuk memberi ruang navbar fixed (sesuaikan nilai 80)
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <section
                className="relative py-45 px-4 sm:px-6 lg:px-8 text-center bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: `url(${contactHeroBg})` }}
            ><br />
                {/* Overlay gelap yang sedikit transparan */}
                <div className="absolute inset-0 bg-black opacity-65"></div>

                {/* Konten Hero (pastikan z-index lebih tinggi) */}
                <div className="relative z-10 container mx-auto text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Kami Selalu Ada untuk Anda.
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed">
                        Hubungi kami kapan saja untuk dukungan, pertanyaan, atau sekadar berbagi pengalaman Anda.
                    </p>
                    {/* Opsional: Tombol untuk langsung ke form atau FAQ */}
                    <a href="#contact-form"
                       className="mt-8 inline-flex text-white border border-white py-3 px-8 focus:outline-none hover:bg-white hover:text-[#004030] rounded-lg text-lg transition-colors duration-300"
                       onClick={scrollToNextSection}> {/* Tambahkan onClick */}
                        Hubungi Kami
                    </a>
                </div>
            </section>

            {/* Div kosong dengan ID 'contact-form' dan tinggi untuk mengkompensasi navbar fixed */}
            {/* Sebaiknya ID diletakkan langsung pada section form, bukan div terpisah */}
            {/* <div className="h-16" id='contact-form'></div> */}

            {/* Main Content: Info & Form - Layout Inovatif */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" > {/* Pindahkan ID ke section ini */}
                <div id="contact-form" className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Menggunakan grid untuk layout yang lebih fleksibel */}

                    {/* Kolom Kiri: Informasi Kontak & Ilustrasi */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left p-8 bg-gray-50 rounded-lg shadow-xl">
                        <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-6">
                            Mari Terhubung!
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8 text-lg max-w-md mx-auto md:mx-0">
                            Apakah Anda memiliki pertanyaan, saran, atau hanya ingin menyapa? Jangan ragu untuk menghubungi kami melalui berbagai saluran di bawah ini.
                        </p>

                        <img
                            src={Contact_us_illustration}
                            alt="Contact us illustration"
                            className="w-full max-w-xs md:max-w-sm h-auto object-contain mb-8"
                        />

                        <div className="space-y-5 text-gray-700 w-full max-w-md mx-auto md:mx-0">
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faPhone} className="text-[#004030] text-xl min-w-[24px]" />
                                <a href="tel:+6281234567890" className="text-lg hover:text-[#004030] transition-colors duration-200">+62 812-3456-7890</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#004030] text-xl min-w-[24px]" />
                                <a href="mailto:support@todolistpintar.com" className="text-lg hover:text-[#004030] transition-colors duration-200">support@todolistpintar.com</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#004030] text-xl min-w-[24px]" />
                                <span className="text-lg">Jl. Contoh No. 123, Kota Anda, Indonesia</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FontAwesomeIcon icon={faClock} className="text-[#004030] text-xl min-w-[24px]" />
                                <span className="text-lg">Senin - Jumat: 09.00 - 17.00 WIB</span>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-6 justify-center md:justify-start w-full">
                            <a href="#" className="text-gray-600 hover:text-[#004030] transition-colors duration-300" aria-label="Facebook">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-[#004030] transition-colors duration-300" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-[#004030] transition-colors duration-300" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-[#004030] transition-colors duration-300" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </div>

                    {/* Kolom Kanan: Formulir Kontak */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100 w-full">
                        <h3 className="text-[#004030] text-2xl font-bold mb-6 text-center md:text-left">
                            Kirim Pesan kepada Kami
                        </h3>
                        <p className="text-gray-600 text-base mb-6 text-center md:text-left">
                            Kami akan berusaha merespons pesan Anda dalam waktu <span className="font-semibold text-[#004030]">1-2 hari kerja</span>.
                        </p>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9782] focus:border-transparent transition-all duration-200"
                                    placeholder="Masukkan nama Anda"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Alamat Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9782] focus:border-transparent transition-all duration-200"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Subjek
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9782] focus:border-transparent transition-all duration-200"
                                    placeholder="Mengenai apa pesan Anda?"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Pesan Anda
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4A9782] focus:border-transparent transition-all duration-200"
                                    placeholder="Tulis pesan Anda di sini..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#004030] text-white py-3 px-6 rounded-md hover:bg-[#005040] focus:outline-none focus:ring-2 focus:ring-[#4A9782] focus:ring-offset-2 transition-colors duration-300 text-lg font-semibold"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Optional: Peta Lokasi (jika ada alamat fisik) */}
            <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl text-center">
                    <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-8">Temukan Kami di Peta</h2>
                    <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
                        {/* Ganti src dengan URL embed dari Google Maps lokasi Anda */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.298587455822!2d106.99120631477317!3d-6.97406839497477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6849a0d8e4f16b%3A0x46b4c1e4c7d0e5e0!2sSukabumi%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1678901234567!5m2!1sen!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi TodoList Pintar"
                        ></iframe>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;