import styles from "../../styles/index.module.scss";

const MainPage: React.FC = () => {
  return (
    <div
      className={`${styles.content} ${styles.main} ${styles.theme}`}
    >
      <h1
        className={`${styles.main__title} ${styles.theme}`}
      >
        Recipes
      </h1>
      <button className={styles.button}>Show Liked</button>
      {/* <ShowLiked /> */}
      <div className={styles.main__blocks}>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
        <div>block</div>
      </div>
    </div>
  );
};

export default MainPage;
