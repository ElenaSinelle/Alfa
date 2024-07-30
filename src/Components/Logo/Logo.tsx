import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo.png";
import styles from "../../styles/index.module.scss";

const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logoImg} alt="logo" className={styles.logo__img} />
      <p>Favorite Recipes</p>
    </Link>
  );
};

export default Logo;
