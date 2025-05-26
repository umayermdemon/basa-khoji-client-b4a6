import { AppSidebar } from "@/components/modules/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Logo from "../../assets/Logo";
import { NavUser } from "@/components/modules/sidebar/nav-user";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full justify-between pr-12">
            <div className="flex items-center gap-2 px-4 ">
              <SidebarTrigger className="-ml-1 cursor-pointer" />
            </div>
            <div>
              <NavUser />
            </div>
          </div>
          <div className="md:hidden  mx-8 flex items-center justify-center w-1/2 gap-2 text-xl font-bold text-gray-800 dark:text-white">
            <Logo /> <span>Dashboard</span>
          </div>
        </header>
        <div className="p-4 pt-0 min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
