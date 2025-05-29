export type TUser = {
  _id: string;
  email: string;
  role: "tenant" | "landlord" | "admin";
  status: "active" | "inactive" | "suspended";
  userName: string;
  phoneNumber?: string;
};
