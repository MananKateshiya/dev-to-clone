import { BlogProps, ReactionType, SidebarObj, SidebarTagObj } from "@/lib/types";

export const posts: BlogProps[] = [
  {
    blogId: "xyz123abc",
    bannerImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--r-y2UaJX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/41ymdyynlerr1qa2yhnd.png",
    authorImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--NAROO8kd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1149335/a5385df6-1c15-43d9-b1da-46e2ee9c142e.png",
    authorName: "Hung Vu",
    blogTitle:
      "Insights from LRO Investment Advisor Limited’s Chief Financial Analyst",
    dateOfPost: new Date(),
    isBookmark: false,
    readTime: "6 min read",
    timeTillPost: new Date(),
    tagLinks: [
      "solverbraceletmen",
      "silverbraceletformen",
      "silverchainbraceletmens",
    ],
    noComments: 10,
    reaction_count: 4,
    reactions: [
      {
        reactor_id: "111111",
        reaction_types: [ReactionType.Unicorn], // Use the enum value here
      },
      {
        reactor_id: "222222",
        reaction_types: [ReactionType.RaisingHands], // Use the enum value here
      },
    ],
  },

  {
    blogId: "xyz123pqr",
    bannerImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--r-y2UaJX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/41ymdyynlerr1qa2yhnd.png",
    authorImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--NAROO8kd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1149335/a5385df6-1c15-43d9-b1da-46e2ee9c142e.png",
    authorName: "Hung Vu",
    blogTitle:
      "Choosing Silver Bracelets: A Full Introduction to Style & Elegance",
    dateOfPost: new Date(),
    isBookmark: false,
    readTime: "6 min read",
    timeTillPost: new Date(),
    noComments: 0,
    reaction_count: 10,
    reactions: [
      {
        reactor_id: "111111",
        reaction_types:[ReactionType.Heart, ReactionType.RaisingHands],
      },
      {
        reactor_id: "222222",
        reaction_types: [ReactionType.Unicorn, ReactionType.Fire],
      },
    ],
  },

  {
    blogId:"0012xyz",
    bannerImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--r-y2UaJX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/41ymdyynlerr1qa2yhnd.png",
    authorImg:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--NAROO8kd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1149335/a5385df6-1c15-43d9-b1da-46e2ee9c142e.png",
    authorName: "Hung Vu 2",
    blogTitle: "Create Dev.to clone with Next.JS, MongoDB and Redis",
    // blogTitle: '*NEW* GET PAID $10.00 PER WEEK TO YOUR CASH APP.',
    dateOfPost: new Date(),
    isBookmark: false,
    readTime: "3 minutes",
    timeTillPost: new Date(),
    tagLinks: ["learn", "react", "programming", "silverbraceletformen"],
    noComments: 3,

    reaction_count: 1,
    reactions: [
      {
        reactor_id: "111111",
        reaction_types: [ReactionType.Heart, ReactionType.RaisingHands],
      },
      {
        reactor_id: "222222",
        reaction_types: [ReactionType.ExplodingHead, ReactionType.RaisingHands, ReactionType.Fire],
      },
    ],
  },

  // {
  //   bannerImg: "https://res.cloudinary.com/practicaldev/image/fetch/s--r-y2UaJX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/41ymdyynlerr1qa2yhnd.png",
  //   authorImg: "https://res.cloudinary.com/practicaldev/image/fetch/s--NAROO8kd--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1149335/a5385df6-1c15-43d9-b1da-46e2ee9c142e.png",
  //   authorName: 'Hung Vu 3',
  //   blogTitle: '*NEW* GET PAID $10.00 PER WEEK TO YOUR CASH APP.',
  //   dateOfPost: new Date(),
  //   isBookmark: true,
  //   readTime: '5 minutes',
  //   timeTillPost: new Date(),
  //   tagLinks: [ 'learn', 'react', 'programming', 'silverbraceletformen'],
  //   noComments: 2,
  //   noReactions: 1
  // },
];

export const sidebarLinks: SidebarObj[] = [
  {
    emoji: "🏠",
    route: "/",
    label: "Home",
  },
  {
    emoji: "🗃️",
    route: "/readinglist",
    label: "Reading List",
  },
  {
    emoji: "🎙️",
    route: "/podcasts",
    label: "Podcasts",
  },
  {
    emoji: "📽️",
    route: "/videos",
    label: "Videos",
  },
  {
    emoji: "🏷️",
    route: "/tags",
    label: "Tags",
  },
  {
    emoji: "💡",
    route: "/faq",
    label: "FAQ",
  },
  {
    emoji: "🛍️",
    route: "/shop",
    label: "Forem Shop",
  },
  {
    emoji: "❤️",
    route: "/dev-advertising-options",
    label: "Advertise on DEV",
  },
  {
    emoji: "📃",
    route: "/about",
    label: "About",
  },
  {
    emoji: "📯",
    route: "/contact",
    label: "Contact",
  },
  {
    emoji: "📖",
    route: "/guides",
    label: "Guides",
  },
  {
    emoji: "🤔",
    route: "/software-comparisons",
    label: "Software Comparisions",
  },
];

export const sidebarLinksOther: SidebarObj[] = [
  {
    emoji: "👍",
    route: "/code-of-conduct",
    label: "Code of Conduct",
  },
  {
    emoji: "🤓",
    route: "/privacy",
    label: "Privacy Policy",
  },
  {
    emoji: "👀",
    route: "/terms",
    label: "Terms of use",
  },
];

export const sidebarTags: SidebarTagObj[] = [
  {
    tag: "webdev",
  },
  {
    tag: "javascript",
  },
  {
    tag: "beginners",
  },
  {
    tag: "programming",
  },
  {
    tag: "tutorial",
  },
  {
    tag: "react",
  },
  {
    tag: "productivity",
  },
  {
    tag: "career",
  },
  {
    tag: "typescript",
  },
  {
    tag: "ai",
  },
  {
    tag: "github",
  },
  {
    tag: "cloud",
  },
  {
    tag: "design",
  },
  {
    tag: "computerscience",
  },
];
