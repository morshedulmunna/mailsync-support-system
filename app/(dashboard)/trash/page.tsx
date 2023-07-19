import EmailTopBar from "@/components/EmailTopBar";
import { TableUI } from "@/components/Table";

type Props = {};

function Trash({}: Props) {
  return (
    <div className="p-6 overflow-y-auto h-full">
      <EmailTopBar />
      <div className="mb-6">
        <span>Unread</span>
        <div>
          <TableUI />
        </div>
      </div>
    </div>
  );
}

export default Trash;
