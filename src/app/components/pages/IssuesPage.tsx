import { useState } from "react";
import { Link } from "react-router";
import { Plus, Search, Filter, Eye, Edit } from "lucide-react";

interface Issue {
  id: number;
  title: string;
  project: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  severity: "Minor" | "Major" | "Blocker";
  status: "Open" | "In Progress" | "Resolved" | "Closed" | "Reopened";
  assignedTo: string;
  dueDate: string;
}

export function IssuesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProject, setFilterProject] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");

  const issues: Issue[] = [
    {
      id: 234,
      title: "Login page not responding on mobile devices",
      project: "Web Portal",
      priority: "Critical",
      severity: "Blocker",
      status: "Open",
      assignedTo: "John Doe",
      dueDate: "2026-05-01",
    },
    {
      id: 189,
      title: "Database connection timeout after 30 seconds",
      project: "Backend API",
      priority: "High",
      severity: "Major",
      status: "In Progress",
      assignedTo: "Alice Johnson",
      dueDate: "2026-04-30",
    },
    {
      id: 156,
      title: "Button alignment issue on checkout page",
      project: "Web Portal",
      priority: "Medium",
      severity: "Minor",
      status: "Resolved",
      assignedTo: "Bob Smith",
      dueDate: "2026-04-28",
    },
    {
      id: 142,
      title: "Memory leak in analytics dashboard",
      project: "Analytics",
      priority: "High",
      severity: "Major",
      status: "In Progress",
      assignedTo: "Carol White",
      dueDate: "2026-05-05",
    },
    {
      id: 128,
      title: "API response delay for user profile endpoint",
      project: "Backend API",
      priority: "Medium",
      severity: "Major",
      status: "Open",
      assignedTo: "David Brown",
      dueDate: "2026-05-10",
    },
    {
      id: 115,
      title: "Image upload fails for files larger than 5MB",
      project: "Mobile App",
      priority: "High",
      severity: "Major",
      status: "Reopened",
      assignedTo: "Eve Davis",
      dueDate: "2026-04-29",
    },
    {
      id: 98,
      title: "Footer text color hard to read in dark mode",
      project: "Web Portal",
      priority: "Low",
      severity: "Minor",
      status: "Closed",
      assignedTo: "Frank Miller",
      dueDate: "2026-04-25",
    },
    {
      id: 87,
      title: "Search functionality returns incorrect results",
      project: "Mobile App",
      priority: "Critical",
      severity: "Blocker",
      status: "In Progress",
      assignedTo: "Grace Lee",
      dueDate: "2026-04-28",
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Issues / Bugs</h1>
          <p className="text-gray-600 mt-1">Track and manage all reported issues</p>
        </div>
        <Link
          to="/issues/create"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
        >
          <Plus className="w-5 h-5" />
          Report Bug
        </Link>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search issues..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Project Filter */}
          <select
            value={filterProject}
            onChange={(e) => setFilterProject(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Projects</option>
            <option value="Web Portal">Web Portal</option>
            <option value="Backend API">Backend API</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Analytics">Analytics</option>
          </select>

          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="All">All Statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
            <option value="Reopened">Reopened</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-2 mt-4">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600 font-medium">Priority:</span>
          <div className="flex gap-2">
            {["All", "Critical", "High", "Medium", "Low"].map((priority) => (
              <button
                key={priority}
                onClick={() => setFilterPriority(priority)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                  filterPriority === priority
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Issues Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Issue ID
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Title
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Project
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Priority
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Severity
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Assigned To
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {issues.map((issue) => (
                <tr key={issue.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <span className="font-mono font-semibold text-blue-600">
                      #{issue.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-800 max-w-xs">
                      {issue.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {issue.project}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded ${getPriorityColor(
                        issue.priority
                      )}`}
                    >
                      {issue.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium text-gray-700">
                      {issue.severity}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        issue.status
                      )}`}
                    >
                      {issue.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {issue.assignedTo}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(issue.dueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/issues/${issue.id}`}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                      <button
                        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
