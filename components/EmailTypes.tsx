import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  types: string;
  currentPage: number;
  pageSize: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};

export default function EmailTypes({
  types,
  currentPage,
  pageSize,
  handleNextPage,
  handlePrevPage,
}: Props) {
  return (
    <div className="text-sm text-red-500 flex flex-col md:flex-row justify-between md:items-center">
      <span className="font-medium">{types}</span>
      <div className="flex items-center">
        <button className="text-xs">
          Page: {currentPage}
          <span>/{pageSize}</span>
        </button>
        <div className="pl-4 ">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevPage}
            className={` text-black shadow-sm  duration-200 ease-linear px-1 rounded-l-[4px] border border-gray-100 ${
              currentPage >= 2 && "bg-red-500 text-white"
            } `}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            disabled={pageSize <= currentPage}
            onClick={handleNextPage}
            className={` text-black shadow-sm  duration-200 ease-linear px-1 rounded-l-[4px] border border-gray-100 ${
              pageSize > currentPage && "bg-red-500 text-white"
            } `}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
