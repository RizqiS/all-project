"use client";

import { getJikanAnime, urlJikan } from "@/lib/fetch";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import { Button } from "../../ui/button";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/search-hooks";

export default function SearchAnime() {
  const { anime, query, loading, setQuery } = useSearch();
  const refInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const queryOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keywordValue = refInput.current?.value;

    if (keywordValue) {
      router.push(`/anime/search?keyword=${keywordValue}`);
    }

    setQuery("");
  };

  return (
    <div className="my-6 flex flex-col items-end relative">
      <form onSubmit={onSubmitHandler} className="w-max z-20 flex gap-x-4 items-center border">
        <div className="md:w-[448px] relative">
          <Input
            ref={refInput}
            type="text"
            value={query}
            onChange={queryOnChange}
            className="ring-2 ring-black w-44 h-9 md:w-full"
            placeholder="search ...."
          />
          <Search width={20} height={20} className="absolute top-2 right-5" />
        </div>
        <Button size={"sm"}>Search</Button>
      </form>

      {loading && (
        <div className="mt-2 z-10 absolute top-12 right-32 transform w-[448px]">
          <p className="animate-pulse bg-slate-200 text-slate-500 rounded-md p-1.5">loading...</p>
        </div>
      )}

      <div className={`${loading ? "hidden" : "block"}`}>
        {!loading && anime.length !== 0 && (
          <>
            <ul className="flex flex-col gap-y-2 absolute top-12 right-44 transform z-10 bg-white p-2 rounded">
              {anime.slice(0, 5).map((item) => (
                <li
                  key={Math.random() * item.mal_id}
                  className="flex items-center border max-w-sm rounded-2xl overflow-hidden shadow"
                >
                  <div className="w-max p-2">
                    <Image
                      src={item.images.webp.large_image_url}
                      alt={item.title}
                      width={100}
                      height={100}
                      priority
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </div>
                  <div className="w-1/2">
                    <h1 className="text-md font-bold">{item.title}</h1>
                    <p className="line-clamp-1 text-xs">{item.synopsis}</p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
