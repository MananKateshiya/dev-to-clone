import BlogCard from "@/components/cards/BlogCard";
import RightCards from "@/components/cards/RightCards";
import LeftSidebar from "@/components/shared/LeftSidebar";
import TopSortBar from "@/components/shared/TopSortBar";
import { Suspense, lazy } from "react";

// (ROOT) -> HOME

async function Home(): Promise<React.ReactElement> {
  return (
    <section className="py-2 px-2">
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

          <Suspense
            fallback={
              <h1 className="w-full text-center mx-auto h-20 text-white bg-red-500">
                LOADING TODOS.......
              </h1>
            }
          >
            {/* BLOGS / TODOS Will appear here */}
            <BlogCard />
          </Suspense>
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

export default Home;
