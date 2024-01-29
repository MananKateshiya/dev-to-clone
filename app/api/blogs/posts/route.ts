import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import BlogPostCard from "@/models/BlogCardModel";
import mongoose, { Document } from "mongoose";
//initial connection with the DB
connect();
export async function GET() {
  try {
    const fetchBlogs = await BlogPostCard.find();

    if (!fetchBlogs) {
      return NextResponse.json({ message: "No Blogs found" }, { status: 404 });
    }

    const response = NextResponse.json(
      {
        blogs: fetchBlogs,
      },
      { status: 200 }
    );

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const postData = await request.json();

    const newPost: Document = new BlogPostCard({
      bannerImg: postData.bannerImg,
      dateOfPost: postData.dateOfPost,
      timeTillPost: postData.timeTillPost,
      blogTitle: postData.blogTitle,
      tagLinks: postData.tagLinks,
      noComments: postData.noComments,
      readTime: postData.readTime,
      isBookmark: postData.isBookmark,
      reaction_count: postData.reaction_count,
      reactions: postData.reactions.map((reaction: any) => ({
        reactor_id: reaction.reactor_id,
        reaction_types: reaction.reaction_types,
      })),
    });

    const savedPost = await newPost.save();

    const response = NextResponse.json(
      { message: "BlogPost added Successfully", success: true },
      { status: 201 }
    );

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
