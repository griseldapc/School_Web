import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Berita from "../components/artikel";
import Image from "next/image";
import Link from "next/link";

export default function Artikel() {
  return (
    <>
      <main className="font-abc">
        <Header />

        <div className="pt-28 text-center text-gray-800">
          <h1 className="font-bold leadi text-[40px] pr-2 text-center items-center justify-center text-[#16215D]">Artikel</h1>
        </div>

        {/* Hero */}
        <div className="container flex flex-col justify-center mx-auto pb-24 px-20 lg:flex-row">
          <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div className="relative w-[1100px] flex-col justify-end items-center inline-flex">
              <Image className="w-[500px] h-[336.13px] relative z-10" src="./asset/rafiki5.png" alt="" />
            </div>
          </div>
        </div>

        <Image className="right-0 absolute top-0 z-0 w-[600px]" src='./asset/Vector (2).png' />
        <Image className="pt-7 absolute top-0 z-0" src='./asset/Vector (3).png' />

        {/* Content */}
        <div className="container flex flex-col lg:flex-row mb-16 border-[#54BAEB] border-2 ml-20 rounded-2xl w-[1110px] relative z-10">
          <div className="w-[500px] h-[382px] pt-[42px] flex-col justify-end items-center inline-flex pl-12">
            <Image className=" h-[400px]" src="./asset/kelas.png" />
          </div>
          <div className="w-[550px] h-[432px] flex-col items-center justify-center pb-10 text-justify ml-4 pt-10">
            <a rel="" className="text-sm text-[#3362CC] font-semibold pt-5 mt-10">12 Desember</a>
            <div className="container flex flex-col justify-center mx-auto">
              <h1 className="font-bold leadi text-[30px] pb-2 text-[#16215D]">
                Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
              </h1>
            </div>
            <h1 className="text-lg sm:mb-2">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . .
            </h1>
            <Link rel="" href="/baca" className="text-sm text-[#3362CC] font-semibold hover:text-[#619AEF]">Read More...</Link>
          </div>
        </div>


        {/* Artikel */}
        <Berita />

        <Footer />
      </main>
    </>
  )
}