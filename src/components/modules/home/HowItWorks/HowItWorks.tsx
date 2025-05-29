import { Search, FileCheck2, Handshake } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Search Properties",
    description:
      "Browse and filter thousands of verified rental listings tailored to your needs.",
  },
  {
    icon: <FileCheck2 className="w-8 h-8 text-primary" />,
    title: "Contact & Visit",
    description:
      "Connect with property owners or agents and schedule visits at your convenience.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: "Book & Move In",
    description:
      "Complete secure transactions and move into your new home with ease.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-white/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl ">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
