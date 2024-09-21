"use client";
import React from 'react';
import { EyeOff } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            The portal for fast and efficient processing of building applications with AI-supported checking. Please log in to track the status of your construction projects and submit documents.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">User name or e-mail address</label>
              <input id="username" name="username" type="text" required 
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                     placeholder="User name or e-mail address" />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" required 
                     className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                     placeholder="Password" />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <EyeOff className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgotten your username?
              </a>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgotten your password?
              </a>
            </div>
          </div>

          <div>
          <Link href="/dashboard">
            <button type="submit" 
      
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Login
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;

