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

  return (
    <div className="rounded shadow-sm bg-white p-2 mt-2 ">
      {invoices.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12  text-sm  bg-white py-2 border-b px-4"
        >
          <div className="col-span-1 flex items-center  space-x-4 ">
            <input type="checkbox" />
            <button>
              <Star size={16} />
            </button>
          </div>

          <Link
            className="col-span-11 grid grid-cols-12"
            href={"/dashboard/inbox/32"}
          >
            <div className="col-span-3">Lucas Kriebel (via Twitter) (2)</div>
            <div className="col-span-8">
              Sltr-haris Type IV physeal fx upper end of l tibia, sequela –
              You've been class of the inboxs...
            </div>
            <div className="col-span-1">10:14 AM</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
