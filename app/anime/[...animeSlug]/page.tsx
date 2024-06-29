import ContentFirst from "@/components/anime/detail/content-first";
import ContentSecond from "@/components/anime/detail/content-second";
import ContentTheree from "@/components/anime/detail/content-three";
import { getJikanAnime, urlJikan } from "@/lib/fetch";
import React, { Suspense } from "react";

type AnimeDetailProps = {
  params: {
    animeSlug: string[];
  };
};

async function AnimeDetailPararel({ mal_id }: { mal_id: number }) {
  const animeDetailFetch = getJikanAnime(`${urlJikan}/anime/${mal_id}`);
  const animePopularFetch = getJikanAnime(`${urlJikan}/top/anime`, "limit=10");
  const animeSeasonFetch = getJikanAnime(`${urlJikan}/seasons/now`, "limit=12");

  const [animeDetail] = await Promise.all([animeDetailFetch]);
  const [animePopular] = await Promise.all([animePopularFetch]);
  const [animeSeason] = await Promise.all([animeSeasonFetch]);

  return (
    <>
      {animeDetail.data && animePopular.data && animeSeason.data && (
        <div className="flex gap-x-6">
          <section className="w-full md:w-4/5 bg-slate-100 h-max rounded-lg overflow-hidden">
            <ContentFirst anime={animeDetail.data} />
            <ContentTheree anime={animeSeason.data} />
          </section>
          <aside className="hidden md:block md:w-1/5 h-max rounded-lg overflow-hidden">
            <h1 className="ml-4 my-4 text-2xl font-semibold">Popular Anime</h1>
            <ContentSecond anime={animePopular.data} />
          </aside>
        </div>
      )}
    </>
  );
}

export default async function AnimeDetail({ params }: AnimeDetailProps) {
  const { animeSlug } = params;

  return (
    <div className="container mx-auto mt-12">
      <Suspense fallback={<p>loading...</p>}>
        <AnimeDetailPararel mal_id={parseInt(animeSlug[0])} />
      </Suspense>
    </div>
  );
}
