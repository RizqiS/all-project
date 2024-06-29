import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingPage() {
  return (
    <div>
      <div className="container mx-auto flex justify-center mb-6">
        <Skeleton className="bg-slate-300 h-10 w-[448px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 18 }).map((_, index) => (
          <Skeleton key={index} className="h-[238px] bg-slate-300" />
        ))}
      </div>
    </div>
  );
}
