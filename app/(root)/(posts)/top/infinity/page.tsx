import React, { Suspense } from "react";
import PostLoading from "../../loading";
// import BlogCard from "@/components/cards/BlogCard";
const BlogCard = React.lazy(() =>
  lazyload(import("@/components/cards/BlogCard"))
);

function page() {
  return (
    <section className="flex mx-auto">
      {/* MIDDLE */}
      <section className="inline-block mx-0 md:mr-2 w-full">
        {/* BLOGS / TODOS Will appear here */}
        <Suspense fallback={<PostLoading />}>
          <h1>root ="/infinity"</h1>
          <BlogCard isLatest={false} limit={125} />
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
