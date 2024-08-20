import { useState } from "react";

type UsePaginationProps<T> = {
  data: T[];
  pageSize: number;
};

export function usePagination<T>({ data, pageSize }: UsePaginationProps<T>) {
  const [page, setPage] = useState(1);

  function next() {
    setPage((p) => p + 1);
  }

  function previous() {
    setPage((p) => p - 1);
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const currentData = data.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil(data.length / pageSize);

  return {
    currentData: currentData,
    currentPageNumber: page,
    numberOfPages,
    next,
    previous,
    hasNext: page < numberOfPages,
    hasPrevious: page > 1,
  };
}
