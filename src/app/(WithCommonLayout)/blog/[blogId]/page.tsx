import BlogDetailsPage from "@/components/modules/blog/BlogDetailsPage";
import { getBlogById } from "@/services/Blog";

const BlogDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await getBlogById(blogId);
  const blog = res?.data;
  return (
    <div>
      <BlogDetailsPage blog={blog} />
    </div>
  );
};

export default BlogDetails;
