"use client";
import { Button } from "@/components/ui/button";
import { getSingleUser } from "@/services/User";
import { TBlog, TUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  const [author, setAuthor] = useState<TUser | null>(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await getSingleUser(blog?.author);
        setAuthor(response?.data || null);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };
    fetchAuthor();
  }, [blog]);
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden flex flex-col max-w-md border border-gray-100">
      {/* Cover Image */}
      <div className="relative w-full h-44">
        <Image
          src={blog?.coverImageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags?.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-100">
              #{tag}
            </span>
          ))}
        </div>
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {blog.title}
        </h2>
        {/* Content Preview */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.content}
        </p>
        {/* Author & Status */}
        <div className="flex items-center justify-between mt-auto mb-2">
          <span className="text-xs text-gray-500">
            By <span className="font-medium">{author?.userName}</span>
          </span>
          <span
            className={`text-xs font-semibold ${
              blog.isPublished ? "text-green-600" : "text-yellow-500"
            }`}>
            {blog.isPublished ? "Published" : "Draft"}
          </span>
        </div>
        {/* Blog Details Button */}
        <Link href={`/blog/${blog._id}`} passHref>
          <Button className="w-full cursor-pointer rounded-2xl mt-2">
            Blog Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
