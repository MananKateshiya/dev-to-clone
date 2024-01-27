import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ToggleButton from "./LeftSidebarMobile";
import SignoutButton from "../Others/SignoutButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MyAvatar from "@/components/Others/MyAvatar";
import imgSrc from "@/assets/user.png";
import devLogo from "@/assets/dev-logo.png";
import Image from "next/image";
function Topbar() {
  return (
    <header className="py-2 px-2 md:px-4 bg-white top-0 z-30 w-full shadow-sm max-sm:sticky max-sm:shadow-md">
      <div className="flex items-center justify-between bg-white mx-auto max-w-7xl">
        {/* Left */}
        <div className="inline-flex items-center gap-x-2 md:gap-x-4">
          <ToggleButton />
          <Link href={"/"} className="focus:focusRing">
            <Image
              className="h-10 w-full"
              src={devLogo}
              alt="Dev logo"
              objectFit="contain"
      
              
            />
            {/* <div className="w-[46px] h-[36px] rounded-[4px] shrink-0 py-1  font-logo text-lg text-white text-center bg-black select-none">
              DEV
            </div> */}
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
        <div className="inline-flex items-center gap-x-3 pr-5">
          <button className="hidden px-4 py-2 border font-btnFont font-medium  focus:focusRing focus:bg-buttonHover focus:text-white  text-btnFontColor border-focusblue hover:bg-buttonHover hover:text-white focus:underline hover:underline  rounded-md md:inline-flex">
            <Link href={"/enter"}>Create Post</Link>
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

          <Popover>
            <PopoverTrigger className="bg-white" asChild>
              <MyAvatar src={imgSrc} link={"/"} isBorder={true} />
            </PopoverTrigger>
            <PopoverContent className="flex flex-col bg-white items-start px-2 py-1.5 rounded-md w-[250px] max-sm:w-[94vw] max-sm:mx-2">
              <Link
                href="/Profile"
                passHref
                className="flex flex-col px-4 w-full p-2 hover:underline hover:text-btnFontColor hover:bg-hoverAccentText rounded-md"
              >
                <span className="text-text_dark font-medium">
                  MananKateshiya
                </span>
                <small className="text-text_light opacity-75 font-normal text-sm">
                  @manankateshiya
                </small>
              </Link>
              <hr className="my-2 border-1 border-slate-300 w-full" />
              <Link
                href="/dashboard"
                passHref
                className="w-full px-4 p-2 hover:underline hover:text-btnFontColor hover:bg-hoverAccentText rounded-md"
              >
                Dashboard
              </Link>
              <Link
                href="/create-post"
                passHref
                className="w-full px-4 p-2 hover:underline hover:text-btnFontColor hover:bg-hoverAccentText rounded-md"
              >
                Create Post
              </Link>
              <Link
                href="/reading-list"
                passHref
                className="w-full px-4 p-2 hover:underline hover:text-btnFontColor hover:bg-hoverAccentText rounded-md"
              >
                Reading List
              </Link>
              <Link
                href="/settings"
                passHref
                className="w-full px-4 p-2 hover:underline hover:text-btnFontColor hover:bg-hoverAccentText rounded-md"
              >
                Settings
              </Link>
              <hr className="my-2 border-1 border-slate-300 w-full" />

              <div className="group w-full text-start px-4 p-2 hover:underline hover:text-btnFontColor hover:bg-hoverAccentText rounded-md">
                <SignoutButton />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
