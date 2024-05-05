import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Display from "./components/display/display";
import Keyboard from "./components/keyboard/Keyboard";
import {
  calculateOperation,
  isDivideByZero,
  isSymbol,
  replaceAns,
  validationSymbols,
} from "./functions";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [ans, setAns] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleEqual = () => {
    if (!error || operation === "") {
      if (
        isDivideByZero(operation) ||
        (operation.length > 0 && isSymbol(operation[operation.length - 1]))
      ) {
        setError(true);
      } else {
        setResult(calculateOperation(replaceAns(operation, result)));
        setAns(false);
      }
    }
  };
  const handleOperation = (newOperation: string) => {
    if (validationSymbols(newOperation, operation) && !error) {
      let auxOpertation = operation.concat(newOperation);
      let isresult = result !== 0;
      let isOperationSymbol = isSymbol(newOperation);

      if (
        (newOperation === "(" && !isOperationSymbol && result !== 0) ||
        (newOperation === ")" && isOperationSymbol)
      ) {
        return;
      }
      if (isresult && isOperationSymbol && !ans) {
        auxOpertation = `ANS${newOperation}`;
        setAns(true);
      }
      if (isresult && !isOperationSymbol && !ans) {
        auxOpertation = newOperation;
      }

      setOperation(auxOpertation);
    }
  };
  const handleDelete = () => {
    if (!error) {
      let auxoperation = operation.slice(0, -1);
      setOperation(auxoperation);
    }
  };
  const reset = () => {
    setOperation("");
    setAns(false);
    setResult(0);
    setError(false);
  };

  return (
    <div className="App">
      <div className={`calculator-container calculator-container-${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Display
          theme={theme}
          result={result}
          operation={operation}
          error={error}
        />
        <Keyboard
          handleEqual={handleEqual}
          handleOperation={handleOperation}
          handleDelete={handleDelete}
          theme={theme}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;
