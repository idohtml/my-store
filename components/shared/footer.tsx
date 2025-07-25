import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Facebook, Globe } from "lucide-react";
import {
  NAV_LINKS,
  SOCIAL_LINKS,
  CUSTOMER_SERVICE_LINKS,
} from "@/lib/constants";

// Helper to get the main shop categories from NAV_LINKS
const SHOP_LINKS =
  NAV_LINKS.find((l) => l.label === "Products")?.children || [];

// Helper to map social label to Lucide icon
const socialIcon = (label: string) => {
  switch (label) {
    case "Instagram":
      return <Instagram size={24} />;
    case "Twitter":
      return <Twitter size={24} />;
    case "Facebook":
      return <Facebook size={24} />;
    case "TikTok":
      return <Globe size={24} />;
    default:
      return <Globe size={24} />;
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-100 py-12 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">About Us</h3>
            <p className="text-sm text-gray-400 mb-2">
              My Store is your destination for the latest in fashion. We offer
              premium quality clothing and accessories for Men, Women, and Kids.
              Shop the latest trends and enjoy fast shipping and easy returns.
            </p>
          </div>
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">
              Customer Service
            </h3>
            <ul className="space-y-2 text-sm">
              {CUSTOMER_SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">Shop</h3>
            <ul className="space-y-2 text-sm">
              {SHOP_LINKS.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="hover:underline">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4 tracking-wide">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="transition hover:text-pink-400"
                >
                  {socialIcon(social.label)}
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500">#MyStoreFashion</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} My Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
