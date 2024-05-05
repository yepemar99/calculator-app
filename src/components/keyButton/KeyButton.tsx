import React from "react";
import "./styles.css";

interface IKeyButton {
  children: React.ReactNode;
  action?: () => void;
  color: "white";
  height?: string;
  width?: string;
  styles?: string;
}

const KeyButton = ({
  children,
  color,
  action,
  height = "50",
  width = "50",
  styles = "",
}: IKeyButton) => {
  return (
    <button
      onClick={action}
      className={`key-button button-${color} height-${height} width-${width} ${styles}`}
    >
      {children}
    </button>
  );
};

export default KeyButton;
