import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import {
  RootState,
  AppDispatch,
  CardData,
} from "../../types";
import { useGetCardsQuery } from "../../services/cardsApi";
import {
  setCards,
  selectCards,
} from "../../store/cardsSlice";
import {
  selectLikedCards,
  unlikeAll,
} from "../../store/likedSlice";
import Card from "../../Components/Card/Card";
import ShowLiked from "../../Components/ShowLiked/ShowLiked";
import styles from "../../styles/index.module.scss";

const MainPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, error, isLoading, refetch } =
    useGetCardsQuery();
  const [showLiked, setShowLiked] = useState(false);

  const cards = useSelector<RootState, CardData[]>(
    selectCards,
  );
  const likedCards = useSelector<RootState, string[]>(
    selectLikedCards,
  );

  useEffect(() => {
    if (data && data.categories.length > 0) {
      dispatch(setCards(data.categories));
    } else {
      dispatch(setCards([]));
    }
  }, [data, dispatch]);

  const resetList = () => {
    setShowLiked(false);
    dispatch(unlikeAll());
    refetch();
    if (data && data.categories.length > 0) {
      dispatch(setCards(data.categories));
    }
  };

  const filteredCards = useMemo(() => {
    return showLiked
      ? cards.filter(card =>
          likedCards.includes(card.idCategory),
        )
      : cards;
  }, [showLiked, cards, likedCards]);

  const handleShowLiked = () => {
    setShowLiked(showLiked => !showLiked);
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
        <ShowLiked
          showLiked={showLiked}
          handleShowLiked={handleShowLiked}
        />
        <button
          className={styles.button}
          onClick={resetList}
        >
          Reset List
        </button>
      </div>

      {isLoading ? (
        <p>Loading dish categories...</p>
      ) : error ? (
        <p>Error loading details</p>
      ) : cards ? (
        <div className={styles.main__blocks}>
          {filteredCards.map(card => (
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
