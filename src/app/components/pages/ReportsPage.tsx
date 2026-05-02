import { Download, Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export function ReportsPage() {
  const bugsByStatus = [
    { month: "Jan", open: 45, resolved: 38, closed: 12 },
    { month: "Feb", open: 52, resolved: 45, closed: 15 },
    { month: "Mar", open: 48, resolved: 51, closed: 18 },
    { month: "Apr", open: 65, resolved: 48, closed: 20 },
  ];

  const developerPerformance = [
    { name: "John Doe", resolved: 42, assigned: 48 },
    { name: "Alice Johnson", resolved: 38, assigned: 45 },
    { name: "Bob Smith", resolved: 35, assigned: 40 },
    { name: "Carol White", resolved: 29, assigned: 35 },
    { name: "David Brown", resolved: 25, assigned: 32 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-600 mt-1">
            Analytics and insights for bug tracking
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
          <Download className="w-5 h-5" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Custom range</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Projects</option>
              <option>Web Portal</option>
              <option>Backend API</option>
              <option>Mobile App</option>
              <option>Analytics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Overview</option>
              <option>Bug Status</option>
              <option>Developer Performance</option>
              <option>Priority Analysis</option>
            </select>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bugs Over Time */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Bugs Over Time
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={bugsByStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="open"
                stroke="#3B82F6"
                strokeWidth={2}
                name="Open"
              />
              <Line
                type="monotone"
                dataKey="resolved"
                stroke="#10B981"
                strokeWidth={2}
                name="Resolved"
              />
              <Line
                type="monotone"
                dataKey="closed"
                stroke="#6B7280"
                strokeWidth={2}
                name="Closed"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Developer Performance */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Developer Performance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={developerPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Legend />
              <Bar dataKey="assigned" fill="#3B82F6" name="Assigned" />
              <Bar dataKey="resolved" fill="#10B981" name="Resolved" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: "Total Bugs Reported",
            value: "248",
            change: "+12%",
            trend: "up",
          },
          {
            label: "Resolution Rate",
            value: "74%",
            change: "+5%",
            trend: "up",
          },
          {
            label: "Avg. Resolution Time",
            value: "3.2 days",
            change: "-0.8 days",
            trend: "down",
          },
          {
            label: "Critical Bugs",
            value: "12",
            change: "-3",
            trend: "down",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
          >
            <h3 className="text-sm text-gray-600 mb-1">{stat.label}</h3>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <span
                className={`text-sm font-medium ${
                  stat.trend === "down" ? "text-green-600" : "text-blue-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Export Options
        </h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Export as PDF
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Export as Excel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Export as CSV
          </button>
        </div>
      </div>
    </div>
  );
}
