import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

const MovieDetailsk = (props: Props) => {
  return (
    <div className="h-screen px-4 py-4 md:px-10 md:py-10">
      <div className="w-full ">
        <div className=" px-4  md:px-0 py-6 h-[300px] md:h-[450px] w-full relative overflow-hidden rounded-[20px] border-2 border-gray-200 bg-gray-100">
          <Skeleton className="object-cover h-full w-full" />
        </div>
        <div className="w-full  mt-5">
          <div className="md:w-[60%] flex flex-col">
            <div className="flex  w-full gap-x-4 items-center">
              <div className="flex flex-col md:flex-row capitalize text-2xl text-[#404040] gap-x-2 items-center ">
                <div className="flex gap-x-2">
                  <Skeleton
                    data-testid="movie-title"
                    className="h-10 w-20"
                  ></Skeleton>
                  <Skeleton
                    data-testid="movie-release-date"
                    className="h-10 w-20"
                  ></Skeleton>
                  <Skeleton className="h-10 w-20"></Skeleton>
                  <Skeleton
                    data-testid="movie-runtime"
                    className="text-base font-bold text-gray-400"
                  ></Skeleton>
                </div>
              </div>
              <div className="flex gap-x-3">
                <Skeleton className="h-10 w-14"></Skeleton>
                <Skeleton className="h-10 w-14"></Skeleton>
              </div>
            </div>
            <p
              className="mt-4 gap-y-3 flex flex-col"
              data-testid="movie-overview"
            >
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full"></Skeleton>
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
            </p>

            <ul className="mt-6 flex flex-col gap-y-2 text-[#404040]">
              <li>
                <Skeleton className="h-5 w-full" />
              </li>
              <li>
                <Skeleton className="h-5 w-full" />
              </li>
              <li>
                stars:
                <Skeleton className="h-5 w-full" />
              </li>
            </ul>
            <div className="w-full">
              <div className="flex">
                <Skeleton className="h-14 w-[70%] "></Skeleton>
              </div>
            </div>
          </div>
          <Skeleton className="flex-1 h-full "></Skeleton>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsk;
