import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Berita from "../components/artikel";
import Link from "next/link";

export default function Artikel() {
  return (
    <>
      <main className="font-abc">
        <Header />

        <div className="pt-28 text-center items-center justify-center text-[#16215D] lg:mt-8">
          <h1 className="font-bold text-[30px] lg:text-4xl">Artikel</h1>
        </div>

        {/* Hero */}
        <section className="flex items-center justify-center">
  <div>
    <div>
      <img className="md:w-[500px] md:h-[350px] z-10" src="./asset/rafiki5.png" />
    </div>
  </div>
</section>


        <img className="right-0 absolute top-0 z-0 w-[600px] hidden" src='./asset/Vector (2).png' />
        <img className="pt-7 absolute top-0 z-0 hidden" src='./asset/Vector (3).png' />

        {/* border-[#54BAEB] border-2  */}

        {/* Content */}
        <section className="pt-20 items-center">
  <div className="flex flex-col lg:flex-row md:flex-row mb-16 border-[#54BAEB] border-2 rounded-2xl w-[270px] md:w-[650px] lg:w-[1120px] pb-10 items-center justify-center mx-auto text-center p-3 md:h-[300px] lg:h-[450px]">
    <div className="mt-5 items-center justify-center lg:w-[600px] lg:h-[350px] flex flex-col md:px-3">
      <img className="h-[150px] lg:h-[500px] md:h-[240px]" src="./asset/kelas.png" />
    </div>
    <div className="w-[200px] md:w-[300px] h-[350px] lg:w-[600px] lg:h-[410px] flex-col text-justify pt-4 lg:pb-10  md:px-3 md:mt-16 lg:pr-8">
      <a rel="" className="text-xs md:text-xs text-[#3362CC] font-semibold pt-2 mt-2 lg:text-sm">12 Desember</a>
      <div className="container flex flex-col justify-center  mx-auto">
        <h1 className="font-bold text-sm text-[#16215D] md:text-sm lg:text-3xl py-2">
          Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
        </h1>
      </div>
      <h1 className="text-xs sm:mb-2 md:text-xs lg:text-lg pb-2">
        Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. Begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . .
      </h1>
      <Link rel="" href="/baca" className="text-xs text-[#3362CC] font-semibold hover:text-[#619AEF]">Read More...</Link>
    </div>
  </div>
</section>




        {/* Artikel */}
        <Berita />

        <Footer />
      </main>
    </>
  )
}