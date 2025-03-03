"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import Logo from "@/app/assets/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "All Rentals", href: "/all-rental-house" },
  {
    name: "Dashboard",
    href: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = false;
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center w-full">
          <div className="space-x-6 w-full text-center">
            {navLinks.map((navItem, idx) => {
              const isActive = pathname === navItem.href;

              return (
                <Link
                  key={idx}
                  href={navItem.href}
                  className={`relative px-2 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#ed6e5a]"
                      : "text-gray-800 dark:text-white hover:text-[#ed6e5a] after:w-0"
                  } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ed6e5a]/50 after:transition-all after:duration-300 hover:after:w-full`}>
                  {navItem.name}
                </Link>
              );
            })}
          </div>
          <div>
            {user ? (
              <Link href="/profile" className="hover:text-blue-500">
                My Profile
              </Link>
            ) : (
              <Link
                href="/login"
                className="hover:text-[#ed6e5a] font-semibold text-gray-800 dark:text-white">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <DialogTitle></DialogTitle>
            <div className="flex flex-col space-y-4 mt-6">
              {navLinks.map((navItem, idx) => {
                const isActive = pathname === navItem.href;

                return (
                  <Link
                    key={idx}
                    href={navItem.href}
                    className={`px-2 py-1 rounded-2xl font-semibold ${
                      isActive
                        ? "text-[#ed6e5a]"
                        : "text-gray-800 dark:text-white "
                    } `}>
                    {navItem.name}
                  </Link>
                );
              })}

              {user ? (
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="px-2 font-semibold text-gray-800 dark:text-white">
                  My Profile
                </Link>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-2 font-semibold text-gray-800 dark:text-white">
                  Login
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
