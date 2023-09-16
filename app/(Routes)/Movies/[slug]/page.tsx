import React from "react";
import image from "../../../../public/moviedetailimage.png";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";
import { Button } from "@/components/ui/button";
import { getmoviedetails, getmovies, getvideos } from "@/lib/Queries";
import { formatDateToUTC } from "@/lib/utils";
import { BsTicketFill } from "react-icons/bs";
import images from "../../../../public/listmovies.png";

type Props = {
  params: { slug: string };
  searchParams: { name: string; image: string };
};

const MovieDetails = async (props: Props) => {
  const { params, searchParams } = props;
  const query = `movie/${params.slug}?api_key=`;
  const moviedetails = await getmoviedetails(query);
  const videoquery = `movie/${params.slug}/videos?api_key=`;
  const video = await getvideos(videoquery);
  const videoKey = video.results[0]?.key;

  const posterUrl = videoKey ? `https://www.youtube.com/embed/${videoKey}` : "";
  const { overview, release_date, runtime, vote_average, vote_count, genres } =
    moviedetails;
  ``;
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  const formatteddate = formatDateToUTC(release_date);

  return (
    <div className="h-screen py-4 md:px-10 px-2 md:py-10 w-full ">
      <div className="w-full ">
        <div className=" md:px-0 py-6 h-[300px] md:h-[420px] w-full relative overflow-hidden">
          <div className="h-full w-full">
            {videoKey && (
              <iframe
                width="100%"
                height="420px"
                src={posterUrl}
                allowFullScreen
                title="YouTube Video"
                className="w-full h-full rounded-xl"
              ></iframe>
            )}

            {videoKey === undefined && (
              <div className="h-full w-full flex items-center justify-center">
                <p> this movie doesnt have a video</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-5 gap-x-5">
          <div className="md:w-[60%] flex flex-col">
            <div className="flex w-full gap-x-4 justify-between items-center">
              <div className="flex md:w-8/12 flex-col md:flex-row capitalize text-2xl text-[#404040] gap-x-2 md:items-center  md:justify-between">
                <div className="flex gap-x-2 flex-col md:flex-row">
                  <p
                    data-testid="movie-title"
                    className="text-sm font-bold text-gray-700"
                  >
                    {searchParams.name}
                  </p>
                  <p
                    data-testid="movie-release-date"
                    className="text-sm font-bold text-gray-700"
                  >
                    {formatteddate}
                  </p>
                  <p className="text-base font-bold text-gray-700"> PG:13</p>
                  <p
                    data-testid="movie-runtime"
                    className="text-base font-bold text-gray-700"
                  >
                    {hours}h {minutes}m
                  </p>
                </div>
              </div>
              <div className="flex-1 gap-x-3">
                {genres.map((gens: any, i: number) => (
                  <Button
                    key={i}
                    variant="ghost"
                    className=" px-2 py-0 rounded-[15px]  flex-shrink-0 border-gray-200 border-2 text-pink-700"
                  >
                    {gens.name}
                  </Button>
                ))}
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
          <div className="flex-1">
            <div className="w-full flex justify-end">
              <p>
                ⭐{vote_average} | {vote_count}votes
              </p>
            </div>

            <Button className="bg-pink-700 text-white w-[100%] flex gap-x-2 mt-4">
              <BsTicketFill /> see showtimes
            </Button>
            <Button className="bg-pink-700 text-white w-[100%] flex gap-x-2 mt-4">
              <BsTicketFill /> more watch options
            </Button>

            <div className=" h-[200px] lg:h-[300px] w-full relative overflow-hidden rounded-[10px] border-2 border-gray-200 bg-pink-200">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                  shimmer(380, 250)
                )}`}
                priority
                data-testid="movie-poster"
                src={images}
                alt="imdbimage"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
