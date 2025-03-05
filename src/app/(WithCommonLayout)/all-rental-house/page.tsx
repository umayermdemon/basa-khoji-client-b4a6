import { getAllRentalHouse } from "@/services/RentalHouse";

const AllRentalHousePage = async () => {
  const rentalHouses = await getAllRentalHouse();
  return (
    <div>
      <h1>This is All Rental House Page component</h1>
    </div>
  );
};

export default AllRentalHousePage;
