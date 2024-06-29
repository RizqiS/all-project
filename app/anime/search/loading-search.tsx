import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingSearch() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {Array.from({ length: 18 }).map((_, index) => (
        <Skeleton key={index} className="h-[238px] bg-slate-300" />
      ))}
    </div>
  );
}
