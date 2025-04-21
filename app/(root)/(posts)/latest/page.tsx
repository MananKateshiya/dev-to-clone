import React, { Suspense } from "react";
import PostLoading from "../loading";
import BlogCard from "@/components/cards/BlogCard";

async function fetchPosts() {
  try {
    const postsRes = await fetch("http://localhost:3000/api/blogs/posts", {
      next: {revalidate: 120}
    });
    const posts = await postsRes.json();

    return posts;
  } catch (error: any) {
    console.log({ error: error.message });
  }
}

async function page() {
  const posts = await fetchPosts();

  return (
    <section>
      {/* MIDDLE */}
      <section className="inline-block mx-0 w-full">
        <Suspense fallback={<PostLoading />}>
          {posts?.blogs.map((post: any, index: number) => (
            <div key={index}>
              <BlogCard
                index={index}
                bannerImg={post.bannerImg}
                authorImg={post.authorImg}
                authorName={post.authorName}
                blogTitle={post.blogTitle}
                dateOfPost={post.dateOfPost}
                isBookmark={post.isBookmark}
                timeTillPost={post.timeTillPost}
                readTime={post.readTime}
                tagLinks={post.tagLinks}
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

export default page;
