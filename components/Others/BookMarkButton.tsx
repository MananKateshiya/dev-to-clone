"use client";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function BookMarkButton(props: any){
  const [bookMarkToggle, setBookMarkToggle] = useState(props.isBookMark);

  const handleToggle = () => {
    setBookMarkToggle((prevState: boolean) => !prevState);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative h-10 w-10 p-2 md:left-6 cursor-pointer rounded-md
focus:bg-hoverAccent hover:bg-hoverAccent focus:text-blue-900  hover:text-blue-900 
`}
    >
      <BookmarkIcon
        height={22}
        width={22}
        className={`
        ${bookMarkToggle ? "fill-btnFontColor" : "fill-transparent"}
      `}
      />
    </button>
  );
}

export default BookMarkButton;
