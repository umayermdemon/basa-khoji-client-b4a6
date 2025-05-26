"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createRentalHouse = async (houseData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
      {
        method: "POST",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        body: houseData,
      }
    );
    revalidateTag("RentalHouses");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllRentalHouse = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/listings`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getSingleRentalHouse = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/listings/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
        next: {
          tags: ["RentalHouses"],
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllRentalHouseByAdmin = async (token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/listings`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["RentalHouses"],
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getAllRentalHouseByLandlord = async (token: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
        next: {
          tags: ["RentalHouses"],
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const deleteRentalHouseByLandlord = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/landlords/listings/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("RentalHouses");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
