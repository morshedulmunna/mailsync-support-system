import EmailTopBar from "@/components/EmailTopBar";
import EmailTypes from "@/components/EmailTypes";
import { TableUI } from "@/components/Table";
import Link from "next/link";

type Props = {};

export default function Inbox({}: Props) {
  return (
    <div className="py-2 mt-4 lg:px-2 overflow-y-auto h-full">
      <EmailTopBar />

      <div className="mb-6 bg-white p-4 w-full rounded">
        <EmailTypes types={"Unread"} take={1} skip={20} />
        <TableUI />
        {/* button see more */}
        <Link href={"/unread"}>
          <button className="text-sm text-right w-full underline hover:text-red-500 text-red-600">
            See more
          </button>
        </Link>
      </div>

      <div className="mb-6 bg-white p-4 rounded">
        <EmailTypes types={"Important"} take={1} skip={20} />
        <TableUI />
        {/* button see more */}
        <Link href={"/important"}>
          <button className="text-sm text-right w-full underline hover:text-red-500 text-red-600">
            See more
          </button>
        </Link>
      </div>

      <div className=" bg-white p-4 rounded">
        <EmailTypes types={"Everything Else"} take={1} skip={20} />
        <TableUI />
        {/* button see more */}

        <button className="text-sm text-right w-full underline hover:text-red-500 text-red-600">
          See more
        </button>
      </div>
    </div>
  );
}
