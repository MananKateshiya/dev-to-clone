import { AvatarType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";


function MyAvatar({ link, src, isBorder }: AvatarType) {
  return (
    <Link
      href={link}
      className={`group rounded-full`}
    >
      <Image
        className={`flex h-8 w-8 items-center justify-center rounded-full overflow-hidden ${ isBorder == true ? 'bg-slate-300 ring-slate-200  hover:ring-4 hover:ring-slate-300 group-focus:ring-2 group-focus:ring-slate-300' : ''}`}
        src={src}
        height={32}
        width={32}
        alt="User Profile Pic"
      />
    </Link>
  );
}

export default MyAvatar;
