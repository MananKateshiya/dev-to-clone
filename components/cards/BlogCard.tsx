import Image from "next/image";
import React from "react";
import MyAvatar from "../Others/MyAvatar";
import { format, formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import BookMarkButton from "@/components/Others/BookMarkButton";
import { BlogProps } from "@/lib/types";
import ReactionChips from "../Others/ReactionChips";

function BlogCard(props: BlogProps) {
  const formattedDateWithYear = format(props.dateOfPost, "MMM d ''yy");
  const formattedDateWithoutYear = format(props.dateOfPost, "MMM d");
  
  return (
    <div className="blog-card mb-2 pb-2 min-h-[181px] bg-blogCard rounded-md shadow-sm cursor-pointer">
      {/* Banner/Header Image */}
      {isFirstCard(props.index) && (
        <Image
          className="w-full aspect-blogBanner"
          src={props.bannerImg || ""}
          alt="Banner Image"
          width={1000}
          height={400}
          style={{ objectFit: "cover" }}
        />
      )}

      {/* Author img, name, Blog dates and Blog Title */}
      <div className="author-info py-4 px-4 pb-0">
        <div className="flex space-x-2 mx-auto">
          {/* Author Image  */}
          <MyAvatar src={props.authorImg} link={"/"} />
          {/* Author Name */}
          <div className="flex flex-col justify-start">
            <span className="author-name text-color_dark font-medium text-sm leading-[17.5px]">
              {props.authorName}
            </span>
            {/* Date of Post */}
            <div className="flex gap-x-1 text-color_light font-thin2 text-[12px] leading-[15px]">
              <span>
                {shouldDisplayYearOrTime(props.dateOfPost) ? (
                  <>{formattedDateWithoutYear}</>
                ) : (
                  <>{formattedDateWithYear}</>
                )}
              </span>
              {/* Time Till Post */}
              {shouldDisplayYearOrTime(props.dateOfPost) && (
                <span>
                  {`(${formatDistanceToNow(props.dateOfPost, {
                    addSuffix: true,
                  }).replace("minutes", "mins")})`}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Blog Post Title */}
        <div className="blog-title flex flex-col py-3 pb-3 md:pl-10">
          <Link href={"/"} className="hover:text-blogLinkColor">
            <span
              className={`font-bold text-postTitleM ${
                isFirstCard(props.index)
                  ? "sm:text-3xl sm:leading-[37.5px]"
                  : "leading-[25px] sm:text-postTitleOther sm:leading-[30px]"
              }`}
            >
              {props.blogTitle}
            </span>
          </Link>
        </div>
      </div>

      {/* Tags */}
      <div className="tags flex flex-wrap px-12 max-md:px-4 justify-start gap-x-1">
        {props.tagLinks?.map((tag, index) => (
          <Link
            href={`/t/${tag}`}
            key={index}
            className="tag py-1 px-2 text-sm bg-transparent text-color_dark hover:bg-tagColor border-transparent border-[1px] rounded-md hover:border-hoverBorderAccent hover:transition hover:duration-100 ease-in mb-1"
          >
            #{tag}
          </Link>
        ))}
      </div>

      {/* Comments and Bookmark Parent Div */}
      <div className="flex justify-between max-md:px-6 items-center py-1 px-12 hover:transition hover:duration-100 ease-in ">
        {/* Reaction & Comments */}
        <div className="flex justify-between items-center">
          {/* Reaction */}

          <ReactionChips reactions={props.reactions || []} />

          {/* Comment */}
          <div className="comment-info flex space-x-1 items-center py-1 px-3 text-sm text-color_dark hover:bg-hoverAccent2 rounded-md focus:focusRing focus:bg-hoverAccent mb-1 w-full whitespace-nowrap">
            <ChatBubbleOvalLeftIcon
              height={18}
              width={18}
              className="transform scale-x-[-1]"
            />
            <span
              className={`text-color_light leading-6 ${
                props.noComments === 0 ? "sm:hidden" : "sm:block"
              } `}
            >
              {props.noComments}
            </span>

            <span className="text-color_light leading-6 hidden sm:block">
              {`${props.noComments == 0 ? `Add comment` : "Comments"}`}
            </span>
          </div>
        </div>

        {/* Mins to read and Bookmark */}
        <div className="mins-to-read-and-bookmark flex items-center gap-x-2">
          <div className="read-time text-color_light text-xs leading-4">
            {props.readTime}
          </div>
          <BookMarkButton isBookMark={props.isBookmark} />
        </div>
      </div>
    </div>
  );
}

function shouldDisplayYearOrTime(postDate: Date): boolean {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return postDate > oneYearAgo;
}

function isFirstCard(index: number): boolean {
  return index === 0 && !index;
}

export default BlogCard;
