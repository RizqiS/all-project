"use client";

import React, { useState } from "react";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import { getJikanAnime } from "@/lib/fetch";
import ItemAnime from "./item/item-anime";
import { Button } from "../ui/button";
import CardAnime from "./card-anime";

type CardAnimeProps = {
  anime: AnimeDataJikan[];
  search?: boolean;
};

export default function ContentAnime({ anime, search }: CardAnimeProps) {
  const [dataAnime, setDataAnime] = useState<AnimeDataJikan[]>(anime);
  const [countPage, setCountPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const urlJikan = process.env.NEXT_PUBLIC_JIKAN as string;
  const loadMoreAnime = async () => {
    setLoading(true);
    const { data } = await getJikanAnime(`${urlJikan}/anime`, `page=${countPage}`);

    setDataAnime([...dataAnime, ...data]);
    setCountPage((prevCountState) => prevCountState + 1);
    setLoading(false);
  };

  return (
    <div className="container mx-auto">
      <CardAnime dataAnime={dataAnime} />

      {!search && (
        <div className="flex justify-center my-12">
          <Button disabled={loading} onClick={loadMoreAnime} className="w-1/2">
            <span className={`${loading ? "animate-pulse" : ""}`}>{loading ? "Loading..." : "Load More"}</span>
          </Button>
        </div>
      )}
    </div>
  );
}
