import RentalHouseDetails from "@/components/modules/all-rental-page/RentalHouseDetails";
import { getSingleRentalHouse } from "@/services/RentalHouse";

const RentalHouseDetailsPage = async ({
  params,
}: {
  params: Promise<{ housesId: string }>;
}) => {
  const { housesId } = await params;
  const { data } = await getSingleRentalHouse(housesId);
  return (
    <div className="max-w-7xl mx-auto">
      <RentalHouseDetails house={data} />
    </div>
  );
};

export default RentalHouseDetailsPage;
