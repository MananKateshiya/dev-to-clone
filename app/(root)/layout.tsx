import "@/styles/globals.css";
import type { Metadata } from "next";
import imgSrc from "@/assets/user.png";
import Topbar from "@/components/shared/Topbar";

export const metadata: Metadata = {
  title: "A Dev.to Clone",
  description: "Dev Blog and Social Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full">
        <Topbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
