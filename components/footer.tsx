// app/components/Footer/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-[#F9FAFB] text-gray-300 py-10 md:py-12">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8">
             {/* Brand & Tagline */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center  gap-2 ">
                <Image
                  src="/logo.png"
                  alt="Globe VIN"
                  width={100}
                  height={100}
                  className=" w-6 md:w-10 h-7 md:h-12 text-black"
                />

                <span className="font-medium text-md md:text-lg sm:inline text-[#000000] font-poppins  italic">
                  Globe VIN
                </span>
              </div>

              <p className="text-sm text-gray-400 max-w-xs">
                Driven by the Speed of Thought — empowering students to turn
                ideas into websites and projects in minutes, no coding required.
              </p>
              <div className="flex items-center gap-4">
                <LuFacebook className="text-xl md:text-2xl text-black" />
                <RiTwitterLine className="text-xl md:text-2xl text-black" />
                <RiTwitterLine className="text-xl md:text-2xl text-black" />
                <FaInstagram className="text-xl md:text-2xl text-black" />
              </div>
            </div>
            {/* Quick Links */}
            <div >
              <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal / Policies */}
            <div>
              <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">
                Legal / Policies
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-black transition"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">
                Contact Us
              </h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-items-start gap-3">
                  <FaMapMarkerAlt className="text-gray-500 mt-0.5 flex-shrink-0" />
                  <span>
                    123 Business Street, Suite 100
                    <br />
                    New York, NY 10001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-500" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-black transition"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-gray-500" />
                  <a
                    href="mailto:info@globalvn.com"
                    className="hover:text-black transition"
                  >
                    info@globalvn.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; 2025 Global VN. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-300 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
