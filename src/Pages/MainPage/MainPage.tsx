import React from "react";
import styles from "../../styles/index.module.scss";
import { useGetCardsQuery } from "../../services/cardsApi";

const MainPage: React.FC = () => {
  const { data, error, isLoading } =
    useGetCardsQuery("categories");

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
      {isLoading ? (
        <p>Loading details...</p>
      ) : error ? (
        <p>Error loading details</p>
      ) : data &&
        data.categories &&
        data.categories.length ? (
        <div className={styles.main__blocks}>
          {data.categories.map(item => (
            <div key={item.idCategory}>
              <div>Id: {item.idCategory}</div>
              <div>Category: {item.strCategory}</div>
              <div>
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                />
              </div>
              <div>
                Description: {item.strCategoryDescription}
              </div>
              <button className={styles.button}>
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default MainPage;
