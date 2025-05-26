import AllRentalHouseByLandlord from "@/components/modules/landlord/rental-house/AllRentalHouseByLandlord";
import { getAllRentalHouseByLandlord } from "@/services/RentalHouse";
import { cookies } from "next/headers";

const RentalHousePage = async () => {
  const token = (await cookies()).get("accessToken")!.value;
  const { data } = await getAllRentalHouseByLandlord(token);
  return (
    <div>
      <AllRentalHouseByLandlord houses={data} />
    </div>
  );
};

export default RentalHousePage;
