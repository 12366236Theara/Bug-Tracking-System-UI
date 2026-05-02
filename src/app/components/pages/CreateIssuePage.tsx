import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Upload, X } from "lucide-react";

export function CreateIssuePage() {
  const navigate = useNavigate();
  const [attachments, setAttachments] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/issues");
  };

  const handleAddAttachment = () => {
    setAttachments([...attachments, `file-${Date.now()}.png`]);
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Link
        to="/issues"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Issues
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Report New Bug</h1>
        <p className="text-gray-600 mt-1">
          Provide detailed information about the issue
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Basic Information
          </h2>

          <div className="space-y-5">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Brief description of the issue"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                placeholder="Detailed description of the issue"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Project and Assignment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Project</option>
                  <option value="web-portal">Web Portal</option>
                  <option value="backend-api">Backend API</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="analytics">Analytics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assign To
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Unassigned</option>
                  <option value="john">John Doe</option>
                  <option value="alice">Alice Johnson</option>
                  <option value="bob">Bob Smith</option>
                  <option value="carol">Carol White</option>
                  <option value="david">David Brown</option>
                </select>
              </div>
            </div>

            {/* Priority and Severity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Severity <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Severity</option>
                  <option value="minor">Minor</option>
                  <option value="major">Major</option>
                  <option value="blocker">Blocker</option>
                </select>
              </div>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Due Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Reproduction Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Reproduction Details
          </h2>

          <div className="space-y-5">
            {/* Steps to Reproduce */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Steps to Reproduce <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={5}
                placeholder="1. Go to login page&#10;2. Enter credentials&#10;3. Click submit button&#10;4. Observe the error"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
              />
            </div>

            {/* Expected Result */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Result <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="What should happen when the steps are followed"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Actual Result */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Actual Result <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="What actually happens (the bug)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Attachments
          </h2>

          {/* Upload Area */}
          <div
            onClick={handleAddAttachment}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-700 font-medium mb-1">
              Click to upload files
            </p>
            <p className="text-sm text-gray-500">
              Screenshots, logs, or screen recordings
            </p>
          </div>

          {/* Attachment List */}
          {attachments.length > 0 && (
            <div className="mt-4 space-y-2">
              {attachments.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <Upload className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-700">{file}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveAttachment(index)}
                    className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate("/issues")}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg shadow-blue-600/30"
          >
            Submit Bug Report
          </button>
        </div>
      </form>
    </div>
  );
}
