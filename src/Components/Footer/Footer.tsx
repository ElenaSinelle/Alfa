import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";
import { RootState } from "../../types";
import styles from "../../styles/index.module.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  const theme = useSelector<RootState, string>(selectTheme);
  return (
    <footer className={`${styles.content} ${styles.footer} ${styles[theme]}`}>
      <Logo />

      <Link to="/contacts" className={`${styles.button} ${styles[theme]}`}>
        Contacts
      </Link>
    </footer>
  );
};

export default Footer;
