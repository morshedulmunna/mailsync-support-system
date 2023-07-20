import EmailTypes from "@/components/EmailTypes";
import { TableUI } from "@/components/Table";

type Props = {};

export default function Unread({}: Props) {
  return (
    <div className="px-6 overflow-y-auto h-full">
      <EmailTypes types={"Unread Email Box"} take={1} skip={20} />
      <div>
        <TableUI />
      </div>
    </div>
  );
}
