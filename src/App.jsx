import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import CalorieProfilePage from "./pages/CalorieProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/calorie-profile/:userId" element={<CalorieProfilePage />} />
    </Routes>
  );
}
