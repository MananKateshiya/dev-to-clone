import React from "react";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Dev.to Clone - Auth",
  description: "Dev Blog and Social Network",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <h1 className="text-4xl bg-amber-400 w-full p-2 text-white">
          Landing Page 1
        </h1>
        {children}
      </div>
    </section>
  );
}
