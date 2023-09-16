import { shimmer, toBase64 } from "@/lib/image";
import { formatDateToUTC } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type movies = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: [];
  id: number;
  name: string;
  origin_country: [];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
type Props = {
  movies: movies;
  genres: {
    id: number;
    name: string;
  }[];
};

const MovieCard = (props: Props) => {
  const { movies, genres } = props;
  const {
    id,
    poster_path,
    backdrop_path,
    origin_country,
    first_air_date,
    name,
    vote_average,
    popularity,
    genre_ids,
  } = movies;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w1280${poster_path}`
    : ""; //

  const genreNames = genre_ids.map((genreId) => {
    const genre = genres.find((item) => item.id === genreId);
    return genre ? genre.name : "";
  });

  // Example usage:
  const inputDateString = first_air_date;
  const formattedDate = formatDateToUTC(inputDateString);

  return (
    <Link href={`Movies/${id}?name=${name}`}>
      <div data-testid="movie-card">
        <div className=" h-[420px] lg:h-[380px] w-full relative overflow-hidden rounded-[10px] border-2 border-gray-200 bg-pink-200">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(380, 250)
            )}`}
            priority
            data-testid="movie-poster"
            src={posterUrl}
            alt="imdbimage"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover "
          />
        </div>

        <div className="mt-3">
          <p
            data-testid="movie-release-date"
            className="text-[12px] font-bold text-gray-400"
          >
            {formattedDate}
          </p>
          <h2 data-testid="movie-title" className="font-bold text-[18px] mt-3 ">
            {name}
          </h2>
          <div className="flex w-full  my-2">
            <div className="w-3/4 flex justify-between items-center">
              <div className="flex gap-x-3 ">
                <Image
                  src="/imdb.png"
                  alt="rating image"
                  height={200}
                  width={200}
                  className="h-5 w-10"
                />
                <div className="text-base">{Math.floor(popularity)}k</div>
              </div>

              <div className="flex gap-x-1 text-[12px] ">
                <div className="">🍊</div>
                <h2 className="text-base">{vote_average * 10}%</h2>
              </div>
            </div>
          </div>

          {genreNames.map((genre, i) => (
            <span
              className="text-[12px] font-bold text-gray-400 inline-block"
              key={i}
            >
              {genre}
              {i !== genreNames.length - 1 && <span className="mx-1">•</span>}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
