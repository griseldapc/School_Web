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
        <div className="container flex flex-col justify-center mx-auto pb-24 mt-24 pt-16 px-20 lg:flex-row">
          <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div className="relative w-[1100px] flex-col justify-end items-center inline-flex">
              <img className="w-[550px] h-[360.13px] relative z-10" src="./asset/g6.png" />
            </div>
          </div>
        </div>

        <img className="right-0 absolute top-0 z-0 w-[600px]" src='./asset/Vector (2).png' />
        <img className="pt-7 absolute top-0 z-0" src='./asset/Vector (3).png'/>

        {/* Video */}
        <div className="py-8 text-center text-gray-800">
          <h1 className="font-bold leadi text-[40px] py-4 pr-2 text-center items-center justify-center text-[#16215D]">Video Profil</h1>
          <p className="mb-4 text-lg text-[#16215D]">Berikut adalah video profil dari sekolah kami</p>
        </div>
        <iframe
          width="1100"
          height="500"
          src="https://www.youtube.com/embed/9xofia597HI"
          frameborder="0"
          allowfullscreen
          className="mx-auto rounded-xl"
        ></iframe>



        {/* Keunggulan */}
        <div className="pt-9 mt-28">
        <div className="py-9 border-2 rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[150px] bg-gradient-to-b from-[#3871D0] to-[#58C6EF]">
          <div className="container justify-center mx-auto text-3xl font-bold pr-6 pt-8 pb-4 rounded-xl">
            <h1 className="font-bold leadi text-[40px] py-4 pr-2 pt-10 text-center items-center justify-center text-white">
              Keunggulan Sekolah Kami
            </h1>
          </div>
          <div className="container justify-center mx-auto items-center text-center py-10 px-16">
            <div className="inline-flex gap-[20px] items-center justify-center text-center">
              <div className="py-[14px] px-[45px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/kurikulum.png" alt="" className="mb-5 items-center justify-center pl-20" />
                <a href="" className="text-xl font-bold text-center text-[#16215D]">Kurikulum Terbaru</a>
                <ul className='text-center w-64 text-base mb-2 mt-2'>Menerapkan kurikulum terbaru agar siswa mendapatkan materi terbaru</ul>
              </div>

              <div className="py-[14px] px-[45px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/belajar.png" alt="" className="mb-5 items-center justify-center pl-20" />
                <a href="" className="text-xl font-bold text-center text-[#16215D]">Efektifitas Waktu Belajar</a>
                <ul className='text-center w-64 text-base mb-2 mt-2'>Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran</ul>
              </div>

              <div className="py-[14px] px-[45px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/bakat.png" alt="" className="mb-5 items-center pl-20" />
                <a href="" className="text-xl font-bold text-center text-[#16215D]">Penyaluran Bakat & Minat</a>
                <ul className='text-center w-64 text-base mb-2 mt-2'>Berbagai kegiatan akademik maupun non akademik untuk mendukung bakat minat</ul>
              </div>

            </div>
          </div>

          <div className="container flex flex-col justify-center lg:flex-row mb-16 ">
            <div className="w-[550px] h-[502px] pr-[100px] pt-[50px] flex-col justify-end items-center inline-flex">
              <img className="w-[400x] h-[600px]" src="./asset/rafiki2.png" />
            </div>

            <div className="w-[550px] h-[502px] pr-[30px] pt-[46px] mt-[16px] flex-col items-center justify-center pb-10 text-justify ml-[40px]">
              <div className="container flex flex-col justify-center mx-auto pr-6 mt-2 pt-8">
                <h1 className="font-bold leadi text-[40px] py-4 pr-2 text-white">
                  Tentang Kami
                </h1>
              </div>
              <p className="text-xl sm:mb-5 text-white mt-6">Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minatnya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang.
              </p>
            </div>
          </div>

        </div>
        </div>

        {/* Guru */}
        <div className="font-bold leadi text-[40px] pr-60 pt-24 text-[#16215D] ml-[80px]">Guru & Staff</div>
        <div className="container flex flex-col justify-center mx-auto lg:px-20 lg:flex-row lg:justify-between text-3xl font-bold sm:text-3xl pr-6 rounded-xl">
          <h1 className="leadi text-xl py-4 font-medium text-[#16215D]">
            Daftar Anggota Guru & Staff Sekolah Ini
          </h1>
          <div className="w-[110px] h-[100px] text-sm flex-col items-center text-end text-white pt-4">
            <p className="p-2 bg-[#619AEF] text-white hover:bg-[#16215D] rounded-[8px]">Lihat Semua</p>
          </div>
        </div>
        <div className="inline-flex gap-[10px] ml-24">
          <div className="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/1.png" alt="" className="w-full h-[220px] rounded-xl"/>
              <div className=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p className=" text-xl font-bold text-[#16215D]">Jeannete Ong</p>
                    <a className=" text-sm">Kepala Sekolah</a>
              </div>
          </div>
        </div>

        <div className="inline-flex gap-[10px] ml-10 mt-8">
          <div className="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/2.png" alt="" className="w-full h-[220px] rounded-xl"/>
              <div className=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p className=" text-xl font-bold text-[#16215D]">Jhon Smith</p>
                    <a className=" text-sm">Kepala Staff</a>
              </div>
          </div>
        </div>
        <div className="inline-flex gap-[10px] ml-10 mt-8">
          <div className="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/3.png" alt="" className="w-full h-[220px] rounded-xl"/>
              <div className=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p className=" text-xl font-bold text-[#16215D]">Lidya M.P</p>
                    <a className=" text-sm">Guru Matematika</a>
              </div>
          </div>
        </div>
        <div className="inline-flex gap-[10px] ml-10 mt-8">
          <div className="flex flex-col h-[310px] w-[240px] p-4 border-2 rounded-xl border-[#54BAEB]">
            <img src="./asset/4.png" alt="" className="w-full h-[220px] rounded-xl"/>
              <div className=" rounded-b-2xl pt-2 pb-5 text-center">
                  <p className=" text-xl font-bold text-[#16215D]">William</p>
                    <a className=" text-sm">Guru Fisika</a>
              </div>
          </div>
        </div>
        

        {/* Daftar */}
        {/* <div className="container flex flex-col lg:flex-row ml-[70px] mr-[940px] bg-gradient-to-b from-[#3871D0] to-[#58C6EF] w-[1120px] rounded-[24px] pt-5 mt-28">
          <div className="w-[600px] h-[202px] pt-[56px] ml-[75px]">
            <div className="container mb-8">
              <h1 className="font-bold leadi text-5xl text-white">
                Daftar Sekarang Juga !
              </h1>
            </div>
            <p className="text-lg sm:mb-5 text-white mt-2">Jangan sampai melewatkan kesempatan untuk mendaftar, kami senantiasa menunggu kehadiran anak anda untuk segera belajar bersama kami.
            </p>
            <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-x-4 lg:justify-start">
              <a rel="" href="#" className="px-8 py-2 text-sm bg-[#FFFF] text-[#619AEF] rounded-[8px] border-gray-100 hover:bg-[#16215D] hover:text-white">Daftar Sekarang</a>
            </div>
          </div>
          <div className="w-[400px] h-[352px] flex-col justify-center inline-flex">
            <img className="" src="./asset/rafiki3.png" />
          </div>
        </div> */}
        <Daftar />

        <Footer />
      </main>
    </>
  )
}