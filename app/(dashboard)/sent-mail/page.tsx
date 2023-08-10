"use client";

import EmailTypes from "@/components/EmailTypes";
import { TableUI } from "@/components/Table";
import { useSendingEmailQuery } from "@/redux/email/emailApi";

type Props = {};

export default function SentEmail({}: Props) {
  const { data, isLoading, error } = useSendingEmailQuery();

  console.log(data);
  console.log(error);

  return (
    <div className="px-6 overflow-y-auto h-full">
      <div className="mb-6">
        <EmailTypes types={"Delivered Email Box"} take={1} skip={20} />
        <div>
          <TableUI />
        </div>
      </div>
    </div>
  );
}
