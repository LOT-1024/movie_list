"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import icon from "@/assets/logo.png";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Navbar = ({ children }: { children: React.ReactNode }) => {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "TV Series",
      path: "/tvseries",
    },
  ];

  const pathname = usePathname();
  const { scrollY } = useScroll();
  const rawOpcaity = useTransform(scrollY, [0, 50], [1, 0]);
  const opacity = useSpring(rawOpcaity, { stiffness: 200, damping: 30 });

  return (
    <motion.header
      style={{ opacity }}
      className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
    >
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <div className="w-14">
            <Image src={icon} alt="Image Icon" />
          </div>
          <span className="sr-only">Movie Wido</span>
        </Link>
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={`${
              pathname === item.path
                ? "text-foreground"
                : "text-muted-foreground"
            } whitespace-nowrap transition-colors hover:text-foreground text-base`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Image alt="Image icon" src={icon} className="w-14" />
              <span className="sr-only">Movie Wido</span>
            </Link>
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                } hover:text-foreground`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        {children}
      </div>
    </motion.header>
  );
};

export default Navbar;
