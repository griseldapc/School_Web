import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Kontak() {
    return (
        <>
            <main>
                <Header />

                {/* Hero */}
                <div class="container flex flex-col justify-center mx-auto pb-24 mt-10 pt-10 px-20 lg:flex-row">
                    <div class="container flex flex-col justify-center mx-auto lg:flex-row lg:justify-between">
                        <div class="w-[1100px] flex-col justify-end items-center inline-flex">
                            <img class="w-[500px] h-[336.13px]" src="./asset/kontak.png" />
                        </div>
                    </div>
                </div>

                <div class="py-8 text-center text-gray-800">
                    <h1 class="font-bold leadi text-[40px] py-4 pr-2 text-center items-center justify-center text-[#16215D]">Kontak Kami</h1>
                    <p class="mb-4 text-lg text-[#16215D]">Untuk info lebih lanjut silahkan hubungi kami</p>
                </div>

                <div class="w-[100px] h-[550px] p-[20px] pl-24 gap-20 inline-flex">
                    <div class="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">

                        <div class="self-stretch p-2 justify-start items-center gap-8 inline-flex">
                            <div class="justify-start items-start gap-2.5 flex">
                                <div class="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center">
                                    <img class="w-10 h-10" src="./asset/phone.png" />
                                </div>
                            </div>

                            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div class="text-center text-xl font-medium">(+62) 812 698 15172</div>
                                <div class="text-center font-normal">(0341) 545 987</div>
                            </div>
                        </div>

                        <div class="self-stretch p-2 justify-start items-center gap-8 inline-flex">
                            <div class="justify-start items-start gap-2.5 flex">
                                <div class="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center">
                                    <img class="w-10 h-10" src="./asset/mail.png" />
                                </div>
                            </div>

                            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div class="text-center text-xl font-medium">contact@sekolahanak.Com</div>
                                <div class="text-center font-normal">info@sekolah.anak.com</div>
                            </div>
                        </div>

                        <div class="self-stretch p-2 justify-start items-center gap-8 inline-flex">
                            <div class="justify-start items-start gap-2.5 flex">
                                <div class="w-16 h-16 rounded-full border border-gray-500 flex items-center justify-center">
                                    <img class="w-10 h-10" src="./asset/loc.png" />
                                </div>
                            </div>

                            <div class="self-stretch flex-col justify-start items-start gap-2 inline-flex">
                                <div class="text-center text-xl font-medium">jL. Soekarno hatta J-12</div>
                                <div class="text-center font-normal">malang</div>
                            </div>
                        </div>
                    </div>

                    <div class="text-base text-[#3A3B41B2] tracking-wide">
                        <div className="pb-5 pt-3 border-[#54BAEB] rounded-[8px]">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px]">
                                Nama Anda*
                            </div>
                        </div>

                        <div className="pb-5 pt-3">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px]">
                                Email Anda*
                            </div>
                        </div>

                        <div className="pb-5 pt-3">
                            <div className="py-2 border-2 pl-4 w-[600px] border-[#54BAEB] rounded-[8px]">
                                Nomor Telepon
                            </div>
                        </div>

                        <div className="pb-5 pt-3">
                            <div className="py-2 border-2 pl-4 w-[600px] h-[200px] border-[#54BAEB] rounded-[8px]">
                                Pesan Anda*
                            </div>
                        </div>

                        <div className="pb-5 pt-3">
                            <div className="py-2 border-2 pl-4 w-[600px] bg-[#54BAEB] text-white rounded-[8px] text-center">
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