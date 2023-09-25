import Topbar from "@/components/shared/Topbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import imgSrc from "@/assets/user.png";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopSortBar from "@/components/shared/TopSortBar";
import RightCards from "@/components/cards/RightCards";
export const metadata: Metadata = {
  title: "A Dev.to Clone - Posts",
  description: "Dev Blog and Social Network",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-2 px-2">
      <div className="flex justify-between mx-auto max-w-7xl">
        {/* LEFT */}
        <div className="flex items-center">
          <LeftSidebar />
        </div>
        {/* MIDDLE */}

        <section className="inline-block mx-3 w-full">
          <div className="inline-flex">
            <TopSortBar />
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
