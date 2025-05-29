"use client";

import { getSingleUser } from "@/services/User";
import { TBlog, TUser } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogDetailsPage = ({ blog }: { blog: TBlog }) => {
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
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-6">
        <Image
          src={blog.coverImageUrl}
          alt={blog.title}
          width={800}
          height={350}
          className="rounded-xl object-cover w-full h-56"
        />
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        {blog.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-100">
            #{tag}
          </span>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm text-gray-500">
          By <span className="font-medium">{author?.userName}</span>
        </span>
        <span
          className={`text-xs font-semibold ${
            blog.isPublished ? "text-green-600" : "text-yellow-500"
          }`}>
          {blog.isPublished ? "Published" : "Draft"}
        </span>
      </div>
      <div className="text-gray-800 text-base whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
