import React from "react";

const RentalHouseDetailsSkeleton = () => (
  <div className="py-8 px-2 md:px-6 max-w-6xl mx-auto animate-pulse">
    {/* Title section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div className="space-y-2 w-full md:w-2/3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <div className="h-8 w-48 bg-gray-200 rounded mb-2" />
          <div>
            <div className="w-40 h-10 bg-gray-200 rounded-2xl" />
          </div>
        </div>
        <div className="h-4 w-64 bg-gray-200 rounded" />
        <div className="h-4 w-40 bg-gray-200 rounded" />
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-end gap-2">
        <div className="flex items-center justify-end gap-4">
          <div className="h-10 w-10 bg-gray-200 rounded-2xl" />
          <div className="h-10 w-10 bg-gray-200 rounded-2xl" />
          <div className="h-10 w-10 bg-gray-200 rounded-2xl" />
        </div>
        <div className="h-8 w-28 bg-gray-200 rounded" />
      </div>
    </div>
    {/* Image section */}
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 h-64 md:h-[400px] bg-gray-200 rounded-2xl" />
        <div className="flex flex-col gap-4">
          <div className="h-32 md:h-48 bg-gray-200 rounded-2xl" />
          <div className="h-32 md:h-48 bg-gray-200 rounded-2xl" />
        </div>
      </div>
    </div>
    {/* Details section */}
    <div className="my-8 space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-stretch gap-4">
        <div className="bg-white w-full rounded-2xl p-6 flex-1 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="flex gap-8">
            <div className="h-12 w-24 bg-gray-200 rounded" />
            <div className="h-12 w-24 bg-gray-200 rounded" />
            <div className="h-12 w-24 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="bg-white w-full rounded-2xl p-6 flex-1 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="h-16 w-full bg-gray-200 rounded" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="bg-white w-full rounded-2xl p-6 flex-1 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-24 bg-gray-200 rounded" />
          </div>
        </div>
        <div className="bg-white w-full rounded-2xl p-6 flex-1 space-y-4">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="h-24 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center mt-6">
      <div className="w-40 h-10 bg-gray-200 rounded-2xl" />
    </div>
  </div>
);

export default RentalHouseDetailsSkeleton;
