import React, { Suspense } from "react";
// import BlogCard from "@/components/cards/BlogCard";
const BlogCard = React.lazy(() =>
  lazyload(import("@/components/cards/BlogCard"))
);

function page() {
  
  return (
    <section className="flex mx-auto">
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
        
          <BlogCard isLatest={true} limit={1} />
        </Suspense>
      </section>
    </section>
  );
}
function lazyload(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}

export default page;