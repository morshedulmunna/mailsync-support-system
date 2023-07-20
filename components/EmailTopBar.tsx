import {
  AlertOctagon,
  ArchiveRestore,
  ChevronDown,
  Trash2,
} from "lucide-react";
import { Input } from "./ui/input";

type Props = {};

export default function EmailTopBar({}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between lg:space-x-4">
      <div className="w-full flex justify-start items-center space-x-4">
        <div className="w-fit sticky -top-6 shadow-sm bg-white  py-2 px-4 rounded mb-4 flex justify-start items-center space-x-8">
          <span className="cursor-pointer text-gray-500 hover:text-red-500 w-fit">
            <ArchiveRestore size={18} />
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-red-500 w-fit">
            <AlertOctagon size={18} />
          </span>
          <span className="cursor-pointer text-gray-500 hover:text-red-500 w-fit">
            <Trash2 size={18} />
          </span>
        </div>

        <div className="w-fit sticky -top-6 shadow-sm bg-white  py-2 px-4 rounded mb-4 flex justify-start items-center cursor-pointer group ">
          <span className=" text-sm text-gray-500 group-hover:text-red-500 w-fit">
            More..
          </span>
          <span className="cursor-pointer text-gray-500 group-hover:text-red-500 w-fit">
            <ChevronDown size={18} />
          </span>
        </div>
      </div>

      <Input
        type="search"
        className="w-full text-sm h-9 mb-4"
        placeholder="Search....."
      />
    </div>
  );
}
