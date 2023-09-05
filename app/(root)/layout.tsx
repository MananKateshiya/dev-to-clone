import "@/styles/globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import imgSrc from "@/assets/user.png";
import Topbar from "@/components/shared/Topbar";

// const inter = Inter({ subsets: ["latin"] });

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
      {/* <body className={inter.className}> */}
      <body>
        <Topbar src={imgSrc} />
        <main>
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
