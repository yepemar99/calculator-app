import "./styles.css";

interface IHeader {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: IHeader) => {
  return (
    <div className="calculator-header">
      <button
        className={`theme-button theme-button-${theme}`}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default Header;
