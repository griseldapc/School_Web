import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import data from "../data/galeri.json";

export default function Galeri() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);
    return (
        <>
            <main className="font-abc">
                <Header />

                {/* Hero */}
                <div className="pt-28 text-center items-center justify-center text-[#1C2661] lg:mt-8">
                    <h1 className="font-bold text-[30px] lg:text-[50px] lg:font-extrabold md:text-4xl">Galeri</h1>
                </div>
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
                    <h1 className="font-bold text-2xl lg:text-[40px] md:text-4xl lg:font-extrabold">Dokumentasi Sekolah</h1>
                </div>

                {/* Card */}
                <div className=" mt-10 lg:mt-10 lg:flex-wrap lg:flex md:flex md:justify-center md:flex-wrap">
                    {jsonData.map((item, index) => (
                        <a key={index} href="#" className="group">

                            <ul className="flex justify-center md:flex-row p-7 py-5 lg:p-6 md:p-3">
                                <li className="relative overflow-hidden md:w-[220px] lg:w-[350px]">
                                    <img src={item.image} alt="" className="" />
                                    <div className="absolute -bottom-[2px] left-0 right-0 bg-gradient-to-b from-[#FFFFFF00] via-[#4D7FD5A0] to-[#3971D0B2] opacity-100 text-center pt-5 pb-3 text-white font-semibold lg:tracking-wider mx-auto rounded-b-[20px] lg:rounded-3xl lg:h-[90px] md:rounded-[13px] lg:pt-12">
                                        {item.deskripsi}
                                    </div>
                                </li>
                            </ul>

                        </a>
                    ))}
                </div>

                <Footer />
            </main>
        </>
    )
}