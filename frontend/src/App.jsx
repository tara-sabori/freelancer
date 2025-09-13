import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import AuthPage from "./pages/auth/AuthPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<AuthPage />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
