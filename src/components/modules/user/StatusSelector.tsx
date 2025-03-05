/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { updateUserStatus } from "@/services/User";
import { useState } from "react";
import { toast } from "sonner";
interface Row {
  original: {
    _id: string;
    status: string;
  };
}
const StatusSelector = ({ row }: { row: Row }) => {
  const [status, setStatus] = useState(row.original.status);
  const userId = row.original?._id;
  if (!userId) {
    toast.error("User ID not found");
    return;
  }

  const handleStatusChange = async (e: any) => {
    const newStatus = e.target.value;
    setStatus(newStatus);

    try {
      const res = await updateUserStatus(row.original._id, {
        status: newStatus,
      });
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error("Failed to update status");
      console.log(error);
    }
  };

  return (
    <select
      value={status}
      onChange={handleStatusChange}
      className={`w-24 px-2 py-1 rounded border cursor-pointer ${
        status === "active"
          ? "text-green-500 bg-green-100"
          : status === "inactive"
          ? "text-yellow-600 bg-yellow-100"
          : "text-red-500 bg-red-100"
      }`}>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
      <option value="suspended">Suspended</option>
    </select>
  );
};

export default StatusSelector;
