"use client";

import { TBlog } from "@/types";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import BlogCardSkeleton from "@/Skeleton/BlogCardSkeleton";

const BlogPage = ({ blogs }: { blogs: TBlog[] }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (blogs) {
      setIsLoading(false);
    }
  }, [blogs]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <BlogCardSkeleton />
            </div>
          ))
        : blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  );
};

export default BlogPage;
