import { useState } from "react";
import Navbar from "./components/Navbar";
import PortfolioRoutes from "./PortfolioRoutes";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <PortfolioRoutes />
      </main>
    </div>
  );
}

export default App;
