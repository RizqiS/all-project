type Images = {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Images;
};

type Titles = {
  type: string;
  title: string;
};

type Aired = {
  from: string;
  to: string;
  prop: {
    from: {
      day: number;
      month: number;
      year: string;
    };
    to: {
      day: number;
      month: number;
      year: string;
    };
  };
  string: string;
};

type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

type Producers = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Licensors = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Studios = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Genres = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

type Themes = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type AnimeDataJikan = {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Producers[];
  licensors: Licensors[];
  studios: Studios[];
  genres: Genres[];
  themes: Themes[];
};
