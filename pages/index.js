import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Daftar from '../components/daftar';


export default function Index() {
  return (
    <>
      <Header />

      <main className='font-abc'>
      <Image className="absolute z-0 pt-16 lg:w-32 left-10 pr-6 mr-40 md:w-[200px] md:pl-5 md:pr-10" src='./asset/circle.png' />
        {/* Ilmu */}
        <div className="container flex flex-col justify-center mx-auto pb-24 mt-20 pt-14 px-20 lg:flex-row">
          <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div className="flex flex-col text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left pt-6 pl-3">
              <h1 className="font-bold leadi text-[40px] py-6 text-[#16215D] relative z-5">
                Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
              </h1>
              <p className="text-lg sm:mb-5 text-gray-500">jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat.
              </p>
              <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-x-4 lg:justify-start">
                <a rel="" href="#" className="px-8 py-2 text-sm bg-[#619AEF] text-white rounded-[8px] border-gray-100 hover:bg-[#16215D]">Daftar Sekarang</a>
              </div>
            </div>
            <div className="relative w-[1100px] h-[429px] pt-[96px] flex-col justify-end items-center inline-flex">
              <Image className="relative z-10" src="./asset/rafiki1.png" />
            </div>
            <Image className="right-0 absolute top-0 z-0 w-[600px] md:pl-60 md:w-[900px] md:pt-20 md:-right-12" src='./asset/Vector (2).png' />
          </div>
        </div>

        {/* Keunggulan */}
        <div className="py-9 border-2 rounded-tl-[150px] rounded-tr-[150px] rounded-bl-[150px] rounded-br-[150px] bg-gradient-to-b from-[#3871D0] to-[#58C6EF]">
          <div className="container justify-center mx-auto text-3xl font-bold pr-6 pt-8 pb-4 rounded-xl">
            <h1 className="font-bold leadi text-[40px] py-4 pr-2 pt-10 text-center items-center justify-center text-white">
              Keunggulan Sekolah Kami
            </h1>
          </div>
          <div className="container justify-center mx-auto items-center text-center py-10 px-16">
            <div className="inline-flex gap-[20px] items-center justify-center text-center">
              <div className="py-[14px] px-[45px] border-2 items-center rounded-2xl bg-white">
                <Image src="./asset/kurikulum.png" alt="" className="mb-5 items-center justify-center pl-20" />
                <a href="" className="text-xl font-bold text-center text-[#16215D]">Kurikulum Terbaru</a>
                <ul className='text-center w-64 text-base mb-2 mt-2'>Menerapkan kurikulum terbaru agar siswa mendapatkan materi terbaru</ul>
              </div>

              <div className="py-[14px] px-[45px] border-2 items-center rounded-2xl bg-white">
                <Image src="./asset/belajar.png" alt="" className="mb-5 items-center justify-center pl-20" />
                <a href="" className="text-xl font-bold text-center text-[#16215D]">Efektifitas Waktu Belajar</a>
                <ul className='text-center w-64 text-base mb-2 mt-2'>Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran</ul>
              </div>

              <div className="py-[14px] px-[45px] border-2 items-center rounded-2xl bg-white">
                <Image src="./asset/bakat.png" alt="" className="mb-5 items-center pl-20" />
                <a href="" className="text-xl font-bold text-center text-[#16215D]">Penyaluran Bakat & Minat</a>
                <ul className='text-center w-64 text-base mb-2 mt-2'>Berbagai kegiatan akademik maupun non akademik untuk mendukung bakat minat</ul>
              </div>

            </div>
          </div>

          <div className="container flex flex-col justify-center lg:flex-row mb-16 ">
            <div className="w-[550px] h-[502px] pr-[100px] pt-[50px] flex-col justify-end items-center inline-flex">
              <Image className="w-[400x] h-[600px]" src="./asset/rafiki2.png" />
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

        {/* Artikel */}
        <div className="container justify-center mx-auto text-3xl font-bold pr-6 mt-2 pt-8  rounded-xl">
          <h1 className="font-bold leadi text-[40px] pr-2 pt-14 text-center items-center justify-center text-[#16215D]">
            Artikel
          </h1>
          <p className="text-[20px] pt-4 pr-2  text-center items-center justify-center text-[#16215D]">Artikel seputar pendidikan</p>
        </div>
        <div className="inline-flex gap-[30px] lg:px-20 mt-8">
          <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
            <Image src="./asset/kelas.png" alt="" className="w-full h-[320px] rounded-xl" />
            <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
              <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
              <p className=" py-1 text-base font-bold text-[#16215D]">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</p>
              <a className="py-1 text-sm">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .</a>
              <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
            </div>
          </div>

          <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
            <Image src="./asset/kelas.png" alt="" className="w-full h-[320px] rounded-xl" />
            <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
              <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
              <p className=" py-1 text-base font-bold text-[#16215D]">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</p>
              <a className="py-1 text-sm">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .</a>
              <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
            </div>
          </div>

          <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
            <Image src="./asset/kelas.png" alt="" className="w-full h-[320px] rounded-xl" />
            <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
              <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
              <p className=" py-1 text-base font-bold text-[#16215D]">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</p>
              <a className="py-1 text-sm">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .</a>
              <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
            </div>
          </div>
        </div>

        {/* Galeri*/}
        <div className="font-bold leadi text-[40px] pr-60 pt-24 text-[#16215D] ml-[80px]">Artikel</div>
        <div className="container flex flex-col justify-center mx-auto lg:px-20 lg:flex-row lg:justify-between text-3xl font-bold sm:text-3xl rounded-xl">
          <h1 className="leadi text-xl py-4 font-medium text-[#16215D]">
            Dokumentasi Sekolah
          </h1>
          <div className="w-[110px] h-[100px] text-sm flex-col items-center text-end text-white pt-4">
            <p className="p-2 bg-[#619AEF] text-white hover:bg-[#16215D] rounded-[8px]">Lihat Semua</p>
          </div>
        </div>
        <div className="container justify-center lg:flex-row">
          <div className="inline-flex pb-[24px] gap-[32px] lg:px-16 ml-2">
            <div className="flex flex-col h-[325px] w-[255px] rounded-[16px] overflow-hidden">
              <Image src="./asset/ruang.png" alt="" className="w-full h-[320px]" />
            </div>

            <div className="flex flex-col h-[325px] w-[255px] rounded-[16px] overflow-hidden">
              <Image src="./asset/ngajar.png" alt="" className="w-full h-[320px]" />
            </div>

            <div className="flex flex-col h-[325px] w-[255px] rounded-[16px] overflow-hidden">
              <Image src="./asset/room.png" alt="" className="w-full h-[320px]" />
            </div>

            <div className="flex flex-col h-[325px] w-[255px] rounded-[16px] overflow-hidden">
              <Image src="./asset/tas.png" alt="" className="w-full h-[320px]" />
            </div>
          </div>
        </div>

        {/* Daftar */}
        <Daftar />


        <Footer />
      </main>
    </>
  )
}
