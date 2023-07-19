import { AlertOctagon, ArchiveRestore, ChevronDown } from "lucide-react";

type Props = {};

export default function EmailTopBar({}: Props) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-fit sticky -top-6 shadow-sm bg-white  py-2 px-4 rounded mb-4 flex justify-start items-center space-x-4">
        <span className="cursor-pointer text-gray-500 hover:text-red-500 w-fit">
          <ArchiveRestore size={18} />
        </span>
        <span className="cursor-pointer text-gray-500 hover:text-red-500 w-fit">
          <AlertOctagon size={18} />
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
  );
}
