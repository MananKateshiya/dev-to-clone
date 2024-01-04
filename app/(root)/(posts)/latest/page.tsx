import React, { Suspense } from "react";
import PostLoading from "../loading";
import BlogCard from "@/components/cards/BlogCard";
import { posts } from "@/constants";


function page() {
  return (
    <section className="flex mx-auto">
      {/* MIDDLE */}
      <section className="inline-block mx-0 md:mr-2 w-full">
      <Suspense fallback={<PostLoading />}>
      {posts.map((data, index) => (
            <div key={index}>
              <BlogCard
                bannerImg={data.bannerImg}
                authorImg={data.authorImg}
                authorName={data.authorName}
                blogTitle={data.blogTitle}
                dateOfPost={data.dateOfPost}
                isBookmark={data.isBookmark}
                readTime={data.readTime}
                tagLinks={data.tagLinks}
                timeTillPost={data.timeTillPost}
                noComments={data.noComments}
                noReactions={data.noReactions}
              />
            </div>
          ))}
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
