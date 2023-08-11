"use client";

import { Menu, Sparkles } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const font = Poppins({
  weight: "600",
  subsets: ["latin-ext"],
});

function Navbar() {
  return (
    <div className="fixed z-50 flex items-center justify-between w-full px-4 py-2 border-b border-primary/10 bg-secondary h-16">
      <div className="flex items-center">
        <Menu className="block md:hidden" />
        <Link href="/">
          <h1
            className={cn(
              "hidden text-xl font-bold md:block md:text-3-xl text-primary",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button variant="premium">
          Upgrade <Sparkles className="h-4 w-4 fill-white text-white ml-2" />{" "}
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
