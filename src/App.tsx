import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Display from "./components/display/display";
import Keyboard from "./components/keyboard/Keyboard";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="App">
      <div className={`calculator-container calculator-container-${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Display theme={theme} />
        <Keyboard theme={theme} />
      </div>
    </div>
  );
}

export default App;
