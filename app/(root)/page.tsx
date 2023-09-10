import BlogCard from "@/components/cards/BlogCard";
import RightCards from "@/components/cards/RightCards";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopSortBar from "@/components/shared/TopSortBar";

// (ROOT) -> HOME

export default function Home(): React.ReactElement {
  return (
    <div className="py-2 px-2">
      <div className="flex justify-between mx-auto max-w-7xl">
        {/* LEFT */}
        <div className="flex items-cente">
          <LeftSidebar />
        </div>
        {/* MIDDLE */}

        <section className="inline-block mx-3 w-full">
          <div className="flex">
            <TopSortBar />
          </div>
          <div className="">
          <BlogCard name="Middle" />
          <BlogCard name="Middle" />
          <BlogCard name="Middle" />
          <BlogCard name="Middle" />
          <BlogCard name="Middle" />
          <BlogCard name="Middle" />
          <BlogCard name="Middle" />
          </div>
        </section>
        {/* RIGHT */}
        <div className="inline-block w-1/2 mx-1 sm:mr-4 max-lg:hidden">
          <RightCards name="Right Card" />
          <RightCards name="Right Card" />
        </div>
      </div>
    </div>
  );
}
