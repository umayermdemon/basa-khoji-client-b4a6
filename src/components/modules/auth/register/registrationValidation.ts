import { z } from "zod";

export const registrationValidation = z.object({
  role: z.string({ required_error: "Role is required" }),
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .regex(
      /^[A-Za-z]{3,}[A-Za-z0-9_]*$/,
      "Username must start with at least 3 letters"
    ),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  phoneNumber: z
    .string({ required_error: "Phone Number is required" })
    .min(11, "Phone Number must be 11 characters")
    .max(11, "Phone Number must be 11 characters")
    .regex(/^0\d{10}$/, "Phone Number must start with 0 and be 11 digits long"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters"),
  passwordConfirm: z
    .string({ required_error: "Password confirmation is required" })
    .min(8, "Password must be at least 8 characters"),
});
