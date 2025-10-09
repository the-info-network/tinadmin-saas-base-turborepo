import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FAQ | Blog Writer Template",
  description: "Frequently Asked Questions for Blog Writer template",
};

export default function BlogWriterFAQPage() {
  return (
    <div className="space-y-6">
      {/* Template Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl p-4 md:p-6 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl md:text-2xl font-bold mb-2 break-words">❓ FAQ</h1>
            <p className="text-indigo-100 text-sm md:text-base break-words">
              Frequently Asked Questions about Blog Writer template
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              How do I create a new blog post?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Navigate to the Blog Writer dashboard and click the &quot;New Post&quot; button. Fill in the required fields including title, content, and SEO settings.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Can I schedule posts for later publication?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you can schedule posts by setting a future publish date in the post settings. The system will automatically publish your content at the scheduled time.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              How do I manage my content calendar?
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use the Content Calendar feature to view, edit, and manage your scheduled posts. You can drag and drop posts to reschedule them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
