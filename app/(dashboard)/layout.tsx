import PageTitle from "@/components/PageTitle";
import Sidebar from "@/components/Sidebar";
import React from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className=" px-2  lg:container pb-20 pt-12 lg:overflow-hidden w-full h-full">
      <PageTitle
        breadCrumbItems={[
          { label: "Email", path: "/apps/email/compose" },
          { label: "Compose Email", path: "/apps/email/compose", active: true },
        ]}
        title={"Compose Email"}
      />
      <div className="  lg:flex  w-full h-full">
        <div className="w-full lg:w-60 p-6 shadow bg-white rounded-l ">
          <Sidebar />
        </div>

        <main className="pl-1 bg-gray-200/20 rounded-r lg:shadow  w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
