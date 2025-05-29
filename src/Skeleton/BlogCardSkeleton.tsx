import { Button } from "@/components/ui/button";

const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col max-w-md border border-gray-100 animate-pulse">
      {/* Cover Image Skeleton */}
      <div className="relative w-full h-44 bg-gray-200" />
      {/* Card Content Skeleton */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="h-5 w-12 bg-gray-200 rounded-full" />
          <span className="h-5 w-12 bg-gray-200 rounded-full" />
          <span className="h-5 w-12 bg-gray-200 rounded-full" />
        </div>
        {/* Title Skeleton */}
        <div className="h-6 bg-gray-200 rounded mb-2 w-3/4" />
        {/* Content Preview Skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        {/* Author & Status Skeleton */}
        <div className="flex items-center justify-between mt-auto mb-2">
          <span className="h-4 w-24 bg-gray-200 rounded" />
          <span className="h-4 w-16 bg-gray-200 rounded" />
        </div>
        {/* Blog Details Button Skeleton */}
        <Button
          className="w-full rounded-2xl mt-2 bg-gray-200 text-transparent cursor-default"
          disabled>
          &nbsp;
        </Button>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
