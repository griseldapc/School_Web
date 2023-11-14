import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Daftar from "../components/daftar";


export default function Tentang_kita() {
  return (
    <>
      <Header />

      <main className='font-abc'>

        {/* Hero */}
        <section className="flex flex-col justify-center mx-auto items-center mt-16 pt-16 lg:flex-row">
          <div>
            <div className="">
              <img className="w-full md:w-[500px] md:h-[350px] z-10" src="./asset/g6.png" />
            </div>
          </div>
        </section>
        <img className="pt-7 absolute top-0 z-0 md:hidden hidden" src='./asset/Vector (3).png'/>

        {/* Video */}
        <section className="flex justify-center pb-[24px] mt-16 mb-10 overflow-x-hidden lg:pt-14 md:pt-10 md:mt-10 lg:mb-20">
        <div className="pb-5 flex-col justify-start items-center gap-6 inline-flex mx-auto">
          <div className="self-stretch h-[50px] flex-col justify-center items-center flex">
            <div className="text-black text-2xl font-bold lg:text-4xl lg:pt-20 md:text-4xl">Video Profil</div>
            <div className="text-blue-950 text-xs md:text-xl md:py-4 font-normal justify-center items-center text-center lg:text-2xl lg:pt-6 md:mb-10">
              Berikut adalah video profil dari sekolah kami
            </div>
          </div>
            <div className="items-center inline-flex lg:pt-16">
            <iframe
          src="https://www.youtube.com/embed/9xofia597HI"
          frameborder="0"
          allowfullscreen
          className="mx-auto rounded-xl h-auto md:w-[640px] md:h-[300px] lg:w-[1120px] lg:h-[500px]"
        ></iframe>
            </div>
        </div>
      </section>



        {/* Keunggulan */}
        <section className="bg-gradient-to-b from-[#3871D0] to-[#58C6EF] lg:rounded-[150px] rounded-3xl lg:mb-8  ">
          <h1 className="text-white font-semibold text-xl md:text-4xl lg:text-5xl text-center pt-5 md:pt-16 lg:pt-20 md:m-10">
            Keunggulan Sekolah Kami
          </h1>

          <div className="text-center sm:p-6 p-10">
            <ul className="space-y-4 md:space-y-0 md:flex md:gap-5 lg:gap-8 justify-center">
              <li className="border-2 rounded-2xl bg-white py-2 md:p-4 lg:p-10">
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
              className="w-1/2 md:w-1/3 md:pl-10 lg:w-[500px] lg:pl-20"
              src="./asset/sekolah.png"
            />
            <ul className="font-bold text-white text-2xl md:text-3xl lg:text-5xl text-center pt-16 md:pt-2 ">
              Tentang Kami
              <li className="text-white text-sm md:text-base md:text-justify lg:text-xl lg:mx-12 lg:text-justify font-normal lg:pt-10 text-justify px-8 pt-5 md:mx-18 ">
              Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini. Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.
            </li>
            </ul>
          </div>
        </section>

        {/* Guru */}
        <section className='pt-20 lg:-pt-60 items-center'>
          <div className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mx-auto items-center justify-center text-[#16215D]">
            <h1>
              Guru & Staff
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center text-center md:gap-96 lg:gap-[690px] md:pt-4">
              <p className="text-xl font-medium md:text-xl lg:text-2xl pt-2 mb-4 md:pr-4 mr-2 text-[#16215D]">
                Dokumentasi Sekolah
              </p>
              <button className="p-2 bg-[#619AEF] text-xs items-center text-white hover:bg-[#16215D] rounded-[8px] ml-2">
                Lihat Semua
              </button>
            </div>
          </div>

            

          <div className="p-5 xl:p-0 xl:m-0 items-center justify-center mt-6 md:-mt-2">
  <ul className="lg:space-x-7 lg:-mt-10 flex flex-col lg:flex-row xl:p-20 rounded-[16px] md:flex-row md:gap-5 border-[#54BAEB] items-center justify-center lg:-mb-10">
    
    <li className="border-2 border-[#54BAEB] p-5 rounded-xl my-4">
      <img src="./asset/1.png" alt="" className="rounded-xl" />
      <div className="rounded-b-2xl pt-2 text-center">
        <p className="text-xl font-bold text-[#16215D]">Jeannete</p>
        <a className="text-sm">Kepala Sekolah</a>
      </div>
    </li>

    <li className="border-2 border-[#54BAEB] p-5 rounded-xl my-4">
      <img src="./asset/2.png" alt="" className="rounded-xl" />
      <div className="rounded-b-2xl pt-2 text-center">
        <p className="text-xl font-bold text-[#16215D]">Jhon Smith</p>
        <a className="text-sm">Kepala Staff</a>
      </div>
    </li>

    <li className="border-2 border-[#54BAEB] p-5 rounded-xl my-4">
      <img src="./asset/3.png" alt="" className="rounded-xl" />
      <div className="rounded-b-2xl pt-2 text-center">
        <p className="text-xl font-bold text-[#16215D]">Lidya M.P</p>
        <a className="text-sm">Guru Matematika</a>
      </div>
    </li>

    <li className="border-2 border-[#54BAEB] p-5 rounded-xl my-4">
      <img src="./asset/4.png" alt="" className="rounded-xl" />
      <div className="rounded-b-2xl pt-2 text-center">
        <p className="text-xl font-bold text-[#16215D]">William</p>
        <a className="text-sm">Guru Fisika</a>
      </div>
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