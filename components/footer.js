import React from "react";

export default function Footer (){
    return( 
    <>
    <main className="bg-[#F6FAFD] mt-36">
    <div class="container px-20 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
    <div class="pt-14 grid grid-cols-12">
        <div class=" md:pb-0 md:col-span-6">
                <div class="container mx-auto">
                    <img src="./asset/footer.png" alt=""/>
                </div>
        </div>
        <div class="col-span-2 text-center md:text-left">
            <p class="pb-3 text-lg font-medium">Informasi</p>
            <ul>
                <li>
                    <a rel="" href="berita.js" class="text-sm">Artikel</a>
                </li>
                <li>
                    <a rel="" href="galeri.js" class="text-sm">Galeri</a>
                </li>
            </ul>
        </div>
        <div class="col-span-2 text-center md:text-left">
            <p class="pb-3 text-lg font-medium">Tentang</p>
            <ul>
                <li>
                    <a rel="" href="tentang_kita.js" class="text-sm">Tentang Kami</a>
                </li>
                <li>
                    <a rel="" href="kontak.js" class="text-sm">Hubungi Kami</a>
                </li>
            </ul>
        </div>
        <div class="col-span-2 text-center md:text-left">
    <p class="pb-3 text-lg font-medium">Ikuti Kami</p>
    <ul>
        <li>
            <div class="flex items-center">
                <img src="../asset/fb.png" class="mr-2"/>
                <a rel="" href="#" class="text-sm">SMK Telkom Malang</a>
            </div>
        </li>
        <li>
            <div class="flex items-center">
                <img src="../asset/tw.png" class="mr-2"/>
                <a rel="" href="#" class="text-sm">SMK Telkom Malang</a>
            </div>
        </li>
        <li>
            <div class="flex items-center">
                <img src="../asset/ig.png" class="mr-2"/>
                <a rel="" href="#" class="text-sm">SMK Telkom Malang</a>
            </div>
        </li>
    </ul>
</div>

        <div class="col-span-5 text-center md:text-left">
            <p class="pb-1 text-lg font-normal">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
        </div>
    </div>
    <div class="py-6 text-sm text-center dark:text-gray-400">Copyright @ 2021. All rights reserved.</div>
</div>
    </main>
    </>
    )
}