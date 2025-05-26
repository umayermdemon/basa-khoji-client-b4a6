"use server";

import { IRentalRequest } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createRentalRequest = async (data: IRentalRequest) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getAllRentalRequestForLandlord = async (token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["RentalRequests"],
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getAllRentalRequestForTenant = async (token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/tenants/requests`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["RentalRequests"],
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const acceptOrRejectRentalRequestByLandlord = async (
  id: string,
  updatedData: Partial<IRentalRequest>
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/requests/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );
    revalidateTag("RentalRequests");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
