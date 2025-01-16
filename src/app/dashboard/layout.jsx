import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidenav } from "@/components/Sidenav";
const Dashboardlayout = ({ children }) => {
  return (
    <>
      <SidebarProvider>
        <Sidenav />
        <SidebarTrigger />

        {children}
      </SidebarProvider>
    </>
  );
};

export default Dashboardlayout;
