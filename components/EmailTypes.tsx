import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  types: string;
  take: number;
  skip: number;
};

export default function EmailTypes({ types, take, skip }: Props) {
  return (
    <div className="text-sm text-red-500 flex flex-col md:flex-row justify-between md:items-center">
      <span className="font-medium">{types}</span>
      <div className="flex items-center">
        <p className="text-xs">
          Showing <span>{take}</span> - <span>{skip}</span> of <span>100</span>
        </p>
        <div className="pl-4 ">
          <button className="bg-white text-black shadow-sm  hover:bg-gray-100/80 duration-200 ease-linear px-1 rounded-l-[2px]">
            <ChevronLeft size={18} />
          </button>
          <button className="bg-red-500 hover:bg-red-500/80 duration-200 ease-linear px-1 rounded-r-[2px]">
            <ChevronRight size={18} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
