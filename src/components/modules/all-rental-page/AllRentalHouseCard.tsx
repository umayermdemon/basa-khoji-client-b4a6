import { Button } from "@/components/ui/button";
import { IRentalHouse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaBath, FaBed } from "react-icons/fa";

const AllRentalHouseCard = ({ house }: { house: IRentalHouse }) => {
  return (
    <div className="max-w-2xl bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="relative overflow-hidden group">
        <Image
          src={house?.images[0]}
          alt="House"
          className="w-full h-56 object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          width={400}
          height={400}
        />
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full uppercase">
          Featured
        </span>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold flex-1">{house?.title}</h2>
            <span className="text-green-600 font-bold">
              ৳{house?.rentAmount} / mo
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            {house?.location?.city} City, {house?.location?.state},{" "}
            {house?.location?.country}
          </p>
          <div className="flex items-center space-x-4 text-gray-700 text-sm mt-3">
            <span className="flex items-center">
              <FaBed className="mr-1" /> {house?.bedrooms} bed
            </span>
            <span className="flex items-center">
              <FaBath className="mr-1" /> {house?.bathrooms} bath
            </span>
          </div>
        </div>
        {/* Ensuring the button stays at the bottom */}

        <Link href={`/all-rental-house/${house?._id}`}>
          <Button className="w-full cursor-pointer rounded-2xl mt-2">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AllRentalHouseCard;
