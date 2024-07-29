import { Link } from "react-router-dom";
import styles from "../../styles/index.module.scss";
import SwitchMode from "../SwitchMode/SwitchMode";
import Logo from "../Logo/Logo";

const Header: React.FC = () => {
  return (
    <div className={`${styles.content} ${styles.header}`}>
      <Logo />
      <div className={styles.header__btns}>
        <SwitchMode />
        <Link
          to="contacts"
          className={`${styles.button} ${styles.theme}`}
        >
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Header;
