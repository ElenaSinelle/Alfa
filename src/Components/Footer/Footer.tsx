import { Link } from "react-router-dom";
import styles from "../../styles/index.module.scss";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer
      className={`${styles.content} ${styles.footer} ${styles.theme}`}
    >
      <Logo />

      <Link
        to="/contacts"
        className={`${styles.button} ${styles.theme}`}
      >
        Contacts
      </Link>
    </footer>
  );
};

export default Footer;
