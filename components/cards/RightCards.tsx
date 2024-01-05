import { CardProps } from "@/lib/types";
import React from "react";


function RightCards({ name }: CardProps) {
  return (
    <div className="h-60 my-2 mx-auto rounded-md shadow-sm bg-white">
      THIS IS A {name}
    </div>
  );
}

export default RightCards;
