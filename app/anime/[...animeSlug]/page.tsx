import ContentFirst from "@/components/anime/detail/content-first";
import ContentSecond from "@/components/anime/detail/content-second";
import ContentTheree from "@/components/anime/detail/content-three";
import { getJikanAnime, getJikanAnimeCache, urlJikan } from "@/lib/fetch";
import React, { Suspense } from "react";

type AnimeDetailProps = {
  params: {
    animeSlug: string[];
  };
};

async function AnimeDetailPararel({ mal_id }: { mal_id: number }) {
  console.log({ a: mal_id });

  const animeDetailFetch = getJikanAnimeCache(`${urlJikan}/anime/${mal_id}`);
  const animePopularFetch = getJikanAnimeCache(`${urlJikan}/top/anime`, "limit=12");
  const animeSeasonFetch = getJikanAnimeCache(`${urlJikan}/seasons/now`, "limit=12");

  const [animeDetail, animePopular, animeSeason] = await Promise.all([
    animeDetailFetch,
    animePopularFetch,
    animeSeasonFetch,
  ]);

  if (animeDetail.data && animePopular.data && animePopular.data) {
    console.log(animeDetail.data.title);
  }
  return (
    <>
      <div className="flex gap-x-6">
        <section className="w-full md:w-4/5 bg-slate-100 h-max rounded-lg overflow-hidden p-4">
          {animeDetail.data && animeSeason.data && (
            <>
              <ContentFirst anime={animeDetail.data} />
              <ContentTheree anime={animeSeason.data} />
            </>
          )}
        </section>
        <aside className="hidden md:block md:w-1/5 h-max rounded-lg overflow-hidden">
          <h1 className="ml-4 my-4 text-2xl font-semibold">Popular Anime</h1>
          {animePopular.data && <ContentSecond anime={animePopular.data} />}
        </aside>
      </div>
    </>
  );
}

export default async function AnimeDetail({ params }: AnimeDetailProps) {
  const { animeSlug } = params;
  console.log(animeSlug);
  return (
    <div className="container mx-auto mt-12">
      <Suspense fallback={<p>loading...</p>}>
        <AnimeDetailPararel mal_id={parseInt(animeSlug[0])} />
      </Suspense>
    </div>
  );
}
