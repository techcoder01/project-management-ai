
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Bell, User } from 'lucide-react';
import logo from "@/assests/images/logo.png"



const AppBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Guide', href: '/guide' },
    { name: 'Support', href: '/support' },
  ];

  return (
    <nav className="bg-white border-b border-black">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-30">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={logo.src} // Ensure you have this logo in your public folder
                alt="Bauantrag DE Logo"
                width={180}
                height={40}
                className="h-30 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative ml-8 first:ml-0"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
                {activeDropdown === item.name && (
                  <div className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    {/* Dropdown content here */}
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {/* Add dropdown items here */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
  