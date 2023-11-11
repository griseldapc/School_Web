import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer (){
    return( 
    <>
    <main className="bg-[#F6FAFD] mt-36">
    <div className="container px-20 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
    <div className="pt-14 grid grid-cols-12">
        <div className=" md:pb-0 md:col-span-6">
                <div className="container mx-auto">
                    <Image src="./asset/footer.png" alt=""/>
                </div>
        </div>
        <div className="col-span-2 text-center md:text-left">
            <p className="pb-3 text-lg font-medium">Informasi</p>
            <ul>
                <li>
                    <Link rel="" href="/artikel" className="text-sm"/>Artikel
                </li>
                <li>
                    <Link rel="" href="/galeri" className="text-sm"/>Galeri
                </li>
            </ul>
        </div>
        <div className="col-span-2 text-center md:text-left">
            <p className="pb-3 text-lg font-medium">Tentang</p>
            <ul>
                <li>
                    <Link rel="" href="/tentang_kita" className="text-sm"/>Tentang Kami
                </li>
                <li>
                    <Link rel="" href="/kontak" className="text-sm"/>Hubungi Kami
                </li>
            </ul>
        </div>
        <div className="col-span-2 text-center md:text-left">
    <p className="pb-3 text-lg font-medium">Ikuti Kami</p>
    <ul>
        <li>
            <div className="flex items-center">
                <Image src="../asset/fb.png" className="mr-2"/>
                <Link rel="" href="#" className="text-sm"/>SMK Telkom Malang
            </div>
        </li>
        <li>
            <div className="flex items-center">
                <Image src="../asset/tw.png" className="mr-2"/>
                <Link rel="" href="#" className="text-sm"/>SMK Telkom Malang
            </div>
        </li>
        <li>
            <div className="flex items-center">
                <Image src="../asset/ig.png" className="mr-2"/>
                <Link rel="" href="https://www.instagram.com/smktelkommalang/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" className="text-sm"/>SMK Telkom Malang
            </div>
        </li>
    </ul>
</div>

        <div className="col-span-5 text-center md:text-left">
            <p className="pb-1 text-lg font-normal">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
        </div>
    </div>
    <div className="py-6 text-sm text-center dark:text-gray-400">Copyright @ 2021. All rights reserved.</div>
</div>
    </main>
    </>
    )
}