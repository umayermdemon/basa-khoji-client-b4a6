import { TRentalHouse } from "@/types";
import AllRentalHouseCard from "../../all-rental-page/AllRentalHouseCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FeaturedRentalHouse = ({
  featuredHouses,
}: {
  featuredHouses: TRentalHouse[];
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold mb-6 text-center">
          Featured Rental Houses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHouses.slice(0, 4).map((house) => (
            <AllRentalHouseCard house={house} key={house?._id} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href={`/all-rental-house`} className="">
            <Button className="cursor-pointer rounded-2xl mt-2">
              View ALL
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRentalHouse;
