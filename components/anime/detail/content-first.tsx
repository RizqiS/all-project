import { AnimeDataJikan } from "@/types/jikan/anime.type";
import Image from "next/image";
import React from "react";

type ContentFirstProps = {
  anime: AnimeDataJikan;
};

export default function ContentFirst({ anime }: ContentFirstProps) {
  return (
    <div className="flex flex-col md:flex-row gap-x-6 ">
      <div className="w-full md:w-1/5 pt-12">
        <Image
          src={anime.images.webp.large_image_url}
          alt={anime.title}
          width={192}
          height={100}
          className="h-max w-full object-cover rounded-md"
        />
      </div>
      <div className="w-full md:w-4/5 flex flex-col gap-y-4 py-12">
        <h2 className="text-xl md:text-lg font-semibold">{anime.title}</h2>
        <p className="leading-6 text-sm md:text-base">{anime.synopsis}</p>

        <div className="grid grid-cols-2 gap-x-4 mt-6 text-sm md:text-base">
          <div>
            <p>Type&nbsp;:&nbsp; {anime.type}</p>
          </div>
          <div>
            <p>Type&nbsp;:&nbsp; {anime.score}</p>
          </div>
          <div className="flex">
            <span>Studios&nbsp;:&nbsp;</span>
            <ul>
              {anime.studios?.map((studio) => (
                <li key={studio.mal_id}>
                  <p>{studio.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              Premiered&nbsp;:&nbsp;{anime.season}&nbsp;{anime.year}
            </p>
          </div>
          <div>
            <p>Date aired&nbsp;:&nbsp;{new Date(anime.aired?.from).toDateString()}</p>
          </div>
          <div>
            <p>Duration&nbsp;:&nbsp;{anime.duration}</p>
          </div>
          <div>
            <p>Status&nbsp;:&nbsp;{anime.status}</p>
          </div>
          <div>
            <p>Rating&nbsp;:&nbsp;{anime.rating}</p>
          </div>
          <div className="flex">
            <span>Genre&nbsp;:&nbsp;</span>
            <ul className="flex flex-wrap">
              {anime.genres?.map((genre) => (
                <li key={genre.mal_id}>
                  <p>{genre.name},&nbsp;</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Rating&nbsp;:&nbsp;{anime.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
