import React from "react";

export default function Footer() {
    return (
        <main class="pt-7">
    <div class="container mx-auto lg:pt-12">
        <div class="lg:flex px-5">
            <div class="w-full -mx-6 lg:w-2/5">
                <div class="px-6 lg:px-16">
                        <img class="w-auto h-8 md:h-10 lg:h-16 mb-7 md:mb-7" src="../asset/Vector (1).png" alt=""/>

                    <p class="max-w-sm mt-2 lg:mt-12 text-slate-700 lg:text-lg lg:font-normal">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>

                    
                </div>
            </div>

            <div class="mt-6 lg:mt-0 lg:flex-1">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-5 lg:ml-32">
                    <div>
                        <h3 class="lg:text-lg font-medium text-blue-950">Informasi</h3>
                        <a href="#" class="block mt-2 text-sm text-neutral-700 hover:underline">Artikel</a>
                        <a href="#" class="block mt-2 text-sm text-neutral-700 hover:underline">Galeri</a>
                    </div>

                    <div>
                        <h3 class="lg:text-lg font-medium text-blue-950">Tentang</h3>
                        <a href="#" class="block mt-2 text-sm text-neutral-700 hover:underline">Tentang kami</a>
                        <a href="#" class="block mt-2 text-sm text-neutral-700 hover:underline">Hubungi kami</a>
                    </div>

                    <div>
                        <h3 class="lg:text-lg font-medium text-blue-950">Ikuti Kami</h3>
                        <a href="#" class="flex items-center mt-2 text-sm text-neutral-700 hover:underline">
                        <img src="../asset/fb.png" class="w-4 h-4 mr-1" />
                        namasekolah
                        </a>
                        <a href="#" class="flex items-center mt-2 text-sm text-neutral-700 hover:underline">
                        <img src="../asset/tw.png" class="w-4 h-4 mr-1" />
                        namasekolah
                        </a>
                        <a href="#" class="flex items-center mt-2 text-sm text-neutral-700 hover:underline">
                        <img src="../asset/ig.png" class="w-4 h-4 mr-1" />
                        namasekolah
                        </a>
                    </div>

                    
                </div>
            </div>
        </div>

        <hr class="h-px my-6 lg:mx-10 bg-gray-200 border-none"/>

        <div>
            <p class="text-center text-neutral-700 text-xs lg:text-base">Copyright © 2021. All rights reserved.</p>
        </div>
    </div>
</main>
    );
  }