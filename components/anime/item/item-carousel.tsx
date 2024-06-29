import React from "react";
import { CarouselItem } from "../../ui/carousel";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import Image from "next/image";

type ItemCarouselProps = {
  topAnime: AnimeDataJikan;
};

export default function ItemCarousel({ topAnime }: ItemCarouselProps) {
  const { images, title } = topAnime;

  return (
    <CarouselItem className="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6">
      <div>
        <Card className="w-full h-max overflow-hidden">
          <CardHeader className="w-full px-0 py-0">
            <Image
              src={images.webp.large_image_url}
              width={192}
              height={100}
              alt="testing image"
              className="w-full h-64 object-cover"
              priority
            />
          </CardHeader>
          <CardContent className="flex items-center justify-center p-4 bg-black">
            <span className="text-sm line-clamp-1 font-semibold text-slate-100">{title}</span>
          </CardContent>
        </Card>
      </div>
    </CarouselItem>
  );
}
