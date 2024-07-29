import { Link } from "react-router-dom";
import styles from "../../styles/index.module.scss";

const ContactsPage: React.FC = () => {
  return (
    <div
      className={`${styles.container} ${styles.contacts}`}
    >
      <h3 className={styles.contacts__title}>
        Visit my{" "}
        <a
          className={styles.contacts__link}
          href="https://github.com/ElenaSinelle"
          target="_blank"
          rel="noreferrer"
        >
          github page
        </a>
      </h3>
      <h3 className={styles.contacts__title}>
        Read my{" "}
        <a
          className={styles.contacts__link}
          href="https://mega.nz/file/qYA2laAI#-cLTn93QEWFvLFRK_D83Krl7w3yPTMNGbP8akvl5N2E"
          target="_blank"
          rel="noreferrer"
        >
          CV
        </a>
      </h3>
      <Link to="/" className={styles.button}>
        Go to HomePage
      </Link>
    </div>
  );
};

export default ContactsPage;
