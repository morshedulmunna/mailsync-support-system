"use client";

import { formatDate } from "@/lib/timeFunction";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
type Props = {
  data:
    | {
        subject: string;
        body: string;
        sentAt: string;
      }[]
    | undefined;
};

export function TableUI({ data }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  // const { subject, body, sentAt } = data;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="rounded  overflow-x-scroll  bg-white p-2 mt-2 ">
      {data?.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12 hover:bg-red-50/30 cursor-pointer duration-200 ease-linear text-sm text-gray-700 bg-white py-2 border-b px-4"
        >
          <div className="col-span-1 flex items-center  space-x-4 ">
            <input type="checkbox" />
            <button>
              <Star size={12} />
            </button>
          </div>

          {/* <Link className="col-span-11 grid grid-cols-12" href={"/inbox/32"}>
            <div className="col-span-3 "> {item.subject} </div>
            <div className="col-span-8 text-[13px] text-gray-500 ">
              {item.body.slice(0, 90)}.....
            </div>
            <div className="col-span-1 text-xs">{formatDate(item?.sentAt)}</div>
          </Link> */}

          <div>
            <div className="col-span-3 "> {item.subject} </div>
            <div className="col-span-8 text-[13px] text-gray-500 ">
              {item.body.slice(0, 90)}.....
            </div>
            <div className="col-span-1 text-xs">{formatDate(item?.sentAt)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
