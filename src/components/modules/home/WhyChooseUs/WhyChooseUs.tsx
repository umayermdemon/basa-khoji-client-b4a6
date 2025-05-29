import { ShieldCheck, Users, Home, Clock } from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Trusted & Verified",
    description:
      "All listings are thoroughly verified for your safety and peace of mind.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Personalized Support",
    description:
      "Our support team is always ready to help you find your perfect home.",
  },
  {
    icon: <Home className="w-8 h-8 text-primary" />,
    title: "Wide Range of Options",
    description:
      "Choose from family homes, bachelor pads, sublets, and commercial spaces.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Fast & Easy Process",
    description: "Quick search, easy booking, and seamless move-in experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose Basa Khoji?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-muted rounded-lg shadow flex flex-col items-center p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-3">{reason.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
