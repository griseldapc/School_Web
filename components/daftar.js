import React from "react";

 export default function Daftar () {
    return (
        <main className="flex justify-center">
          <section className="lg:mt-36 bg-gradient-to-b from-[#3871D0] to-[#58C6EF] w-[265px] md:w-[710px] 
          lg:w-[1147px] rounded-[24px] pt-5 mt-10 pb-10 mb-14 md:flex md:flex-row md:px-3 lg:h-[340px] text-center md:text-left md:p-3 lg:p-5 ">
          <div className="pt-[40px] mx-5 md:mx-10 lg:my-auto lg:mt-3">
            <ul className="mb-8 ">
              <li className="font-bold text-2xl text-white lg:text-[50px] md:-mt-2">
                Daftar Sekarang Juga !
              </li>
            </ul>
            <p className="text-base text-white mt-2 lg:text-xl md:-mt-5 lg:mt-5">Jangan sampai melewatkan kesempatan untuk mendaftar, kami senantiasa menunggu kehadiran anak anda untuk segera belajar bersama kami.
            </p>
            <div className="py-5 lg:justify-start lg:mt-3">
              <a rel="" href="#" className="px-8 py-2 text-sm bg-[#FFFF] text-[#619AEF] rounded-[8px] border-gray-100 hover:bg-[#16215D] hover:text-white lg:py-3 text-center">Hubungi Kami</a>
            </div>
          </div>
          <div className=" py-5 w-60 md:w-[800px] md:py-10  items-center justify-center mx-auto">
            <img className="lg:w-[310px] lg:ml-9 md:-ml-4 lg:-mt-2" src="./asset/rafiki3.png" />
          </div>
        </section>
        </main>
    )
 }