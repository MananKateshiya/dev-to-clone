import Image from "next/image";
import React from "react";
import img from "@/public/next.svg";
import MyAvatar from "../Others/MyAvatar";
import imgSrc from "@/assets/user.png";

type BlogProps = {
  bannerImg?: string;
  authorImg: string;
  authorName: string;
  dateOfPost: Date;
  timeTillPost: Date;
  blogTitle: string;
  tagLinks: string[];
  noReactions?: number;
  noComments?: number;
  readTime: Date;
  isBookmark: boolean;
};

async function BlogCard() {
  return (
    <div className="w-full h-auto min-h-[181px] bg-blogCard rounded-md shadow-sm">
      {/* Banner/Header Image */}

      <Image
        className="w-full aspect-[blogBanner]"
        src={`https://res.cloudinary.com/practicaldev/image/fetch/s--r-y2UaJX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/41ymdyynlerr1qa2yhnd.png`}
        alt="User Profile Pic"
        width={1000}
        height={400}
      />

      <div className="flex w-full mx-auto py-2 px-4">
        {/* Author Image  */}
        <MyAvatar src={imgSrc} link={"/"} />
        {/* Author Name */}
        <div className="">
          {/* {authorName}
          {dateOfPost}
          {timeTillPost} */}
           Author
        </div>
      </div>


    </div>
  );
}
export default BlogCard;
