// import { useTheme } from "../../contexts/useTheme";
import styles from "../../styles/index.module.scss";

const SwitchMode: React.FC = () => {
  // const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={`${styles.button} ${styles.theme}`}
      // onClick={toggleTheme}
    >
      {/* {theme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"} */}
      Toggle Theme
    </button>
  );
};

export default SwitchMode;
