import React from "react";
import image from "../../public/moviedetailimage.png";
import Image from "next/image";
import { shimmer, toBase64 } from "@/lib/image";
import { Button } from "@/components/ui/button";

type Props = {};

const MovieDetails = (props: Props) => {
  return (
    <div className="h-screen md:px-10 md:py-10">
      <div className="w-full ">
        <div className="  h-[420px] w-full relative overflow-hidden rounded-[20px] border-2 border-gray-200 bg-gray-100">
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64, ${toBase64(
              shimmer(420, 1100)
            )}`}
            priority
            src={image}
            alt="BOAT IMAGE"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover "
          />
        </div>
        <div className="w-full  mt-5">
          <div className="w-[60%] flex flex-col">
            <div className="flex w-full gap-x-4 ">
              <div className="flex capitalize text-2xl text-[#404040] gap-x-2">
                <p>top gun : mevrick . PG:13</p>
                <p> 2h 10m</p>
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
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              odio libero quis aspernatur provident vel magni illo esse, quo
              repellendus quasi tempore quidem placeat soluta illum voluptatum
              dignissimos aliquam enim!
            </p>

            <ul className="mt-6 flex flex-col gap-y-6 text-[#404040]">
              <li>
                Directors:{" "}
                <span className=" capitalize text-pink-500">
                  temitope , micheal , david
                </span>{" "}
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
