import styles from "../../styles/index.module.scss";
import { useTheme } from "../../hooks/useTheme";

const SwitchMode: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      className={`${styles.button} ${styles[theme]}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    </button>
  );
};

export default SwitchMode;
