import React from "react";

export default function Header (){
    return(
        <>
    <main className="font-abc">
        <div class="container flex justify-between mx-auto pt-[20px] pb-[0px] font-[Poppins] ">
            <a rel="" href="#" aria-label="Back to homepage" class="flex items-center p-2 ml-16">
                <div class="container mx-auto">
                    <img src="./asset/Vector (1).png" alt=""></img>
                </div>
            </a>
            <ul class="items-stretch hidden space-x-3 lg:flex bg-transparent">
            <li class="flex">
    <a rel="" href="/" class="flex items-center px-4 -mb-1 text-[#30396E] font-[16px] active:text-bold">Beranda</a>
</li>

                <li class="flex">
                    <a rel="" href="/tentang_kita" class="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Tentang Kita</a>
                </li>
                <li class="flex">
                    <a rel="" href="/artikel" class="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Artikel</a>
                </li>
                <li class="flex">
                    <a rel="" href="/galeri" class="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Galeri</a>
                </li>
                <li class="flex">
                    <a rel="" href="/kontak" class="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Kontak</a>
                </li>
            </ul>
            <div class="items-center flex-shrink-0 hidden lg:flex">
                <a rel="" href="#" class="px-8 py-2 text-lg bg-[#619AEF] text-white  rounded-[8px] border-gray-100 pr-6 mr-20 pl-6">PPOB</a>
            </div>
        </div>
    </main>
        </>
    )
}