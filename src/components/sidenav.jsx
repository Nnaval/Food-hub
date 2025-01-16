import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Inbox,
  },
  {
    title: "Restaurant",
    url: "/dashboard/resturants",
    icon: Calendar,
  },
  {
    title: "Logistics",
    url: "/dashboard/logistics",
    icon: Search,
  },
  {
    title: "Products",
    url: "/products",
    icon: Settings,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: Settings,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: Settings,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

// example
// const Example = ({icon, title, value}) => {
//   return (
//     <div>
//       <p>{icon}</p>
//       <p>{title}</p>
//       <p>{value}</p>
//     </div>
//   )
// }


export function Sidenav() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem > 
            headeyvv
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="p-10">
        <SidebarGroup >
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
