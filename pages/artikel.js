import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import data from "../data/artikel.json";

export default function Artikel() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); //menggunakan data dari artikel.json
  }, []);
  return (
    <>
      <main className="font-abc">
        <Header />

        <div className="pt-28 text-center items-center justify-center text-[#1C2661] lg:mt-8">
          <h1 className="font-bold text-[30px] lg:text-[50px] lg:font-extrabold">Artikel</h1>
        </div>

        {/* Hero */}
        <section className="flex items-center justify-center">
          <div>
            <div>
              <img className="md:w-[500px] md:h-[350px] z-10 p-5" src="./asset/rafiki5.png" />
            </div>
          </div>
        </section>


        <img className="right-0 absolute top-0 z-0 w-[600px] hidden" src='./asset/Vector (2).png' />
        <img className="pt-7 absolute top-0 z-0 hidden" src='./asset/Vector (3).png' />

        {/* border-[#54BAEB] border-2  */}

        {/* Content */}
        <section className="pt-20 items-center">
          <div className="flex flex-col lg:flex-row md:flex-row mb-16 border-[#54BAEB] border-2 rounded-2xl w-[270px] md:w-[710px] lg:w-[1150px] pb-10 items-center justify-center mx-auto text-center p-3 md:h-[300px] lg:h-[455px] lg:justify-between h-[610px]">
            <div className="-mt-4 items-center justify-center lg:h-[380px] flex flex-col md:px-3 md:mt-6 lg:-ml-5">
              <img className="h-[150px] lg:h-[450px] md:h-[240px]" src="./asset/kelas.png" />
            </div>
            <div className="w-[200px] md:w-[350px] h-[350px] lg:w-[560px] lg:h-[410px] flex-col text-justify pt-4 lg:pb-10  md:px-3 md:mt-[90px] lg:mt-5 lg:mx-1 lg:-ml-4 lg:pr-6">
              <a rel="" className="text-xs md:text-xs text-[#619AEF] font-semibold pt-2 mt-2 lg:text-base">12 Desember 2021</a>
              <div className="container flex flex-col justify-center  mx-auto md:-mt-3">
                <h1 className="font-bold text-sm text-[#1C2661] md:text-sm lg:text-3xl py-2 lg:mt-3 lg:font-bold">
                  Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </h1>
              </div>
              <h1 className="text-xs md:text-xs lg:text-base lg:mt-3 md:-mt-2">
                Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. Begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . .
              </h1>
              <p className="lg:text-sm text-xs mt-2 lg:mt-2 lg:mb-10 mb-3 md:mb-1 md:mt-1">Penulis: Shinta A.P</p>
              <Link rel="" href="/baca" className="lg:text-base md:text-[14px] text-sm text-[#3362CC] font-semibold hover:text-[#619AEF]">Baca selengkapnya</Link>
            </div>
          </div>
        </section>




        {/* Artikel */}
        <div className="flex-wrap flex gap-[20px] lg:px-14 md:pl-8 -mt-16 p-6 lg:-mt-5 mx-auto md:gap-7 lg:gap-8">
          {jsonData.map((item, index) => (
            <a key={index} href="#" class="group">

              <div className="flex flex-col h-[485px] p-6 md:w-[340px] lg:w-[362px]  border-2 rounded-xl border-[#54BAEB]">
                <img src={item.image} alt="" className="w-full h-[320px] rounded-xl" />
                <div className=" rounded-b-2xl pt-5  pl-3 ">
                  <h1 className="font-semibold text-sm text-[#619AEF]">{item.tanggal}</h1>
                  <p className=" py-1 text-base font-bold text-[#16215D]">{item.judul}</p>
                  <a className="py-1 text-sm">{item.deskripsi}</a>
                  <ul className="text-sm text-[#3362CC] font-semibold mt-2">{item.baca}</ul>
                </div>
              </div>
            </a>
          ))}

        </div>

        <Footer />
      </main>
    </>
  )
}