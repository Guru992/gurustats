import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full  text-white gap-1 h-[148px] bg-black flex items-center justify-center px-2 sm:px-4  md:px-8">
      <div className="w-40  h-28 sm:w-44 flex justify-center items-center ">
        <a
          href="https://buycoffee.to/gurustats"
          className="flex justify-center items-center"
          target="_blank"
        >
          <img
            className="size-full mr-2 my-1"
            src="https://buycoffee.to/btn/buycoffeeto-btn-primary.svg"
            alt="Postaw mi kawę na buycoffee.to"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
