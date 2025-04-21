import BlogCard from "@/components/cards/BlogCard";
import { Suspense } from "react";
import PostLoading from "./loading";
import { posts } from "@/constants";
// (ROOT) -> HOME

function Home(): React.ReactElement {
  return (
    <section>
      {/* MIDDLE */}

      <section className="inline-block mx-0 w-full">
        {/* BLOGS / TODOS Will appear here */}

        <Suspense fallback={<PostLoading />}>
          {posts.map((post, index) => (
            <div key={index}>
              <BlogCard
                index={index}
                bannerImg={post.bannerImg}
                authorImg={post.authorImg}
                authorName={post.authorName}
                blogTitle={post.blogTitle}
                dateOfPost={post.dateOfPost}
                isBookmark={post.isBookmark}
                readTime={post.readTime}
                tagLinks={post.tagLinks}
                timeTillPost={post?.timeTillPost}
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

export default Home;
