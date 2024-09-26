import Link from 'next/link';
import React from 'react';

const ProjectCard = ({ title }) => (
  <div className="flex flex-col">
    <div className="bg-gray-100 w-full aspect-square"></div>
    <p className="text-sm text-gray-700 mt-2">{title}</p>
  </div>
);

const Body = () => {
  const projects = [
    "Project Kindergarten",
    "Project firehouse",
    "Project School",
    "Project Elementary School",
    "Project Kindergarten 2",
    "Project XYZ"
  ];

  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-black">Last edited:</h2>
        <Link href="/dashboard/create-project">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl flex items-center">
          Create New
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project} />
        ))}
      </div>
    </div>
  );
};

export default Body;