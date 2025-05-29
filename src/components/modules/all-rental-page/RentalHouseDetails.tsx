"use client";
import { Button } from "@/components/ui/button";
import BKRequestModal from "@/components/ui/core/BKRequestModal/BKRequestModal";
import { useUser } from "@/context/UserContext";
import RentalHouseDetailsSkeleton from "@/Skeleton/RentalHouseDetailsSkeleton";
import { TRentalHouse } from "@/types";
import { CalendarClock, CopyPlus, Heart, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBath, FaBed } from "react-icons/fa";

const RentalHouseDetails = ({ house }: { house: TRentalHouse }) => {
  const { user } = useUser();
  const [showFull, setShowFull] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [house]);
  const pathname = usePathname();
  const {
    _id,
    availableFrom,
    bathrooms,
    bedrooms,
    description,
    images,
    isAvailable,
    location,
    rentAmount,
    title,
    amenities,
  } = house;
  const formattedDate = new Date(availableFrom).toLocaleDateString();
  if (isLoading) {
    return <RentalHouseDetailsSkeleton />;
  }
  return (
    <div className="py-8 px-2 md:px-6 max-w-6xl mx-auto">
      {/* title section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-third gap-4">
        <div className="space-y-2 w-full md:w-2/3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold">{title}</h1>
            <div className="flex items-center justify-center">
              {user?.role === "tenant" ? (
                <BKRequestModal listingId={_id} />
              ) : !user ? (
                <Link href={`/login?redirectPath=${pathname}`}>
                  <Button className="cursor-pointer rounded-2xl">
                    Request For Rent
                  </Button>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <h2>
              {location?.address}, {location?.city}, {location?.country}
            </h2>
            <span className="hidden sm:inline">|</span>
            <h3 className="text-primary font-medium">• For rent </h3>
            <span className="hidden sm:inline">|</span>
            <h4>
              Available From:{" "}
              <span className="hover:text-primary cursor-pointer">
                {formattedDate}
              </span>
            </h4>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-gray-700 text-base mt-2">
            <span className="flex items-center cursor-pointer hover:text-primary">
              <FaBed className="mr-1" /> {house?.bedrooms} bed
            </span>
            <span className="flex items-center cursor-pointer hover:text-primary">
              <FaBath className="mr-1" /> {house?.bathrooms} bath
            </span>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col items-end gap-2">
          <div className="flex items-center justify-end gap-4">
            <button className="border rounded-2xl p-2 cursor-pointer hover:border-third">
              <Heart />
            </button>
            <button className="border rounded-2xl p-2 cursor-pointer hover:border-third">
              <CopyPlus />
            </button>
            <button className="border rounded-2xl p-2 cursor-pointer hover:border-third">
              <Share2 />
            </button>
          </div>
          <h1 className="text-xl md:text-2xl font-semibold text-end">
            ৳{rentAmount}/mo
          </h1>
        </div>
      </div>
      {/* image section */}
      <div className="container mx-auto mt-8">
        {images.length > 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 rounded-2xl group overflow-hidden">
              <Image
                src={images[0]}
                alt={title}
                width={800}
                height={500}
                className="w-full h-64 md:h-[400px] object-cover rounded-2xl cursor-pointer transition-transform duration-400 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden group rounded-2xl">
                <Image
                  src={images[1]}
                  alt={title}
                  width={400}
                  height={200}
                  className="w-full h-32 md:h-48 object-cover rounded-2xl cursor-pointer transition-transform duration-400 ease-in-out group-hover:scale-105"
                />
              </div>
              {images[2] && (
                <div className="overflow-hidden group rounded-2xl">
                  <Image
                    src={images[2]}
                    alt={title}
                    width={400}
                    height={200}
                    className="w-full h-32 md:h-48 object-cover rounded-2xl cursor-pointer transition-transform duration-400 ease-in-out group-hover:scale-105"
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div>
            <Image
              src={images[0]}
              alt={title}
              width={800}
              height={400}
              className="w-full h-64 md:h-[400px] rounded-2xl"
            />
          </div>
        )}
      </div>

      <div className="my-8 space-y-8 text-third">
        <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4">
          <div className="bg-white w-full rounded-2xl p-6 flex-1">
            <h1 className="font-semibold text-lg md:text-xl">Overview</h1>
            <div className="flex flex-wrap items-center gap-8 text-gray-700 text-sm mt-3">
              <div className="flex items-center gap-4">
                <div className="border p-2 rounded-2xl">
                  <FaBed className="text-2xl" />
                </div>
                <div className="text-base">
                  <h3 className="font-semibold">Bedroom</h3>
                  <h2>{bedrooms}</h2>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="border p-2 rounded-2xl">
                  <FaBath className="text-2xl" />
                </div>
                <div className="text-base">
                  <h3 className="font-semibold">Bathrooms</h3>
                  <h2>{bathrooms}</h2>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="border p-2 rounded-2xl">
                  <CalendarClock className="text-2xl" />
                </div>
                <div className="text-base">
                  <h3 className="font-semibold">Available</h3>
                  <h2
                    className={`font-medium ${
                      isAvailable ? "text-green-600" : "text-red-600"
                    }`}>
                    {isAvailable ? "Yes" : "No"}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-2xl p-6 flex-1">
            <h1 className="font-semibold text-lg md:text-xl">Address</h1>
            <div className="flex flex-col md:flex-row justify-between pt-4 gap-4">
              <div className="flex gap-6">
                <div className="font-semibold">
                  <h2>Address</h2>
                  <h2>City</h2>
                  <h2>State</h2>
                </div>
                <div>
                  <h2>{location?.address}</h2>
                  <h2>{location?.city}</h2>
                  <h2>{location?.state}</h2>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="font-semibold">
                  <h2>Zip/Postal Code</h2>
                  <h2>Country</h2>
                </div>
                <div>
                  <h2>{location?.zipCode}</h2>
                  <h2>{location?.country}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="bg-white w-full rounded-2xl p-6 flex-1">
            <h1 className="font-semibold text-lg md:text-xl">Amenities</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 mt-2 font-medium gap-2">
              {amenities?.map((item, idx) => (
                <h1 key={idx}>
                  •<span className="ml-2">{item}</span>
                </h1>
              ))}
            </div>
          </div>
          <div className="bg-white w-full rounded-2xl p-6 flex-1">
            <h1 className="font-semibold text-lg md:text-xl">
              House Description
            </h1>
            <p className="text-justify">
              {showFull ? description : description.slice(0, 200)}
              {description.length > 200 && (
                <button
                  onClick={() => setShowFull(!showFull)}
                  className="text-primary cursor-pointer underline ml-2">
                  {showFull ? "See Less" : "See More"}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6">
        {user?.role === "tenant" && <BKRequestModal listingId={_id} />}
      </div>
    </div>
  );
};

export default RentalHouseDetails;
