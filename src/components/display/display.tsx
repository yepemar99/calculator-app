import "./styles.css";

interface IDisplay {
  theme: "light" | "dark";
}

const Display = ({ theme }: IDisplay) => {
  return (
    <div className={`display-container text-${theme}`}>
      <h6 className="operation-text">Ans + 5</h6>
      <h5 className="result-text">27</h5>
    </div>
  );
};

export default Display;
