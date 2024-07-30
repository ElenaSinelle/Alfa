import { Link } from "react-router-dom";
import styles from "../../styles/index.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className={`${styles.content} ${styles.notFound}`}>
      <h2 className={styles.notFound__404}>404</h2>
      <p className={styles.notFound__title}>This page does not exist</p>

      <Link className={styles.button} to="/">
        {" "}
        Go to HomePage
      </Link>
    </div>
  );
};

export default NotFoundPage;
