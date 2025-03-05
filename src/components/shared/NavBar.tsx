/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import Logo from "@/app/assets/Logo";
import { useUser } from "@/context/UserContext";
import { logOut } from "@/services/AuthServices";
import { protectedRoute } from "@/const";

const formatUserName = (userName: string | undefined) => {
  if (!userName) return "";

  // Extract alphabetic part from the beginning
  const match = userName.match(/^[a-zA-Z]+/);

  return match
    ? match[0].charAt(0).toUpperCase() + match[0].slice(1).toLowerCase()
    : "";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const userName = formatUserName(user?.userName);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Rentals", href: "/all-rental-house" },
    // {
    //   name: "Dashboard",
    //   href: `${user?.role}/dashboard`,
    // },
  ];
  if (user) {
    navLinks.push({ name: "Dashboard", href: `/${user.role}/dashboard` });
  }
  const handleLogout = () => {
    logOut();
    setIsLoading(true);
    if (protectedRoute.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

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
                  className={`relative px-2 py-1 rounded-2xl font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#ed6e5a]"
                      : "text-gray-800 dark:text-white hover:text-[#ed6e5a] after:w-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ed6e5a]/50 after:transition-all after:duration-300 hover:after:w-full"
                  } `}>
                  {navItem.name}
                </Link>
              );
            })}
          </div>
          <div className="flex-2/12">
            {user ? (
              <div className="flex justify-center items-center gap-4">
                <Link
                  href="/profile"
                  className="relative  py-1 font-semibold transition-all duration-300 text-gray-800 dark:text-white hover:text-[#ed6e5a] after:w-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ed6e5a]/50 after:transition-all after:duration-300 hover:after:w-full">
                  {userName}'s Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="hover:text-red-800 flex items-center text-xs cursor-pointer font-semibold text-red-700 dark:text-white">
                  <LogOut /> <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex justify-end items-end">
                <Link
                  href="/login"
                  className="relative  py-1 font-semibold transition-all duration-300 text-gray-800 dark:text-white hover:text-[#ed6e5a] after:w-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ed6e5a]/50 after:transition-all after:duration-300 hover:after:w-full">
                  Login
                </Link>
              </div>
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
                <>
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="px-2 font-semibold text-gray-800 dark:text-white">
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-2 hover:text-red-800 flex items-center  font-semibold text-red-700 dark:text-white">
                    <LogOut /> <span>Logout</span>
                  </button>
                </>
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
