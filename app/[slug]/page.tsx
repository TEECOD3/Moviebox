import React from "react";
import image from "../../public/moviedetailimage.png";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";
import { Button } from "@/components/ui/button";
import { getmoviedetails, getvideos } from "@/lib/Queries";
import { formatDateToUTC } from "@/lib/utils";

type Props = {
  params: { slug: string };
  searchParams: { name: string; image: string };
};

const MovieDetails = async (props: Props) => {
  const { params, searchParams } = props;
  const query = `movie/${params.slug}?api_key=`;
  const videoquery = `movie/${params.slug}/videos?api_key=`;
  const video = await getvideos(videoquery);

  const moviedetails = await getmoviedetails(query);
  const posterUrl = searchParams.image
    ? `https://image.tmdb.org/t/p/w1280${searchParams.image}`
    : image; // Replace 'default-image.jpg' with your default image path

  const { overview, release_date } = moviedetails;
  const formatteddate = formatDateToUTC(release_date);
  return (
    <div className="h-screen px-4 py-4 md:px-10 md:py-10">
      <div className="w-full ">
        <div className=" px-4  md:px-0 py-6 h-[300px] md:h-[420px] w-full relative overflow-hidden rounded-[20px] border-2 border-gray-200 bg-pink-200">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(450, 1100)
            )}`}
            priority
            src={posterUrl}
            alt="moviedetails image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="w-full  mt-5">
          <div className="md:w-[60%] flex flex-col">
            <div className="flex  w-full gap-x-4 items-center">
              <div className="flex flex-col md:flex-row capitalize text-2xl text-[#404040] gap-x-2 items-center ">
                <div className="flex gap-x-2">
                  <p
                    data-testid="movie-title"
                    className="text-sm font-bold text-gray-400"
                  >
                    {searchParams.name}
                  </p>
                  <p
                    data-testid="movie-release-date"
                    className="text-sm font-bold text-gray-400"
                  >
                    {formatteddate}
                  </p>
                  <p className="text-base font-bold text-gray-400"> PG:13</p>
                  <p
                    data-testid="movie-runtime"
                    className="text-base font-bold text-gray-400"
                  >
                    2h 10m
                  </p>
                </div>
              </div>
              <div className="flex gap-x-3">
                <Button
                  variant="ghost"
                  className=" px-3 py-0 rounded-[15px] w-[84px] flex-shrink-0 border-gray-300 border-2 "
                >
                  action
                </Button>
                <Button
                  variant="ghost"
                  className=" px-3 py-0 rounded-[15px] w-[84px] flex-shrink-0 border-gray-300 border-2 "
                >
                  drama
                </Button>
              </div>
            </div>
            <p className="mt-4" data-testid="movie-overview">
              {overview}
            </p>

            <ul className="mt-6 flex flex-col gap-y-2 text-[#404040]">
              <li>
                Directors:
                <span className=" capitalize text-pink-500">
                  temitope , micheal , david
                </span>
              </li>
              <li>
                writers :
                <span className="text-pink-500 capitalize">
                  temitope , micheal , david
                </span>
              </li>
              <li>
                stars:
                <span className="text-pink-500 capitalize">
                  temitope , micheal , david
                </span>
              </li>
            </ul>
            <div className="w-full">
              <div className="flex">
                <Button className="bg-pink-700 text-white w-[70%] mt-4">
                  top rated movie #65
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
