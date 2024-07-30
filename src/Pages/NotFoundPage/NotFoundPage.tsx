import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "../../store/themeSlice";
import { RootState } from "../../types";
import styles from "../../styles/index.module.scss";

const NotFoundPage: React.FC = () => {
  const theme = useSelector<RootState, string>(selectTheme);

  return (
    <div className={`${styles.content} ${styles.notFound} ${styles[theme]}`}>
      <h2 className={`${styles.notFound__404} ${styles[theme]}`}>404</h2>
      <p className={`${styles.notFound__title} ${styles[theme]}`}>
        This page does not exist
      </p>

      <Link className={`${styles.button} ${styles[theme]}`} to="/">
        {" "}
        Go to HomePage
      </Link>
    </div>
  );
};

export default NotFoundPage;
