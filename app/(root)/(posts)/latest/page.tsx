import React, { Suspense } from "react";
import PostLoading from "../loading";
import BlogCard from "@/components/cards/BlogCard";
import { posts } from "@/constants";

function page() {
  return (
    <section>
      {/* MIDDLE */}
      <section className="inline-block mx-0 w-full">
        <Suspense fallback={<PostLoading />}>
          {posts.map((post, index) => (
            <BlogCard
              index={index}
              blogId={post.blogId}
              bannerImg={post.bannerImg}
              authorImg={post.authorImg}
              authorName={post.authorName}
              blogTitle={post.blogTitle}
              dateOfPost={post.dateOfPost}
              isBookmark={post.isBookmark}
              readTime={post.readTime}
              tagLinks={post.tagLinks}
              timeTillPost={post.timeTillPost}
              noComments={post.noComments}
              reaction_count={post.reaction_count}
              reactions={post?.reactions}
            />
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
