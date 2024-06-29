import SearchAnime from "@/components/anime/search/search-anime";
import Link from "next/link";
import React from "react";

export default function AnimeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/anime" className="text-lg md:text-2xl">
            HoMe
          </Link>
        </div>
        <SearchAnime />
      </div>
      <div>{children}</div>
      <div className="relative bottom-0">
        <div className="flex justify-center items-center bg-slate-900 text-white">
          <h1 className="p-8">copyright by rizqi</h1>
        </div>
      </div>
    </>
  );
}
