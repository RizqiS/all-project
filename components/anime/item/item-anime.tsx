import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import { Card, CardContent, CardHeader } from "../../ui/card";

type ItemAnimeProps = {
  item: AnimeDataJikan;
};

export default function ItemAnime({ item }: ItemAnimeProps) {
  const { images, title, synopsis } = item;
  return (
    <li className="bg-slate-100 h-max rounded-xl overflow-hidden shadow-md">
      <Link href={`/anime/${item.mal_id}/${item.title}`}>
        <Card>
          <div className="w-full overflow-hidden">
            <Image
              src={images.webp.large_image_url || images.jpg.large_image_url}
              width={192}
              height={100}
              alt="testing image"
              className="w-full h-60 object-cover"
              priority
            />
          </div>
          <CardContent className="my-2">
            <h1 className="line-clamp-1 leading-5 text-md font-semibold mb-1.5">{title}</h1>
            <p className="line-clamp-3 text-sm ">{synopsis}</p>
          </CardContent>
        </Card>

        {/* <div className="mb-3 h-[238px]">
          <Image
            src={images.webp.large_image_url}
            width={192}
            height={100}
            alt="testing image"
            className="w-full h-60 object-cover"
            priority
          />
        </div>
        <div className="p-1">
          <h1 className="line-clamp-1 leading-5 text-md font-semibold mb-1.5">{title}</h1>
          <p className="line-clamp-3 text-sm ">{synopsis}</p>
        </div> */}
        {/* <div className="p-1 mb-3">
          <Button size={"sm"} variant={"default"}>
            <Link href="#">show detail</Link>
          </Button>
        </div> */}
      </Link>
    </li>
  );
}
