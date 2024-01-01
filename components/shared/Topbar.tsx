import {
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { StaticImageData } from "next/image";
import Link from "next/link";
import ToggleButton from "./LeftSidebarMobile";
import MyAvatar from "../Others/MyAvatar";


function Topbar({ src }: { src: StaticImageData }) {
  return (
    <header className="py-2 px-2 md:px-4 bg-white top-0 z-30 w-full shadow-sm">
      <div className="flex items-center justify-between bg-white mx-auto max-w-7xl">
        {/* Left */}
        <div className="inline-flex items-center gap-x-2 md:gap-x-4">
          <ToggleButton />
          <Link href={"/"} className="focus:focusRing">
            <div className="w-[46px] h-[36px] rounded-[4px] shrink-0 py-1  font-logo text-lg text-white text-center bg-black select-none">
              DEV
            </div>
          </Link>
          <div className="items-center relative md:flex hidden">
            <input
              className=" py-2 pl-2 pr-12 placeholder-gray-900 placeholder:font-sans border border-gray-300 rounded-md hover:border-gray-400 outline-none focus:ring-2 focus:ring-focusblue focus:border-none focus:shadow-sm focus:ease-in duration-130"
              type="text"
              size={45}
              name="Search"
              placeholder="Search..."
            />

            <Link
              href={"/"}
              className="absolute right-0 rounded-md h-10 w-10 p-2 text-lg font-bold focus:focusRing focus:bg-hoverAccent focus:text-blue-900 hover:bg-hoverAccent hover:text-blue-900"
            >
              <MagnifyingGlassIcon />
            </Link>
          </div>
        </div>

        {/*  Right  */}
        <div className="inline-flex items-center gap-x-3 pr-6">
          <button className="hidden px-4 py-2 border font-btnFont font-medium  focus:focusRing focus:bg-buttonHover focus:text-white  text-btnFontColor border-focusblue hover:bg-buttonHover hover:text-white focus:underline hover:underline  rounded-md md:inline-flex">
            Create Post
          </button>
          <Link
            href={"/"}
            className="hidden rounded-md h-10 w-10 p-2  focus:focusRing focus:bg-hoverAccent focus:text-blue-900 hover:bg-hoverAccent hover:text-blue-900 max-md:inline-flex"
          >
            <MagnifyingGlassIcon />
          </Link>

          <Link
            href={"/"}
            className="rounded-md focus:focusRing focus:bg-hoverAccent focus:text-blue-900 hover:bg-hoverAccent hover:text-blue-900"
          >
            <BellIcon className="h-10 w-10 py-2 " />
          </Link>

         <MyAvatar src={src} link={'/'} isBorder={true} />
        </div>
      </div>
    </header>
  );
}

export default Topbar;
