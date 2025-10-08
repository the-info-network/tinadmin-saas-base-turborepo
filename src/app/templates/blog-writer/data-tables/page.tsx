import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Data Tables | Blog Writer Template",
  description: "Advanced data tables for Blog Writer template",
};

export default function BlogWriterDataTablesPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">📊 Data Tables</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Advanced data tables with sorting, filtering, and pagination
            </p>
          </div>
        </div>
      </div>

      {/* Data Tables Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Content Library</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search content..."
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Filter
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                  Title ↑
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                  Category
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                  Views
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 text-gray-900 dark:text-white">Complete Guide to Content Marketing</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Marketing</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">5,420</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">Edit</button>
                    <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-4 text-gray-900 dark:text-white">SEO Optimization Techniques</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">SEO</td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">3,890</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">Edit</button>
                    <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">Showing 1-10 of 50 results</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm">Previous</button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm">3</button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
