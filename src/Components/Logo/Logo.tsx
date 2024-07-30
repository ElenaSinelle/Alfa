import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";
import { RootState } from "../../types";
import logoImg from "../../assets/images/logo.png";
import styles from "../../styles/index.module.scss";

const Logo: React.FC = () => {
  const theme = useSelector<RootState, string>(selectTheme);
  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImg} alt="logo" className={styles.logo__img} />
      <p className={`${styles.logo__title} ${styles[theme]}`}>
        Favorite Recipes
      </p>
    </Link>
  );
};

export default Logo;
