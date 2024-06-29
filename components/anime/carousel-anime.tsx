"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import ItemCarousel from "./item/item-carousel";

type CarouselAnimeProps = {
  topAnime: AnimeDataJikan[];
};

export default function CarouselAnime({ topAnime }: CarouselAnimeProps) {
  return (
    <section className="container mx-auto mb-6 p-4">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 w-full h-max">
          {topAnime.map((item) => (
            <ItemCarousel key={Math.random() * item.mal_id} topAnime={item} />
          ))}
        </CarouselContent>

        <CarouselPrevious className="bg-black hover:bg-black/80" />
        <CarouselNext className="bg-black hover:bg-black/80" />
      </Carousel>
    </section>
  );
}
