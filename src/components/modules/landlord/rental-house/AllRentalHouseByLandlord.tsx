/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import DeleteConfirmationModal from "@/components/ui/core/BKModal/deleteConfirmationModal";
import { BKTable } from "@/components/ui/core/BKTable";
import { IRentalHouse } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { deleteRentalHouseByLandlord } from "@/services/RentalHouse";
import Image from "next/image";
import Link from "next/link";
type TRentalHousesProps = {
  houses: IRentalHouse[];
};
const AllRentalHouseByLandlord = ({ houses }: TRentalHousesProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IRentalHouse) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    const toastId = toast.loading("Deleting....");
    try {
      if (selectedId) {
        const res = await deleteRentalHouseByLandlord(selectedId);
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
  const columns: ColumnDef<IRentalHouse>[] = [
    {
      accessorKey: "title",
      header: () => <div>House Title</div>,
      cell: ({ row }) => (
        <div className="flex space-x-3 text-third">
          <Image
            src={row.original.images[0]}
            alt={row.original.title}
            width={400}
            height={400}
            className="w-24 h-24 rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="group">
            <Link href={`/all-rental-house/${row?.original?._id}`}>
              <h1 className="truncate text-lg text-third font-semibold group-hover:underline cursor-pointer ">
                {row.original.title}
              </h1>
            </Link>
            <p>
              {row.original.location.city}, {row.original.location.state},{" "}
              {row.original.location.country}
            </p>
            <h2 className="hover:text-primary text-lg text-third">
              <span className="font-semibold">৳{row.original.rentAmount}/</span>{" "}
              mo
            </h2>
          </div>
        </div>
      ),
    },
    {
      accessorKey: "availableFrom",
      header: () => <div className="text-center">Available From</div>,
      cell: ({ row }) => {
        const date = new Date(row.original.availableFrom).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );

        return (
          <div className="flex items-center justify-center">
            <p className="truncate">{date}</p>
          </div>
        );
      },
    },
    {
      accessorKey: "isAvailable",
      header: () => <div className="text-center">isAvailable</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          {row.original.isAvailable ? (
            <button className="text-green-600 text-base font-semibold">
              Available
            </button>
          ) : (
            <button className="text-yellow-500 text-base font-semibold">
              N/A
            </button>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div className="text-center">Action</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <button
            className="text-third cursor-pointer hover:bg-gray-100 rounded-2xl hover:p-3 p-3"
            title="Edit">
            <Pencil className="w-5 h-5" />
          </button>
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
      <h1 className="text-center font-bold text-4xl mb-4 text-[#181A20]">
        All Rental House
      </h1>
      <BKTable columns={columns} data={houses} />
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default AllRentalHouseByLandlord;
