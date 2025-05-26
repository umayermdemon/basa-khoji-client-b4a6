import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#181A20] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">BasaKhoji</h3>
          <p className="text-gray-400">Total Free Customer Care</p>
          <p className="font-semibold mt-1">+880 1234 567 890</p>
          <p className="text-gray-400 mt-3">Need Live Support?</p>
          <p className="font-semibold">info@basakhoji.com</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Keep Yourself Up to Date
          </h3>
          <div className="flex">
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-gray-300 text-black border-none flex-1"
            />
            <Button className="bg-white text-black ml-2 cursor-pointer hover:text-white">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing Plans
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} BasaKhoji - All rights reserved |
        <a href="#" className="ml-2 hover:text-white">
          Privacy
        </a>{" "}
        ·
        <a href="#" className="ml-2 hover:text-white">
          Terms
        </a>{" "}
        ·
        <a href="#" className="ml-2 hover:text-white">
          Sitemap
        </a>
      </div>
    </footer>
  );
};

export default Footer;
