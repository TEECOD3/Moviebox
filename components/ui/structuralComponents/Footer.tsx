import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="max-w-7xl mx-auto py-16">
      <div className="w-full flex items-center justify-center flex-col gap-y-10">
        <ul className="flex gap-x-10 text-2xl">
          <li>
            <AiFillFacebook />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <BsYoutube />
          </li>
        </ul>
        <ul className="flex gap-x-10  text-sm font-bold capitalize">
          <li>condition of use</li>
          <li>privacy & policy</li>
          <li>press room</li>
        </ul>

        <p className="font-bold text-sm text-gray-500">
          © 2021 MovieBox by Adriana Eka Prayudha{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
