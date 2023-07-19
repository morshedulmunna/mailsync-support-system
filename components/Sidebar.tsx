"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MailCheck,
  MailX,
  MenuSquare,
  MessagesSquare,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type Props = {};

const navItem = [
  {
    icon: <LayoutDashboard size={18} />,
    level: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <MessagesSquare size={18} />,
    level: "Inbox",
    href: "/dashboard/inbox",
  },

  {
    icon: <MailCheck size={18} />,
    level: "Sent Mail",
    href: "/dashboard/sent-mail",
  },
  {
    icon: <MenuSquare size={18} />,
    level: "Draft",
    href: "/dashboard/draft",
  },
  {
    icon: <MailX size={18} />,
    level: "Trash",
    href: "/dashboard/trash",
  },
];

export default function Sidebar({}: Props) {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full">
      <Button size={"sm"} className="w-full mb-6" variant={"destructive"}>
        Compose
      </Button>

      {/* Mene Item */}
      <div className="flex flex-col justify-between items-start h-[88vh]">
        <ul>
          {navItem.map((navItem, indx) => (
            <li
              key={indx}
              className={cn(
                "w-full px-2 py-1 my-3",
                navItem.level === "Dashboard" && "pb-6 border-b"
              )}
            >
              <Link
                className={cn(
                  "flex space-x-2 items-center justify-between  px-2 py-1.5 rounded",
                  pathname === navItem.href && "text-red-500"
                )}
                href={navItem.href}
              >
                <div className="flex text-sm items-center space-x-2">
                  {navItem.icon}
                  <span>{navItem.level}</span>
                </div>
                <span
                  className={cn(
                    "block  text-white  rounded px-1 text-[10px]",
                    navItem.level === "Dashboard" && "hidden",
                    pathname === navItem.href && "bg-red-500/50"
                  )}
                >
                  12
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <Popover>
          <PopoverTrigger>
            <div>
              <button className=" group flex items-center space-x-1 hover:text-red-500">
                <span className="group-hover:bg-gray-300/50  duration-300 ease-in-out  p-1 rounded-full">
                  <Settings size={18} />
                </span>
                <span className="text-sm">Settings</span>
              </button>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className=" flex flex-col space-y-4 p-2 w-fit">
              <button className="text-sm duration-300 ease-linear hover:bg-red-500/80 hover:text-white rounded px-4 py-1">
                log out
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
