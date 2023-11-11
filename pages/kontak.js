import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Kontak() {
    return (
        <>
            <main className="font-abc">
                <Header />

                <div className="pt-28 text-center text-gray-800">
                    <h1 className="font-bold leadi text-[40px] pr-2 text-center items-center justify-center text-[#16215D]">Hubungi Kami</h1>
                </div>

                {/* Hero */}
                <div className="container flex flex-col justify-center mx-auto pb-24 px-20 lg:flex-row">
                    <div className="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
                        <div className="relative w-[1100px] flex-col justify-end items-center inline-flex">
                            <Image className="w-[500px] h-[336.13px] relative z-10" src="./asset/kontak.png" />
                        </div>
                    </div>
                </div>

                <Image className="pt-7 absolute top-0 z-0" src='./asset/Vector (3).png'/>
                <Image className="right-0 absolute top-0 z-0 w-[600px]" src='./asset/Vector (2).png' />

                <div className="py-8 text-center text-gray-800">
                    <h1 className="font-bold leadi text-[40px] py-4 pr-2 text-center items-center justify-center text-[#16215D]">Kontak Kami</h1>
                    <p className="mb-4 text-lg text-[#16215D]">Untuk info lebih lanjut silahkan hubungi kami</p>
                </div>

                <div className="w-[100px] h-[550px] p-[20px] pl-24 gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">

                        <div className="self-stretch p-2 justify-start items-center gap-8 inline-flex">

                            <div className="justify-start items-start gap-2.5 flex">
                                <div className="w-16 h-16 rounded-full border-2 border-[#54BAEB] flex items-center justify-center">
                                    <Image className="w-10 h-10" src="./asset/phone.png" />
                                </div>
                            </div>

                            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="text-center text-xl font-medium">(+62) 812 698 15172</div>
                                <div className="text-center font-normal">(0341) 545 987</div>
                            </div>
                        </div>

                        <div className="self-stretch p-2 justify-start items-center gap-8 inline-flex">
                            <div className="justify-start items-start gap-2.5 flex">
                                <div className="w-16 h-16 rounded-full border-2 border-[#54BAEB] flex items-center justify-center">
                                    <Image className="w-10 h-10" src="./asset/mail.png" />
                                </div>
                            </div>

                            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="text-center text-xl font-medium">contact@sekolahanak.Com</div>
                                <div className="text-center font-normal">info@sekolah.anak.com</div>
                            </div>
                        </div>

                        <div className="self-stretch p-2 justify-start items-center gap-8 inline-flex">
                            <div className="justify-start items-start gap-2.5 flex">
                                <div className="w-16 h-16 rounded-full border-2 border-[#54BAEB] flex items-center justify-center">
                                    <Image className="w-10 h-10" src="./asset/loc.png" />
                                </div>
                            </div>

                            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div className="text-center text-xl font-medium">jL. Soekarno hatta J-12</div>
                                <div className="text-center font-normal">malang</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-base text-[#3A3B41B2] tracking-wide">
                        <div className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px]">
                                <input type="text" className="w-full outline-none bg-transparent text-[#16215D]" placeholder="Nama Anda*" />
                            </div>
                        </div>

                        <div className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px]">
                                <input type="text" className="w-full outline-none bg-transparent text-[#16215D]" placeholder="Email Anda*" />
                            </div>
                        </div>

                        <div className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px]">
                                <input type="text" className="w-full outline-none bg-transparent text-[#16215D]" placeholder="Nomor Telepon" />
                            </div>
                        </div>

                        <div className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px] h-56">
                                <textarea
                                    className="w-full h-52 outline-none bg-transparent text-[#16215D] resize-y pr-2"
                                    placeholder="Pesan Anda*"
                                />
                            </div>
                        </div>



                        <div className="pb-5 pt-3">
                            <div className="py-2 border-2 pl-4 w-[600px] bg-[#54BAEB] text-white rounded-[8px] text-center hover:bg-[#16215D] ">
                                Kirim Pesan
                            </div>
                        </div>

                    </div>



                </div>

                <Footer />
            </main>
        </>
    )
}