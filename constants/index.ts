type SidebarObj = {
  emoji: string;
  route: string;
  label: string;
};
type SidebarTagObj = {
  tag: string;
};
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
