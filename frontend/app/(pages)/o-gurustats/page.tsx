import BlogsWrapper from "@/app/components/BlogsWrapper";
import { ICONS, IMAGES } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  return {
    title: "Gurustats - O-Gurustats"
  };
}

const AboutPage = () => {
  return (
    <div className="bg-darkBlue min-h-[90vh] flex flex-col  px-5 sm:px-10 lg:px-20 py-5 text-white">
      <h1 className="text-4xl md:text-6xl uppercase text-white text-left">
        o-gurustats
      </h1>
      <div className="mt-5 flex flex-col sm:flex-row justify-around items-center">
        <Image
          src={IMAGES.ABOUT_PROFILE_1}
          alt="about-profile-image-1"
          height={400}
          width={400}
        />
        <Image
          src={IMAGES.ABOUT_PROFILE_2}
          alt="about-profile-image-2"
          height={400}
          width={400}
        />
      </div>

      <div className="space-y-8  mt-20">
        <p className="text-xl text-lightGray ">
          Rafał i Krzysztof Gurgurewicz – dwójka braci zakochanych w żużlu. Po
          wielu latach spędzonych na stadionach żużlowych, postanowiliśmy zrobić
          z żużla coś więcej niż tylko pasję. Tak powstało GuruStats.pl.
        </p>
        <p className="text-xl text-lightGray">
          GuruStats.pl to miejsce, gdzie królują liczby. Sercem portalu jest
          aplikacja, zawierająca tabele z kilkoma tysiącami rekordów, ale nie
          brakuje tutaj również artykułów, statystycznych ciekawostek oraz
          zapowiedzi żużlowych spotkań.
        </p>
        <p className="text-xl text-lightGray">
          Statystyki Rafała znacie bardzo dobrze – od 2015 roku tworzone są
          również na potrzeby Platformy Canal+, która przeprowadza transmisje
          meczów z PGE Ekstraligii i eWinner 1. Ligi Żużlowej, a wcześniej także
          turniejów cyklu Grand Prix.
        </p>
        <p className="text-xl text-lightGray">
          W latach 2017-19 Krzysztof wspierał natomiast platformę Eleven Sports,
          początkowo transmitującą rozgrywki Nice 1. LŻ., do których w sezonie
          2018 dołączyła PGE Ekstraliga. Od 2022 roku popularny Hucik
          współpracuje z Eurosportem przy relacjach Grand Prix.
        </p>
      </div>

      <div className="mt-20 space-y-10">
        <h1 className="text-4xl md:text-6xl uppercase text-white text-left">
          Partnerzy 2023
        </h1>
        <div className="mt-5 flex flex-col items-center space-y-10">
          <div className="flex space-x-10">
            <Link target="_blank" href={"https://speedwayekstraliga.pl/"}>
              <Image
                src={ICONS.PGEELOGO}
                alt="about-profile-image-1"
                height={300}
                width={300}
              />
            </Link>
            <Link target="_blank" href="">
              <Image
                src={ICONS.CANALLOGO}
                alt="about-profile-image-1"
                height={300}
                width={300}
              />
            </Link>
          </div>
          <div className="flex space-x-10">
            <Link target="_blank" href="https://sportowefakty.wp.pl/zuzel">
              <Image
                src={ICONS.WPLOGO}
                alt="about-profile-image-1"
                height={300}
                width={300}
              />
            </Link>
            <Link target="_blank" href={"https://sportowefakty.wp.pl/zuzel"}>
              <Image
                src={ICONS.EUROSPORTLOGO}
                alt="about-profile-image-1"
                height={300}
                width={300}
              />
            </Link>

            <Link target="_blank" href={"http://www.gkm.grudziadz.net/"}>
              <Image
                src={ICONS.GKMLOGO}
                alt="about-profile-image-1"
                height={200}
                width={200}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-20 space-y-2 w-full">
        <div>
          <h1 className="text-4xl md:text-6xl uppercase text-white text-left">
            Współpraca
          </h1>
          <div className="w-44 sm:w-64 h-36 mt-4 flex justify-start items-center">
            <a href="https://buycoffee.to/gurustats" target="_blank">
              <img
                className="size-full"
                src="https://buycoffee.to/btn/buycoffeeto-btn-primary.svg"
                alt="Postaw mi kawę na buycoffee.to"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <p>
            Wszelkie zapytania oraz oferty współpracy prosimy kierować na adres
            <Link
              className="ml-2"
              target="_blank"
              href={"kontakt@gurustats.pl"}
            >
              {" "}
              kontakt@gurustats.pl
            </Link>
          </p>
        </div>
        <BlogsWrapper />
      </div>
    </div>
  );
};

export default AboutPage;
