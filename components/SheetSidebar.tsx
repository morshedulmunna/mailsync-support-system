"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItem } from "./Sidebar";
import { Button } from "./ui/button";

interface sheetBadType {
  button: JSX.Element;
}

export function SheetSidebar({ button }: sheetBadType) {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>{button}</SheetTrigger>
      <SheetContent className="overflow-y-scroll">
        <SheetClose asChild>
          <Link className="w-full mt-5" href={"/inbox/compose"}>
            <Button
              size={"sm"}
              className="w-full  mb-6"
              variant={"destructive"}
            >
              Compose
            </Button>
          </Link>
        </SheetClose>
        {navItem.map((navItem, indx) => (
          <SheetClose key={indx} asChild>
            {/* <div
              key={indx}
              className={cn(
                "w-full px-2 py-1  my-3",
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
                  12
                </span>
              </Link>
            </div> */}
            <Link
              className={cn(
                "flex space-x-2 items-center justify-between  px-2 py-1.5 rounded border-b mb-4 text-base",
                pathname === navItem.href && "text-red-500"
              )}
              href={navItem.href}
            >
              {navItem.level}

              <span
                className={cn(
                  "block  text-black bg-gray-200/50  rounded px-1 text-[10px]",
                  // navItem.level === "Dashboard" && "hidden",
                  pathname === navItem.href && "bg-red-500/50 text-white"
                )}
              >
                12
              </span>
            </Link>
          </SheetClose>
        ))}

        <div className="flex justify-end items-center">
          <SheetClose asChild>
            <button className="text-sm duration-300 ease-linear hover:bg-red-500/80 text-white bg-red-500 to-white rounded px-4 py-1">
              Log out
            </button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
