import { StaticImageData } from "next/image";

export enum ReactionType {
  Heart = 'heart',
  RaisingHands = 'raising_hands',
  ExplodingHead = 'exploding_head',
  Unicorn = 'unicorn',
  Fire = 'fire'
}

export type ReactionProps = {
  reactor_id: string;
  reaction_types: ReactionType[];
};

export type AvatarType = {
  link: string;
  src: StaticImageData | string;
  isBorder?: boolean | false;
};

export type BlogProps = {
  index?: any;
  bannerImg?: string;
  authorImg: string | StaticImageData;
  authorName: string;
  dateOfPost?: Date;
  timeTillPost: Date | string;
  blogTitle: string;
  tagLinks?: string[];
  noComments?: number;
  readTime: string;
  isBookmark: boolean;
  reaction_count?: number;
  reactions?: ReactionProps[]; // Make reactions optional
};

export type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export type PageParams = {
  params: {
    tags: number;
  };
};

export type CardProps = {
  name: string;
};

export type SidebarObj = {
  emoji: string;
  route: string;
  label: string;
};
export type SidebarTagObj = {
  tag: string;
};
