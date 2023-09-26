import "@/styles/globals.css";
import type { Metadata } from "next";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopSortBar from "@/components/shared/TopSortBar";
import RightCards from "@/components/cards/RightCards";
import Link from "next/link";
export const metadata: Metadata = {
  title: "A Dev.to Clone - Posts",
  description: "Dev Blog and Social Network",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn: boolean = false;

  return (
    <section className="py-2 px-2">
      <div className="flex mx-auto max-w-7xl">
        {/* LEFT */}
        <div className="flex mt-2">
          <LeftSidebar />
        </div>
        {/* MIDDLE */}

        <section className="inline-block md:mx-3 w-full">
          <div className="flex">
            <TopSortBar />
            
          </div>
          <div>
            {loggedIn && (
              <div className="mt-2 py-4 px-2 text-color_dark bg-white rounded-md">
                Some latest posts are only visible for members.
                <Link href={"/login"} className="text-buttonHover ">
                  &nbsp;Sign in&nbsp;
                </Link>
                to see all latest.
              </div>
            )}
          </div>

          {children}
        </section>

        {/* RIGHT */}
        <div className="inline-block w-1/2 mx-1 sm:mr-4 max-lg:hidden">
          <RightCards name="Right Card" />
          <RightCards name="Right Card" />
        </div>
      </div>
    </section>
  );
}
