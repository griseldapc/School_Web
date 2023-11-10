import React from "react";
 export default function Daftar () {
    return (
        <main>
            <div className="container flex flex-col lg:flex-row ml-[70px] mr-[940px] bg-gradient-to-b from-[#3871D0] to-[#58C6EF] w-[1120px] rounded-[24px] pt-5 mt-28">
          <div className="w-[600px] h-[202px] pt-[56px] ml-[75px] ">
            <div className="container mb-8 ">
              <h1 className="font-bold leadi text-5xl text-white ">
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
        </div>
        </main>
    )
 }