"use client";

import * as React from "react";
import {
  CopyPlus,
  HousePlus,
  ListOrdered,
  SquareTerminal,
  SquareUserRound,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import Logo from "@/assets/Logo";

// This is sample data.
const data = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "All User",
      url: "/admin/all-user",
      icon: Users,
    },
    {
      title: "All Rental House",
      url: "/admin/all-rental-house",
      icon: HousePlus,
    },
    {
      title: "My Profile",
      url: "/admin/my-profile",
      icon: SquareUserRound,
    },
  ],
  landlord: [
    {
      title: "Dashboard",
      url: "/landlord/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Add Rental House",
      url: "/landlord/create-rental-house",
      icon: CopyPlus,
    },
    {
      title: "My Rental House",
      url: "/landlord/rental-houses",
      icon: HousePlus,
    },
    {
      title: "Rental Request For Me",
      url: "/landlord/rental-requests",
      icon: ListOrdered,
    },
    {
      title: "My Profile",
      url: "/landlord/my-profile",
      icon: SquareUserRound,
    },
  ],
  tenant: [
    {
      title: "Dashboard",
      url: "/tenant/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "My Rentals",
      url: "/tenant/my-rentals",
      icon: HousePlus,
    },
    {
      title: "My Profile",
      url: "/tenant/my-profile",
      icon: SquareUserRound,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();
  const userRole: "tenant" | "admin" | "landlord" | undefined = user?.role;
  const navItems = data[userRole ?? "tenant"];

  return (
    <Sidebar collapsible="icon" {...props} className="">
      <SidebarHeader>
        <SidebarMenuButton size="lg" asChild>
          <Link href="/" className="px-8">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <h1 className="font-bold text-2xl">BasaKhoji</h1>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
