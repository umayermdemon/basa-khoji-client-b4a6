import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className={`${styles.contact} relative w-full h-64 bg-cover bg-center `}>
        <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-sm">Home / Contact</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-12 px-6 flex flex-col lg:flex-row gap-12">
        {/* Contact Info */}
        <div className="lg:w-1/2 flex flex-col gap-8">
          <h2 className="text-2xl text-center font-bold mb-2 text-[#ed6e5a]">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            Have questions, feedback, or need support? Our team is here to help
            you find your perfect home or answer any queries about our services.
          </p>
          <div className="flex flex-col gap-4">
            <ContactInfo
              icon={<Phone className="text-[#ed6e5a]" />}
              label="Phone"
              value="+880 1234 567890"
            />
            <ContactInfo
              icon={<Mail className="text-[#ed6e5a]" />}
              label="Email"
              value="support@basakhoji.com"
            />
            <ContactInfo
              icon={<MapPin className="text-[#ed6e5a]" />}
              label="Address"
              value="House 123, Road 45, Gulshan, Dhaka, Bangladesh"
            />
          </div>
          <div className="mt-8">
            <iframe
              title="BasaKhoji Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=90.4125%2C23.8103%2C90.4225%2C23.8203&amp;layer=mapnik"
              className="w-full h-48 rounded-lg border"
              loading="lazy"></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 justify-center">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Send Us a Message
          </h3>
          <form className="flex flex-col gap-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed6e5a]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed6e5a]"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ed6e5a]"
                placeholder="How can we help you?"
              />
            </div>
            <Button
              type="submit"
              className="bg-[#ed6e5a] text-white flex cursor-pointer items-center gap-2 hover:bg-[#e05a45]">
              <Send size={18} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-3 bg-[#fdf1ed] rounded-full">{icon}</div>
      <div>
        <div className="font-semibold text-gray-900">{label}</div>
        <div className="text-gray-600">{value}</div>
      </div>
    </div>
  );
}
