import BlogPage from "@/components/modules/blog";
import { getBlogData } from "@/services/Blog";
import React from "react";

const Blog = async () => {
  const data = await getBlogData();
  const blogs = data?.data;
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs</h1>
      <p className="text-gray-600 mb-6 text-center">
        Welcome to the blog section. Here you will find the latest articles and
        updates.
      </p>
      <BlogPage blogs={blogs} />
    </div>
  );
};

export default Blog;
