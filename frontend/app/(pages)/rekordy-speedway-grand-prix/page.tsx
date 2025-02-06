import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { STRAPI_URL } from "@/app/constants";
import ClientComponent from "./ClientSideComponent";
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
    title: "Gurustats - Rekordy-Speedway-Grand-Prix"
  };
}

async function fetchData() {
  try {
    const res = await fetch(`${STRAPI_URL}/api/rekordy-speedway-grand-prixes`, {
      cache: "no-store"
    });
    const response = await res.json();

    return response;
  } catch (err) {
    console.error(err);
  }
}
const page = async () => {
  const response = await fetchData();

  return (
    <div className="bg-darkBlue min-h-[90vh] flex flex-col  px-5 sm:px-10 lg:px-20 py-5 text-white">
      <div className="rekordy-wrapper space-y-6">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {response?.data?.length &&
            response?.data[0]?.attributes.CoverImageWithText}
        </ReactMarkdown>
      </div>

      <ClientComponent
        htmlContent={response?.data[0]?.attributes.TablesWithHeading}
      />
    </div>
  );
};

export default page;
