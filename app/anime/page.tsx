"use server";

import React, { Suspense } from "react";
import { getJikanAnime, urlJikan } from "@/lib/fetch";
import ContentAnime from "@/components/anime/content-anime";
import CarouselAnime from "@/components/anime/carousel-anime";
import LoadingPage from "./loading-page";

async function AnimeDashboard() {
  const animeFetch = getJikanAnime(`${urlJikan}/anime`, "page=1");
  const topAnimeFetch = getJikanAnime(`${urlJikan}/top/anime`);

  // this is pararel route
  const [getAnime, getTopAnime] = await Promise.all([animeFetch, topAnimeFetch]);

  const anime = getAnime.data;
  const topAnime = getTopAnime.data;

  return (
    <>
      <CarouselAnime topAnime={topAnime} />
      <ContentAnime anime={anime} />
    </>
  );
}

export default async function AnimePage() {
  return (
    <section className="mt-12 container">
      <Suspense fallback={<LoadingPage />}>
        <AnimeDashboard />
      </Suspense>
    </section>
  );
}
