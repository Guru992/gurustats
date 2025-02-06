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
    title: "Gurustats - KONTAKT"
  };
}

const page = () => {
  return (
    <div className="bg-darkBlue min-h-[90vh] flex flex-col  px-5 sm:px-10 lg:px-20 py-5 text-white space-y-10">
      <h1 className="sm:text-4xl text-2xl text-white text-left mt-10">
        KONTAKT
      </h1>

      <p className="text-xl text-lightGray">
        Masz pytania dotyczące strony? Zauważyłeś błąd? Jesteś zainteresowany
        współpracą? Chciałbyś wykorzystać nasze statystyki? Zapraszamy do
        kontaktu!
      </p>
      <div className="flex gap-3">
        <Link href="mailto:rafalgurgurewicz@gmail.com">
          rafalgurgurewicz@gmail.com
        </Link>
        <p className="text-xl text-lightGray">
          – statystyki PGE Ekstraligi, SGP, SEC i Elitserien
        </p>
      </div>
      <div className="flex gap-3">
        <Link href="mailto:krzysztofgurgurewicz@gmail.com">
          krzysztofgurgurewicz@gmail.com
        </Link>
        <p className="text-xl text-lightGray">
          – statystyki eWinner 1.LŻ i 2.LŻ
        </p>
      </div>
    </div>
  );
};

export default page;
