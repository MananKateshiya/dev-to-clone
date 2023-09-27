import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

function PostLoading() {
  return (
    <div className="flex items-center space-x-4 bg-purple-400">
      <Skeleton className="h-20 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-[250px]" />
        <Skeleton className="h-6 w-[200px]" />
      </div>
    </div>
  );
}

export default PostLoading;
