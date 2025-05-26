import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  DollarSign,
  Home,
  Key,
  Phone,
  Shield,
  ShieldCheck,
} from "lucide-react";
import styles from "./about.module.css";
import { Button } from "@/components/ui/button";
import about2 from "@/assets/about2.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className={`${styles.about} relative w-full h-64 bg-cover bg-center`}>
        <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-sm">Home / For Rent</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 mt-8 px-6 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl font-bold mb-4 text-center">
            BasaKhoji – <br /> Your Smart Rental & Housing Solution
          </h2>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6">
          <div>
            <p className="text-gray-600">
              At BasaKhoji, we are revolutionizing the way people find homes and
              rental spaces. As a Smart Rental & Housing Solution, our goal is
              to simplify property searches, making them faster, easier, and
              more reliable.
            </p>
            <p className="text-gray-600 mt-4">
              Whether you&apos;re looking for a rental, searching for your dream
              home, or listing a property, BasaKhoji connects you with the right
              opportunities. We prioritize transparency, efficiency, and
              user-friendly solutions to ensure a hassle-free experience for
              both tenants and property owners.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-around">
            <Card className="flex flex-row md:flex-col items-center gap-4 p-6 shadow-md w-full sm:w-1/2">
              <Home className="w-10 h-10 text-primary" />
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-black">
                  Modern Villas
                </h3>
                <p className="text-gray-500">
                  Integer convallis condimentum sem.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-row md:flex-col items-center gap-4 p-6 shadow-md w-full sm:w-1/2">
              <Shield className="w-10 h-10 text-primary" />
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-black">
                  Secure Payment
                </h3>
                <p className="text-gray-500">
                  Praesent sollicitudin lectus <br /> ut pharetra pulvinar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#fdf6f3] container mx-auto my-8 py-12 px-6 lg:px-28 rounded-2xl flex flex-col md:flex-row items-center justify-around gap-8">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Let’s Find The Right Selling Option For You
          </h2>
          <div className="space-y-5">
            <ServiceItem
              icon={<ShieldCheck className="text-[#e0917e]" />}
              title="Property Management"
              description="We handle everything from tenant placement to maintenance, ensuring a hassle-free experience."
            />
            <ServiceItem
              icon={<Key className="text-[#e0917e]" />}
              title="Mortgage Services"
              description="Get the best mortgage rates and expert advice tailored to your financial needs."
            />
            <ServiceItem
              icon={<DollarSign className="text-[#e0917e]" />}
              title="Currency Services"
              description="Seamless currency exchange and financial solutions for your property transactions."
            />
          </div>
          <Button className="mt-6 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 w-full md:w-auto justify-center">
            Learn More <ArrowRight size={18} />
          </Button>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Image
            src={about2}
            alt="Couple discussing home purchase"
            className="max-w-full h-auto rounded-xl object-cover"
            style={{ maxHeight: 350, width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#F7F7F7] container mx-auto my-8 py-12 px-6 lg:p-28 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl font-bold">Need help? Talk to our expert.</h1>
          <p>Talk to our experts or Browse through more properties.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 md:mt-0">
          <Button size={"lg"} className="rounded-2xl w-full sm:w-auto">
            Contact Us
          </Button>
          <Button
            size={"lg"}
            className="rounded-2xl w-full sm:w-auto flex items-center gap-2">
            <Phone /> 012345678
          </Button>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <div className="p-3 bg-[#fdf1ed] rounded-full">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
