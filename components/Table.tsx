"use client";

import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const invoices = [{}, {}, {}, {}, {}, {}];

export function TableUI() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const str = ` Sltr-haris Type IV physeal sfsdf sfsdf fsd fx upper end of l
  tibia, sequela – You've been  Sltr-haris Type IV physeal sfsdf sfsdf fsd fx upper end of l
  tibia, sequela – You've been ...Sltr-haris Type IV physeal sfsdf sfsdf fsd fx upper end of l
  tibia, sequela – You've been ...Sltr-haris Type IV physeal sfsdf sfsdf fsd fx upper end of l
  tibia, sequela – You've been ......`;

  return (
    <div className="rounded  overflow-x-scroll  bg-white p-2 mt-2 ">
      {invoices.map((item, index) => (
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

          <Link className="col-span-11 grid grid-cols-12" href={"/inbox/32"}>
            <div className="col-span-3 ">Lucas Kriebel (via Twitter) (2)</div>
            <div className="col-span-8 text-[13px] text-gray-500 ">
              {str.slice(0, 90)}.....
            </div>
            <div className="col-span-1 text-xs">10:14 AM</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
