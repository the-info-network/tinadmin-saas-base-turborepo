import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Form Layout | Blog Writer Template",
  description: "Form layouts for Blog Writer template",
};

export default function BlogWriterFormLayoutPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">📋 Form Layout</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Structured form layouts for content management workflows
            </p>
          </div>
        </div>
      </div>

      {/* Form Layouts */}
      <div className="space-y-6">
        {/* Multi-Step Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Multi-Step Content Creation</h2>
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
              <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Basic Info</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-medium">2</div>
              <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Content</span>
            </div>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 mx-4"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-medium">3</div>
              <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">SEO</span>
            </div>
          </div>

          {/* Step 1 Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Post Title
              </label>
              <input
                type="text"
                placeholder="Enter post title..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Author
              </label>
              <input
                type="text"
                placeholder="Enter author name..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>Select category...</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Marketing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Publish Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Next Step
            </button>
          </div>
        </div>

        {/* Sidebar Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Editor</h2>
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-[300px]">
              <p className="text-gray-500 dark:text-gray-400">Start writing your content here...</p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>Draft</option>
                  <option>Published</option>
                  <option>Scheduled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Visibility
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Password Protected</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Featured Image
                </label>
                <button className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                  Choose Image
                </button>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="comments"
                  className="w-4 h-4 text-indigo-600 rounded"
                />
                <label htmlFor="comments" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Allow comments
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
