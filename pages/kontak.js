import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import swal from "sweetalert";

export default function Kontak() {
    const handleClick = () => {
        swal("Are you sure?", {
            dangerMode: true,
            buttons: true,
        }).then((isConfirmed) => {
            if (isConfirmed) {
                return swal({
                    title: "Success",
                    icon: "success"
                });
            }
        });
    };
    
    
    return (
        <>
            <main className="font-abc">
                <Header />

                <div className="pt-28 text-center items-center justify-center text-[#1C2661] lg:mt-8">
                    <h1 className="font-bold text-2xl lg:text-[50px] md:text-4xl">Hubungi Kami</h1>
                </div>

                {/* Hero */}
                <section className="flex items-center justify-center pt-5 p5">
                    <div>
                        <img className="md:w-[500px] md:h-[350px] z-10" src="./asset/kontak.png" />
                    </div>
                </section>

                <img className="pt-7 absolute top-0 z-0 hidden" src='./asset/Vector (3).png' />
                <img className="right-0 absolute top-0 z-0 w-[600px] hidden" src='./asset/Vector (2).png' />



                <div className="py-8 text-center text-gray-800 pt-10 mt-10 px-3">
                    <h1 className="font-bold text-2xl py-4 pr-2 text-center items-center justify-center text-[#1C2661] lg:text-[47px]">Kontak Kami</h1>
                    <p className="mb-4 text-base text-[#1C2661] lg:text-xl lg:mt-5">Untuk info lebih lanjut silahkan hubungi kami</p>
                </div>



                <div className="flex flex-col md:flex-row gap-20 mx-auto lg:-mt-1 md:pt-20 md:gap-10 lg:px-3 md:justify-between">

                    <div className="flex-col gap-8 md:-mt-[66px] px-10 lg:px-2 md:-ml-3 lg:mx-10 md:w-1/2">
                        {/* Konten Kolom Pertama */}
                        <ul className="justify-start items-center gap-5 inline-flex mb-4 lg:gap-x-10">
                            <li className="justify-start items-start flex">
                                <h1 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#54BAEB] flex items-center justify-center">
                                    <img className="w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10" src="./asset/phone.png" alt="Phone" />
                                </h1>
                            </li>
                            <li className="flex-col justify-start items-start inline-flex lg:gap-y-3">
                                <h1 className="text-center text-xs font-medium md:text-base lg:text-xl">(+62) 812 698 15172</h1>
                                <h2 className="text-center font-normal text-xs md:text-base">(0341) 545 987</h2>
                            </li>
                        </ul>

                        <ul className="justify-start items-center gap-5 inline-flex mb-4 lg:gap-x-10">
                            <li className="justify-start items-start flex">
                                <h1 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#54BAEB] flex items-center justify-center">
                                    <img className="w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10" src="./asset/mail.png" alt="Mail" />
                                </h1>
                            </li>
                            <li className="flex-col justify-start items-start gap-2  inline-flex lg:gap-y-3">
                                <h1 className="text-xs font-medium md:text-base lg:text-xl">contact@sekolahanak.Com</h1>
                                <h2 className="font-normal text-xs md:text-base">info@sekolah.anak.com</h2>
                            </li>
                        </ul>

                        <ul className="justify-start items-center gap-5 inline-flex mb-4 lg:gap-x-10">
                            <li className="justify-start items-start flex">
                                <h1 className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-[#54BAEB] flex items-center justify-center">
                                    <img className="w-5 h-5 md:w-7 md:h-7 lg:w-10 lg:h-10" src="./asset/loc.png" alt="Location" />
                                </h1>
                            </li>
                            <li className="flex-col justify-start items-start gap-2 inline-flex lg:gap-y-3">
                                <h1 className="text-xs font-medium md:text-base lg:text-xl">jL. Soekarno hatta J-12</h1>
                                <h2 className="font-normal text-xs md:text-base">malang</h2>
                            </li>
                        </ul>
                    </div>

                    <div className="text-base text-[#3A3B41B2] tracking-wide p-10 -mt-24 mx-auto md:p-3 md:mr-3  md:-mt-20 lg:-ml-[200px] lg:px-8 ">
                        {/* Konten Kolom Kedua */}
                        <ul className="pb-5 border-[#54BAEB] rounded-[8px] mx-auto">
                            <li className="py-1 border-2 pl-4 w-[240px] md:w-[280px] lg:w-[600px] border-[#54BAEB] rounded-[8px]">
                                <input type="text" className="w-full outline-none bg-transparent text-[#16215D] text-xs" placeholder="Nama Anda*" />
                            </li>
                        </ul>

                        <ul className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <li className="py-1 border-2 pl-4 w-[240px] md:w-[280px] lg:w-[600px] border-[#54BAEB] rounded-[8px]">
                                <input type="text" className="w-full outline-none bg-transparent text-[#16215D] text-xs" placeholder="Email Anda*" />
                            </li>
                        </ul>

                        <ul className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <li className="py-1 border-2 pl-4 w-[240px] md:w-[280px] lg:w-[600px] border-[#54BAEB] rounded-[8px]">
                                <input type="text" className="w-full outline-none bg-transparent text-[#16215D] text-xs" placeholder="Nomor Telepon" />
                            </li>
                        </ul>

                        <ul className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <li className="py-1 border-2 pl-4 w-[240px] md:w-[280px] lg:w-[600px] border-[#54BAEB] rounded-[8px] h-56">
                                <textarea
                                    className="w-full h-52 outline-none bg-transparent text-[#16215D] resize-y pr-2 text-xs"
                                    placeholder="Pesan Anda*"
                                />
                            </li>
                        </ul>

                        <ul className="pb-5 pt-3">
                            <button onClick={handleClick} className="py-2 border-2 pl-4 w-[240px] md:w-[285px] lg:w-[600px] bg-[#619AEF] text-white rounded-[8px] text-center hover:bg-[#16215D] text-xs lg:text-sm">
                                Kirim Pesan
                            </button>
                        </ul>
                    </div>
                </div>


                <Footer />
            </main>
        </>
    )
}