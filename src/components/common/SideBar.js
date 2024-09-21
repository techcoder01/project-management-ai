
import { Home, Folder, FileText } from 'lucide-react';

const Sidebar = () =>  {
    return (
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
    );
}

export default Sidebar;