import { shimmer, toBase64 } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const MovieCard = (props: Props) => {
  return (
    <Link href={`/${20}`}>
      <div data-testid="movie-card">
        <div className="  h-[380px] w-full relative overflow-hidden rounded-[20px] border-2 border-gray-200 bg-gray-100">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(380, 250)
            )}`}
            priority
            src="/card.png"
            alt="BOAT IMAGE"
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
            USA 2016 - current
          </p>
          <h2 data-testid="movie-title" className="font-bold text-[18px] mt-3 ">
            Stranger things
          </h2>
          <div className="flex justify-between items-center my-2">
            <div className="flex gap-x-3 md:w-2/5 ">
              <Image
                data-testid="movie-poster"
                src="/imdb.png"
                alt="rating image"
                height={200}
                width={200}
                className="h-5 w-10"
              />
              <div className="text-xs">860/100</div>
            </div>

            <div className="flex gap-x-1 text-[12px]">
              <div className="">🍊</div>
              <h2>94%</h2>
            </div>
          </div>

          <p className="text-[12px] font-bold text-gray-400">
            adventures , action , horror
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
