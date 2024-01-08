"use client";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function BookMarkButton({ isBookMark }: { isBookMark: boolean }) {
  const [bookMarkToggle, setBookMarkToggle] = useState(isBookMark);

  const handleToggle = () => {
    setBookMarkToggle((prevState: boolean) => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative h-10 w-10 p-2 md:left-6 cursor-pointer rounded-md
focus:bg-hoverAccent hover:bg-hoverAccent focus:text-blue-900  hover:text-blue-900 ${bookMarkToggle ? "bg-bookmarkHover" : ""} 
`}
    >
      <BookmarkIcon
        height={22}
        width={22}
        className={`
        ${bookMarkToggle ? "fill-black  hover:fill-blue-900" : "fill-transparent"}
      `}
      />
    </button>
  );
}

export default BookMarkButton;
