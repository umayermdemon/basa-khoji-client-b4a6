"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search } from "lucide-react";
import { useState } from "react";

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [filters, setFilters] = useState({
    price: [20, 92677],
    bedrooms: "any",
    bathrooms: "any",
    location: "California",
    squareFeet: { min: "", max: "" },
    yearBuilt: [2019, 2022],
  });
  return (
    <div className=" bg-white p-6 shadow-lg rounded-2xl w-full max-w-sm space-y-4 h-[600px]">
      <h3 className="text-lg font-semibold mb-4">Find Your Home</h3>

      <Input
        type="text"
        placeholder="What are you looking for?"
        className="rounded-2xl"
      />

      {/* Price Range */}
      <div>
        <label className="block text-gray-700 text-sm font-semibold">
          Price Range
        </label>
        <div className="max-w-lg mx-auto p-6 shadow-lg rounded-2xl">
          <CardContent>
            <div className="flex flex-col items-center gap-4 mb-4">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={100}
                max={100000}
                step={100}
                className="w-full cursor-pointer"
              />
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([Number(e.target.value), priceRange[1]])
                  }
                  className="w-24 text-center border border-gray-300 rounded-lg p-2 shadow-sm"
                />
                <span className="text-gray-600">-</span>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-24 text-center border border-gray-300 rounded-lg p-2 shadow-sm"
                />
              </div>
            </div>
          </CardContent>
        </div>
      </div>

      {/* Bedrooms */}
      <div>
        <label className="block mt-4 text-gray-700 text-sm font-semibold">
          Bedrooms
        </label>
        <div className="flex gap-1 mt-2">
          {["any", "1+", "2+", "3+", "4+", "5+"].map((bed) => (
            <button
              key={bed}
              className={`px-3 py-1 rounded border-2 cursor-pointer ${
                filters.bedrooms === bed
                  ? "border-2 border-black"
                  : "text-gray-700"
              }`}
              onClick={() => setFilters({ ...filters, bedrooms: bed })}>
              {bed}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <label className="block mt-4 text-gray-700 text-sm font-semibold">
          Bathrooms
        </label>
        <div className="flex gap-1 mt-2">
          {["any", "1+", "2+", "3+", "4+", "5+"].map((bath) => (
            <button
              key={bath}
              className={`px-3 py-1 rounded border-2 cursor-pointer ${
                filters.bathrooms === bath
                  ? "border-2 border-black"
                  : "text-gray-700"
              }`}
              onClick={() => setFilters({ ...filters, bathrooms: bath })}>
              {bath}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="block mt-4 text-gray-700 text-sm font-semibold">
          Location
        </label>
        <select className="w-full p-2 border rounded mt-2 cursor-pointer">
          <option value="all" className="cursor-pointer">
            All Cities
          </option>
          <option value="california">California</option>
        </select>
      </div>

      {/* Search Button */}
      <Button
        type="submit"
        className="w-full mt-6 text-white py-2 rounded-2xl font-semibold cursor-pointer">
        <Search /> Search
      </Button>
    </div>
  );
};

export default FilterSidebar;
