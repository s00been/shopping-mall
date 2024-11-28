import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page, event) => {
    event.preventDefault(); // Prevent default behavior (e.g., form submission)
    if (page < 1 || page > totalPages) return; // Page range check
    onPageChange(page);
  };

  // Display range calculation
  const startItem = (currentPage - 1) * 3 + 1;
  const endItem = Math.min(currentPage * 3, totalPages * 3);
  const totalItems = totalPages * 3; // Assuming the total is based on ITEMS_PER_PAGE

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      {/* Mobile View (Previous & Next Buttons) */}
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={(e) => handlePageChange(currentPage - 1, e)}
          type="button" // Prevent form submission
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={(e) => handlePageChange(currentPage + 1, e)}
          type="button" // Prevent form submission
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Desktop View (Page Numbers with Previous & Next Icons) */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to{" "}
            <span className="font-medium">{endItem}</span> of{" "}
            <span className="font-medium">{totalItems}</span> results
          </p>
        </div>

        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            {/* Previous Button */}
            <button
              onClick={(e) => handlePageChange(currentPage - 1, e)}
              type="button" // Prevent form submission
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
            </button>

            {/* Page Buttons */}
            {[...Array(totalPages)].map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={(e) => handlePageChange(page, e)}
                  type="button" // Prevent form submission
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                    currentPage === page
                      ? "bg-indigo-600 text-white"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={(e) => handlePageChange(currentPage + 1, e)}
              type="button" // Prevent form submission
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
