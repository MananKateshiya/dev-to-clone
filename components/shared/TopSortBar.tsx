"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function TopSortBar() {
  const pathName = usePathname();

  return (
    <div className="flex gap-x-0 max-sm:flex-col w-full">
      <div className="flex gap-x-1 w-full text-color_light font-basefont text-lg">
        <Link
          href={"/"}
          about="Relevant"
          className={`px-3 py-2 rounded-md cursor-pointer ${
            pathName === "/" ? `font-bold` : `font-base`
          }  text-slate-900 hover:text-btnFontColor sm:hover:bg-white`}
        >
          Relevant
        </Link>

        <Link
          href={"/latest"}
          about="Latest"
          className={`px-3 py-2 rounded-md cursor-pointer ${
            pathName === "/latest" ? `font-bold` : `font-base`
          }  text-slate-900 hover:text-btnFontColor sm:hover:bg-white`}
        >
          Latest
        </Link>

        <Link
          href={"/top/week"}
          about="Top"
          className={`px-3 py-2 rounded-md cursor-pointer ${
            pathName.includes("/top") ? `font-bold` : `font-base`
          }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
        >
          Top
        </Link>
      </div>

      {pathName.includes("/top") && (
        <div className="flex gap-x-1 text-color_light font-basefont text-md items-center">
          <Link
            href={"/top/week"}
            about="Top"
            className={`px-3 py-2 rounded-md cursor-pointer ${
              pathName === "/top/week" ? `font-bold` : `font-base`
            }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
          >
            Week
          </Link>

          <Link
            href={"/top/month"}
            about="Top"
            className={`px-3 py-2 rounded-md cursor-pointer ${
              pathName === "/top/month" ? `font-bold` : `font-base`
            }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
          >
            Month
          </Link>

          <Link
            href={"/top/year"}
            about="Top"
            className={`px-3 py-2 rounded-md cursor-pointer ${
              pathName === "/top/year" ? `font-bold` : `font-base`
            }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
          >
            Year
          </Link>
          <Link
            href={"/top/infinity"}
            about="Top"
            className={`px-3 py-2 rounded-md cursor-pointer ${
              pathName === "/top/infinity" ? `font-bold` : `font-base`
            }  text-slate-900 hover:text-btnFontColor hover:bg-white`}
          >
            Infinity
          </Link>
        </div>
      )}
    </div>
  );
}
export default TopSortBar;
