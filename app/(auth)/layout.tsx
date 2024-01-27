import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev.to Authentication",
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
        <main>
          <section className="p-2 bg-amber-400 items-center">
            <h1 className="text-4xl text-center">{`Landing Page`}</h1>
          </section>
          {children}
        </main>
      </body>
    </html>
  );
}
