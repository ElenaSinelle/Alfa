import { useSelector } from "react-redux";
import { selectLikedCards } from "../../store/likedSlice";
import { selectCards } from "../../store/cardsSlice";
import { selectTheme } from "../../store/themeSlice";
import { ShowLikedProps, RootState, CardData } from "../../types";
import styles from "../../styles/index.module.scss";

const ShowLiked: React.FC<ShowLikedProps> = ({
  showLiked,
  handleShowLiked,
}) => {
  const theme = useSelector<RootState, string>(selectTheme);
  const likedCards = useSelector<RootState, string[]>(selectLikedCards);
  const cards = useSelector<RootState, CardData[]>(selectCards);

  const correctWordEnding = (num: number) => {
    return num === 1 ? `${num} card` : `${num} cards`;
  };

  return (
    <button
      className={`${styles.button} ${styles[theme]}`}
      onClick={handleShowLiked}
    >
      {showLiked
        ? `Show All (${correctWordEnding(cards.length)})`
        : `Show Liked (${correctWordEnding(likedCards.length)})`}
    </button>
  );
};

export default ShowLiked;
