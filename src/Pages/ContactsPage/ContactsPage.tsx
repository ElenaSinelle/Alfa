import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";
import { RootState } from "../../types";
import styles from "../../styles/index.module.scss";

const ContactsPage: React.FC = () => {
  const theme = useSelector<RootState, string>(selectTheme);
  return (
    <div className={`${styles.container} ${styles.contacts} ${styles[theme]}`}>
      <h3 className={`${styles.contacts__title} ${styles[theme]}`}>
        Visit my{" "}
        <a
          className={`${styles.contacts__link} ${styles[theme]}`}
          href="https://github.com/ElenaSinelle"
          target="_blank"
          rel="noreferrer"
        >
          github page
        </a>
      </h3>
      <h3 className={`${styles.contacts__title} ${styles[theme]}`}>
        Read my{" "}
        <a
          className={`${styles.contacts__link} ${styles[theme]}`}
          href="https://mega.nz/file/qYA2laAI#-cLTn93QEWFvLFRK_D83Krl7w3yPTMNGbP8akvl5N2E"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
      </h3>
      <Link to="/" className={`${styles.button} ${styles[theme]}`}>
        Go to HomePage
      </Link>
    </div>
  );
};

export default ContactsPage;
