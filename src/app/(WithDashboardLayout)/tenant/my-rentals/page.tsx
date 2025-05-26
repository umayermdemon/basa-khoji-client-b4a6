import AllRentalRequest from "@/components/modules/tenants/AllRentalRequest";
import { getAllRentalRequestForTenant } from "@/services/RentalRequest";
import { cookies } from "next/headers";

const MyRentalsPage = async () => {
  const token = (await cookies()).get("accessToken")!.value;
  const { data } = await getAllRentalRequestForTenant(token);
  return (
    <div>
      <AllRentalRequest requests={data} />
    </div>
  );
};

export default MyRentalsPage;
