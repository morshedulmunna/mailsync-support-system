import EmailTopBar from "@/components/EmailTopBar";
import EmailTypes from "@/components/EmailTypes";
import { TableUI } from "@/components/Table";

type Props = {};

export default function Inbox({}: Props) {
  return (
    <div className="py-2 mt-4 lg:px-2 overflow-y-auto h-full">
      <EmailTopBar />

      <div className="mb-6 bg-white p-4 w-full rounded">
        <EmailTypes types={"Unread"} take={1} skip={20} />
        <TableUI />
        <button className="text-sm text-right w-full">See more</button>
      </div>

      <div className="mb-6 bg-white p-4 rounded">
        <EmailTypes types={"Important"} take={1} skip={20} />
        <TableUI />
        <button className="text-sm text-right w-full">See more</button>
      </div>

      <div className=" bg-white p-4 rounded">
        <EmailTypes types={"Everything Else"} take={1} skip={20} />
        <TableUI />
        <button className="text-sm text-right w-full">See more</button>
      </div>
    </div>
  );
}
