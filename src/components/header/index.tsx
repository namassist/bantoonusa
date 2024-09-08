"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignJustify, X } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="z-[10000] max-w-screen top-0 left-0 center fixed w-screen text-gray-800">
      <div className="container mx-auto">
        <nav className="w-full h-[80px] grid items-center">
          <div className="flex justify-between items-center relative z-[10000]">
            <Link href="/" className="relative flex items-center gap-1">
              <Image
                src="/logo.png"
                alt="logo"
                width="500"
                height="500"
                className="rounded-lg object-cover flex-shrink-0 w-[32px]"
              />
              <span className="font-semibold">
                bantoo<span className="text-yellow-700">nusa</span>
              </span>
            </Link>
            <ul className="hidden sm:flex items-center justify-center gap-10 button-large capitalize">
              <Link href="#home">Home</Link>
              <Link href="#layanan">Layanan</Link>
              <Link href="#harga">Harga</Link>
              <Link href="#tentang-kami">tentang kami</Link>
            </ul>
            <Link href="/" className="button-large hidden sm:block">
              Hubungi Kami
            </Link>
            <div className="block sm:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost">
                    {isOpen ? <X /> : <AlignJustify />}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side={"top"}
                  className="h-screen z-[1000] bg-[#1D1F22] mt-[80px]"
                >
                  <ul className="flex flex-col gap-6 button-large capitalize">
                    <Link href="#home">Home</Link>
                    <Link href="#layanan">Layanan</Link>
                    <Link href="#harga">Harga</Link>
                    <Link href="#tentang-kami">tentang kami</Link>
                    <Link href="#tentang-kami" className="text-yellow-400">
                      hubungi kami
                    </Link>
                  </ul>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full border -z-1 backdrop-filter backdrop-blur-lg border-neutral-200 transition-colors duration-1000 ease-in-out ${
              scrolled ? "bg-neutral-200/50" : "bg-neutral-100"
            }`}
          ></div>
        </nav>
      </div>
    </header>
  );
};
