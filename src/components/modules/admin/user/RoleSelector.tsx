/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { updateUserRole } from "@/services/User";
import { useState } from "react";
import { toast } from "sonner";
interface Row {
  original: {
    _id: string;
    role: string;
  };
}
const RoleSelector = ({ row }: { row: Row }) => {
  const [role, setRole] = useState(row.original.role);
  const userId = row.original?._id;
  if (!userId) {
    toast.error("User ID not found");
    return;
  }

  const handleRoleChange = async (e: any) => {
    const newRole = e.target.value;
    setRole(newRole);

    try {
      const res = await updateUserRole(row.original._id, {
        role: newRole,
      });
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error("Failed to update role");
      console.log(error);
    }
  };

  return (
    <select
      value={role}
      onChange={handleRoleChange}
      className={`w-24 px-2 py-1 rounded border cursor-pointer ${
        role === "landlord"
          ? "text-white bg-teal-500"
          : "text-white bg-gray-500"
      }`}>
      <option value="landlord">Landlord</option>
      <option value="tenant">Tenant</option>
    </select>
  );
};

export default RoleSelector;
