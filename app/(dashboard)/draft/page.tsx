import EmailTypes from "@/components/EmailTypes";
import { TableUI } from "@/components/Table";

type Props = {};

export default function Draft({}: Props) {
  return (
    <div className="px-6 overflow-y-auto h-full">
      <div className="mb-6">
        <EmailTypes types={"Draft Email Box"} take={1} skip={20} />
        <div>
          <TableUI />
        </div>
      </div>
    </div>
  );
}
