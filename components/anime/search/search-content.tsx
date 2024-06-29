"use client";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import React, { useEffect } from "react";

import useSWR from "swr";
import { getJikanAnime, urlJikan } from "@/lib/fetch";
import LoadingSearch from "@/app/anime/search/loading-search";
import CardAnime from "../card-anime";

type Props = {
  anime: AnimeDataJikan[];
};

function GetSearchAnime({ anime }: Props) {
  return (
    <div>
      <CardAnime dataAnime={anime} />
    </div>
  );
}

export default function ContentSearch({ keyword }: { keyword: string }) {
  const { data: anime, isLoading } = useSWR(`/search/${keyword}`, () =>
    getJikanAnime(`${urlJikan}/anime`, `q=${keyword}`)
  );

  if (isLoading) {
    return <LoadingSearch />;
  }

  return (
    <div>
      <GetSearchAnime anime={anime.data} />
    </div>
  );
}
