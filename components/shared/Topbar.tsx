import { MagnifyingGlassIcon, Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
function Topbar({src}: {src: StaticImageData}) {
  return (
    <header className="py-2 px-4 bg-white fixed top-0 z-30 w-full shadow-sm">
      <div className="flex items-center justify-between bg-white mx-auto max-w-7xl">
        {/* Left */}
        <div className="inline-flex items-center gap-x-4">
          <div className="flex md:hidden">
            <Bars3Icon className="h-10 w-10 p-1 " />
          </div>
          <div className="w-[46px] h-[36px] shrink-0 py-1 rounded-[4px] font-logo text-lg text-white text-center bg-black select-none cursor-pointer">
            DEV
          </div>

          <div className="items-center relative md:flex hidden">
            <input
              className=" py-2 pl-2 pr-12 placeholder-gray-900 placeholder:font-sans border-[1px] border-gray-300 rounded-md hover:border-gray-400 outline-none focus:ring-2 focus:ring-focusblue focus:border-none focus:shadow-sm focus:ease-in duration-150"
              type="text"
              size={35}
              name="Search"
              placeholder="Search..."
            />

            <MagnifyingGlassIcon className="absolute right-0 rounded-md h-9 w-9 p-1 text-lg font-bold  cursor-pointer hover:bg-blue-100 hover:text-blue-900" />
          </div>
        </div>

        
        {/*  Right  */}

        <div className="inline-flex items-center gap-x-3">
          <button className="hidden px-3 py-2 border-[1px] font-btnFont font-medium text-btnFontColor border-focusblue hover:bg-buttonHover hover:text-white rounded-md md:inline-flex">Create Post</button>
          <MagnifyingGlassIcon className="hidden rounded-md h-10 w-10 p-2 text-lg font-bold  cursor-pointer hover:bg-blue-100 hover:text-blue-900 max-md:inline-flex" />
          <BellIcon className="h-10 w-10 py-2 " />

          <div className="flex h-8 w-8 hover:ring-4 ring-slate-200 items-center justify-center bg-slate-300 rounded-full overflow-hidden">
            
            <Image className=" ring-4 ring-pink-500 ring-offset-8  cursor-pointer" src={src} alt="User Profile Pic"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
