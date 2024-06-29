import React from "react";
import ItemAnime from "./item/item-anime";
import { AnimeDataJikan } from "@/types/jikan/anime.type";

type CardAnimeProps = {
  dataAnime: AnimeDataJikan[];
};

export default function CardAnime({ dataAnime }: CardAnimeProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {dataAnime?.map((item) => (
        <ItemAnime item={item} key={Math.random() * item.mal_id} />
      ))}
    </ul>
  );
}
