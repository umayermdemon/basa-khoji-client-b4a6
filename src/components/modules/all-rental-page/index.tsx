/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllRentalHouse } from "@/services/RentalHouse";
import AllRentalHouseCard from "./AllRentalHouseCard";

const AllRentalHouse = async () => {
  const { data } = await getAllRentalHouse();
  return (
    <div className="space-y-4 w-full">
      <h1>Showing 1–10 of 13 results</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {data?.map((item: any) => (
          <AllRentalHouseCard key={item?._id} house={item} />
        ))}
      </div>
    </div>
  );
};

export default AllRentalHouse;
