import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <>
            <main className="font-abc">
                <div className="container flex justify-between mx-auto pt-[20px] font-[Poppins] ">
                    <a href="#" aria-label="Back to homepage" className="flex items-center p-2 ml-16 relative z-10">
                        <div className="container mx-auto">
                            <img src="./asset/Vector (1).png" alt=""></img>
                        </div>
                    </a>

                    <img className="pl-6 absolute top-0 z-0 pt-10 w-32" src='./asset/circle.png' />


                    <ul className="items-stretch hidden space-x-3 lg:flex bg-transparent z-10">
                        <li className="flex">
                            <Link href="/" className="flex items-center px-4 -mb-1 text-[#30396E] font-[16px] active:text-bold">Beranda</Link>
                        </li>

                        <li className="flex">
                            <Link href="/tentang_kita" className="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Tentang Kita</Link>
                        </li>
                        <li className="flex">
                            <Link href="/artikel" className="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Artikel</Link>
                        </li>
                        <li className="flex">
                            <Link href="/galeri" className="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Galeri</Link>
                        </li>
                        <li className="flex">
                            <Link href="/kontak" className="flex items-center px-4 -mb-1 text-[#30396E] font-[16px]">Kontak</Link>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex relative z-10">
                        <a href="#" className="px-8 py-2 text-lg bg-[#619AEF] text-white  rounded-[8px] border-gray-100 pr-6 mr-20 pl-6">PPDB</a>
                    </div>

                    <img className="pl-[725.77px] absolute top-0 z-0" src='./asset/Vector (2).png' />

                </div>
            </main>
        </>
    )
}