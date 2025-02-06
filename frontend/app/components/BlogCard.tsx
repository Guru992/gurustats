"use client"
import Link from "next/link";
import React from "react";
import { Blog } from "../types/blog";
import { STRAPI_URL } from "../constants";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
interface Props {
  data: Blog;
}
const BlogCard = ({ data }: Props) => {
  return (
    <Link
      href={`/blog/${data.id}`}
      className="da relative flex flex-col  w-[90%] sm:w-[49%] md:w-[32%]  overflow-hidden bg-gray-50 rounded-xl  justify-center cursor-pointer hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-center dark:bg-black"></div>
      <div className="group relative m-0 flex h-72  rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto w-[100%]">

        <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
          <img
            src={

              data?.attributes?.Image?.data?.attributes?.url ||
              "https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80"
            }
            className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
            alt={"blog-image"}
          />
        </div>
        <div className="absolute w-full top-6 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-10 space-y-4">
          {data.attributes.Categories?.data[0]?.attributes?.Title && <span className="bg-slate-800 text-sm py-2 font-bold uppercase -tracking-tighter px-6 rounded-md   shadow-sm z-50 text-white">
            {data.attributes.Categories?.data[0]?.attributes?.Title}
          </span>}
          <h1 className="font-serif !text-xl  font-bold text-white shadow-xl">
            {data.attributes.Title}
          </h1>
          <div className="font-serif blogHeading  font-bold !text-white shadow-xl">
            <ReactMarkdown rehypePlugins={[rehypeRaw]} >
              {data?.attributes.Description?.length > 100 ? data.attributes.Description.slice(0, 100) + "[...]" : data.attributes.Description}
            </ReactMarkdown>
          </div>
          {/* {data.attributes.Categories?.data[0]?.attributes?.Title && (
            <h1 className="text-sm font-semibold  truncate text-black shadow-xl bg-slate-200 rounded-lg w-min px-2 py-1">
              {data.attributes.Categories.data[0]?.attributes?.Title}
            </h1>
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;