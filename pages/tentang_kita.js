import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Daftar from "../components/daftar";
import dataGuru from "../data/guru.json";


export default function Tentang_kita() {
  const [jsonGuru, setJsonGuru] = useState([]);

  useEffect(() => {
    setJsonGuru(dataGuru);
  }, []);
  return (
    <>
      <Header />

      <main className='font-abc'>

        {/* Hero */}
        <section className="flex flex-col justify-center mx-auto items-center mt-16 pt-16 lg:flex-row p-5">
          <div className="">
            <img className=" md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] z-10" src="./asset/g6.png" />
          </div>
        </section>

        {/* Video */}
        <section className="flex justify-center pb-[24px] mt-16 mb-10 overflow-x-hidden lg:pt-14 md:pt-10 md:mt-10 lg:mb-20">
          <div className="pb-5 flex-col justify-start items-center gap-6 inline-flex mx-auto">
            <div className="self-stretch h-[50px] flex-col justify-center items-center flex">
              <div className="text-[#1C2661] text-xl font-bold lg:text-[50px] lg:pt-20 md:text-4xl">Video Profil</div>
              <div className="text-[#1C2661] text-xs md:text-xl md:py-4 font-normal justify-center items-center text-center lg:text-2xl lg:pt-6 md:mb-10">
                Berikut adalah video profil dari sekolah kami
              </div>
            </div>
            <div className="items-center inline-flex lg:pt-16">
              <iframe
                src="https://www.youtube.com/embed/9xofia597HI"
                frameborder="0"
                allowfullscreen
                className="mx-auto rounded-xl h-auto md:w-[705px] md:h-[300px] lg:w-[1150px] lg:h-[500px] w-[260px]"
              ></iframe>
            </div>
          </div>
        </section>



        {/* Keunggulan */}
        <section className='background' style={{ backgroundImage: 'url("/asset/bg1.png")', minHeight: "135vh", maxWidth: "full", backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <h1 className="text-white font-semibold text-xl md:text-4xl lg:text-[50px] text-center mt-8 pt-10 md:pt-16 lg:pt-28 md:m-10">
            Keunggulan Sekolah Kami
          </h1>

          <div className="text-center sm:p-6 p-8">
            <ul className="space-y-4 md:space-y-0 md:flex md:gap-6 lg:gap-8 lg:p-6 justify-center">
              <li className="border-2 rounded-2xl bg-white py-2 md:p-2 md:w-[220px] lg:p-9 w-64 lg:w-[360px]">
                <img
                  src="./asset/kurikulum.png"
                  alt=""
                  className="mb-2 mx-auto"
                />
                <h1 className="text-sm font-bold text-center text-[#16215D] md:text-base lg:text-xl md:mt-5">
                  Kurikulum Terbaru
                </h1>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-base w-56 mx-auto md:w-40 lg:w-72">
                  Menerapkan kurikulum terbaru agar siswa mendapatkan materi
                  terbaru
                </p>
              </li>

              <li className="border-2 rounded-2xl bg-white py-2 md:w-[220px] md:p-2 lg:p-9 w-64 lg:w-[360px]">
                <img src="./asset/belajar.png" alt="" className="mb-5 mx-auto" />
                <h3 className="text-sm md:text-base font-bold text-center text-[#16215D] lg:text-xl">
                  Efektifitas Waktu Belajar
                </h3>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-base w-56 mx-auto md:w-40 lg:w-72">
                  Waktu belajar yang dirancang agar para siswa tidak jenuh dan menerima pelajaran
                </p>
              </li>

              <li className="border-2 rounded-2xl bg-white py-2 md:w-[220px] md:p-2 lg:p-9 w-64 lg:w-[360px]">
                <img src="./asset/bakat.png" alt="" className="mb-5 mx-auto" />
                <h3 className="text-sm md:text-base font-bold text-center text-[#16215D] lg:text-xl">
                  Penyaluran Bakat & Minat
                </h3>
                <p className="text-center py-2 px-2 text-xs mb-2 md:text-base lg:text-base w-56 mx-auto md:w-40 lg:w-72">
                  Berbagai macam kegitan akademik maupun non akademik untuk mendukung bakat minat
                </p>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:flex-row justify-between md:mt-16 ">
            <img
              className="w-1/2 md:w-[400px] md:pl-10 lg:h-[330px] lg:ml-4 lg:mb-32 md:-ml-3"
              src="./asset/sekolah.png"
            />
            <ul className="font-bold text-white text-2xl text-center pt-10 mb-10 md:pt-2 lg:ml-10 lg:-mt-20">
              <p className='lg:text-left lg:ml-14 text-xl md:text-3xl md:text-left md:ml-8 lg:text-[50px]'> Profil Singkat </p>
              <li className="text-white text-sm md:text-base md:text-justify lg:text-xl lg:text-justify font-normal lg:pt-10 px-8 pt-5 md:mx-18 lg:mx-6">
                Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini. Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.
              </li>
            </ul>
          </div>
        </section>

        {/* Guru */}
        <section className='pt-20 lg:mt-20'>
          <div className="font-bold text-4xl md:text-6xl lg:text-5xl text-center mx-auto items-center justify-center text-[#16215D] space-y-2 lg:-pt-10">
            <h1 className='md:text-4xl lg:text-left lg:ml-14 lg:text-[50px] md:text-left md:ml-6 text-2xl'>Guru & Staff</h1>
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:justify-between lg:justify-between lg:px-14 md:pt-10 md:px-7">
              <p className="text-base font-normal md:text-xl lg:text-2xl pt-2 md:-mt-10 lg:-mt-10 text-[#16215D] pb-4 p-5 md:-ml-5">
                Daftar Anggota Guru dan Staff Sekolah Ini
              </p>
              <button className="p-2 bg-[#619AEF] font-medium text-xs  items-center text-white hover:bg-[#16215D] rounded-[8px] ml-2 lg:-mt-10 lg:py-2.5 lg:pl-4 lg:flex pl-4 flex md:-mt-10 lg:text-[16px]">
                Lihat Semua
                <img src='./asset/next.png' className='w-6'></img>
              </button>
            </div>

          </div>



          <div className="p-5 xl:p-0 xl:m-0 items-center justify-center mt-6 md:-mt-2 lg:flex lg:space-x-2 md:flex">
            {jsonGuru.map((item, index) => (
              <a key={index} href="#" class="group">
                <ul className="lg:mt-5 flex flex-col rounded-[16px] md:p-3 border-[#54BAEB] lg:-mb-20 lg:w-72 px-3 md:w-[184px]">

                  <li className="border-2 border-[#54BAEB] p-5 rounded-xl my-4">
                    <img src={item.img} alt="" className="rounded-xl" />
                    <div className="rounded-b-2xl pt-2 text-center">
                      <p className="text-xl font-bold text-[#16215D] md:text-base">{item.title}</p>
                      <a className="text-sm md:text-xs">{item.desc}</a>
                    </div>
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