"use client";

import { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Sample Report", href: "/Report" },
    { label: "API Config", href: "/ApiConfig" },
    { label: "VIN Search", href: "/Search" },
    { label: "About Us", href: "/AboutUs" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1800px] mx-auto py-2 md:py-5">
        <div className="flex justify-between items-center gap-20 h-16">
          {/* Logo */}
          <div className="flex items-center  gap-2 ">
            <Image
              src="/logo.png"
              alt="Globe VIN"
              width={100}
              height={100}
              className=" w-6 md:w-10 h-7 md:h-12 text-white"
            />

            <span className="font-medium text-md md:text-lg sm:inline text-[#000000] font-poppins  italic">
              Globe VIN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden  md:flex items-start align-middle md:flex-1  gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#919193] hover:text-[#000000] text-base font-normal transition-colors duration-300 font-roboto"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop: Customers Badge + Icons */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 from-purple-50 to-blue-50 px-4 py-2 rounded-full border border-[#C7C7C7]  hover:shadow-md transition-shadow duration-300">
                <div className="flex -space-x-2">
                  <Image
                    src="/nabAbarter.png"
                    alt="Customer 1"
                    width={100}
                    height={100}
                    className="w-15 h-8 rounded-full border-2 border-white "
                  />
                </div>
                <span className="text-base  text-black">10k+ Customers</span>
              </div>
              <span className="h-10 border-l border-[#C7C7C7]  "></span>
              <div className="flex items-center gap-2">
                <button className=" hover:transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Image
                    src="/search.png"
                    alt="Search"
                    width={100}
                    height={100}
                    className="w-10 h-10 "
                  />
                </button>
                <button className=" hover:transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Image
                    src="/avarter.png"
                    alt="User"
                    width={100}
                    height={100}
                    className="w-10 h-10 "
                  />
                </button>
              </div>
            </div>

            {/* Mobile: Customers Badge + Icons + Menu */}
            <div className="flex  md:hidden items-center gap-2">
              <div className="flex items-center gap-1 p-1 rounded-full border border-[#C7C7C7] hover:shadow-md transition-shadow duration-300">
                <div className="flex -space-x-1.5">
                  <Image
                    src="/nabAbarter.png"
                    alt="Customer 1"
                    width={100}
                    height={100}
                    className="w-6 h-6 rounded-full border-2 border-white"
                  />
                </div>
                <span className="text-[10px]  text-black">10k+ Customers</span>
              </div>

              <span className="h-7 border-l border-[#C7C7C7]  "></span>

              {/* Search and User Icons */}
              <div className="flex items-center">
                <button className="hover:transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Image
                    src="/search.png"
                    alt="Search"
                    width={100}
                    height={100}
                    className="w-6 h-6"
                  />
                </button>
               
              </div>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 lg:hidden md:hidden hover:bg-gray-100 rounded-lg transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white bg-black rounded-full p-1" />
              ) : (
                <Menu className="w-6 h-6 text-white bg-black rounded-full p-1" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-16 md:hidden bg-white border-b border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-300 font-medium"
                  style={{
                    animation: isOpen
                      ? `slideDown 0.3s ease-out ${index * 0.08}s forwards`
                      : "none",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
