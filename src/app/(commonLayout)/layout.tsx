
import Footer from "@/components/Shared/Footer/Footer";
import { Navbar } from "@/components/Shared/Navbar/Navbar";
import React from "react";

export default function CommonLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
