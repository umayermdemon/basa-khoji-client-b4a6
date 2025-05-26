import AllRentalRequestForLandlord from "@/components/modules/landlord/rentalRequest/AllRentalRequestForLandlord";
import { getAllRentalRequestForLandlord } from "@/services/RentalRequest";
import { cookies } from "next/headers";

const RentalRequestPage = async () => {
  const token = (await cookies()).get("accessToken")!.value;
  const { data } = await getAllRentalRequestForLandlord(token);

  return (
    <div>
      <AllRentalRequestForLandlord requests={data} />
    </div>
  );
};

export default RentalRequestPage;
