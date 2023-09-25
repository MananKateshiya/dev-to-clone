"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function TopSortBar() {
  const pathName = usePathname();

  return (
    <div className="flex gap-x-1 w-full text-color_light font-basefont text-lg">
      <Link
        href={"/"}
        about="Relevant"
        className={`px-3 py-2 rounded-md cursor-pointer ${
          pathName === "/" ? `font-bold` : `font-base`
        }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
      >
        Relevant
      </Link>

      <Link
        href={"/latest"}
        about="Latest"
        className={`px-3 py-2 rounded-md cursor-pointer ${
          pathName === "/latest" ? `font-bold` : `font-base`
        }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
      >
        Latest
      </Link>

      <Link
        href={"/top"}
        about="Top"
        className={`px-3 py-2 rounded-md cursor-pointer ${
          pathName === "/top" ? `font-bold` : `font-base`
        }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
      >
        Top
      </Link>
    </div>
  );
}
export default TopSortBar;
