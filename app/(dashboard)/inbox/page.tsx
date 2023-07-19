import EmailTopBar from "@/components/EmailTopBar";
import { TableUI } from "@/components/Table";

type Props = {};

export default function Inbox({}: Props) {
  return (
    <div className="p-6 overflow-y-auto h-full">
      <EmailTopBar />

      <div className="mb-6">
        <span>Unread</span>
        <div>
          <TableUI />
        </div>
      </div>
      <div className="mb-6">
        <span>Important</span>
        <div>
          <TableUI />
        </div>
      </div>
      <div className="mb-6">
        <span>Everything Else</span>
        <div>
          <TableUI />
        </div>
      </div>
    </div>
  );
}
