import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";

type Props = {};

const Movieslist = (props: Props) => {
  return (
    <section className="max-w-7xl mx-auto py-10 w-full px-10 xl:px-0">
      <div className="w-full flex items-center justify-between">
        <h3 className="font-bold text-2xl capitalize">Featured movies</h3>
        <h1 className="font-semibold text-sm text-pink-700 flex items-center">
          see more <IoIosArrowForward className="text-pink-700 text-xl" />
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-x-16 gap-y-24">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  );
};

export default Movieslist;
