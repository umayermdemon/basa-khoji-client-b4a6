import * as z from "zod";

export const rentalHouseValidationSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  rentAmount: z
    .string()
    .min(1, "Rent Amount is required")
    .regex(/^\d+$/, "Rent Amount must be a number"),
  bedrooms: z
    .string()
    .min(1, "Bedrooms are required")
    .regex(/^\d+$/, "Bedrooms must be a number"),
  bathrooms: z
    .string()
    .min(1, "Bathrooms are required")
    .regex(/^\d+$/, "Bathrooms must be a number"),
  availableFrom: z.string().min(1, "Available From date is required"),

  location: z.object({
    address: z.string().min(3, "Address must be at least 3 characters long"),
    city: z.string().min(2, "City must be at least 2 characters long"),
    state: z.string().min(2, "State must be at least 2 characters long"),
    zipCode: z
      .string()
      .min(4, "Zip Code must be at least 4 characters")
      .regex(/^\d+$/, "Zip Code must be a number"),
    country: z.string().min(2, "Country must be at least 2 characters long"),
  }),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters long")
    .max(500, "Description cannot exceed 500 characters"),

  amenities: z.array(
    z.object({
      value: z.string().min(1, "Amenity is required"),
    })
  ),

  images: z.array(z.string()).max(4, "You can upload a maximum of 4 images"),
});
