import { ArrowLeftIcon } from "../../icons/arrow-left-icon";
import { ArrowRightIcon } from "../../icons/arrow-right-icon";
import { PAGE_SIZES } from "../../lib/utils";
import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";

interface PaginateProps {
  totalRecords: number;
  activePage: number;
  defaultPageSize?: number;
  onPageChange: (page: number) => void;
}

const getPageSizeOption = (recordsCount: number) => {
  let maxPageSize = Infinity;

  return Array.from(PAGE_SIZES)
    .sort((a, b) => a - b)
    .filter((size) => {
      if (size >= recordsCount && size < maxPageSize) maxPageSize = size;
      return size <= maxPageSize;
    })
    .map((size) => ({
      label: size,
      value: size,
    }));
};

export const Paginate: React.FC<PaginateProps> = ({
  totalRecords,
  activePage,
  defaultPageSize,
  onPageChange,
}) => {
  const [marginPages, setMarginPages] = useState(1);
  const [page, setPage] = useState(1);
  const pageSizeOption = useMemo(
    () => getPageSizeOption(totalRecords),
    [totalRecords],
  );

  const defaultSize = useMemo(() => {
    if (!defaultPageSize) return pageSizeOption[0];

    return {
      label: defaultPageSize,
      value: defaultPageSize,
    };
  }, [defaultPageSize, pageSizeOption]);

  const pagesCount = Math.ceil(totalRecords / defaultSize.value);

  useLayoutEffect(() => {
    if ([0, 1, pagesCount - 1, pagesCount - 2].includes(page)) {
      setMarginPages(3);
      return;
    }
    if ([2, pagesCount - 3].includes(page)) {
      setMarginPages(2);
      return;
    }
    setMarginPages(1);
  }, [page, pagesCount]);

  const handlePageChange = useCallback(
    ({ selected: page }: { selected: number }) => {
      setPage(page);
      onPageChange(page);
    },
    [onPageChange],
  );

  if (pageSizeOption.length < 2) return <></>;

  return (
    <div>
      {pagesCount !== 1 && (
        <ReactPaginate
          marginPagesDisplayed={marginPages}
          nextLabel={
            <div className="flex cursor-pointer items-center justify-end gap-2">
              Next
              <ArrowRightIcon />
            </div>
          }
          onPageChange={handlePageChange}
          onClick={handlePageChange}
          pageCount={pagesCount}
          previousLabel={
            <div className="flex items-center gap-2">
              <ArrowLeftIcon />
              Previous
            </div>
          }
          renderOnZeroPageCount={null}
          activeClassName="border bg-gray-200"
          activeLinkClassName=""
          breakClassName="font-bold"
          breakLinkClassName=""
          className="flex w-full items-center gap-1 text-sm text-gray-700"
          disabledLinkClassName=""
          nextClassName="flex-1 font-semibold pr-5"
          nextLinkClassName=""
          pageClassName="font-medium flex items-center justify-center max-h-9 max-w-9 w-9 h-9 cursor-pointer rounded-md hover:bg-gray-200"
          pageLinkClassName="w-full h-full flex items-center justify-center"
          previousClassName="flex-1 cursor-pointer font-semibold pl-5"
          previousLinkClassName=""
          forcePage={activePage}
        />
      )}
    </div>
  );
};
