"use client"

import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-lg text-gray-900">Globe VIN</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Your trusted partner for comprehensive vehicle history reports worldwide. We deliver authentic data from
              international sources.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300"
              >
                <Facebook className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300"
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  Sample Report
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  API Config
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  VIN Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  Business Hours
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm font-medium"
                >
                  We are open 24/7
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty column for spacing on desktop */}
          <div></div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-gray-600 text-sm">© {currentYear} Global VIN. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
