import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Multi Tenant | Blog Writer Template",
  description: "Multi-tenant management for Blog Writer template",
};

export default function BlogWriterMultiTenantPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">🏢 Multi Tenant</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Manage multiple blog instances and organizations
            </p>
          </div>
        </div>
      </div>

      {/* Multi Tenant Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company Blog</h3>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">Domain: company.blog.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Posts: 45</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Users: 8</p>
          </div>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Manage
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Personal Blog</h3>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">Domain: personal.blog.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Posts: 23</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Users: 1</p>
          </div>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Manage
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Client Blog</h3>
          <div className="space-y-2 mb-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">Domain: client.blog.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Posts: 12</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Users: 3</p>
          </div>
          <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
