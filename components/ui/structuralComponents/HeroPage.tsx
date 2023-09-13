import Image from "next/image";
import React from "react";
import image from "/public/heroposter.png";
import { Button } from "../button";
import { AiFillPlayCircle } from "react-icons/ai";
// import { getmovies } from "@/lib/Queries";
type Props = {};

const HeroPage = async (props: Props) => {
  // const heromovie = await getmovies("movie/top_rated");

  // console.log(heromovie);

  return (
    <section className="h-screen bg-no-repeat bg-cover  flex items-center justify-center relative  text-white px-10 xl:px-0">
      <Image
        src={image}
        alt="hero poster"
        fill
        priority
        className="absolute h-full w-full bg-no-repeat object-cover"
      />
      <div className="bg-black/20 absolute top-0 left-0 h-full w-full z-5"></div>
      <div className="max-w-7xl mx-auto  relative z-20">
        <div className="flex w-full md:justify-start ">
          <div className="md:w-4/12">
            <h3 className="font-bold text-4xl md:text-5xl leading-[50px] md:leading-[60px]">
              John Wick 3 : Parabellum
            </h3>

            <div className="flex justify-between  items-center my-6  text-[12px]">
              <div className="flex gap-x-3 md:w-2/5">
                <Image
                  src="/imdb.png"
                  alt="rating image"
                  height={200}
                  width={200}
                  className="h-5 w-10"
                />
                <div className="text-xs">860/100</div>
              </div>

              <div className="flex gap-x-1 max-sm:w-2/5 md:w-full">
                <div className="">🍊</div>
                <h2>94%</h2>
              </div>
            </div>

            <p>
              John Wick is on the run after killing a member of the
              international assassins&apos; guild, and with a $14 million price
              tag on his head, he is the target of hit men and women everywhere.
            </p>

            <Button className="mt-6 flex gap-x-2 uppercase text-white font-semibold bg-pink-700">
              <AiFillPlayCircle /> watch trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
