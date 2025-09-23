"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Pagination = ({ lastPage, handlePageClick, position }) => {
  const justifyClass =
    position === "left"
      ? "justify-start"
      : position === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div className={`flex ${justifyClass} items-center`}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={lastPage}
        previousLabel={<FaChevronLeft />}
        containerClassName="flex items-center space-x-2"
        pageClassName="h-8 w-8 flex items-center justify-center rounded-md border text-gray-600 hover:bg-gray-100"
        activeClassName="bg-orange-500 text-white border-orange-500"
        previousClassName="h-8 w-8 flex items-center justify-center rounded-md border text-gray-600 hover:bg-gray-100"
        nextClassName="h-8 w-8 flex items-center justify-center rounded-md border text-gray-600 hover:bg-gray-100"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
