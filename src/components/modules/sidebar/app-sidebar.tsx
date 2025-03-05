"use client";

import * as React from "react";
import {
  HomeIcon,
  HousePlus,
  SquareTerminal,
  SquareUserRound,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
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
      url: "#",
      icon: SquareUserRound,
    },
    // {
    //   title: "Shop",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Manage Products",
    //       url: "/user/shop/all-products",
    //     },
    //     {
    //       title: "Manage Categories",
    //       url: "/user/shop/category",
    //     },
    //     {
    //       title: "Manage Brands",
    //       url: "/user/shop/brand",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "Profile",
    //       url: "/profile",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton size="lg" asChild>
          <Link href="/">
            <div className="flex items-center justify-center">
              <HomeIcon className="text-[#ed6e5a]" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <h1 className="font-bold text-xl">BasaKhoji</h1>
            </div>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
