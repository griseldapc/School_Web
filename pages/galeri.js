import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Galeri() {
    return (
        <>
            <main className="font-abc">
                <Header />

                <div className="pt-28 text-center items-center justify-center text-[#16215D] lg:mt-8">
                    <h1 className="font-bold text-[30px] lg:text-4xl md:text-4xl">Galeri</h1>
                </div>

                {/* Hero */}
                <section className="flex items-center justify-center pt-5 p-5">
                    <div>
                        <div>
                            <img className="md:w-[500px] md:h-[350px] z-10" src="./asset/galeri.png" />
                        </div>
                    </div>
                </section>

                <img className="pt-52 absolute top-0 z-0 hidden" src='./asset/Vector (5).png' />
                <img className="right-0 absolute top-0 z-0 w-[600px] hidden" src='./asset/Vector (2).png' />


                {/* Dokumentasi */}
                <div className="pt-24 text-center items-center justify-center text-[#16215D] lg:mt-8">
                    <h1 className="font-bold text-2xl lg:text-4xl md:text-4xl">Dokumentasi Sekolah</h1>
                </div>

                <div className="justify-center mx-auto lg:px-6 lg:flex-row mt-10 lg:mt-16">
                    <ul className="lg:px-10 items-center justify-center flex flex-col md:flex-row md:gap-7 lg:gap-10">

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/1.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Ruang Kelas</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/2.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Belajar Mengajar</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/3.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Lorong Sekolah</div>
                        </li>

                    </ul>
                </div>

                <div className="justify-center mx-auto lg:px-6 lg:flex-row lg:-mt-10 ">
                    <ul className="lg:px-10 items-center justify-center flex flex-col md:flex-row md:gap-7 lg:gap-10">

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/4.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Kelas Bahasa Inggris</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/5.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Karya Murid</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/6.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Tamasya Sekolah</div>
                        </li>

                    </ul>
                </div>

                <div className="justify-center mx-auto lg:px-6 lg:flex-row lg:-mt-10">
                    <ul className="lg:px-10 items-center justify-center flex flex-col md:flex-row md:gap-7 lg:gap-10">

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/7.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Lomba Tarik Tambang</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/8.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Halaman Sekolah</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/9.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Pameran Teknologi</div>
                        </li>

                    </ul>
                </div>

                <div className="justify-center mx-auto lg:px-6 lg:flex-row lg:-mt-10">
                    <ul className="lg:px-10 items-center justify-center flex flex-col md:flex-row md:gap-7 lg:gap-10">

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/10.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Belajar Menggambar</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/11.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Tugas Kelompok</div>
                        </li>

                        <li className="relative h-[245px] w-[244px] rounded-[16px] overflow-hidden md:w-[200px] lg:w-[700px] lg:h-[365px]">
                            <img src="./asset/dokum/12.png" alt="" className="w-full h-[180px] lg:h-[300px]" />
                            <div className="absolute bottom-[65px] left-0 right-0 h-[50px] bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 rounded-b-[16px] text-center pt-5 text-white font-medium">Belajar & Bermain</div>
                        </li>

                    </ul>
                </div>

                <Footer />
            </main>
        </>
    )
}