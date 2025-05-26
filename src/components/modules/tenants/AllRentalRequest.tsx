/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";

import { BKTable } from "@/components/ui/core/BKTable";
import { IRentalRequest } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type TRentalRequestsProps = {
  requests: IRentalRequest[];
};
const fetchHouseData = async (listingId: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${listingId}`
    );
    const data = await response.json();
    return data?.data ?? null;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return "Unknown";
  }
};
const AllRentalRequest = ({ requests }: TRentalRequestsProps) => {
  const DataForRentalHouse = ({ listingId }: any) => {
    const [houseData, setHouseData] = useState<any>(null);
    useEffect(() => {
      const getRentalHouse = async () => {
        const data = await fetchHouseData(listingId);
        setHouseData(data);
      };

      if (listingId) {
        getRentalHouse();
      }
    }, [listingId]);
    if (!houseData) return <p>Loading...</p>;
    return (
      <div className="flex space-x-3 text-third">
        {houseData?.images?.[0] ? (
          <Image
            src={houseData.images[0]}
            alt={houseData?.title}
            width={400}
            height={400}
            className="w-24 h-24 rounded-2xl transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-2xl flex items-center justify-center">
            <span>No Image</span>
          </div>
        )}
        <div className="group">
          <Link href={`/all-rental-house/${houseData?._id}`}>
            <h1 className="truncate text-lg text-third font-semibold group-hover:underline cursor-pointer ">
              {houseData?.title}
            </h1>
          </Link>
          <p>
            {houseData?.location?.city}, {houseData?.location?.state},{" "}
            {houseData?.location?.country}
          </p>
          <h2 className="hover:text-primary text-lg text-third">
            <span className="font-semibold">৳{houseData?.rentAmount}/</span> mo
          </h2>
        </div>
      </div>
    );
  };

  const handlePayment = (data: any) => {
    console.log(data);
  };
  const columns: ColumnDef<IRentalRequest>[] = [
    {
      accessorKey: "listingId",
      header: () => <div>House Title</div>,
      cell: ({ row }) => (
        <DataForRentalHouse listingId={row.original.listingId} />
      ),
    },
    {
      accessorKey: "status",
      header: () => <div>Status</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
          <h1
            className={`w-20 px-2 py-1 font-semibold text-center rounded border ${
              row.original.status === "pending"
                ? "text-yellow-600 bg-yellow-100"
                : row.original.status === "approved"
                ? "text-green-600 bg-green-100"
                : "text-red-500 bg-red-100"
            }`}>
            {row.original.status === "pending"
              ? "Pending"
              : row.original.status === "approved"
              ? "Approved"
              : "Rejected"}
          </h1>
        </div>
      ),
    },

    {
      accessorKey: "landlordPhone",
      header: () => <div className="text-center">Landlord Phone</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          {row?.original?.landlordPhone ? (
            <span>{row?.original?.landlordPhone}</span>
          ) : (
            <span>N/A</span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "additionalMessage",
      header: () => <div className="text-center">Additional Message</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          {row?.original?.additionalMessage ? (
            <span>{row?.original?.additionalMessage}</span>
          ) : (
            <span>N/A</span>
          )}
        </div>
      ),
    },
    {
      accessorKey: "paymentStatus",
      header: () => <div className="text-center">Payment Status</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <h1
            className={`w-20 px-2 py-1 font-semibold rounded text-center border ${
              row.original.paymentStatus === "pending"
                ? "text-yellow-600 bg-yellow-100"
                : row.original.paymentStatus === "paid"
                ? "text-green-600 bg-green-100"
                : "text-red-500 bg-red-100"
            }`}>
            {row.original.paymentStatus === "pending"
              ? "Pending"
              : row.original.paymentStatus === "paid"
              ? "Paid"
              : "Failed"}
          </h1>
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div className="text-center">Payment</div>,
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <button
            className={`  ${
              row.original.paymentStatus === "paid"
                ? "text-gray-500"
                : row.original.paymentStatus === "pending"
                ? "text-yellow-500 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                : "text-red-500 cursor-pointer"
            }`}
            title="Pay"
            disabled={row.original.paymentStatus === "paid"}
            onClick={() => handlePayment(row.original)}>
            {row.original.status === "approved" && (
              <CreditCard className="text-2xl" />
            )}
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1 className="text-xl font-semibold text-center mb-4">
        My Rental Request
      </h1>
      <BKTable columns={columns} data={requests} />
    </div>
  );
};

export default AllRentalRequest;
