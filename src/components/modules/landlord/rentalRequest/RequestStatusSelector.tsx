/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { acceptOrRejectRentalRequestByLandlord } from "@/services/RentalRequest";
import { useState } from "react";
import { toast } from "sonner";

interface Row {
  original: {
    _id: string;
    status: string;
  };
}

const RequestStatusSelector = ({ row }: { row: Row }) => {
  const [status, setStatus] = useState(row.original.status);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const userId = row.original?._id;

  if (!userId) {
    toast.error("User ID not found");
    return;
  }

  const handleStatusChange = async (e: any) => {
    const newStatus = e.target.value;

    if (newStatus === "approved") {
      setShowModal(true);
    } else {
      updateStatus(newStatus);
    }
  };

  const updateStatus = async (
    newStatus: "pending" | "approved" | "rejected",
    phone?: string
  ) => {
    try {
      const res = await acceptOrRejectRentalRequestByLandlord(userId, {
        status: newStatus,
        landlordPhone: phone,
      });
      if (res?.success) {
        toast.success(res?.message);
        setStatus(res?.success?.data?.status);
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error("Failed to update status");
      console.log(error);
    }
  };

  const handleConfirmApproval = () => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }

    updateStatus("approved", phoneNumber);
    setShowModal(false);
  };

  return (
    <div>
      <select
        value={status}
        onChange={handleStatusChange}
        className={`w-28 px-2 py-1 rounded border cursor-pointer ${
          status === "pending"
            ? "text-yellow-600 bg-yellow-100"
            : status === "approved"
            ? "text-green-600 bg-green-100"
            : "text-red-500 bg-red-100"
        }`}>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-5 rounded shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-3">
              Enter Landlord's Phone
            </h2>
            <input
              type="text"
              className="w-full p-2 border rounded mb-3"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div className="flex justify-end space-x-3">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer"
                onClick={handleConfirmApproval}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestStatusSelector;
