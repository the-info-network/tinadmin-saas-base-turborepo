import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Task List | Blog Writer Template",
  description: "Task management for Blog Writer template",
};

export default function BlogWriterTaskListPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">📝 Task List</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Manage your content creation tasks and deadlines
            </p>
          </div>
        </div>
      </div>

      {/* Task List Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Content Tasks</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            + Add Task
          </button>
        </div>

        <div className="space-y-4">
          {/* Task Items */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Write blog post about SEO best practices</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Due: Dec 15, 2024</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">In Progress</span>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Review and edit draft posts</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Due: Dec 12, 2024</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Pending</span>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" checked />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white line-through">Research trending topics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Due: Dec 10, 2024</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Completed</span>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Update social media content calendar</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Due: Dec 18, 2024</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Overdue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
