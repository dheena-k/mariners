"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Property", path: "/property" },
  ];

  return (
    <nav className="w-full border-b bg-green-50 border-gray-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="h-auto w-20 sm:w-24 md:w-28"
            priority
          />
        </Link>

        <ul className="flex items-center gap-4 sm:gap-6 md:gap-8">
          {menu.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`text-sm transition-colors duration-200 sm:text-base ${
                  pathname === item.path
                    ? "font-semibold text-green-600"
                    : "text-slate-800 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}
