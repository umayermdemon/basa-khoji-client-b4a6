import { Button } from "@/components/ui/button";
import styles from "./banner.module.css";
import { FaSearch } from "react-icons/fa";

const BannerSection = ({ numberOfData }: { numberOfData: number }) => {
  return (
    <div className={`${styles.banner} p-24`}>
      <div className="absolute inset-0 flex mt-8 flex-col items-center justify-center text-white px-4 md:px-6 text-center">
        <h3 className="text-xs md:text-sm lg:text-lg font-semibold uppercase tracking-wide">
          The Best Way To
        </h3>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-2">
          Finding a Home, Made Simple!
        </h1>
        <p className="mt-3 text-sm md:text-base lg:text-lg">
          We&apos;ve more than{" "}
          <strong className="text-primary">{numberOfData}</strong> apartments,
          places & plots.
        </p>

        <div className="mt-6 w-full max-w-2xl p-4">
          {/* Search Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {/* Location Input */}
            <input
              type="text"
              placeholder="address, city, or ZIP"
              className="py-3 px-4 border-2 rounded-2xl focus:outline-none bg-transparent w-full border-primary text-white placeholder-white"
            />

            {/* Price Range Dropdown */}
            <select className="p-3 rounded-2xl focus:outline-none w-full bg-gray-800 text-white cursor-pointer">
              <option value="">Price Range</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000+">$2,000+</option>
            </select>

            {/* Bedrooms Dropdown */}
            <select className="p-3 rounded-2xl focus:outline-none  w-full bg-gray-800 text-white cursor-pointer">
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3+">3+ Bedrooms</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex justify-center mt-4">
            <Button
              variant="outline"
              className="p-3 border border-primary w-full bg-transparent text-white rounded-2xl hover:bg-primary hover:text-black flex items-center cursor-pointer">
              <FaSearch size={20} className="mr-1" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
