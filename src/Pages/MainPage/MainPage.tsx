import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../../types";
import styles from "../../styles/index.module.scss";
import { useGetCardsQuery } from "../../services/cardsApi";
import {
  setCards,
  setCardsSelector,
} from "../../store/cardsSlice";
// import { CardsData } from "../../types";
import { useEffect } from "react";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetCardsQuery();

  const cards = useSelector(setCardsSelector);

  useEffect(() => {
    if (data && data.categories) {
      dispatch(setCards(data.categories));
    }
  }, [data, dispatch]);

  // const handleDelete = id: string => {};

  return (
    <div
      className={`${styles.content} ${styles.main} ${styles.theme}`}
    >
      <h1
        className={`${styles.main__title} ${styles.theme}`}
      >
        Dish Categories
      </h1>
      <button className={styles.button}>Show Liked</button>
      {/* <ShowLiked /> */}
      {isLoading ? (
        <p>Loading details...</p>
      ) : error ? (
        <p>Error loading details</p>
      ) : cards ? (
        <div className={styles.main__blocks}>
          {cards.map(item => (
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
              <div className={styles.item__btns}>
                <input type="checkbox" />
                Like
                <button
                  className={styles.button_delete}
                  // onClick={() =>
                  //   handleDelete(item.idCategory)
                  // }
                >
                  Delete
                </button>
              </div>
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
