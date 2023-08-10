"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { logOut } from "@/redux/auth/authSlice";
import { RootState } from "@/redux/store";
import { MailCheck, MessagesSquare, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

type Props = {};

export default function Sidebar({}: Props) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  const countNumberOfSentMail = useSelector(
    (state: RootState) => state.email.sentMail
  );
  const countNumberOfInbox = useSelector(
    (state: RootState) => state.email.inbox
  );

  const navItems = [
    {
      icon: <MessagesSquare size={16} />,
      level: "Inbox",
      href: "/inbox",
      count: countNumberOfInbox,
    },
    // {
    //   icon: <Mails size={16} />,
    //   level: "Unread",
    //   href: "/unread",
    // },
    // {
    //   icon: <Inbox size={16} />,
    //   level: "Important",
    //   href: "/important",
    // },
    {
      icon: <MailCheck size={16} />,
      level: "Sent Mail",
      href: "/sent-mail",
      count: countNumberOfSentMail,
    },
    // {
    //   icon: <MenuSquare size={16} />,
    //   level: "Draft",
    //   href: "/draft",
    // },
    // {
    //   icon: <MailWarning size={16} />,
    //   level: "Spam",
    //   href: "/spam",
    // },
    // {
    //   icon: <Trash2 size={16} />,
    //   level: "Trash",
    //   href: "/trash",
    // },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full ">
      {pathname === "/inbox/compose" ? (
        <Link href={"/inbox"}>
          <Button
            size={"sm"}
            className="w-full md:w-fit lg:w-full mb-6"
            variant={"destructive"}
          >
            Mail Box
          </Button>
        </Link>
      ) : (
        <Link href={"/inbox/compose"}>
          <Button
            size={"sm"}
            className="w-full md:w-fit lg:w-full mb-6"
            variant={"destructive"}
          >
            Compose
          </Button>
        </Link>
      )}

      {/* Mene Item */}
      <div>
        <ul>
          {navItems?.map((navItem, indx) => (
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
                <div className="flex text-sm font-medium items-center space-x-2">
                  {navItem.icon}
                  <span>{navItem.level}</span>
                </div>
                <span
                  className={cn(
                    "block  text-black bg-gray-200/50  rounded px-1 text-[10px]",
                    // navItem.level === "Dashboard" && "hidden",
                    pathname === navItem.href && "bg-red-500/50 text-white"
                  )}
                >
                  {navItem?.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8">
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
                <button
                  onClick={() => dispatch(logOut())}
                  className="text-sm duration-300 ease-linear hover:bg-red-500/80 hover:text-white rounded px-4 py-1"
                >
                  log out
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
