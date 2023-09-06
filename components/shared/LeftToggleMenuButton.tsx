"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

function ToggleButton(): React.ReactNode {
  const [isToggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <>
      <button
        onClick={handleToggle}
        className="flex md:hidden rounded-md focus:focusRing focus:bg-hoverAccent focus:text-blue-900 hover:bg-hoverAccent hover:text-blue-900"
      >
        <Bars3Icon className="h-10 w-10 p-1" />
      </button>
    </>
  );
}

export default ToggleButton;
