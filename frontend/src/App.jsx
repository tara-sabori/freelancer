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

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/owner" element={<OwnerLayout />}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<OwnerDashboardPage />} />
          <Route path="projects" element={<OwnerProjectsPage />} />
          <Route path="projects/:id" element={<OwnerSingleProjectPage />} />
        </Route>
        <Route path="/freelancer" element={<FreelancerLayout />}>
          <Route index element={<Navigate to={"dashboard"} replace />} />
          <Route path="dashboard" element={<FreelancerDashboardPage />} />
          <Route path="proposals" element={<FreelancerProposalsPage />} />
          <Route path="projects" element={<SubmitedProjectsPage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
