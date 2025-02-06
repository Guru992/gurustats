"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "../constants";

const navItems = [
  { title: "STRONA GŁÓWNA", href: "/" },
  { title: "O GURUSTATS", href: "/o-gurustats" },
  { title: "REKORDY GRAND PRIX", href: "/rekordy-speedway-grand-prix" },
  { title: "#TROJKANAKOLEJKE", href: "/trojkanakolejke" },
  { title: "KONTAKT", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const router = usePathname();
  return (
    <nav className="bg-darkBlue border-b-darkGray border-b-2   min-h-20 lg:items-center md:justify-between items-center flex-col text-lightGray lg:flex-row px-2 sm:px-8">
      <div className="w-full flex justify-between items-center align-middle self-center">
        <Link href="/" className="flex items-center">
          <Image src={ICONS.Logo} alt="guru-stats" objectFit="contain" height={150} width={170} />
        </Link>
        <div className="hidden lg:block">
          <ul className="flex space-x-0 sm:space-x-4 text-sm">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="no-underline">
                <p
                  className={` hover:text-lightBlue cursor-pointer nav-item font-semibold ${router == item.href ? "text-lightBlue" : "text-lightGray"
                    }`}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </ul>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-lightGray transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            {isOpen ? <FaTimes size={32} /> : <TiThMenuOutline size={32} />}
          </button>
        </div>
      </div>
      {/* Responsive Navbar */}
      <div
        className={`lg:hidden lg:mt-0 lg:py:0 w-full transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 max-h-96 py-4" : "opacity-0 max-h-0 overflow-hidden"
          }`}
      >
        <ul className="flex flex-col space-y-8 text-sm">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="no-underline"
              onClick={() => setIsOpen(false)}
            >
              <p
                className={`no-underline  hover:text-lightBlue cursor-pointer font-semibold ${router === item.href ? "text-lightBlue" : "text-lightGray"
                  }`}
              >
                {item.title}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
