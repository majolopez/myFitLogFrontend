import { Routes, Route } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
    </Routes>
  );
}
