import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface IDisplay {
  theme: "light" | "dark";
  result: number;
  operation: string;
  error: boolean;
}

const Display = ({ theme, result, operation, error }: IDisplay) => {
  const [mark, setMark] = useState<" " | "_">(" ");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMark((prevmark) => (prevmark === " " ? "_" : " "));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth;
    }
  }, [operation]);

  return (
    <div className={`display-container text-${theme}`}>
      <div ref={containerRef} className="top-display-container">
        <h6
          className={
            error || isNaN(result) ? "operation-text-invert" : "operation-text"
          }
        >
          {error || isNaN(result) ? "Math ERROR" : operation}
        </h6>
        <h6 className="mark">{mark}</h6>
      </div>
      <h5 className="result-text">{error || isNaN(result) ? "" : result}</h5>
    </div>
  );
};

export default Display;
