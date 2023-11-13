import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Daftar from '../components/daftar';


export default function Index() {
  return (
    <>
      <Header />
      <main className='font-abc'>
        <img src="./asset/circle.png" alt="Description of the img" width="100" className='hidden' />

        {/* Ilmu */}
        <section className='flex md:flex-col lg:flex-col md:mt-5 p-5 lg:-mt-5'>
          <div className='md:flex-row md:flex  md:items-start lg:text-left lg:m-10'>
            <ul className='my-5 md:pl-5 md:top-0 lg:mt-24'>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-[42px] py-5 text-[#16215D] mt-20">
                Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik 
              </h1>
              <p className="text-lg sm:mb-5 text-gray-500 mb-5 lg:text-xl lg:font-medium">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat.
              </p>
                <a rel="" href="#" className="text-sm w-40 h-10 py-2 px-2  bg-[#619AEF] text-white rounded-lg border-gray-100 hover:bg-[#16215D] flex flex-col text-center items-center">Daftar Sekarang</a>
            </ul>
            <div className="md:w-full justify-center md:pt-20">
              <img src="./asset/rafiki1.png"/>
            </div>
          </div>
        </section>


        {/* Keunggulan */}
        <section className="bg-gradient-to-b from-[#3871D0] to-[#58C6EF] lg:rounded-[250px] rounded-3xl  ">
          <h1 className="text-white font-semibold text-xl md:text-4xl lg:text-5xl text-center mt-8 pt-10 md:pt-16 lg:pt-20 md:m-10">
            Keunggulan Sekolah Kami
          </h1>

          <div className="text-center sm:p-6 p-10">
            <ul className="space-y-4 md:space-y-0 md:flex md:gap-5 lg:gap-8 lg:p-6 justify-center">
              <li className="border-2 rounded-2xl bg-white py-2 md:p-4 lg:p-14">
                <img
                  src="./asset/kurikulum.png"
                  alt=""
                  className="mb-2 mx-auto"
                />
                <h1 className="text-base font-bold text-center text-[#16215D] md:text-xl lg:text-3xl">
                  Kurikulum Terbaru
                </h1>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-lg">
                  Menerapkan kurikulum terbaru agar siswa mendapatkan materi
                  terbaru
                </p>
              </li>

              <li className="border-2 rounded-2xl bg-white py-2 md:p-4 lg:p-12">
                <img
                  src="./asset/belajar.png"
                  alt=""
                  className="mb-5 mx-auto"
                />
                <h2 className="text-base font-bold text-center text-[#16215D] md:text-xl lg:text-3xl">
                  Efektivitas Waktu Belajar
                </h2>
                <p className="text-center py-2 text-xs px-2 mb-2 md:text-base lg:text-lg">
                  Waktu belajar yang dirancang agar para siswa tidak jenuh dan
                  menerima pelajaran
                </p>
              </li>

              <li className="border-2 rounded-2xl bg-white py-2 md:p-4 lg:p-12">
                <img src="./asset/bakat.png" alt="" className="mb-5 mx-auto" />
                <h3 className="text-base md:text-xl font-bold text-center text-[#16215D] lg:text-3xl">
                  Penyaluran Bakat & Minat
                </h3>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-lg">
                  Berbagai kegiatan akademik maupun non-akademik untuk mendukung
                  bakat minat
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:flex-row py-10">
            <img
              className="w-1/2 md:w-1/3 md:pl-10 lg:w-1/2 lg:pl-20"
              src="./asset/rafiki2.png"
            />
            <ul className="font-bold text-white text-2xl md:text-3xl lg:text-5xl text-center pt-16 md:pt-2 ">
              Tentang Kami
              <li className="text-white text-sm md:text-base md:text-justify lg:text-xl lg:mx-32 lg:text-justify font-normal lg:pt-10 text-justify px-8 pt-5 md:mx-18 ">
              Sekolah Kami merupakan sekolah informal yang dikelola untuk
              membantu anak mengembangkan bakat dan kemampuannya. Dengan
              memberikan kurikulum terbaik agar anak bisa memilih minatnya dan
              fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak
              tahun 1989 dan terus berkembang.
            </li>
            </ul>
          </div>
        </section>


        {/* Artikel */}
        <section className="pt-20 items-center">
          <div className="font-bold text-4xl md:text-6xl lg:text-5xl text-center mx-auto items-center justify-center text-[#16215D] space-y-2">
            <h1>Artikel</h1>
            <p className="text-xl md:text-2xl lg:text-2xl pt-4  text-center text-[#16215D] font-normal">
              Artikel seputar pendidikan
            </p>
          </div>

          <div className=" p-5 xl:p-0 lg:p-0 xl:m-0 mt-8 items-center justify-center mx-auto lg:-mb-10">
            <ul className="space-y-5 lg:space-x-7 flex flex-col lg:flex-row md:p-10 xl:p-20 md:flex-row md:gap-5">
            <li className="rounded-b-2xl pt-5 pb-9 lg:-pb-2 pl-3 p-4 border-2 rounded-xl border-[#54BAEB] md:mt-5">
                <img src="./asset/kelas.png" alt="" className="w-full" />
                <h1 className="font-semibold text-sm text-[#619AEF] mt-5">
                  12 Desember 2020
                </h1>
                <p className=" py-2 text-base font-bold text-[#16215D]">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </p>
                <a className="py-2 text-sm">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman . . .
                </a>
                <ul className="text-sm py-2 text-[#3362CC] font-semibold">
                  Baca selengkapnya
                </ul>
              </li>

              <li className="rounded-b-2xl pt-5 pb-9 pl-3 p-4 border-2 rounded-xl border-[#54BAEB] lg:-pb-2">
                <img src="./asset/kelas.png" alt="" className="w-full" />
                <h1 className="font-semibold text-sm text-[#619AEF] mt-5">
                  12 Desember 2020
                </h1>
                <p className=" py-2 text-base font-bold text-[#16215D]">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </p>
                <a className="py-2 text-sm">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman . . .
                </a>
                <ul className="text-sm py-2 text-[#3362CC] font-semibold">
                  Baca selengkapnya
                </ul>
              </li>

              <li className="rounded-b-2xl pt-5 pb-9 pl-3 p-4 border-2 rounded-xl border-[#54BAEB] lg:-pb-2">
                <img src="./asset/kelas.png" alt="" className="w-full" />
                <h1 className="font-semibold text-sm text-[#619AEF] mt-5">
                  12 Desember 2020
                </h1>
                <p className=" py-2 text-base font-bold text-[#16215D]">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </p>
                <a className="py-2 text-sm">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman . . .
                </a>
                <ul className="text-sm py-2 text-[#3362CC] font-semibold">
                  Baca selengkapnya
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Galeri*/}
        <section className='pt-10'>
        <div className="font-bold text-4xl md:text-6xl lg:text-5xl text-center mx-auto items-center justify-center text-[#16215D] space-y-2 lg:-pt-10">
  <h1>Galeri</h1>
  <div className="flex flex-col md:flex-row items-center justify-center text-center md:gap-80 lg:gap-[690px] md:pt-10">
  <p className="text-xl md:text-xl lg:text-2xl pt-6 md:pt-0 md:pr-4 mr-2 text-[#16215D] pb-4">
    Dokumentasi Sekolah
  </p>
  <button className="p-2 bg-[#619AEF] text-sm items-center text-white hover:bg-[#16215D] rounded-[8px] ml-2">
    Lihat Semua
  </button>
</div>

</div>


        <div className="p-5 xl:p-0 lg:p-0 xl:m-0 items-center justify-center">
          <ul className="space-y-5 lg:space-y-0 lg:space-x-7 flex flex-col lg:flex-row xl:p-20 md:space-y-0 rounded-[16px] md:gap-5 py-5 items-center md:flex-row">

            <li className="">
              <img src="./asset/ruang.png" alt="" className="" />
            </li>

            <li className="">
              <img src="./asset/ngajar.png" alt="" className="" />
            </li>

            <li className="">
              <img src="./asset/room.png" alt="" className="" />
            </li>

            <li className="">
              <img src="./asset/tas.png" alt="" className="" />
            </li>
          </ul>
        </div>
        </section>

        {/* Daftar */}
        <Daftar />


        <Footer />
      </main>
    </>
  )
}