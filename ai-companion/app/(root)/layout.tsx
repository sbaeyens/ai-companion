import React from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex mt-16 w-20 felx-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="h-full pt-16 md:pl-20">{children}</main>
    </div>
  );
}

export default RootLayout;
