"use client"
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {

    const [menuIcon, setIcon] = useState(false);
    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    }

    return (
        <header className="bg-white text-[#CEFF00] w-full ease-in duration-300 fixed top-0 left-0 z-20 px-5 font-abc lg:px-12">
            <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-2 font-abc">
                <div className="relative z-10">
                    <img src="./asset/Vector (1).png" alt="Description of the img" width="100"/>
                    
                </div>

                {/* large screen navigation */}
                <ul className="hidden md:flex text-sm lg:text-lg text-[#30396E] md:text-base">

                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <Link href="/">Beranda</Link>
                    </li>

                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <Link href="/tentang_kita">Tentang</Link>
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
                            <button className=" bg-[#619AEF] text-white hover:bg-[#30396E]  rounded-[8px] uppercase font-bold px-8 py-2">PPDB
                            </button>
                        </Link>
                    </div>
                </div>

                {/* smaller screen navigation icons */}
                {/* onClick change the icons */}
                <div onClick={handleSmallerScreenNavigation} className="flex md:hidden">
                    {menuIcon ?
                        (<AiOutlineClose size={30} className='text-[#30396E]' />) : (<AiOutlineMenu size={25} className='text-[#30396E]' />)}
                </div>

                {/* smaller screens - navbar */}
                <div className={menuIcon ?
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full text-center h-screen bg-[#619AEF] text-white ease-in duration-300'
                    :
                    'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#619AEF] text-white ease-in duration-300'
                }>
                    {/* smaller screen navbar link */}
                    <div className="w-full -mt-24">

                        <ul className="text-xl">

                            <li onClick={handleSmallerScreenNavigation} className="py-2 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/"> Beranda
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-2 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/tentang_kita"> Tentang
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-2 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/artikel"> Artikel
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-2 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/galeri"> Galeri
                                </Link>
                            </li>

                            <li onClick={handleSmallerScreenNavigation} className="py-2 hover:text-[#CEFF00] cursor-pointer">
                                <Link href="/kontak">
                                    Kontak
                                </Link>
                            </li>

                        </ul>

                        <div className="flex flex-col justify-center items-center mt-5">
                            <Link href="/PPDB" onClick={handleSmallerScreenNavigation}>
                                <button className="bg-[#30396E] text-white hover:bg-[#619AEF] rounded-full uppercase font-bold py-3 w-[120px] mb-5">PPDB</button>
                            </Link>

                        </div>

                    </div>

                </div>

            </nav>

        </header>
    )
}