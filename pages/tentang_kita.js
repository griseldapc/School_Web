import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";


export default function Tentang_kita() {
  return (
    <>
      <Header />

      <main className=''>

        {/* Hero */}
        <div class="container flex flex-col justify-center mx-auto pb-24 mt-10 pt-10 px-20 lg:flex-row">
          <div class="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div class="w-[1100px] flex-col justify-end items-center inline-flex">
              <img class="w-[500px] h-[336.13px]" src="./asset/g6.png" />
            </div>
          </div>
        </div>

        {/* Video */}
        <div class="py-8 text-center text-gray-800">
          <h1 class="font-bold leadi text-[40px] py-4 pr-2 text-center items-center justify-center text-[#16215D]">Video Profil</h1>
          <p class="mb-4 text-lg text-[#16215D]">Berikut adalah video profil dari sekolah kami</p>
        </div>
        <iframe
          width="1100"
          height="500"
          src="https://www.youtube.com/embed/9xofia597HI"
          frameborder="0"
          allowfullscreen
          class="mx-auto rounded-xl"
        ></iframe>



        {/* Keunggulan */}
        <div className="pt-9 mt-28">
        <div class="py-9 border-2 rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[150px] bg-gradient-to-r from-[#3871D0] to-[#58C6EF]">
          <div class="container justify-center mx-auto text-3xl font-bold pr-6 pt-8 pb-4 rounded-xl">
            <h1 class="font-bold leadi text-[40px] py-4 pr-2 pt-10 text-center items-center justify-center text-white">
              Keunggulan Sekolah Kami
            </h1>
          </div>
          <div class="container justify-center mx-auto items-center text-center py-10 px-16">
            <div class="inline-flex gap-[70px] items-center justify-center text-center">
              <div class="py-[14px] px-[25px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/kurikulum.png" alt="" class="mb-5 items-center justify-center pl-20" />
                <a href="" class="text-xl font-bold text-center text-[#16215D]">Kurikulum Terbaru</a>
                <ul className='text-center w-64 text-lg mt-2'>Menerapkan kurikulum terbaru agar siswa mendapatkan materi terbaru</ul>
              </div>

              <div class="py-[14px] px-[25px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/belajar.png" alt="" class="mb-5 items-center justify-center pl-20" />
                <a href="" class="text-xl font-bold text-center text-[#16215D]">Efektifitas Waktu Belajar</a>
                <ul className='text-center w-64 text-lg mt-2'>Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran</ul>
              </div>

              <div class="py-[14px] px-[25px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/bakat.png" alt="" class="mb-5 items-center pl-20" />
                <a href="" class="text-xl font-bold text-center text-[#16215D]">Penyaluran Bakat & Minat</a>
                <ul className='text-center w-64 text-lg mt-2'>Berbagai kegiatan akademik maupun non akademik untuk mendukung bakat minat</ul>
              </div>

            </div>
          </div>

          <div class="container flex flex-col justify-center lg:flex-row mb-16 ">
            <div class="w-[550px] h-[502px] pr-[100px] pt-[50px] flex-col justify-end items-center inline-flex">
              <img class="w-[400x] h-[600px]" src="./asset/sekolah.png" />
            </div>

            <div class="w-[550px] h-[502px] pr-[10px] mt-[16px] flex-col items-center justify-center pb-10 text-justify">
              <div class="container flex flex-col justify-center mx-auto pr-6 mt-2 pt-8">
                <h1 class="font-bold leadi text-[40px] py-4 pr-2 text-white">
                  Profil Singkat
                </h1>
              </div>
              <p class="text-xl sm:mb-5 text-white mt-6">Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini. Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Guru */}
        <div class="font-bold leadi text-[40px] pr-60 pt-24 text-[#16215D] ml-[80px]">Guru & Staff</div>
        <div class="container flex flex-col justify-center mx-auto lg:px-20 lg:flex-row lg:justify-between text-3xl font-bold sm:text-3xl pr-6 rounded-xl">
          <h1 class="leadi text-xl py-4 font-medium text-[#16215D]">
            Daftar Anggota Guru & Staff Sekolah Ini
          </h1>
          <div class="w-[100px] h-[100px] text-sm flex-col items-center text-end text-white pt-4">
            <p class="p-2 pr-2 pl-2 bg-[#16215D] rounded-[8px]">Lihat Semua</p>
          </div>
        </div>
        <div class="inline-flex gap-[10px] ml-24">
          <div class="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/1.png" alt="" class="w-full h-[220px] rounded-xl"/>
              <div class=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p class=" text-xl font-bold text-[#16215D]">Jeannete Ong</p>
                    <a class=" text-sm">Kepala Sekolah</a>
              </div>
          </div>
        </div>

        <div class="inline-flex gap-[10px] ml-10 mt-8">
          <div class="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/2.png" alt="" class="w-full h-[220px] rounded-xl"/>
              <div class=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p class=" text-xl font-bold text-[#16215D]">Jhon Smith</p>
                    <a class=" text-sm">Kepala Staff</a>
              </div>
          </div>
        </div>
        <div class="inline-flex gap-[10px] ml-10 mt-8">
          <div class="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/3.png" alt="" class="w-full h-[220px] rounded-xl"/>
              <div class=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p class=" text-xl font-bold text-[#16215D]">Lidya M.P</p>
                    <a class=" text-sm">Guru Matematika</a>
              </div>
          </div>
        </div>
        <div class="inline-flex gap-[10px] ml-10 mt-8">
          <div class="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/4.png" alt="" class="w-full h-[220px] rounded-xl"/>
              <div class=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p class=" text-xl font-bold text-[#16215D]">William</p>
                    <a class=" text-sm">Guru Fisika</a>
              </div>
          </div>
        </div>
        

        {/* Daftar */}
        <div class="container flex flex-col lg:flex-row ml-[70px] mr-[940px] bg-gradient-to-r from-[#3871D0] to-[#58C6EF] w-[1120px] rounded-[24px] pt-5 mt-28">
          <div class="w-[600px] h-[202px] pt-[56px] ml-[75px]">
            <div class="container mb-8">
              <h1 class="font-bold leadi text-5xl text-white">
                Daftar Sekarang Juga !
              </h1>
            </div>
            <p class="text-lg sm:mb-5 text-white mt-2">Jangan sampai melewatkan kesempatan untuk mendaftar, kami senantiasa menunggu kehadiran anak anda untuk segera belajar bersama kami.
            </p>
            <div class="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-x-4 lg:justify-start">
              <a rel="" href="#" class="px-8 py-2 text-sm bg-[#FFFF] text-[#619AEF] rounded-[8px] border-gray-100">Daftar Sekarang</a>
            </div>
          </div>
          <div class="w-[400px] h-[352px] flex-col justify-center inline-flex">
            <img class="" src="./asset/rafiki3.png" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}