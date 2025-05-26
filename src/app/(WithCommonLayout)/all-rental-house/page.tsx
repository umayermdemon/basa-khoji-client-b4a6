import AllRentalHouse from "@/components/modules/all-rental-page";
import FilterSidebar from "@/components/modules/all-rental-page/FilterSidebar";

const AllRentalHousePage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 py-6 container mx-auto">
      <FilterSidebar />
      <AllRentalHouse />
    </div>
  );
};

export default AllRentalHousePage;
