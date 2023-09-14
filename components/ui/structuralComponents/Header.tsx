"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../input";
import { BsMenuButton, BsSearch } from "react-icons/bs";
import { TbMenu } from "react-icons/tb";
import { usePathname, useRouter } from "next/navigation";
type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return;
  }
  return (
    <header className=" py-5 fixed z-[300] w-screen text-white font-semibold px-4 xl:px-0 h-33 bg-black/40 ">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex gap-x-3 items-center w-3/12">
          <Image src="/tvlogo.png" alt="movie logo" height={50} width={50} />
          <h2 className="capitalize hidden md:inline-block">movieBox</h2>
        </div>
        <div className="relative flex-1">
          <Input
            className="w-full bg-transparent text-white font-medium placeholder:text-white placeholder:font-medium max-md:placeholder:text-[10px]"
            placeholder="what do you want to watch?"
          />
          <BsSearch className="absolute top-3 right-3 font-semibold" />
        </div>
        <div className="flex gap-x-4 items-center justify-center w-3/12">
          <h1 className="hidden md:inline-block">Sign in</h1>
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-pink-700">
            <TbMenu className="text-white text-xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
