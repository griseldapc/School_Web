import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Galeri() {
    return (
        <>
            <main className="font-abc">
                <Header />

                <div class="pt-8 text-center text-gray-800">
                    <h1 class="font-bold leadi text-[40px] pr-2 text-center items-center justify-center text-[#16215D]">Galeri</h1>
                </div>

                {/* Hero */}
                <div class="container flex flex-col justify-center mx-auto pb-24 px-20 lg:flex-row">
                    <div class="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
                        <div class="w-[1100px] flex-col justify-end items-center inline-flex">
                            <img class="w-[500px] h-[336.13px]" src="./asset/galeri.png" />
                        </div>
                    </div>
                </div>

                {/* Dokumentasi */}
                <div class="container justify-center mx-auto text-3xl font-bold pr-6 mt-2 pt-8  rounded-xl">
                    <h1 class="font-bold leadi text-[40px] pr-2 text-center items-center justify-center text-[#16215D]">
                        Dokumentasi Sekolah
                    </h1>
                </div>

                <div class="container flex flex-col justify-center mx-auto lg:px-6 lg:flex-row pt-20">
                    <div class="inline-flex gap-[32px] lg:px-28 items-center justify-center ">

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/1.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Ruang Kelas</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/2.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Belajar Mengajar</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/3.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Lorong Sekolah</div>
                        </div>

                    </div>
                </div>

                <div class="container flex flex-col justify-center mx-auto lg:px-6 lg:flex-row">
                    <div class="inline-flex gap-[32px] lg:px-28 items-center justify-center ">

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/4.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Kelas Bahasa Inggris</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/5.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Karya Murid</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/6.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Tamasya Sekolah</div>
                        </div>

                    </div>
                </div>

                <div class="container flex flex-col justify-center mx-auto lg:px-6 lg:flex-row">
                    <div class="inline-flex gap-[32px] lg:px-28 items-center justify-center ">

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/7.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Lomba Tarik Tambang</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/8.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Halaman Sekolah</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/9.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Pameran Teknologi</div>
                        </div>

                    </div>
                </div>

                <div class="container flex flex-col justify-center mx-auto lg:px-6 lg:flex-row">
                    <div class="inline-flex gap-[32px] lg:px-28 items-center justify-center ">

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/10.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Belajar Menggambar</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/11.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Tugas Kelompok</div>
                        </div>

                        <div class="relative flex flex-col h-[345px] w-[344px] rounded-[16px] overflow-hidden">
                            <img src="./asset/dokum/12.png" alt="" class="w-full h-[280px]" />
                            <div class="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Belajar & Bermain</div>
                        </div>

                    </div>
                </div>

                <Footer />
            </main>
        </>
    )
}