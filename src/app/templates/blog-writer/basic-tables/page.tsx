import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Basic Tables | Blog Writer Template",
  description: "Table components for Blog Writer template",
};

export default function BlogWriterBasicTablesPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">📊 Basic Tables</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Data tables for content management and analytics
            </p>
          </div>
        </div>
      </div>

      {/* Tables Content */}
      <div className="space-y-6">
        {/* Posts Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Posts</h2>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              + Add Post
            </button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Category</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Author</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">How to Build a Successful Content Marketing Strategy</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Marketing</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Sarah Johnson</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Dec 10, 2024</td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">Edit</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">10 SEO Tips for Small Business Owners</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">SEO</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Mike Chen</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Draft</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Dec 8, 2024</td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">Edit</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">The Future of AI in Content Creation</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Technology</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Emily Davis</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Scheduled</span>
                  </td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">Dec 15, 2024</td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-600 hover:text-indigo-800 text-sm">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Content Performance</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Post</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Views</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Engagement</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Shares</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">Content Marketing Guide</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">2,450</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">8.2%</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">156</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">23</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">SEO Best Practices</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">1,890</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">6.8%</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">98</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">15</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 text-gray-900 dark:text-white">AI Writing Tools</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">3,210</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">9.1%</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">234</td>
                  <td className="py-3 px-4 text-gray-600 dark:text-gray-300">42</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
