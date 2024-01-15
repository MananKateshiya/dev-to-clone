import React, { Suspense } from "react";
import PostLoading from "@/app/(root)/(posts)/loading";
import BlogCard from "@/components/cards/BlogCard";
import { posts } from "@/constants";


function page() {
  return (
    <section className="flex mx-auto">
      {/* MIDDLE */}
      <section className="inline-block mx-0 md:mr-2 w-full">
      
          {/* BLOGS / TODOS Will appear here */}
          <Suspense fallback={<PostLoading />}>
          
          {posts.map((post, index) => (
            <div key={post.blogId}>
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
