// "use client"
import BlogCard from "@/components/cards/BlogCard";
import { Suspense, lazy } from "react";
import PostLoading from "./loading";
// (ROOT) -> HOME


function Home(): React.ReactElement {
  return (
    <section>
      {/* MIDDLE */}
      <section className="inline-block mx-0 w-full">
        {/* BLOGS / TODOS Will appear here */}
        <Suspense fallback={<PostLoading />}>
          <BlogCard />
          <BlogCard/>
        </Suspense>
      </section>
    </section>
  );
}

export default Home;
