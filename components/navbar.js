"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {

    const [menuIcon, setIcon] = useState(false);
    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    }

    return (
        <header className="bg-white text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-10 px-12 font-abc">
            <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-2 font-abc">
                <div className="relative z-10">
                    <Link href='/' onClick={handleSmallerScreenNavigation}>
                    <Image src="./asset/Vector (1).png" alt=""></Image>
                    </Link>
                </div>

                <Image className="absolute z-0  pt-20 w-32 left-5 pr-6 mr-40" src='./asset/circle.png' />

                {/* large screen navigation */}
                <ul className="hidden md:flex  text-lg lg:text-[16px] text-[#30396E]">

                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <Link href="/">Beranda</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <Link href="/tentang_kami">Tentang Kami</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <Link href="/artikel">Artikel</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF] z-10">
                        <Link href="/galeri">Galeri</Link>
                    </li>

                    <li className="hover:text-[#619AEF] z-10">
                        <Link href="/kontak">Kontak</Link>
                    </li>
                </ul>
                <div className="hidden md:flex">
                    <div className="flex relative z-10">
                        <Link href="/PPDB">
                            <button className="mr-5 bg-[#619AEF] text-white hover:bg-[#30396E]  rounded-[8px] uppercase font-bold px-8 py-2">PPDB
                            </button>
                        </Link>
                    </div>
                </div>

                {/* smaller screen navigation icons */}
                {/* onClick change the icons */}
                <div onClick={handleSmallerScreenNavigation} className="flex md:hidden">
                    {menuIcon ?
                        (<AiOutlineClose size={25} className='text-[#30396E]' />) : (<AiOutlineMenu size={25} className='text-[#30396E]' />)}
                </div>

                {/* smaller screens - navbar */}
                <div className={menuIcon ?
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full text-center h-screen bg-[#619AEF] text-white ease-in duration-300'
                    :
                    'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#619AEF] text-white ease-in duration-300'
                }>
                    {/* smaller screen navbar link */}
                    <div className="w-full">

                        <ul className=" font-bold text-2xl">

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/"> Beranda
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/tentang_kita"> Tentang Kami
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/artikel"> Artikel
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/galeri"> Galeri
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-5 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/kontak">
                                    Kontak
                                </Link>
                            </li>

                        </ul>

                        <div className="flex flex-col justify-center items-center mt-16">
                            <Link href="/PPDB" onClick={handleSmallerScreenNavigation}>
                                <button className="bg-[#30396E] text-white hover:bg-[#619AEF] rounded-full uppercase font-bold py-3 w-[250px] mb-5">PPDB</button>
                            </Link>

                        </div>

                    </div>

                </div>

            </nav>

        </header>
    )
}