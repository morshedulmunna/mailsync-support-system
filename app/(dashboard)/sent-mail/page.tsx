import EmailTopBar from "@/components/EmailTopBar";
import EmailTypes from "@/components/EmailTypes";
import { TableUI } from "@/components/Table";

type Props = {};

export default function SentEmail({}: Props) {
  return (
    <div className="p-6 overflow-y-auto h-full">
      <EmailTopBar />
      <div className="mb-6">
        <EmailTypes types={"Delivered Email Box"} take={1} skip={20} />
        <div>
          <TableUI />
        </div>
      </div>
    </div>
  );
}
