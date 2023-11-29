import React, { useState, useEffect } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Daftar from '../components/daftar';
import dataIndex from "../data/index.json";


export default function Index() {
  const [jsonIndex, setJsonIndex] = useState([]);

  useEffect (() => {
      setJsonIndex(dataIndex); 
  }, []);
  return (
    <>
      <Header />
      <main className='font-abc'>
        <img src="./asset/circle.png" alt="Description of the img" width="100" className='hidden' />

        {/* Ilmu */}
        <section className='flex flex-col md:flex-col lg:flex-col md:mt-5 p-5 lg:-mt-5 lg:justify-between'>
          <div className='md:flex-row md:flex  md:items-start lg:text-left lg:m-5 lg:ml-7'>
            <ul className='my-5 md:ml-2 md:top-0 lg:mt-24 text-center items-center md:text-left md:items-start'>
              <h1 className="font-bold text-2xl md:text-3xl lg:text-[45px] lg:text-5xl py-5 text-[#16215D] mt-20 lg:tracking-wide">
                Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
              </h1>
              <p className="text-lg sm:mb-5 text-gray-500 mb-5 lg:text-xl lg:font-medium ">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat.
              </p>
              <a rel="" href="#" className="text-sm w-40 h-8 py-2 px-2 mx-auto md:mx-0  bg-[#619AEF] text-white rounded-lg border-gray-100 hover:bg-[#16215D] flex flex-col justify-center items-center p-2 lg:py-5">Daftar Sekarang</a>
            </ul>
            <div className="md:w-full justify-center md:pt-20">
              <img src="./asset/rafiki1.png" />
            </div>
          </div>
        </section>


        {/* Keunggulan */}
        <section className='background' style={{ backgroundImage: 'url("/asset/bg1.png")',  minHeight: "135vh", maxWidth: "full", backgroundPosition: 'center',  backgroundSize: 'cover' }}>
          <h1 className="text-white font-semibold text-xl md:text-4xl lg:text-[50px] text-center mt-8 pt-10 md:pt-16 lg:pt-28 md:m-10">
            Keunggulan Sekolah Kami
          </h1>

          <div className="text-center sm:p-6 p-8">
            <ul className="space-y-4 md:space-y-0 md:flex md:gap-7 lg:gap-8 lg:p-6 justify-center">
              <li className="border-2 rounded-2xl bg-white py-2 md:p-2 md:w-full lg:p-9 w-64 lg:w-[363px]">
                <img
                  src="./asset/kurikulum.png"
                  alt=""
                  className="mb-2 mx-auto"
                />
                <h1 className="text-sm font-bold text-center text-[#16215D] md:text-base lg:text-xl md:mt-5">
                  Kurikulum Terbaru
                </h1>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-base mx-auto md:w-40 lg:w-72">
                  Menerapkan kurikulum terbaru agar siswa mendapatkan materi
                  terbaru
                </p>
              </li>

              <li className="border-2 rounded-2xl bg-white py-2 md:w-full md:p-2 lg:p-9 w-64 lg:w-[363px]">
                <img src="./asset/belajar.png" alt="" className="mb-5 mx-auto" />
                <h3 className="text-sm md:text-base font-bold text-center text-[#16215D] lg:text-xl">
                  Efektifitas Waktu Belajar
                </h3>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-base mx-auto md:w-40 lg:w-72">
                  Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran
                </p>
              </li>

              <li className="border-2 rounded-2xl bg-white py-2 md:w-full md:p-2 lg:p-9 w-64 lg:w-[363px]">
                <img src="./asset/bakat.png" alt="" className="mb-5 mx-auto" />
                <h3 className="text-sm md:text-base font-bold text-center text-[#16215D] lg:text-xl">
                  Penyaluran Bakat & Minat
                </h3>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-base mx-auto md:w-40 lg:w-72">
                  Berbagai macam kegitan akademik maupun non akademik untuk mendukung bakat minat
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:flex-row justify-between md:mt-16 ">
            <img
              className="w-1/2 md:w-1/3 md:pl-7 lg:h-[448.83px] lg:w-[448.83px] lg:ml-7 lg:mb-32"
              src="./asset/rafiki2.png"
            />
            <ul className="font-bold text-white text-center pt-10 mb-10 md:pt-2 lg:ml-36">
              <p className='lg:text-left lg:ml-14 text-2xl md:text-3xl md:text-left md:ml-8 lg:text-[50px]'> Tentang Kami </p>
              <li className="text-white text-sm md:text-base md:text-justify lg:text-xl lg:text-justify font-normal lg:pt-10 px-8 pt-5 md:mx-18 lg:mx-6">
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
        <section className="pt-20 lg:pt-32 items-center">
          <div className="font-bold text-2xl md:text-4xl lg:text-[50px] text-center mx-auto items-center justify-center text-[#16215D] space-y-2">
            <h1>Artikel</h1>
            <p className="text-base md:text-2xl lg:text-2xl pt-2 text-center text-[#16215D] font-normal">
              Artikel seputar pendidikan
            </p>
          </div>

          <div className="p-7 xl:p-0 lg:p-0 xl:m-0 lg:mt-5 items-center justify-center mx-auto text-justify">
            <ul className="space-y-5 flex flex-col lg:flex-row xl:p-14 md:flex-row md:gap-5 lg:-mt-5">
              <li className="rounded-b-2xl pt-5 lg:-pb-2  p-6 border-2 rounded-xl border-[#54BAEB] md:mt-5">
                <img src="./asset/kelas.png" alt="" className="w-full" />
                <h1 className="font-semibold text-sm text-[#619AEF] mt-5">
                  12 Desember 2020
                </h1>
                <p className=" py-2 text-sm font-bold text-[#1C2661] lg:text-[16px] lg:font-extrabold">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </p>
                <a className="py-2 text-sm">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman . . .
                </a>
                <ul className="text-sm py-2 text-[#3362CC] font-semibold -mb-4 lg:pb-3">
                  Baca selengkapnya
                </ul>
              </li>

              <li className="rounded-b-2xl pt-5 p-6 border-2 rounded-xl border-[#54BAEB] lg:-pb-2">
                <img src="./asset/kelas.png" alt="" className="w-full" />
                <h1 className="font-semibold text-sm text-[#619AEF] mt-5">
                  12 Desember 2020
                </h1>
                <p className=" py-2 text-sm font-bold text-[#1C2661] lg:text-[16px]">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </p>
                <a className="py-2 text-sm">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman . . .
                </a>
                <ul className="text-sm py-2 text-[#3362CC] font-semibold -mb-4">
                  Baca selengkapnya
                </ul>
              </li>

              <li className="rounded-b-2xl pt-5 p-6 border-2 rounded-xl border-[#54BAEB] lg:-pb-2">
                <img src="./asset/kelas.png" alt="" className="w-full" />
                <h1 className="font-semibold text-sm text-[#619AEF] mt-4">
                  12 Desember 2020
                </h1>
                <p className=" py-2 text-sm font-bold text-[#1C2661] lg:text-[16px]">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </p>
                <a className="py-2 text-sm">
                  Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                  kembali belajar di sekolah. Saya ingin bertemu dengan
                  teman-teman . . .
                </a>
                <ul className="text-sm py-2 text-[#3362CC] font-semibold -mb-4">
                  Baca selengkapnya
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Galeri*/}
        <section className='pt-10'>
          <div className="font-bold text-2xl md:text-6xl lg:text-5xl text-center mx-auto items-center justify-center text-[#16215D] space-y-2 lg:-pt-10">
            <h1 className='md:text-4xl lg:text-left lg:ml-14 lg:text-[50px] md:text-left md:ml-6'>Galeri</h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:gap-80 lg:justify-between lg:px-14 md:pt-10">
              <p className="text-base font-normal md:text-xl lg:text-2xl pt-2 md:-mt-10 md:pr-10 mr-2 lg:-mt-10 text-[#16215D] pb-4">
                Dokumentasi Sekolah
              </p>
              <button className="p-2 bg-[#619AEF] font-medium text-xs  items-center text-white hover:bg-[#16215D] rounded-[8px] ml-2 lg:-mt-10 lg:py-2.5 lg:pl-4 lg:flex pl-4 flex md:-mt-10 lg:text-[16px]">
                Lihat Semua
                <img src='./asset/next.png' className='w-6'></img>
              </button>
            </div>

          </div>


          <div className="p-7 xl:p-0 lg:p-0 xl:m-0 items-center justify-center lg:flex lg:gap-6 md:flex md:gap-4">
          {jsonIndex.map((item,index) => (
                <a key={index} href="#" className="group">
            <ul className="space-y-5 flex flex-col lg:flex-row md:space-y-0 rounded-[16px] py-5 items-center md:flex-row lg:mt-5 md:w-full lg:w-[270px] ">
              <li className="">
                <img src={item.img} alt="" className="w-full " />
              </li>
            </ul>
            </a>
            ))}
          </div>
        </section>

        {/* Daftar */}
        <Daftar />


        <Footer />
      </main>
    </>
  )
}