import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "API Keys | Blog Writer Template",
  description: "API key management for Blog Writer template",
};

export default function BlogWriterAPIKeysPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">🔑 API Keys</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Manage API keys for integrations and external services
            </p>
          </div>
        </div>
      </div>

      {/* API Keys Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Active API Keys</h2>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            + Generate New Key
          </button>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">WordPress Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Created: Dec 1, 2024</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2">
                  sk_live_51H1234567890abcdef...
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-indigo-600 hover:text-indigo-800 text-sm border border-indigo-300 rounded">
                  Regenerate
                </button>
                <button className="px-3 py-1 text-red-600 hover:text-red-800 text-sm border border-red-300 rounded">
                  Revoke
                </button>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">Social Media API</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Created: Nov 28, 2024</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mt-2">
                  sm_api_7890abcdef1234567890...
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-indigo-600 hover:text-indigo-800 text-sm border border-indigo-300 rounded">
                  Regenerate
                </button>
                <button className="px-3 py-1 text-red-600 hover:text-red-800 text-sm border border-red-300 rounded">
                  Revoke
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
