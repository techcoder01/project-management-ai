"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Bell, User, ChevronDown, Home, Info, DollarSign, BookOpen, HelpCircle } from 'lucide-react';
import logo from "@/assests/images/logo.svg"

const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Mock user data (replace with actual user data in a real application)
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com"
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  const menuItems = [
    { title: 'About', href: '#about', icon: Info },
    { title: 'Pricing', href: '#pricing', icon: DollarSign },
    { title: 'Guide', href: '#guide', icon: BookOpen },
    { title: 'Support', href: '#support', icon: HelpCircle },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-20 bg-white transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-14 w-auto" src={logo.src} alt="BauantragDE Logo" />
            </div>
            <div className="hidden md:flex md:flex-grow md:justify-center">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 inline-flex items-center px-3 py-2 text-base font-medium border-b-2 border-transparent transition-colors duration-200"
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative">
                <button 
                  onClick={toggleUserMenu}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <User className="h-8 w-8 rounded-full bg-gray-400 p-1 border border-gray-300" />
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 w-64 mt-2 py-2 bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">{userData.name}</p>
                      <p className="text-sm text-gray-500">{userData.email}</p>
                    </div>
                    <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                    <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                    <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        <div className="h-px bg-black"></div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden" style={{top: '65px'}}>
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-transparent hover:border-gray-300 transition-colors duration-200"
              >
                <item.icon className="inline-block mr-2 h-5 w-5" />
                {item.title}
                <ChevronDown className="float-right mt-1 h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <button 
              onClick={toggleUserMenu}
              className="flex items-center w-full px-4 py-2 text-left"
            >
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full bg-gray-400 p-1 border border-gray-300" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{userData.name}</div>
                <div className="text-sm font-medium text-gray-500">{userData.email}</div>
              </div>
              <ChevronDown className="ml-auto h-5 w-5 text-gray-400" />
            </button>
            {showUserMenu && (
              <div className="mt-3 space-y-1">
                <a href="#profile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Profile</a>
                <a href="#settings" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Settings</a>
                <a href="#logout" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AppBar;