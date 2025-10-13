import { Navigate, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import AuthPage from "./pages/auth/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfilePage from "./pages/auth/CompleteProfilePage";
import HomePage from "./pages/home/HomePage";
import OwnerLayout from "./layout/OwnerLayout";
import OwnerDashboardPage from "./pages/owner/OwnerDashboardPage";
import OwnerProjectsPage from "./pages/owner/OwnerProjectsPage";
import OwnerSingleProjectPage from "./pages/owner/OwnerSingleProjectPage";
import FreelancerLayout from "./layout/FreelancerLayout";
import FreelancerDashboardPage from "./pages/freelancer/FreelancerDashboardPage";
import SubmitedProjectsPage from "./pages/freelancer/SubmitedProjectsPage";
import { FreelancerProposalsPage } from "./pages/freelancer/FreelancerProposalsPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layout/AdminLayout";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminCategoriesPage from "./pages/admin/AdminCategoriesPage";
import AdminProposalsPage from "./pages/admin/AdminProposalsPage";
import AdminProjectsPage from "./pages/admin/AdminProjectsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import ProfileMePage from "./pages/auth/ProfileMePage";
import ProfileUpdatePage from "./pages/auth/ProfileUpdatePage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/profile/me" element={<ProfileMePage />} />
        <Route path="/profile/me/update" element={<ProfileUpdatePage />} />
        <Route
          path="/owner"
          element={
            <ProtectedRoute>
              <OwnerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<OwnerDashboardPage />} />
          <Route path="projects" element={<OwnerProjectsPage />} />
          <Route path="projects/:id" element={<OwnerSingleProjectPage />} />
        </Route>

        <Route
          path="/freelancer"
          element={
            <ProtectedRoute>
              <FreelancerLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<FreelancerDashboardPage />} />
          <Route path="proposals" element={<FreelancerProposalsPage />} />
          <Route path="projects" element={<SubmitedProjectsPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="proposals" element={<AdminProposalsPage />} />
          <Route path="projects" element={<AdminProjectsPage />} />
          <Route path="categories" element={<AdminCategoriesPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
