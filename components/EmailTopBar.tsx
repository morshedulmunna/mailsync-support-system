import {
  AlertOctagon,
  ArchiveRestore,
  ChevronDown,
  Trash2,
} from "lucide-react";
import { Dropdown } from "./DropDown";

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

        <Dropdown
          button={
            <div className="w-fit sticky -top-6 shadow-sm bg-white  py-2 px-4 rounded mb-4 flex justify-start items-center cursor-pointer group ">
              <span className=" text-sm text-gray-500 group-hover:text-red-500 w-fit">
                More..
              </span>
              <span className="cursor-pointer text-gray-500 group-hover:text-red-500 w-fit">
                <ChevronDown size={18} />
              </span>
            </div>
          }
          context={[
            {
              btn: (
                <span className=" hover:bg-gray-100 block cursor-pointer px-2 duration-200 ease-linear rounded text-xs w-full pr-3 py-1">
                  Mark al unread
                </span>
              ),
            },
            {
              btn: (
                <span className=" block cursor-pointer  hover:bg-gray-100 px-2 duration-200 ease-linear rounded text-xs w-full pr-3 py-1">
                  Delete all
                </span>
              ),
            },
          ]}
        />
      </div>

      {/* <Input
        type="search"
        className="w-full text-sm h-9 mb-4"
        placeholder="Search....."
      /> */}
    </div>
  );
}
