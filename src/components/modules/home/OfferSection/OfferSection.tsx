import { Percent, BadgeCheck, ShieldCheck } from "lucide-react";

import styles from "./offer.module.css";

const offers = [
  {
    icon: <Percent className="w-8 h-8 text-primary" />,
    title: "Special Discounts",
    description:
      "Get exclusive seasonal discounts on select rental properties.",
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-primary" />,
    title: "Verified Listings",
    description:
      "All properties are verified for your safety and peace of mind.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Transactions",
    description: "Enjoy safe and secure payment options for every rental.",
  },
];

const OfferSection = () => {
  return (
    <section className={`${styles.offer} relative w-full bg-cover bg-center`}>
      <div className="container mx-auto p-4 absolute inset-0  bg-opacity-30">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-3">{offer.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
              <p className="text-sm text-muted-foreground">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
