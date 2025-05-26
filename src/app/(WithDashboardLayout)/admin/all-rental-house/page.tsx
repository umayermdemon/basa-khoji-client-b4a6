import AllRentalHouse from "@/components/modules/admin/rentalHouse/AllRentalHouse";
import { getAllRentalHouseByAdmin } from "@/services/RentalHouse";
import { cookies } from "next/headers";

const AllRentalHousePage = async () => {
  const token = (await cookies()).get("accessToken")!.value;
  const { data } = await getAllRentalHouseByAdmin(token);
  return (
    <div>
      <AllRentalHouse houses={data} />
    </div>
  );
};

export default AllRentalHousePage;
