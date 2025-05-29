"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { AlignLeft, LogOut, User, LayoutDashboard } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { DialogTitle } from "@radix-ui/react-dialog";
import Logo from "@/assets/Logo";
import { useUser } from "@/context/UserContext";
import { logOut } from "@/services/AuthServices";
import { protectedRoute } from "@/const";

// Main nav links (always 6)
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Rentals", href: "/all-rental-house" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

// Mega Menu items
const megaMenuItems = [
  {
    name: "Popular Cities",
    links: [
      { name: "Dhaka", href: "/city/dhaka" },
      { name: "Chattogram", href: "/city/chattogram" },
      { name: "Sylhet", href: "/city/sylhet" },
    ],
  },
  {
    name: "Categories",
    links: [
      { name: "Family House", href: "/category/family" },
      { name: "Bachelor", href: "/category/bachelor" },
      { name: "Sublet", href: "/category/sublet" },
    ],
  },
];

const formatUserName = (userName: string | undefined) => {
  if (!userName) return "";
  const match = userName.match(/^[a-zA-Z]+/);
  return match
    ? match[0].charAt(0).toUpperCase() + match[0].slice(1).toLowerCase()
    : "";
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { user, setIsLoading } = useUser();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const router = useRouter();
  const userName = formatUserName(user?.userName);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    if (pathname !== "/") return;
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logOut();
    setIsLoading(true);
    if (protectedRoute.some((route) => pathname.match(route))) {
      router.push("/");
    } else {
      router.refresh();
    }
  };

  return (
    <nav
      className={`w-full p-4 z-50 shadow-md transition-all duration-300 ${
        pathname === "/" && "fixed"
      } ${
        scrolling
          ? "bg-white dark:bg-gray-900"
          : "bg-transparent dark:bg-gray-900"
      }`}>
      {/* Mobile Nav Toggle */}
      <div className="container mx-auto flex justify-between items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden p-0">
              <AlignLeft
                style={{ width: "25px", height: "25px" }}
                className={`${isHome && !scrolling ? "text-white" : ""}`}
              />
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
                    onClick={() => setIsOpen(false)}
                    className={`px-2 py-1 rounded-2xl font-semibold ${
                      isActive
                        ? "text-[#ed6e5a]"
                        : "text-gray-800 dark:text-white "
                    } `}>
                    {navItem.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
        {/* Logo */}
        <div className="w-full lg:w-auto text-center flex justify-center">
          <Link href="/">
            <div className="flex gap-1">
              <div className="flex items-center justify-center">
                <Logo />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <h1
                  className={`font-bold text-2xl ${
                    isHome && !scrolling && "text-white"
                  }`}>
                  BasaKhoji
                </h1>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center w-full">
          <div className="space-x-4 lg:space-x-6 w-full text-center flex items-center justify-center">
            {navLinks.map((navItem, idx) => {
              const isActive = pathname === navItem.href;
              return (
                <Link
                  key={idx}
                  href={navItem.href}
                  className={`relative px-2 py-1 rounded-2xl text-lg  font-semibold transition-all duration-300  ${
                    isActive
                      ? `text-[#ed6e5a]`
                      : `text-gray-800 dark:text-white hover:text-[#ed6e5a] after:w-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ed6e5a]/50 after:transition-all after:duration-300 hover:after:w-full ${
                          isHome && !scrolling && "text-white"
                        }`
                  }`}>
                  {navItem.name}
                </Link>
              );
            })}
            {/* Mega Menu */}
            <div
              className="relative group hidden lg:flex"
              onMouseEnter={() => setIsMegaOpen(true)}
              onMouseLeave={() => setIsMegaOpen(false)}>
              <button
                className={`relative px-2 py-1 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                  isHome && !scrolling
                    ? "text-white"
                    : "text-gray-800 dark:text-white"
                }`}
                type="button">
                Explore
              </button>
              <div
                className={`absolute left-0 top-full mt-2 ${
                  isMegaOpen ? "flex" : "hidden"
                } bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 p-6 z-50 min-w-[400px] gap-8`}>
                {megaMenuItems.map((section, idx) => (
                  <div key={idx}>
                    <div className="font-bold mb-2">{section.name}</div>
                    <ul>
                      {section.links.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsUserOpen(!isUserOpen)}
                className="flex items-center gap-2 font-semibold cursor-pointer focus:outline-none">
                <User
                  className={`w-6 h-6 ${
                    isHome && !scrolling
                      ? "text-white"
                      : "text-gray-800 dark:text-white"
                  }`}
                />
                <span
                  className={`hidden md:inline ${
                    isHome && !scrolling
                      ? "text-white"
                      : "text-gray-800 dark:text-white"
                  }`}>
                  {userName}
                </span>
              </button>

              {isUserOpen && (
                <div className="absolute z-50 right-0 mt-2 w-52 bg-white dark:bg-gray-800 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 p-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl">
                    <User size={18} />
                    My Profile
                  </Link>
                  <Link
                    href={`/${user.role}/dashboard`}
                    className="flex items-center gap-2 p-3 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl">
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex cursor-pointer items-center gap-2 p-3 text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-2xl">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex justify-end items-end">
              <Link
                href={`/login?redirectPath=${pathname}`}
                className={`relative  py-1 font-semibold transition-all duration-300 ${
                  isHome && !scrolling
                    ? "text-white"
                    : "text-gray-800 dark:text-white"
                } hover:text-[#ed6e5a] after:w-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#ed6e5a]/50 after:transition-all after:duration-300 hover:after:w-full`}>
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
