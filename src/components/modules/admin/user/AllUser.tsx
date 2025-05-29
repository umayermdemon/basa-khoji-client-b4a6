/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DeleteConfirmationModal from "@/components/ui/core/BKModal/deleteConfirmationModal";
import { BKTable } from "@/components/ui/core/BKTable";
import { deleteUser } from "@/services/User";
import { TUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import UserStatusSelector from "./UserStatusSelector";
import RoleSelector from "./RoleSelector";
type TUsersProps = {
  users: TUser[];
};
const AllUser = ({ users }: TUsersProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: TUser) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.userName);
    setModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    const toastId = toast.loading("Deleting....");
    try {
      if (selectedId) {
        const res = await deleteUser(selectedId);
        if (res.success) {
          toast.success(res.message, { id: toastId });
          setModalOpen(false);
        } else {
          toast.error(res.message, { id: toastId });
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };
  const columns: ColumnDef<TUser>[] = [
    {
      accessorKey: "userName",
      header: () => <div className="text-center">User Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <span className="truncate">{row.original.userName}</span>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: () => <div className="text-center">Email</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <span className="truncate">{row.original.email}</span>
        </div>
      ),
    },
    {
      accessorKey: "phoneNumber",
      header: () => <div className="text-center">Phone Number</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <span className="truncate">{row.original.phoneNumber}</span>
        </div>
      ),
    },
    {
      accessorKey: "role",
      header: () => <div>Role</div>,
      cell: ({ row }) => <RoleSelector row={row} />,
    },
    {
      accessorKey: "status",
      header: () => <div>Status</div>,
      cell: ({ row }) => <UserStatusSelector row={row} />,
    },
    {
      accessorKey: "action",
      header: () => <div className="text-center">Action</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <button
            className="text-red-500 cursor-pointer hover:bg-gray-100 rounded-2xl hover:p-3 p-3"
            title="Delete"
            onClick={() => handleDelete(row.original)}>
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-4 text-third">
        All User
      </h1>
      <BKTable columns={columns} data={users} />
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default AllUser;
