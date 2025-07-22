import React from 'react';
import Todo from '../src/assets/undraw_done_i0ak.svg';
import Upgrate from '../src/assets/undraw_upgrade_96mr.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen" id="home">
      
      {/* Section 1: Hero/Intro */}
      <section className="bg-gradient-to-br from-[#003025] to-[#1a6053] py-23.5 px-6 sm:px-6 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">

          {/* Bagian Teks Hero */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold text-white">
              ToDo List Pintar:<span className="text">Definisikan Sukses Anda</span>, Hari Demi Hari. {/* Kelas warna span diperbaiki */}
            </h1><br />
            <div className="flex justify-center">
              <Link
                className="inline-flex items-center text-white border border-white py-2 px-6 focus:outline-none hover:bg-white hover:text-[#004030] rounded-full text-xl sm:text-2xl leading-none transition-colors duration-300"
                to={"/register"}>
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* Bagian Gambar Hero */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 p-6 rounded-3xl relative">
            <img
              src={Todo}
              alt="ToDo Illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Fitur Unggulan (dengan 3 fitur dan teks yang lebih ringkas) */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Judul Besar Fitur */}
          <div className="text-center mb-16">
            <h4 className="text-[#004030] text-4xl sm:text-5xl font-bold mb-4"> {/* Ukuran font diubah */}
              Kelola Harimu Jadi Lebih Baik
            </h4>
          </div>

          {/* Fitur 1: Gambar Kiri, Teks Kanan */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
                <img
                  src="src/images/Fitur1.png"
                  alt="Fitur Tambah Tugas"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left p-10">
              <h3 className="text-[#004030] text-2xl sm:text-3xl font-bold mb-4">
                Manajemen Tugas yang Presisi dan Cepat
              </h3>
              <p className="text-gray-600 text-lg">
                Antarmuka intuitif memungkinkan Anda menambah, mengedit, dan menghapus tugas dengan cepat. Tetapkan deadline, prioritas, dan kategori untuk pengelolaan yang rapi dan tanpa hambatan.
              </p>
            </div>
          </div>

          {/* Fitur 2: Teks Kiri, Gambar Kanan */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 mb-20">
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
                <img
                  src="src/images/Fitur2.png" 
                  alt="Fitur Pengingat Otomatis"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-right p-10">
              <h3 className="text-[#004030] text-2xl sm:text-3xl font-bold mb-4"> {/* Ukuran font diubah */}
                Pengingat Otomatis yang Selalu Tepat Waktu
              </h3>
              <p className="text-gray-600 text-lg"> {/* Ukuran font & teks direvisi */}
                Pengingat cerdas mengirimkan notifikasi tepat waktu, memastikan Anda tak pernah melewatkan tenggat penting dan selalu fokus pada prioritas.
              </p>
            </div>
          </div>

          {/* Fitur 3: Statistik Penyelesaian Tugas */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
                <img
                  src="src/images/Fitur3.png" // Ilustrasi grafik atau dashboard statistik
                  alt="Fitur Statistik Penyelesaian Tugas"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left p-10">
              <h3 className="text-[#004030] text-2xl sm:text-3xl font-bold mb-4"> {/* Ukuran font diubah */}
                Peta Visual Progres Produktivitas Anda
              </h3>
              <p className="text-gray-600 text-lg"> {/* Ukuran font & teks direvisi */}
                Lacak kinerja harian, mingguan, dan bulanan melalui visualisasi data yang jelas. Dapatkan wawasan berharga untuk memahami progres, mengidentifikasi area peningkatan, dan merayakan pencapaian Anda.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Section 3: Ajakan */}
      <section className="bg-[#004030] py-24 px-6 sm:px-6 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full">
              <img
                src={Upgrate}
                alt="Mulai Produktivitas Baru"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left p-10">
            <h3 className="text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Kuasai Hari Anda, <span className="text">Sekarang</span>. {/* Teks lebih ringkas dan langsung */}
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed "> {/* Ukuran font & teks direvisi */}
              Wujudkan hari yang lebih terstruktur dan produktif. ToDo List Pintar adalah asisten pribadi Anda. Mulai sekarang dan rasakan peningkatan efisiensi hidup Anda.
            </p>
            <Link 
              to={"/register"} 
              className="inline-flex text-white border border-white py-2 px-6 focus:outline-none hover:bg-white hover:text-[#004030] rounded-full text-lg transition-colors duration-300">
              Mulai Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Final CTA */}
      <section className="bg-white py-24 px-6 sm:px-6 lg:px-20 text-center">
        <div className="container mx-auto">
          {/* Judul Utama */}
          <h2 className="text-[#004030] text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Wujudkan Produktivitas Puncak Anda Sekarang!
          </h2>
          {/* Sub-judul */}
          <p className="text-gray-600 text-lg mb-8 opacity-90"> {/* Ukuran font dan teks disesuaikan */}
            Unduh ToDo List Pintar sekarang dan mulailah perjalanan Anda menuju kehidupan yang lebih terorganisir dan produktif.
          </p>
          <Link 
            to={"/register"} 
            className="inline-flex text-white border border-[#004030] bg-[#004030] py-2 px-8 focus:outline-none hover:bg-[#40756a] hover:text-white rounded-lg text-lg transition-colors duration-300"
            >
            Mulai Gratis
          </Link>
        </div>//tes
      </section>

    </div>
  );
}

export default Home;