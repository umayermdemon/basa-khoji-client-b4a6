/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";

import { BKTable } from "@/components/ui/core/BKTable";
import { TRentalRequest } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import RequestStatusSelector from "./RequestStatusSelector";
type TRentalRequestsProps = {
  requests: TRentalRequest[];
};

const AllRentalRequestForLandlord = ({ requests }: TRentalRequestsProps) => {
  const [userEmail, setUserEmail] = useState("");
  const fetchUserById = async (tenantId: any) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/landlords/user/${tenantId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return "Unknown";
    }
  };

  const DataForUserEmail = ({ tenantId }: any) => {
    useEffect(() => {
      const getUserEmail = async () => {
        const { data } = await fetchUserById(tenantId);
        setUserEmail(data?.email);
      };

      if (tenantId) {
        getUserEmail();
      }
    }, [tenantId]);

    return (
      <div className="flex items-center">
        <span className="truncate">{userEmail || "Loading..."}</span>
      </div>
    );
  };
  const columns: ColumnDef<TRentalRequest>[] = [
    {
      accessorKey: "tenantId",
      header: () => <div>User Email</div>,
      cell: ({ row }) => <DataForUserEmail tenantId={row.original.tenantId} />,
    },
    {
      accessorKey: "status",
      header: () => <div>Status</div>,
      cell: ({ row }) => <RequestStatusSelector row={row} />,
    },
    {
      accessorKey: "paymentStatus",
      header: () => <div>Payment Status</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
          {row.original.paymentStatus === "pending" ? (
            <h3 className="text-yellow-600 text-[1rem] font-semibold">
              Pending
            </h3>
          ) : row.original.paymentStatus === "paid" ? (
            <h3 className="text-green-600 text-[1rem] font-semibold">Paid</h3>
          ) : (
            <h3 className="text-red-500 text-[1rem] font-semibold">Failed</h3>
          )}
        </div>
      ),
    },
    {
      accessorKey: "landlordPhone",
      header: () => <div>Landlord Phone</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
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
      header: () => <div>Additional Message</div>,
      cell: ({ row }) => (
        <div className="flex items-center">
          {row?.original?.additionalMessage ? (
            <span>{row?.original?.additionalMessage}</span>
          ) : (
            <span>N/A</span>
          )}
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-2 px-4">
        <h1 className="text-xl font-semibold">All Rental Request</h1>
      </div>
      <BKTable columns={columns} data={requests} />
    </div>
  );
};

export default AllRentalRequestForLandlord;
