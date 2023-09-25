// "use client"
// import BlogCard from "@/components/cards/BlogCard";
import { Suspense, lazy } from "react";



const BlogCard = lazy(() => import("@/components/cards/BlogCard"));
// (ROOT) -> HOME
function Home(): React.ReactElement {

  return (
    <section>
      {/* MIDDLE */}
      <section className="inline-block mx-0 w-full">
        <Suspense
          fallback={
            <h1 className="w-full text-center mx-auto h-20 text-white bg-red-500">
              LOADING TODOS.......
            </h1>
          }
        >
          {/* BLOGS / TODOS Will appear here */}
          <BlogCard isLatest={false} limit={1} />
        </Suspense>
      </section>
    </section>
  );
}


export default Home;
