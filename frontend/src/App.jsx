import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import AuthPage from "./pages/auth/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CompleteProfilePage from "./pages/auth/CompleteProfilePage";
import HomePage from "./pages/home/HomePage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
