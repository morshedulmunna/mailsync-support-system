"use client";

import PageTitle from "@/components/PageTitle";
import { SheetSidebar } from "@/components/SheetSidebar";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const pathName = usePathname();
  const date = new Date();

  return (
    <div className="h-screen bg-gradient-to-bl from-emerald-50 via-red-50 to-orange-50">
      <div className=" px-2 lg:container pb-20 pt-8 lg:overflow-hidden w-full h-full">
        <PageTitle
          breadCrumbItems={[{ label: "mailSyncs", path: `${pathName}` }]}
          title={"Compose Email"}
        />
        <div className="  lg:flex  w-full h-full">
          <div className="w-full lg:w-60 p-6 shadow bg-white rounded-l ">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
            <div className="block lg:hidden">
              <SheetSidebar
                button={
                  <button>
                    <Menu />
                  </button>
                }
              />
            </div>
          </div>

          <main className="pl-1 pb-5 bg-gray-200/20 rounded-r lg:shadow h-full  w-full">
            {children}
            <footer>
              <nav className="bg-gray-100 rounded-b-[10px] flex justify-center items-center">
                <div className="text-xs space-x-2 py-2 text-gray-500">
                  <span>Copyright © {date.getFullYear()} mailSyncs.com</span>
                  <span className="italic text-[10px]">
                    develop by @morshedulmunna
                  </span>
                </div>
              </nav>
            </footer>
          </main>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
