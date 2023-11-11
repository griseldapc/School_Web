import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Artikel(){
    return(
    <>
    <main className="font-abc">
        <Header/>

        <div className="pt-28 text-center text-gray-800">
                    <h1 className="font-bold leadi text-[40px] pr-2 text-center items-center justify-center text-[#16215D]">Artikel</h1>
                </div>

        {/* Hero */}
        <div className="container flex flex-col justify-center mx-auto pb-24 px-20 lg:flex-row">
          <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div className="relative w-[1100px] flex-col justify-end items-center inline-flex">
              <img className="w-[500px] h-[336.13px] relative z-10" src="./asset/rafiki5.png" alt=""/>
            </div>
          </div>
        </div>

        <img className="right-0 absolute top-0 z-0 w-[600px]" src='./asset/Vector (2).png' />
        <img className="pt-7 absolute top-0 z-0" src='./asset/Vector (3).png'/>

{/* Content */}
    <div className="container flex flex-col lg:flex-row mb-16 border-[#54BAEB] border-2 ml-20 rounded-2xl w-[1110px] relative z-10">
            <div className="w-[500px] h-[382px] pt-[42px] flex-col justify-end items-center inline-flex pl-12">
              <img className=" h-[400px]" src="./asset/kelas.png" />
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
              <a rel="" href="/baca" className="text-sm text-[#3362CC] font-semibold hover:text-[#619AEF]">Read More...</a>
            </div>
            </div>


{/* Artikel */}
        <div className="inline-flex gap-[30px] lg:px-20 mt-8">
    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/ijo.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Tenik Belajar Cepat Agar Anak Tidak Mudah Bosan</p>
        <a className="py-1 text-sm">Menggunakan teknik belajar yang tepat sangatlkah penting agar anak bisa menyerap materi dengan baik namun tetap . . .</a>
        <ul className="text-sm text-[#3362CC] font-semibold mt-2">Baca selengkapnya</ul>
    </div>
    </div>

    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/zaki.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Metode Tanya Jawab Untuk Evaluasi Materi  Di Sekolah</p>
        <a className="py-1 text-sm">Untuk mengetahui seberapa paham anak tentang materi yang diberikan, guru biasa mengadakan sesi tanya jawab agar menyegarkan ingatan  . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>

    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/ggg.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Berlibur Bersama Agar Anak Tidak Jenuh</p>
        <a className="py-1 text-sm">Anak tentunya akanjenuh jika terus menerus belajar, mereka juga perlu berlibur sejenak apalagi bersama dengan teman . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>
  </div>

  <div className="inline-flex gap-[30px] lg:px-20 mt-8">
    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/bljr.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</p>
        <a className="py-1 text-sm">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>

    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/play.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Permainan Yang Bagus Untuk Perkembangan Anak</p>
        <a className="py-1 text-sm">Selain belajar, anak-anak tentunya perlu untuk bermain, namun permainan apasaja kah yang dapat membantu perkembangan . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold mt-1">Baca selengkapnya</ul>
    </div>
    </div>

    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/fam.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Di Sekolah Belajar, Di Rumah pun Apakah Harus Belajar?</p>
        <a className="py-1 text-sm">Jika anak merasa dirinya sudah cukup hanya dengan belajar disekolah, kita sebagai orang tua harus bisa memberi . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold ">Baca selengkapnya</ul>
    </div>
    </div>
  </div>

  <div className="inline-flex gap-[30px] lg:px-20 mt-8">
    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/covid.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Tetap Menjaga Kesehatan Anak Selama Di Sekolah</p>
        <a className="py-1 text-sm">Virus dan bakteri tentu ada dimana saja, oleh sebab itu kita perlu memperhatikan kesehatan anak agar tidak mudah tertular . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>

    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/ran.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify ">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Mewarnai Meningkatkan Kreativitas Anak?</p>
        <a className="py-1 text-sm">Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa  . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>

    <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/color.png" alt="" className="w-full h-[320px] rounded-xl"/>
      <div className=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify">
        <h1 className="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p className=" py-1 text-base font-bold text-[#16215D]">Perlukah Belajar Menggambar Dan Mewarnai Di Sekolah?</p>
        <a className="py-1 text-sm">Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa . . .</a>
        <ul className="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>
  </div>
    
        <Footer/>
        </main>
    </>
    )
}