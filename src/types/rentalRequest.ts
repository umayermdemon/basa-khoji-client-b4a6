export interface IRentalRequest {
  _id: string;
  listingId: string;
  tenantId: string;
  status: "pending" | "approved" | "rejected";
  landlordPhone?: string;
  paymentStatus?: "pending" | "paid" | "failed";
  additionalMessage?: string;
  moveInDate: Date;
  rentalDuration: number;
}
