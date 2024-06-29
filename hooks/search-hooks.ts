import { getJikanAnime, urlJikan } from "@/lib/fetch";
import { AnimeDataJikan } from "@/types/jikan/anime.type";
import { useEffect, useState } from "react";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState<AnimeDataJikan[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getDataSearch = async () => {
      setLoading(true);
      if (query.trim() !== "") {
        const { data } = await getJikanAnime(`${urlJikan}/anime`, `q=${query}`);
        setAnime(data);
      } else {
        setAnime([]);
      }
      setLoading(false);
    };

    const timer = setTimeout(() => {
      getDataSearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return { query, loading, anime, setQuery };
}
