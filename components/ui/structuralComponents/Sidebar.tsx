import Link from "next/link";
import React, { ReactNode } from "react";
import { BiCameraMovie, BiHomeAlt2, BiLogOut, BiMovie } from "react-icons/bi";
import Image from "next/image";
import tvlogo from "../../../public/tvlogo.png";
import { Button } from "../button";
import { TbMovie } from "react-icons/tb";
import { shimmer, toBase64 } from "@/lib/image";

type props = {
  children: ReactNode;
};
const Sidebar = ({ children }: props) => {
  return (
    <div className="flex">
      <div className="fixed border-r-2 rounded-tr-[4rem] border-gray-200 w-20 lg:w-[18rem] h-screen transition-all duration-75 ease-in-out p-4 flex flex-col items-center justify-between">
        {/* logo div */}
        <div className="h-[20%] py-3 lg:py-10 flex gap-x-6 justify-center items-center">
          <div className=" h-12 w-12 relative overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64, ${toBase64(
                shimmer(12, 12)
              )}`}
              src={tvlogo}
              alt="BOAT IMAGE"
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover "
            />
          </div>

          <p className="capitalize hidden lg:inline-block text-2xl">
            movie Box
          </p>
        </div>

        {/* linksdiv */}
        <div className="flex w-[60%] h-[30%] flex-col items-start justify-around gap-y-14">
          <Link href="/">
            <div className="flex gap-x-4 items-center justify-start capitalize ">
              <BiHomeAlt2 className="text-gray-400 text-3xl lg:text-base" />
              <span className="lg:inline-block hidden capitalize text-gray-500">
                home
              </span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-x-4 items-center justify-start capitalize ">
              <BiCameraMovie className="text-gray-400 text-3xl lg:text-base" />
              <span className="lg:inline-block hidden capitalize text-gray-500">
                movies
              </span>
            </div>
          </Link>
          <Link href="/Adminpage/AdminDashboard/Blog">
            <div className="flex gap-x-4 items-center justify-start capitalize">
              <TbMovie className="text-gray-400 text-3xl lg:text-base " />
              <span className="lg:inline-block hidden capitalize text-gray-500">
                tv series
              </span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex gap-x-4 items-center justify-start capitalize ">
              <BiMovie className="text-gray-400 text-3xl lg:text-base" />
              <span className="lg:inline-block hidden capitalize text-gray-500">
                upcoming
              </span>
            </div>
          </Link>
        </div>

        {/* button and another stuff */}
        <div className="flex w-[80%] h-[40%] flex-col justify-around items-center">
          <div className="hidden lg:inline-block w-[80%] h-[70%] border-2 border-pink-300 bg-pink-100/70 rounded-[2rem]">
            <div className="px-5 flex flex-col items-center justify-center gap-y-4 h-full">
              <p className="text-[15px] font-bold text-gray-600">
                Play Movie quizes and win free tickets
              </p>
              <p className="text-[12px] font-bold text-gray-400">
                50k prople playing now
              </p>
              <Button className="px-2 text-[12px] rounded-[4rem] bg-pink-300 text-pink-700">
                start playing
              </Button>
            </div>
          </div>
          <div className="capitalize flex gap-x-2 items-center justify-center">
            <BiLogOut className="text-gray-400 text-2xl lg:text-base" />
            <span className="lg:inline-block hidden capitalize">Log out</span>
          </div>
        </div>
      </div>
      <main className="ml-20 lg:ml-[18rem] w-full transition-all duration-75 ease-in-out">
        {children}
      </main>
      ;
    </div>
  );
};

export default Sidebar;
