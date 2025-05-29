import { Home, Users, Briefcase, Building2 } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Family House",
    icon: <Home className="w-8 h-8 text-primary" />,
    href: "/category/family",
    description: "Spacious homes for families",
  },
  {
    name: "Bachelor",
    icon: <Users className="w-8 h-8 text-primary" />,
    href: "/category/bachelor",
    description: "Affordable options for bachelors",
  },
  {
    name: "Sublet",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    href: "/category/sublet",
    description: "Short-term and shared rentals",
  },
  {
    name: "Commercial",
    icon: <Building2 className="w-8 h-8 text-primary" />,
    href: "/category/commercial",
    description: "Shops, offices, and more",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href} passHref>
              <Card className="flex flex-col items-center gap-3 p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <span className="mb-2">{cat.icon}</span>
                <span className="text-lg font-semibold group-hover:text-primary">
                  {cat.name}
                </span>
                <span className="text-sm text-muted-foreground text-center">
                  {cat.description}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
