/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DeleteConfirmationModal from "@/components/ui/core/BKModal/deleteConfirmationModal";
import { BKTable } from "@/components/ui/core/BKTable";
import { deleteUser } from "@/services/User";
import { IUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import StatusSelector from "./StatusSelector";
import RoleSelector from "./RoleSelector";
type TUsersProps = {
  users: IUser[];
};
const AllUser = ({ users }: TUsersProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IUser) => {
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
  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "userName",
      header: () => <div>User Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
          <span className="truncate">{row.original.userName}</span>
        </div>
      ),
    },
    {
      accessorKey: "email",
      header: () => <div>Email</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
          <span className="truncate">{row.original.email}</span>
        </div>
      ),
    },
    {
      accessorKey: "phoneNumber",
      header: () => <div>Phone Number</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
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
      cell: ({ row }) => <StatusSelector row={row} />,
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500 cursor-pointer"
          title="Delete"
          onClick={() => handleDelete(row.original)}>
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-4 text-primary">
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
