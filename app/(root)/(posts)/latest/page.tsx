import React, { Suspense } from "react";
import PostLoading from "../loading";
import BlogCard from "@/components/cards/BlogCard";


function page() {
  return (
    <section className="flex mx-auto">
      {/* MIDDLE */}
      <section className="inline-block mx-0 md:mr-2 w-full">
      <Suspense fallback={<PostLoading />}>
          <BlogCard  />
        </Suspense>
      </section>
    </section>
  );
}
// function lazyload(promise: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

export default page;
