import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Task Kanban | Blog Writer Template",
  description: "Kanban board for Blog Writer template task management",
};

export default function BlogWriterTaskKanbanPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">📋 Task Kanban</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Visual task management board for content workflow
            </p>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* To Do Column */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">To Do</h3>
            <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-sm">3</span>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Research competitor content</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Due: Dec 20</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Create content outline</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Due: Dec 22</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Update meta descriptions</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Due: Dec 25</p>
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">In Progress</h3>
            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full text-sm">2</span>
          </div>
          <div className="space-y-3">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Write SEO article</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Due: Dec 18</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Edit draft content</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Due: Dec 16</p>
            </div>
          </div>
        </div>

        {/* Review Column */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Review</h3>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-sm">1</span>
          </div>
          <div className="space-y-3">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Social media posts</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Due: Dec 15</p>
            </div>
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Done</h3>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-sm">4</span>
          </div>
          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Blog post published</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Completed: Dec 12</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Content calendar updated</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Completed: Dec 10</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">SEO keywords research</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Completed: Dec 8</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
              <h4 className="font-medium text-gray-900 dark:text-white text-sm">Topic brainstorming</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">Completed: Dec 5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
