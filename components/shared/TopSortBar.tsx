"use client";
import Link from "next/link";
import React from "react";
import {useParams, usePathname, useRouter } from "next/navigation";


function TopSortBar() {

  const pathname = usePathname();
  const params = useParams();
  
  
  


  const handleClick = () => {};
      
  return (
    <div className="flex gap-x-1 w-full text-color_light font-basefont text-lg">
      <Link
        href={"/"}
        about="Relevant"
        className="px-3 py-2 rounded-md cursor-pointer font-bold  text-slate-900 hover:text-btnFontColor hover:bg-white"
      >
        Relevant
      </Link>

      <Link
        href={"/latest"}
        about="Latest"
        className="px-3 py-2 rounded-md cursor-pointer font-base  hover:text-btnFontColor hover:bg-white"
      >
        Latest
      </Link>

      <Link
        href={"/top"}
        about="Top"
        className="px-3 py-2 rounded-md cursor-pointer font-base  hover:text-btnFontColor hover:bg-white"
      >
        Top
      </Link>
    </div>
  );
}

export default TopSortBar;
