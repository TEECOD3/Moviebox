import Image from "next/image";
import React from "react";
import image from "/public/heroposter.png";
import { Button } from "../button";
import { AiFillPlayCircle } from "react-icons/ai";
import { getmovies } from "@/lib/Queries";
import { shimmer, toBase64 } from "@/lib/image";
type Props = {};

const HeroPage = async (props: Props) => {
  const searchQuery = "";
  const moviefilter = searchQuery
    ? ""
    : `movie/popular?api_key=`;
  const searchfilter = searchQuery
    ? `search/movie?query=${encodeURIComponent(searchQuery)}&api_key=`
    : "";
  const filter = `${moviefilter}${searchfilter}`;
  const topratedMovies = await getmovies(filter);
  const movies = topratedMovies.results;
  const randomIndex = Math.floor(Math.random() * movies.length);
  const heromovie = movies[randomIndex];

  const { backdrop_path, popularity, name, overview, vote_count } = heromovie;

  const popularitys = Math.floor(popularity);

  const posterUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w1280${backdrop_path}`
    : image; // Replace 'default-image.jpg' with your default image path

  return (
    <section className="h-screen bg-no-repeat bg-cover  flex shadow-lg items-center justify-center relative text-white px-10 xl:px-0">
      <Image
        src={posterUrl}
        alt="hero poster"
        fill
        priority
        className="absolute h-full w-full bg-no-repeat object-cover"
      />
      <div className="bg-black/60 absolute top-0 left-0 h-full w-full z-5"></div>
      <div className="max-w-7xl mx-auto  relative z-20">
        <div className="flex w-full md:justify-start ">
          <div className="md:w-4/12">
            <h3 className="font-bold text-4xl md:text-5xl leading-[50px] md:leading-[60px]">
              {name}
            </h3>

            <div className="flex  w-full  my-6  text-[12px]">
              <div className="w-[60%] flex justify-between items-center">
                <div className="flex gap-x-3">
                  <Image
                    src="/imdb.png"
                    alt="rating image"
                    height={200}
                    width={200}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                      shimmer(380, 250)
                    )}`}
                    className="h-5 w-10"
                  />
                  <div className="text-sm">{vote_count} votes</div>
                </div>

                <div className="flex">
                  <div className="">🍊</div>
                  <h2 className="text-sm">{popularitys}%</h2>
                </div>
              </div>
            </div>

            <p>{overview.length > 300 ? overview.slice(0, 300) : overview}</p>

            <Button className="mt-6 flex gap-x-2 uppercase text-white font-semibold bg-pink-700">
              <AiFillPlayCircle /> watch trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const revalidate = 60;
export default HeroPage;
