"use client";

import EmailTypes from "@/components/EmailTypes";
import Loading from "@/components/Loading";
import { TableUI } from "@/components/Table";
import { useInboxEmailQuery } from "@/redux/email/emailApi";
import { inbox } from "@/redux/email/emailSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type Props = {};

export default function Importance({}: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items per page

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  let skip = (currentPage - 1) * itemsPerPage;
  let take = itemsPerPage;
  // Assuming data is an array of items
  const { data, isLoading, error } = useInboxEmailQuery({
    skip,
    take,
  });
  const totalItems = data?.count;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (isLoading) {
    <Loading />;
  }
  if (error) {
    toast.error("Something Wrong!");
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(inbox(totalItems));
  });

  return (
    <div className="px-6 overflow-y-auto h-full">
      <div className="mb-6">
        <EmailTypes
          pageSize={totalPages}
          types={"Inbox"}
          currentPage={currentPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
        <div>
          <TableUI data={data?.emails} />
        </div>
      </div>
    </div>
  );
}
