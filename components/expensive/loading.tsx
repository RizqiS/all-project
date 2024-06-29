import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <div className="flex justify-center items-start flex-col space-y-6 px-8 mt-12">
      <Skeleton className="h-10 w-full bg-slate-300" />
      <Skeleton className="h-10 w-full bg-slate-300" />
      <Skeleton className="h-10 w-[200px] bg-slate-300" />
      <Skeleton className="h-10 w-full bg-slate-300" />
    </div>
  );
}
