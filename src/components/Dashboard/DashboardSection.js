import React from 'react';
import { Folder, Home, FileText } from 'lucide-react';
import Link from 'next/link';

const Body = () => {
  const projects = [
    { id: 1, name: 'Project Kindergarten' },
    { id: 2, name: 'Project firehouse' },
    { id: 3, name: 'Project School' },
    { id: 4, name: 'Project Elementary School' },
    { id: 5, name: 'Project Kindergarten 2' },
    { id: 6, name: 'Project XYZ' },
  ];

  return (
    <div className="flex h-full bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 font-sans border-r border-black ">
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-gray-700 mb-5">
            <Home className="mr-3" size={22} strokeWidth={1} />
            <span className="text-base">Home</span>
          </a>
          <a href="#" className="flex items-center text-gray-700 mb-5">
            <Folder className="mr-3" size={22} strokeWidth={1} />
            <span className="text-base">Folder</span>
          </a>
          <div className="flex items-start mb-5 text-gray-700">
            <FileText className="mr-3 " size={22} strokeWidth={1} />
            <div>
              <span className="text-base text-black">My Projects</span>
              <ul className="mt-2 ml-0.5 space-y-1">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700">in process</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700">Approved</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-2"></span>
                  <span className="text-sm text-gray-700">Rejected</span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-black">Last edited:</h2>
          <Link href="/dashboard/create-project">
            <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Create New
            </button>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-6 max-w-4xl">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col items-center">
              <div className="bg-gray-300 w-full aspect-square flex items-center justify-center">
                {/* You can add an icon or image here if needed */}
              </div>
              <p className="mt-2 text-center text-gray-700">{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;