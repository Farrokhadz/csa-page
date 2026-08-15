import { useEffect, useState } from "react";
import Splash from "./pages/Splash";
import Home from "./pages/Home";

const SPLASH_DURATION_MS = 1600;

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), SPLASH_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="transition-opacity duration-500">
      {showSplash ? <Splash /> : <Home />}
    </div>
  );
}
