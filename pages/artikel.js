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

        <div className="pt-28 text-center items-center justify-center text-gray-800">
          <h1 className="font-bold leadi text-[30px] mx-auto items-center justify-center text-[#16215D] ">Artikel</h1>
        </div>

        {/* Hero */}
        <section className="flex flex-col justify-center mx-auto items-center pt-5 pb-16 lg:flex-row">
          <div>
            <div className="">
              <img className="items-center justify-center mx-auto md:w-[500px] md:h-[350px] z-10" src="./asset/rafiki5.png" />
            </div>
          </div>
        </section>

        <img className="right-0 absolute top-0 z-0 w-[600px] hidden" src='./asset/Vector (2).png' />
        <img className="pt-7 absolute top-0 z-0 hidden" src='./asset/Vector (3).png' />

{/* border-[#54BAEB] border-2  */}

        {/* Content */}
        <section className="pt-20">
        <div className="flex flex-col lg:flex-row md:flex-row mb-16 border-[#54BAEB] border-2 rounded-2xl w-[400px] md:w-[700px] lg:w-[1110px] pb-10 items-center justify-center mx-auto">
          <div className="p-3 pt-[42px] items-center inline-flex justify-center lg:w-[500px] lg:h-[382px] lg:justify-end lg:items-center ">
            <img className=" h-[250px] lg:h-[350px] " src="./asset/kelas.png" />
          </div>
          <div className="w-[320px] md:w-[250px] h-[300px] lg:w-[550px] lg:h-[432px] flex-col items-center justify-center text-justify pt-6 lg:pb-10 lg:pt-14">
            <a rel="" className="text-sm md:text-xs text-[#3362CC] font-semibold pt-5 mt-10 lg:text-sm">12 Desember</a>
            <div className="container flex flex-col justify-center lg:py-3 mx-auto">
              <h1 className="font-bold text-base text-[#16215D] md:text-base lg:text-3xl">
                Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
              </h1>
            </div>
            <h1 className="text-sm sm:mb-2 md:text-xs lg:text-lg">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . .
            </h1>
            <Link rel="" href="/baca" className="text-sm text-[#3362CC] font-semibold hover:text-[#619AEF]"/>Read More...
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