import { sidebarLinks } from "@/constants";
import Link from "next/link";

function LeftSidebar() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col text-color_dark w-full font-thin2 max-md:hidden ">
        {sidebarLinks.map((link) => (
          <div className="group">
            <Link
              key={link.label}
              href={link.route}
              className="group flex items-center p-2 bg-transparent focus:focusRing focus:bg-hoverAccent hover:bg-hoverAccent hover:text-blue-900 rounded-md"
            >
              <span className="text-lg group-hover:no-underline">
                {link.emoji}
              </span>
              {link.label === "Reading List" ? (
                <>
                  <span className="mx-2  group-focus:underline group-hover:underline">{link.label}</span>
                  <div className="px-1 bg-slate-300 rounded-md  group-focus:underline group-hover:underline">5</div>
                </>
              ) : (
                <span className="mx-2   group-focus:underline group-hover:underline">{link.label}</span>
              )}
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="bg-red-200 h-10"></div> */}
    </section>
  );
}

export default LeftSidebar;
