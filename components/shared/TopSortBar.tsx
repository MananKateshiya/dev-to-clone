"use client";
import Link from "next/link";
import React from "react";

function TopSortBar() {
  const handleClick = () => {};

  return (
    <div className="flex gap-x-1 w-full text-color_light font-basefont text-lg">
      <div className="px-3 py-2 rounded-md cursor-pointer font-bold  text-slate-900 hover:text-btnFontColor hover:bg-white">
        Relevant
        <Link href={"/"} about="Relevant" />
      </div>
      <div className="px-3 py-2 rounded-md cursor-pointer font-base  hover:text-btnFontColor hover:bg-white">
        Latest
        <Link href={"/"} about="Relevant" />
      </div>
      <div className="px-3 py-2 rounded-md cursor-pointer font-base  hover:text-btnFontColor hover:bg-white">
        Top
        <Link href={"/top"} about="Relevant" />
      </div>
    </div>
  );
}

export default TopSortBar;
