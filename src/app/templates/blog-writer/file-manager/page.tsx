import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "File Manager | Blog Writer Template",
  description: "File management for Blog Writer template",
};

export default function BlogWriterFileManagerPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">📁 File Manager</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Manage your media files and documents
            </p>
          </div>
        </div>
      </div>

      {/* File Manager Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Images</h3>
            <p className="text-2xl font-bold text-indigo-600">24</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Documents</h3>
            <p className="text-2xl font-bold text-indigo-600">12</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Videos</h3>
            <p className="text-2xl font-bold text-indigo-600">5</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Total Size</h3>
            <p className="text-2xl font-bold text-indigo-600">2.4 GB</p>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Files</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center mr-3">
                  <span className="text-blue-600 dark:text-blue-300 text-sm">📄</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">blog-post-draft.md</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">2.3 MB • 2 hours ago</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">Download</button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded flex items-center justify-center mr-3">
                  <span className="text-green-600 dark:text-green-300 text-sm">🖼️</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">featured-image.jpg</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">1.8 MB • 4 hours ago</p>
                </div>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 text-sm">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
