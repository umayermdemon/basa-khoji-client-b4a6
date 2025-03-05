/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IUser } from "@/types";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getMe = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export const getAllUser = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/users`, {
      method: "GET",
      headers: {
        Authorization: (await cookies()).get("accessToken")!.value,
      },
      next: {
        tags: ["Users"],
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export const updateUserStatus = async (
  id: string,
  updatedData: Partial<IUser>
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/user/status/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    revalidateTag("Users");

    return res.json();
  } catch (error) {
    console.error("Error updating user status:", error);
    throw error;
  }
};
export const updateUserRole = async (
  id: string,
  updatedData: Partial<IUser>
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/users/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    revalidateTag("Users");

    return res.json();
  } catch (error) {
    console.error("Error updating user status:", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/user/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: (await cookies()).get("accessToken")!.value,
        },
      }
    );
    revalidateTag("Users");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
