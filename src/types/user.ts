export interface IUser {
  _id: string;
  email: string;
  role: "tenant" | "landlord" | "admin";
  status: "active" | "inactive" | "suspended";
  userName: string;
  phoneNumber?: string;
}
