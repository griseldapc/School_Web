import React, { useState, useEffect } from "react";
import data from "../data/artikel.json"; //impor data dari file JSON
import Image from "next/image";

export default  function Berita (){
    const [jsonData, setJsonData] = useState([]);

    useEffect (() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);

    return(
        <div className="flex-wrap flex gap-[20px] lg:px-20 mt-28">
            {jsonData.map((item,index) => (
                <a key={index} href="#" class="group">
                
                <div className="flex flex-col h-[485px] w-[350px] p-6 border-2 rounded-xl border-[#54BAEB]">
            <img src={item.image} alt="" className="w-full h-[320px] rounded-xl" />
            <div className=" rounded-b-2xl pt-5 pb-9 pl-3 text-justify  ">
              <h1 className="font-semibold text-sm text-[#619AEF]">{item.tanggal}</h1>
              <p className=" py-1 text-base font-bold text-[#16215D]">{item.judul}</p>
              <a className="py-1 text-sm">{item.deskripsi}</a>
              <ul className="text-sm text-[#3362CC] font-semibold mt-2">{item.baca}</ul>
            </div>
          </div>
          </a>
            ))}
          
          </div>

    )

}