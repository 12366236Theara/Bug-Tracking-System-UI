import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/layout/MainLayout";
import { LoginPage } from "./components/pages/LoginPage";
import { DashboardPage } from "./components/pages/DashboardPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { IssuesPage } from "./components/pages/IssuesPage";
import { IssueDetailPage } from "./components/pages/IssueDetailPage";
import { CreateIssuePage } from "./components/pages/CreateIssuePage";
import { MyTasksPage } from "./components/pages/MyTasksPage";
import { ReportsPage } from "./components/pages/ReportsPage";
import { UsersPage } from "./components/pages/UsersPage";
import { SettingsPage } from "./components/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "projects", Component: ProjectsPage },
      { path: "issues", Component: IssuesPage },
      { path: "issues/:id", Component: IssueDetailPage },
      { path: "issues/create", Component: CreateIssuePage },
      { path: "my-tasks", Component: MyTasksPage },
      { path: "reports", Component: ReportsPage },
      { path: "users", Component: UsersPage },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);
