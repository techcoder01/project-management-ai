'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assests/images/logo.png"
const AppBar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-100">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src={logo.src} // Ensure you have this logo in your public folder
                alt="Bauantrag DE Logo"
                width={200}
                height={60}
                className="h-3 w-auto"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <span className="text-gray-800 px-3 py-2 text-sm font-medium">
             
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;