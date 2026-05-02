import { useState } from "react";
import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Calendar,
  User,
  Paperclip,
  Download,
  Send,
  Clock,
} from "lucide-react";

export function IssueDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const [newComment, setNewComment] = useState("");

  const issue = {
    id: id,
    title: "Login page not responding on mobile devices",
    project: "Web Portal",
    priority: "Critical",
    severity: "Blocker",
    status: "Open",
    assignedTo: "John Doe",
    createdBy: "Alice Johnson",
    createdDate: "2026-04-20",
    dueDate: "2026-05-01",
    description:
      "Users are reporting that the login page becomes unresponsive when accessed from mobile devices, specifically on iOS Safari and Chrome for Android.",
    stepsToReproduce: [
      "Open the application on a mobile device",
      "Navigate to the login page",
      "Try to enter credentials in the input fields",
      "The page freezes and becomes unresponsive",
    ],
    expectedResult:
      "Login page should be fully responsive and allow users to enter credentials smoothly on mobile devices.",
    actualResult:
      "Login page freezes after attempting to interact with input fields. Users cannot complete login process.",
  };

  const comments = [
    {
      id: 1,
      user: "Bob Smith",
      avatar: "BS",
      date: "2026-04-21 10:30 AM",
      text: "I've reproduced this issue on iPhone 14 Pro with iOS 17.2. The page freezes consistently after tapping the email input field.",
    },
    {
      id: 2,
      user: "Carol White",
      avatar: "CW",
      date: "2026-04-22 02:15 PM",
      text: "Looking into the code, it seems related to the autofill functionality. Will investigate the event listeners attached to the input fields.",
    },
    {
      id: 3,
      user: "John Doe",
      avatar: "JD",
      date: "2026-04-23 09:45 AM",
      text: "Found the issue! There's a memory leak in the password strength validator that runs on every keypress. Working on a fix now.",
    },
  ];

  const activities = [
    {
      id: 1,
      action: "Created",
      user: "Alice Johnson",
      date: "2026-04-20 03:25 PM",
      details: "Issue reported",
    },
    {
      id: 2,
      action: "Assigned",
      user: "System",
      date: "2026-04-20 03:26 PM",
      details: "Assigned to John Doe",
    },
    {
      id: 3,
      action: "Priority Changed",
      user: "Alice Johnson",
      date: "2026-04-21 08:15 AM",
      details: "Changed from High to Critical",
    },
    {
      id: 4,
      action: "Comment Added",
      user: "Bob Smith",
      date: "2026-04-21 10:30 AM",
      details: "Added reproduction details",
    },
    {
      id: 5,
      action: "Status Updated",
      user: "John Doe",
      date: "2026-04-23 09:30 AM",
      details: "Changed from Open to In Progress",
    },
  ];

  const attachments = [
    {
      id: 1,
      name: "screenshot-ios-error.png",
      size: "2.4 MB",
      uploadedBy: "Alice Johnson",
      uploadedDate: "2026-04-20",
    },
    {
      id: 2,
      name: "console-log-output.txt",
      size: "18 KB",
      uploadedBy: "Bob Smith",
      uploadedDate: "2026-04-21",
    },
    {
      id: 3,
      name: "screen-recording.mp4",
      size: "15.8 MB",
      uploadedBy: "Bob Smith",
      uploadedDate: "2026-04-21",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "bg-red-100 text-red-700";
      case "High":
        return "bg-orange-100 text-orange-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-blue-100 text-blue-700";
      case "In Progress":
        return "bg-orange-100 text-orange-700";
      case "Resolved":
        return "bg-green-100 text-green-700";
      case "Closed":
        return "bg-gray-100 text-gray-700";
      case "Reopened":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
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

      {/* Issue Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono font-semibold text-blue-600">
                #{issue.id}
              </span>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                  issue.status
                )}`}
              >
                {issue.status}
              </span>
              <span
                className={`px-2 py-1 text-xs font-medium rounded ${getPriorityColor(
                  issue.priority
                )}`}
              >
                {issue.priority}
              </span>
              <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded">
                {issue.severity}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">{issue.title}</h1>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Edit Issue
          </button>
        </div>

        {/* Meta Information */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-600 mb-1">Project</p>
            <p className="font-medium text-gray-800">{issue.project}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Assigned To</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                JD
              </div>
              <p className="font-medium text-gray-800">{issue.assignedTo}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Created Date</p>
            <p className="font-medium text-gray-800">
              {new Date(issue.createdDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Due Date</p>
            <p className="font-medium text-gray-800">
              {new Date(issue.dueDate).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex gap-4 px-6">
            {["details", "comments", "activity", "attachments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium text-sm capitalize transition-colors border-b-2 ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Details Tab */}
          {activeTab === "details" && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Description
                </h3>
                <p className="text-gray-700">{issue.description}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Steps to Reproduce
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  {issue.stepsToReproduce.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Expected Result
                </h3>
                <p className="text-gray-700">{issue.expectedResult}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Actual Result
                </h3>
                <p className="text-gray-700">{issue.actualResult}</p>
              </div>
            </div>
          )}

          {/* Comments Tab */}
          {activeTab === "comments" && (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                      {comment.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800">
                          {comment.user}
                        </span>
                        <span className="text-sm text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-gray-700">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Comment */}
              <div className="border-t border-gray-200 pt-4 mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Add Comment
                </h3>
                <div className="flex gap-3">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment here..."
                    rows={3}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors h-fit flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === "activity" && (
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    {index < activities.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-800">
                        {activity.action}
                      </span>
                      <span className="text-sm text-gray-500">
                        • {activity.date}
                      </span>
                    </div>
                    <p className="text-gray-700">{activity.details}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      by {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Attachments Tab */}
          {activeTab === "attachments" && (
            <div className="space-y-3">
              {attachments.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Paperclip className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{file.name}</p>
                      <p className="text-sm text-gray-600">
                        {file.size} • Uploaded by {file.uploadedBy} on{" "}
                        {new Date(file.uploadedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              ))}

              {/* Upload Button */}
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors">
                Click to upload or drag and drop files here
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
