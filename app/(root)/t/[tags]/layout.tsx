import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Dev.to Clone",
  description: "Dev Blog and Social Network",
};

export default function TagLayout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
