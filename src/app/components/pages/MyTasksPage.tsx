import { Link } from "react-router";
import { Eye } from "lucide-react";

export function MyTasksPage() {
  const tasks = [
    {
      id: 234,
      title: "Login page not responding on mobile devices",
      project: "Web Portal",
      priority: "Critical",
      status: "In Progress",
      dueDate: "2026-05-01",
    },
    {
      id: 189,
      title: "Database connection timeout after 30 seconds",
      project: "Backend API",
      priority: "High",
      status: "In Progress",
      dueDate: "2026-04-30",
    },
    {
      id: 142,
      title: "Memory leak in analytics dashboard",
      project: "Analytics",
      priority: "High",
      status: "Open",
      dueDate: "2026-05-05",
    },
    {
      id: 128,
      title: "API response delay for user profile endpoint",
      project: "Backend API",
      priority: "Medium",
      status: "Open",
      dueDate: "2026-05-10",
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
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Tasks</h1>
        <p className="text-gray-600 mt-1">Issues assigned to you</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600">
          All ({tasks.length})
        </button>
        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-800">
          In Progress (2)
        </button>
        <button className="px-4 py-2 font-medium text-gray-600 hover:text-gray-800">
          Open (2)
        </button>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-semibold text-blue-600">
                  #{task.id}
                </span>
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority}
                </span>
              </div>
              <Link
                to={`/issues/${task.id}`}
                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                <Eye className="w-4 h-4" />
              </Link>
            </div>

            <h3 className="font-semibold text-gray-800 mb-2">{task.title}</h3>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">{task.project}</span>
                <span className="text-sm text-gray-500">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </span>
              </div>

              <select
                defaultValue={task.status}
                className={`px-3 py-1 text-xs font-medium rounded-full border-0 cursor-pointer ${getStatusColor(
                  task.status
                )}`}
              >
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
