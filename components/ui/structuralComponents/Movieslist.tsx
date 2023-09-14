import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";
import { getmovies } from "@/lib/Queries";

const apikey = process.env.NEXT_PUBLIC_API_KEY;
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
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

type Props = {};

const Movieslist = async (props: Props) => {
  const moviequery = `tv/top_rated?api_key=`;
  const movies = await getmovies(moviequery);
  const genrequery = "genre/movie/list?api_key=";
  const gens = await getmovies(genrequery);
  const genres = gens?.genres;

  return (
    <section className="max-w-7xl mx-auto py-10 w-full px-10 xl:px-0">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-bold text-2xl capitalize">Featured movies</h3>
        <h1 className="font-semibold text-sm text-pink-700 flex items-center">
          see more <IoIosArrowForward className="text-pink-700 text-xl" />
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-x-16 gap-y-24">
        {movies.results.slice(0, 10).map((movie: movies, i: number) => (
          <MovieCard key={i} movies={movie} genres={genres} />
        ))}
      </div>
    </section>
  );
};

export default Movieslist;
