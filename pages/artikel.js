import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Artikel(){
    return(
    <>
    <main>
        <Header/>

        {/* Hero */}
        <div class="container flex flex-col justify-center mx-auto pb-24 mt-10 pt-10 px-20 lg:flex-row">
          <div class="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
            <div class="w-[1100px] flex-col justify-end items-center inline-flex">
              <img class="w-[500px] h-[336.13px]" src="./asset/rafiki5.png" />
            </div>
          </div>
        </div>


    <div class="container flex flex-col lg:flex-row mb-16 border-[#54BAEB] border-2 ml-20 rounded-2xl w-[1110px]">
            <div class="w-[500px] h-[352px] pt-[40px] flex-col justify-end items-center inline-flex pl-10">
              <img class=" h-[300px]" src="./asset/kelas.png" />
            </div>
    <div class="w-[520px] h-[402px] flex-col items-center justify-center pb-10 text-justify pl-10 ml-4">
              <div class="container flex flex-col justify-center mx-auto mt-2 pt-6">
                <h1 class="font-bold leadi text-3xl py-4">
                Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
                </h1>
              </div>
              <p class="text-lg sm:mb-2">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . . 
              </p>
              <a rel="" href="/baca" class="text-sm text-[#3362CC] font-semibold">Read More...</a>
            </div>
            </div>


{/* Artikel */}
        <div class="inline-flex gap-[30px] lg:px-20 mt-8">
    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/ijo.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Tenik Belajar Cepat Agar Anak Tidak Mudah Bosan</p>
        <a class="py-1 text-sm">Menggunakan teknik belajar yang tepat sangatlkah penting agar anak bisa menyerap materi dengan baik namun tetap . . .</a>
        <ul class="text-sm text-[#3362CC] font-semibold mt-8">Baca selengkapnya</ul>
    </div>
    </div>

    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/zaki.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Metode Tanya Jawab Untuk Evaluasi Materi  Di Sekolah</p>
        <a class="py-1 text-sm">Untuk mengetahui seberapa paham anak tentang materi yang diberikan, guru biasa mengadakan sesi tanya jawab agar menyegarkan ingatan  . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>

    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/ggg.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Berlibur Bersama Agar Anak Tidak Jenuh</p>
        <a class="py-1 text-sm">Anak tentunya akanjenuh jika terus menerus belajar, mereka juga perlu berlibur sejenak apalagi bersama dengan teman . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold mt-6">Baca selengkapnya</ul>
    </div>
    </div>
  </div>

  <div class="inline-flex gap-[30px] lg:px-20 mt-8">
    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/bljr.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</p>
        <a class="py-1 text-sm">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold">Baca selengkapnya</ul>
    </div>
    </div>

    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/play.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Permainan Yang Bagus Untuk Perkembangan Anak</p>
        <a class="py-1 text-sm">Selain belajar, anak-anak tentunya perlu untuk bermain, namun permainan apasaja kah yang dapat membantu perkembangan . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold mt-6">Baca selengkapnya</ul>
    </div>
    </div>

    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/fam.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Di Sekolah Belajar, Di Rumah pun Apakah Harus Belajar?</p>
        <a class="py-1 text-sm">Jika anak merasa dirinya sudah cukup hanya dengan belajar disekolah, kita sebagai orang tua harus bisa memberi . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold mt-6">Baca selengkapnya</ul>
    </div>
    </div>
  </div>

  <div class="inline-flex gap-[30px] lg:px-20 mt-8">
    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/covid.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Tetap Menjaga Kesehatan Anak Selama Di Sekolah</p>
        <a class="py-1 text-sm">Virus dan bakteri tentu ada dimana saja, oleh sebab itu kita perlu memperhatikan kesehatan anak agar tidak mudah tertular . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold mt-6">Baca selengkapnya</ul>
    </div>
    </div>

    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/ran.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify ">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Mewarnai Membantu Meningkatkan Kreativitas Anak?</p>
        <a class="py-1 text-sm">Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa  . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold mt-6">Baca selengkapnya</ul>
    </div>
    </div>

    <div class="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
      <img src="./asset/color.png" alt="" class="w-full h-[320px] rounded-xl"/>
      <div class=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify">
        <h1 class="font-semibold text-sm text-[#619AEF]">12 Desember 2020</h1>
        <p class=" py-1 text-base font-bold text-[#16215D]">Perlukah Belajar Menggambar Dan Mewarnai Di Sekolah?</p>
        <a class="py-1 text-sm">Banyak kegiatan bisa dilakukan di rumah dan disekolah untuk meningkatkan kreativitas anak. Banyak pendapaf diluar sana bahwa . . .</a>
        <ul class="text-sm py-2 text-[#3362CC] font-semibold mt-6">Baca selengkapnya</ul>
    </div>
    </div>
  </div>
    
        <Footer/>
        </main>
    </>
    )
}