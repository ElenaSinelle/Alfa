import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";
import { RootState } from "../../types";
import styles from "../../styles/index.module.scss";
import SwitchMode from "../SwitchMode/SwitchMode";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  const theme = useSelector<RootState, string>(selectTheme);

  return (
    <div className={`${styles.content} ${styles.header} ${styles[theme]}`}>
      <Logo />
      <div className={styles.header__btns}>
        <SwitchMode />
        <Link to="contacts" className={`${styles.button} ${styles[theme]}`}>
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Header;
