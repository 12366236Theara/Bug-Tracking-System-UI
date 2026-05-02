import { Bug, CheckCircle2, Clock, XCircle, AlertCircle } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export function DashboardPage() {
  const stats = [
    {
      label: "Total Bugs",
      value: "248",
      icon: Bug,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      label: "Open Bugs",
      value: "89",
      icon: AlertCircle,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      label: "In Progress",
      value: "42",
      icon: Clock,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      label: "Resolved",
      value: "98",
      icon: CheckCircle2,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      label: "Closed",
      value: "19",
      icon: XCircle,
      color: "bg-gray-500",
      bgColor: "bg-gray-50",
      textColor: "text-gray-600",
    },
  ];

  const statusData = [
    { name: "Open", value: 89, color: "#3B82F6" },
    { name: "In Progress", value: 42, color: "#F97316" },
    { name: "Resolved", value: 98, color: "#10B981" },
    { name: "Closed", value: 19, color: "#6B7280" },
  ];

  const priorityData = [
    { name: "Critical", bugs: 12, color: "#EF4444" },
    { name: "High", bugs: 28, color: "#F97316" },
    { name: "Medium", bugs: 45, color: "#F59E0B" },
    { name: "Low", bugs: 89, color: "#10B981" },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "created",
      title: "Login page not responding",
      user: "Alice Johnson",
      time: "5 minutes ago",
      project: "Web Portal",
    },
    {
      id: 2,
      type: "updated",
      title: "Database connection timeout",
      user: "Bob Smith",
      time: "23 minutes ago",
      project: "Backend API",
    },
    {
      id: 3,
      type: "resolved",
      title: "Button alignment issue",
      user: "Carol White",
      time: "1 hour ago",
      project: "Mobile App",
    },
    {
      id: 4,
      type: "commented",
      title: "Memory leak in dashboard",
      user: "David Brown",
      time: "2 hours ago",
      project: "Analytics",
    },
    {
      id: 5,
      type: "assigned",
      title: "API response delay",
      user: "Eve Davis",
      time: "3 hours ago",
      project: "Backend API",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Overview of your bug tracking system
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bug Status Pie Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Bug Status Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bugs by Priority Bar Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Bugs by Priority
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priorityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bugs" radius={[8, 8, 0, 0]}>
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Activity
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="p-5 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        activity.type === "created"
                          ? "bg-blue-100 text-blue-700"
                          : activity.type === "resolved"
                          ? "bg-green-100 text-green-700"
                          : activity.type === "updated"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {activity.type}
                    </span>
                    <span className="text-sm text-gray-600">
                      {activity.project}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-800">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    by <span className="font-medium">{activity.user}</span> •{" "}
                    {activity.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
