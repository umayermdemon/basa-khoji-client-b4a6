export interface IUser {
  email: string;
  role: "tenant" | "landlord" | "admin";
  status: "active" | "inactive" | "suspended";
}
