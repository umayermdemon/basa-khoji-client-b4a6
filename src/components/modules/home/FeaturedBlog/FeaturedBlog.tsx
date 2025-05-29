import { TBlog } from "@/types";
import Image from "next/image";

const blogss = [
  {
    title: "Tips for Finding the Perfect Rental Home",
    excerpt:
      "Discover essential tips and tricks to help you find a rental that fits your needs and budget.",
    image: "/images/blog1.jpg",
    href: "/blog/tips-for-finding-perfect-rental",
    date: "May 20, 2025",
  },
  {
    title: "Understanding Rental Agreements in Bangladesh",
    excerpt:
      "Learn what to look for in a rental agreement and how to protect your rights as a tenant.",
    image: "/images/blog2.jpg",
    href: "/blog/rental-agreements-bd",
    date: "May 15, 2025",
  },
  {
    title: "How to Prepare for Moving Day",
    excerpt:
      "A step-by-step guide to make your moving day smooth and stress-free.",
    image: "/images/blog3.jpg",
    href: "/blog/prepare-for-moving-day",
    date: "May 10, 2025",
  },
];

const FeaturedBlog = ({ blogs }: { blogs: TBlog[] }) => {
  console.log(blogs);
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogss.map((blog, idx) => (
            <a
              key={idx}
              href={blog.href}
              className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col overflow-hidden group">
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-muted-foreground mb-2">
                  {blog.date}
                </span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {blog.excerpt}
                </p>
                <span className="mt-4 text-primary font-medium text-sm group-hover:underline">
                  Read More &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
