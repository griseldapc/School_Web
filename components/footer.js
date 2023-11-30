import React from "react";

export default function Footer() {
    return (
        <main className="pt-7 md:p-5">
            <div className="container mx-auto lg:pt-12 bg-white mt-5">
                <div className="lg:flex px-7 md:px-3">
                    <div className="w-full -mx-6 lg:w-[550px]">
                        <div className="px-6 lg:px-[50px]">
                            <img className="w-auto h-8 md:h-10 lg:h-16 mb-7 md:mb-7" src="../asset/logofooter.png" alt="" />
                            <p className="max-w-sm mt-2 text-[#1C2661] lg:text-base lg:font-normal lg:-mt-1">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1 lg:-ml-20">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-2 lg:ml-60 lg:space-x-2">
                            <div>
                                <h3 className="font-semibold lg:text-xl text-[#1C2661]">Informasi</h3>
                                <a href="#" className="block mt-2 lg:mt-5 text-sm text-[#404040] hover:underline lg:text-base">Artikel</a>
                                <a href="#" className="block mt-2 lg:mt-5 text-sm text-[#404040] hover:underline lg:text-base">Galeri</a>
                            </div>

                            <div className="md:ml-14">
                                <h3 className="font-semibold lg:text-xl text-[#1C2661]">Tentang</h3>
                                <a href="#" className="block mt-2 lg:mt-5 text-sm text-[#404040] hover:underline lg:text-base">Tentang kami</a>
                                <a href="#" className="block mt-2 lg:mt-5 text-sm text-[#404040] hover:underline lg:text-base">Hubungi kami</a>
                            </div>

                            <div className="md:ml-14 lg:ml-5 md:items-end md:justify-end">
                                <h3 className="font-semibold lg:text-xl text-[#1C2661] md:ml-11 lg:-ml-1">Ikuti Kami</h3>
                                <a href="#" className="flex items-center mt-2 lg:mt-5 text-sm text-[#404040] lg:text-base hover:underline md:ml-11 lg:-ml-1">
                                    <img src="../asset/fb.png" className=" h-4 mr-2" />
                                    namasekolah
                                </a>
                                <a href="#" className="flex items-center mt-2 lg:mt-5 text-sm text-[#404040] lg:text-base hover:underline md:ml-11 lg:-ml-1">
                                    <img src="../asset/tw.png" className="h-4 mr-2" />
                                    namasekolah
                                </a>
                                <a href="#" className="flex items-center mt-2 lg:mt-5 text-sm text-[#404040] lg:text-base hover:underline md:ml-11 lg:-ml-1">
                                    <img src="../asset/ig.png" className="h-4 mr-2" />
                                    namasekolah
                                </a>
                            </div>


                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 lg:mx-5 md:mx-2 bg-gray-200 border-none" />

                <div>
                    <p className="text-center text-[#404040] text-xs lg:text-xs mb-5">Copyright © 2021. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}