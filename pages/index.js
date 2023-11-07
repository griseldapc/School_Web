import React from 'react';
import Header from '../components/header';

export default function Index() {
  return (
    <>
      <Header />

      <main className=''>

        {/* Ilmu */}
        <div class="container flex flex-col justify-center mx-auto pb-24 mt-4 pt-4 lg:px-9 lg:flex-row pl-6">
          <div class="container flex flex-col justify-center mx-auto sm:py-0 lg:py-0 lg:px-8 lg:flex-row lg:justify-between">
            <div class="flex flex-col text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left pl-2 pt-6">
              <h1 class="font-bold leadi text-[40px] py-6 text-[#16215D]">
                Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
              </h1>
              <p class="text-lg sm:mb-5 text-gray-500">jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat.
              </p>
              <div class="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-x-4 lg:justify-start">
                <a rel="" href="#" class="px-8 py-2 text-sm bg-[#619AEF] text-white rounded-[8px] border-gray-100">Daftar Sekarang</a>
              </div>
            </div>
            <div class="w-[1100px] h-[429px] pl-[51px] ml-[2px] pt-[96px] flex-col justify-end items-center inline-flex">
              <img class="" src="./asset/rafiki1.png" />
            </div>
          </div>
        </div>

        {/* keunggulan */}
        {/* <img class="" src='./asset/Rectangle 6.png'/> */}
        
        <div class="py-9 border-2">
          <div class="container justify-center mx-auto text-3xl font-bold pr-6 mt-2 pt-8 rounded-xl">
            <h1 class="font-bold leadi text-[40px] py-4 pr-2 pt-14 text-center items-center justify-center text-[#16215D]">
              Keunggulan Sekolah Kami
            </h1>
          </div>
          <div class="container justify-center mx-auto items-center text-center py-10">
            <div class="inline-flex pb-[24px] gap-[60px] items-center justify-center text-center">
              <div class="py-[14px] px-[20px] border-2 items-center rounded-2xl">
                <img src="./asset/kurikulum.png" alt="" class="mb-5 items-center justify-center pl-20" />
                <a href="" class="text-xl font-bold text-center">Kurikulum Terbaru</a>
                <ul className='text-center w-64 text-lg mt-2'>Menerapkan kurikulum terbaru agar siswa mendapatkan materi terbaru</ul>
              </div>

              <div class="py-[14px] px-[20px] border-2 items-center rounded-2xl">
                <img src="./asset/belajar.png" alt="" class="mb-5 items-center justify-center pl-20" />
                <a href="" class="text-xl font-bold text-center">Efektifitas Waktu Belajar</a>
                <ul className='text-center w-64 text-lg mt-2'>Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran</ul>
              </div>

              <div class="py-[14px] px-[20px] border-2 items-center rounded-2xl bg-white">
                <img src="./asset/bakat.png" alt="" class="mb-5 items-center pl-20" />
                <a href="" class="text-xl font-bold text-center">Penyaluran Bakat & Minat</a>
                <ul className='text-center w-64 text-lg mt-2'>Berbagai kegiatan akademik maupun non akademik untuk mendukung bakat minat</ul>
              </div>

            </div>
          </div>

          <div class="container flex flex-col justify-center mx-auto lg:flex-row ">
            <div class="w-[650px] h-[602px] pl-[71px] pr-[113px] pt-[86px] flex-col justify-end items-center inline-flex ml-14">
              <img class="w-[600x] h-[800px]" src="./asset/rafiki2.png" />
            </div>

            <div class="w-[550px] h-[502px] pl-[2px] pr-[120px] pt-[86px] mt-[16px] flex-col items-center justify-center">
              <div class="container flex flex-col justify-center mx-auto pr-6 mt-2 pt-8">
                <h1 class="font-bold leadi text-4xl py-4 pr-2">
                  Tentang Kami
                </h1>
              </div>
              <p class="text-lg sm:mb-5 text-gray-500 pr-9 mt-8">Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minatnya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang.
              </p>
            </div>
          </div>

        </div>

{/* Artikel */}
<div class="container justify-center mx-auto text-3xl font-bold pr-6 mt-2 pt-8 rounded-xl">
            <h1 class="font-bold leadi text-[40px] pr-2 pt-14 text-center items-center justify-center text-[#16215D]">
              Artikel
            </h1>
            <p class="text-[20px] py-4 pr-2  text-center items-center justify-center text-[#16215D]">Artikel seputar pendidikan</p>
          </div>
      </main>
    </>
  )
}
