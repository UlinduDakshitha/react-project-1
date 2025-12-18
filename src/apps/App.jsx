import { useSelector } from "react-redux";
import FirstPage from "../pages/FirstPage";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import FourPage from "../pages/FourPage";
import FivePage from "../pages/FivePage";

export default function App() {
  const step = useSelector((s) => s.user.step);

  if (step === 1) return <FirstPage />;
  if (step === 2) return <SecondPage />;
  if (step === 3) return <ThirdPage />;
  if (step === 4) return <FourPage />;
  if (step === 5) return <FivePage />;
  return null;
}
