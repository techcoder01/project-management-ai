"use client";

import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import Sidebar from "@/components/common/SideBar";

const Form = () => {
  const [formData, setFormData] = useState({
    projectTitle: '',
    location: '',
    clientApplicant: '',
    projectType: '',
    buildingClass: '',
    buildingUsage: '',
    numberOfFloors: '',
    grossFloorArea: '',
    buildingVolume: '',
    technicalData: '',
    relevantAuthorities: '',
    documentList: ''
  });

  const handleExtraction = () => {
    setFormData({
      projectTitle: 'New construction of a kindergarten with 3 groups',
      location: 'Goethestraße 23, 36208 Wildeck-Obersuhl',
      clientApplicant: 'Gemeindevorstand der Gemeinde Wildeck',
      projectType: 'Kindergarten (New daycare construction)',
      buildingClass: 'GK 3 (Building class 3)',
      buildingUsage: 'Childcare facility for 3 groups',
      numberOfFloors: '1 (single-story building)',
      grossFloorArea: '712.48 m² (ground floor area)',
      buildingVolume: '2,856.80 m³ (gross building volume)',
      technicalData: 'Fire resistance classes EI 90-M, EI 60-M; standard heating system',
      relevantAuthorities: 'The local building authority, municipality of Wildeck',
      documentList: 'Building application, construction plans, fire protection concept'
    });
  };

  return (
    <div className="flex flex-col md:flex-row bg-white">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 font-sans">
        <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-black">New Project</h1>
        <form>
          <div className="mb-4 md:mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
            <input type="text" id="name" name="name" className="w-full md:w-1/2 p-2 bg-blue-50 border border-gray-300 rounded" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-6 md:mb-8">
            <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-700 border-dashed rounded text-sm text-gray-600 w-full md:w-auto">
              <Upload className="mr-2" size={18} />
              Upload building application
            </button>
            <button
              type="button"
              onClick={handleExtraction}
              className="px-6 py-2 rounded text-sm text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center w-full md:w-auto"
            >
              extraction
              <span className="ml-1 text-xs">&#9733;</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-16 md:gap-y-4">
            {Object.entries(formData).map(([key, value], index) => (
              <div key={key} className={index >= 10 ? "col-span-1 md:col-span-2" : ""}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}:
                </label>
                <p className="text-sm text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;