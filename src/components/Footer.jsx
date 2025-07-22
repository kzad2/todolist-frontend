import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'; // Menggunakan ikon spesifik untuk kejelasan

function Footer() {
    return (
        <footer className="bg-[#004030] text-gray-300 body-font"> {/* Background footer utama diubah */}
            <div className="container px-25 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
                {/* Kolom Product */}
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-10 md:mb-0">
                    <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">PRODUCT</h2> {/* Warna teks judul diubah ke putih */}
                    <nav className="list-none mb-10">
                        <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Home</a></li>
                        <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">About</a></li>
                        <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Contact</a></li>
                        <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Features</a></li>
                        <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Security</a></li>
                    </nav>
                </div>

                {/* Kolom Resource */}
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-10 md:mb-0">
                    <div className="lg:w-1/3 md:w-1/2 w-20"> {/* Perhatikan lebar w-20 di sini, mungkin terlalu kecil */}
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">RESOURCE</h2> {/* Warna teks judul diubah ke putih */}
                        <nav className="list-none mb-10">
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Help Center</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Resource Library</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Developer API</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Real-time Customer Satisfaction</a></li>
                        </nav>
                    </div>
                </div>

                {/* Kolom Todolist (Contoh) */}
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-10 md:mb-0">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">TODOLIST</h2> {/* Warna teks judul diubah ke putih */}
                        <nav className="list-none mb-10">
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Home</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">About</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Contact</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Features</a></li>
                            <li><a className="text-gray-300 hover:text-white transition-colors duration-200" href="#">Security</a></li>
                        </nav>
                    </div>
                </div>

                {/* Kolom Kontak dan Aplikasi (Latar Belakang Abu-abu) */}
                {/* Mengubah warna latar belakang menjadi transparan atau warna yang lebih terang agar kontras dengan footer utama */}
                <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-8 bg-[#003025] rounded-lg md:ml-auto md:mt-0 mt-10 text-center flex flex-col items-center justify-center"> {/* Hapus bg-[#00403013] atau ganti dengan bg-opacity-0 */}
                    <p className="text-white text-lg mb-2">Indonesia : +6251-3597-2776</p> {/* Warna teks diubah ke putih */}
                    <p className="text-white text-lg mb-4">Indonesia : +6251-3597-2776</p> {/* Warna teks diubah ke putih */}

                    {/* Ikons Sosial Media - Menggunakan FontAwesomeIcon */}
                    <div className="flex justify-center items-center space-x-4 mb-6">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#" className="bg-white inline-flex items-center border border-gray-400 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                            <img
                                src="/src/images/Apple-store.png"
                                alt="Download on the App Store"
                                className="h-9 object-contain"
                            />
                        </a>

                        <a href="#" className="bg-white inline-flex items-center border border-gray-400 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-200 transition-colors duration-200">
                            <img
                                src="/src/images/Google-play.png" 
                                alt="Get it on Google Play"
                                className="h-9 object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bagian Bawah Footer (Copyright dan Link Lain) */}
            <div className="bg-[#003025] py-4 px-5"> {/* Warna background sedikit lebih gelap dari footer utama */}
                <div className="container mx-auto flex flex-wrap flex-col sm:flex-row justify-between items-center text-sm text-gray-400"> {/* Warna teks diubah */}
                    <p className="text-center sm:text-left mb-2 sm:mb-0">© 2025 TodoList App — Hak Cipta Dilindungi</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors duration-200">Syarat & Ketentuan</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Kebijakan Privasi</a>
                        <a href="#" className="hover:text-white transition-colors duration-200">Peta Situs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;