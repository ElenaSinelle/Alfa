import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  AppDispatch,
  CardData,
} from "../../types";
import styles from "../../styles/index.module.scss";
import { useGetCardsQuery } from "../../services/cardsApi";
import {
  setCards,
  setCardsSelector,
} from "../../store/cardsSlice";
import { useEffect, useCallback } from "react";
import Card from "../../Components/Card/Card";

const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, error, isLoading } = useGetCardsQuery();

  const cards = useSelector<RootState, CardData[]>(
    setCardsSelector,
  );

  const uploadData = useCallback(
    (data?: { categories: CardData[] }) => {
      if (data && data.categories.length > 0) {
        dispatch(setCards(data.categories));
      } else {
        dispatch(setCards([]));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    uploadData(data);
  }, [data, uploadData]);

  const refreshList = () => {
    uploadData(data);
  };

  return (
    <div
      className={`${styles.content} ${styles.main} ${styles.theme}`}
    >
      <h1
        className={`${styles.main__title} ${styles.theme}`}
      >
        Dish Categories
      </h1>

      <div>
        <button className={styles.button}>
          Show Liked
        </button>
        {/* <ShowLiked /> */}
        <button
          className={styles.button}
          onClick={refreshList}
        >
          Refresh List
        </button>
      </div>

      {isLoading ? (
        <p>Loading dish categories...</p>
      ) : error ? (
        <p>Error loading details</p>
      ) : cards ? (
        <div className={styles.main__blocks}>
          {cards.map(card => (
            <Card key={card.idCategory} {...card} />
          ))}
        </div>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
};

export default MainPage;
