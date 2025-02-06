"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import usePagination from "../hooks/usePagination";
import { useRouter } from "next/navigation";

export type PaginationProps = {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
};

export const dotts = "...";

const Pagination = ({
  totalItems,
  currentPage,
  itemsPerPage,
}: 
PaginationProps) => {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const updatePageParam = (newPage: any) => {
    const currentParams = new URLSearchParams(window.location.search);

    if (newPage === null || newPage === undefined) {
      currentParams.delete("page");
    } else {
      currentParams.set("page", newPage?.toString());
    }
    router.replace(`${window.location.pathname}?${currentParams.toString()}`, {
      scroll: false,
    });
  };
  const pages = usePagination(totalItems, currentPage, itemsPerPage);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    mounted && (
      <div className="flex items-center justify-center my-8 text-white bg-darkGray shadow-2xl px-2 py-2 space-x-2 rounded-md">
        {pages.map((pageNumber, i) =>
          pageNumber == dotts ? (
            <span
              key={i}
              className="px-2 rounded-full text-base font-semibold text-white"
            >
              {pageNumber}
            </span>
          ) : (
            <button
              key={i}
              onClick={() => updatePageParam(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "text-white bg-darkBlue"
                  : "text-white"
              } px-2 mx-1 rounded text-base font-semibold no-underline`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    )
  );
};

export default Pagination;