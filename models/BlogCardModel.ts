import mongoose from "mongoose";
import { ReactionType } from "@/lib/types";

const reactionSchema = new mongoose.Schema({
  reactor_id:  {type: mongoose.Schema.Types.ObjectId, ref: 'BlogPostCard'} ,
  reaction_types: {
    type: [String],
    enum: Object.values(ReactionType),
    required: false,
  },
});

const blogCardSchema = new mongoose.Schema({
  bannerImg: {
    type: String,
    required: false,
    default: "",
  },
  dateOfPost: {
    type: Date,
    required: false,
    default: Date.now,
  },
  blogTitle: {
    type: String,
    required: true,
  },
  tagLinks: {
    type: [String],
    required: false,
  },

  noComments: { type: Number, default: 0 },
  readTime: { type: String },
  isBookmark: { type: Boolean, default: false },
  reaction_count: { type: Number, default: 0 },
  reactions: { type: [reactionSchema] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const BlogPostCard = mongoose.models.blogposts || mongoose.model("blogposts", blogCardSchema);
// const Reaction = mongoose.models.reactions || mongoose.model("reactions", reactionSchema);

export default BlogPostCard;
