import React from "react";
import CardAnime from "../card-anime";
import { AnimeDataJikan } from "@/types/jikan/anime.type";

type ContentThereeProps = {
  anime: AnimeDataJikan[];
};

export default function ContentTheree({ anime }: ContentThereeProps) {
  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold mb-4">Seasong Now</h1>
      <CardAnime dataAnime={anime} />
    </div>
  );
}
