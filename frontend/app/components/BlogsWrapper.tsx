import React from "react";
import { Blog, BlogResponse } from "../types/blog";
import BlogCard from "./BlogCard";
import { STRAPI_URL } from "../constants";
import Pagination from "./Pagination";
export const dynamic = "force-dynamic";
export const revalidate = 0;
async function fetchBlogs(currentPage: number, pageSize: number) {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}`,
      {
        cache: "no-store",
      }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
async function fetchBlogsByCategory(categoryName: string, excludeId: number) {
  if (!categoryName || !excludeId)
    return console.log("no category name or exclude id provided");
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs?filters[Categories][Title][$eq]=${categoryName}&filters[id][$ne]=${excludeId}&populate=*`,
      {
        cache: "no-store",
      }
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}
const BlogsWrapper = async ({
  currentPage = 1,
  pageSize = 3,
  showPagination = false,
  categoryName = "",
  excludeId = null,
}: any) => {
  let blogs: BlogResponse | null = null;

  if (categoryName !== "" && !!excludeId) {
    blogs = await fetchBlogsByCategory(categoryName, excludeId);
  } else {
    blogs = await fetchBlogs(currentPage, pageSize);
  }

  return (
    <div className="mt-8 justify-center sm:justify-start w-full gap-3 flex flex-wrap ">
      {blogs?.data?.map((blog: Blog) => (
        <BlogCard data={blog} key={blog?.id} />
      ))}
      {blogs && showPagination && (
        <div className="mt-8 flex justify-center items-center w-full" >
          <Pagination
            totalItems={blogs?.meta?.pagination?.total}
            currentPage={+currentPage}
            itemsPerPage={pageSize}

          />
        </div>
      )}
    </div>
  );
};

export default BlogsWrapper;