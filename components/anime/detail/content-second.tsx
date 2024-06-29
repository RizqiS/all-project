import { AnimeDataJikan } from "@/types/jikan/anime.type";
import Image from "next/image";
import React from "react";

type ContentSecondProps = {
  anime: AnimeDataJikan[];
};

export default function ContentSecond({ anime }: ContentSecondProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
      {anime?.map((item, no) => (
        <>
          <div key={item.mal_id} className="flex items-center gap-4">
            <h1 className="text-xl flex flex-col items-center justify-center bg-slate-800 text-slate-300 border rounded-full w-10 h-10">
              {no + 1}
            </h1>
            <div className="grid grid-cols-2 gap-x-4 items-center w-full  overflow-hidden">
              <div>
                <Image
                  src={item.images.webp.image_url}
                  width={50}
                  height={50}
                  alt="test"
                  priority
                  className="w-full h-full rounded-lg border object-cover"
                />
              </div>
              <div className="flex flex-col flex-wrap">
                <h2 className="text-base font-semibold mb-2 line-clamp-2">{item.title}</h2>
                <h3 className="text-sm">{item.rating}</h3>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
