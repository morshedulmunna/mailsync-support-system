import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className=" lg:container overflow-hidden w-full h-full lg:flex">
      <div className="w-full lg:w-60 shadow-sm p-6 bg-white">
        <Sidebar />
      </div>
      <div>
        <div>topbar</div>
        <main>{children}</main>
      </div>
    </div>
  );
}
