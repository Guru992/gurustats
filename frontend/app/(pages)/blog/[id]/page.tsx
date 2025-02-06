import type { Metadata, ResolvingMetadata } from "next";
import BlogsWrapper from "@/app/components/BlogsWrapper";
import { STRAPI_URL } from "@/app/constants";
import { NestedContainerType } from "@/app/types/blog";
// import Image from "next/image";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const blog = await getBlogData(+id);
  const content: string = blog.data?.attributes?.Description;
  const data = blog?.data;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "Blog - " + data?.attributes?.Title,
    description: content,
    openGraph: {
      images: [
        data?.attributes?.Image?.data?.attributes?.url,
        ...previousImages
      ]
    }
  };
}

const getBlogData = async (id: number) => {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs/${id}?populate=Image&populate=Categories&populate[0]=NestedContainer&populate[1]=NestedContainer.img`,
      {
        cache: "no-store"
      }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
};

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlogData(+params.id);
  const content: string = blog.data?.attributes?.Description;
  const data = blog?.data;
  return (
    <div className="bg-darkBlue min-h-[90vh] justify-center  flex flex-col items-center px-5 sm:px-10 lg:px-20 py-5">
      <div className=" md:w-[90%] lg:w-[70%]  xl:w-[65%]  mx-auto py-2 ">
        <img
          src={data?.attributes?.Image?.data?.attributes?.url}
          alt="blog-image"
          width={500}
          height={100}
          // objectFit="cover"
          className="w-full h-[25%] object-contain"
        />
        <div className="mt-8 text-white text-left  flex-col justify-start  w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wider text-left my-3">
            {data?.attributes?.Title}
          </h1>

          <ReactMarkdown className="line-break" children={content.replace(/\n/gi, "&nbsp; \n")} />

          {data?.attributes?.NestedContainer?.map(
            (item: NestedContainerType) => {
              return (
                <>
                  <img
                    src={
                      STRAPI_URL ||
                      "https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
                    }
                    alt="blog-image"
                    width={1000}
                    height={100}
                    className="h-96  bg-cover w-3/4 object-cover my-2 flex justify-start"
                  />
                  <ReactMarkdown>{item.text}</ReactMarkdown>
                </>
              );
            }
          )}
        </div>
      </div>
      <BlogsWrapper
        excludeId={params.id}
        categoryName={
          data?.attributes?.Categories?.data?.length
            ? data?.attributes?.Categories?.data[0]?.attributes?.Title
            : ""
        }
      />
    </div>
  );
}
