"use client";

import { LogOut, type LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logOut } from "@/services/AuthServices";
import { useUser } from "@/context/UserContext";
import { protectedRoute } from "@/const";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  const { setIsLoading } = useUser();
  const router = useRouter();
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
    <SidebarGroup>
      <SidebarMenu className="mt-12 mb-4">
        {items
          .filter((item) => item.title === "Dashboard")
          .map((item) => (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className="p-6 rounded-2xl hover:bg-[#181A20] hover:text-white">
                  <Link
                    href={item.url}
                    className={` ${
                      item.url === pathname
                        ? "bg-[#181A20] p-4 text-white text-[1rem]"
                        : "text-[1rem] p-4"
                    }`}>
                    {item.icon && <item.icon />}
                    <span className="font-semibold">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          ))}
      </SidebarMenu>
      <SidebarGroupLabel className="text-gray-800 text-base mb-4">
        Manage Listings
      </SidebarGroupLabel>
      <SidebarMenu className="">
        {items
          .filter(
            (item) => item.title !== "Dashboard" && item.title !== "My Profile"
          )
          .map((item) => (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className="p-6 rounded-2xl hover:bg-[#181A20] hover:text-white">
                  <Link
                    href={item.url}
                    className={` ${
                      item.url === pathname
                        ? "bg-[#181A20] p-4 text-white text-[1rem]"
                        : "text-[1rem] p-4"
                    }`}>
                    {item.icon && <item.icon />}
                    <span className="font-semibold">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          ))}
      </SidebarMenu>
      <SidebarGroupLabel className="text-gray-800 text-base my-4">
        Manage Account
      </SidebarGroupLabel>
      <SidebarMenu>
        {items
          .filter((item) => item.title === "My Profile")
          .map((item) => (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip={item.title}
                  className="p-6 rounded-2xl hover:bg-[#181A20] hover:text-white">
                  <Link
                    href={item.url}
                    className={` ${
                      item.url === pathname
                        ? "bg-[#181A20] p-4 text-white text-[1rem]"
                        : "text-[1rem] p-4"
                    }`}>
                    {item.icon && <item.icon />}
                    <span className="font-semibold">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </Collapsible>
          ))}
        <Collapsible>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              tooltip="Logout"
              className="p-6 rounded-2xl hover:bg-[#181A20] hover:text-white cursor-pointer font-semibold text-[1rem]">
              <LogOut />
              Log out
            </SidebarMenuButton>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
