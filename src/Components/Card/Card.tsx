import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../store/cardsSlice";
import {
  likeCard,
  unlikeCard,
  selectLikedCards,
  deleteLikedCard,
} from "../../store/likedSlice";
import { selectTheme } from "../../store/themeSlice";
import { CardProps, RootState } from "../../types";
import { FaTimes, FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "../../styles/index.module.scss";

const Card: React.FC<CardProps> = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const theme = useSelector<RootState, string>(selectTheme);
  const dispatch = useDispatch();
  const likedCards = useSelector((state: RootState) => selectLikedCards(state));
  const isLiked = likedCards.includes(idCategory);

  const handleDelete = (id: string) => {
    dispatch(deleteCard(id));
    dispatch(deleteLikedCard(id));
  };

  const handleLike = (id: string) => {
    if (isLiked) {
      dispatch(unlikeCard(id));
    } else {
      dispatch(likeCard(id));
    }
  };

  return (
    <div className={styles.card}>
      <div className={`${styles.card__text} ${styles[theme]}`}>
        Dish Category: {strCategory}
      </div>
      <div>
        <img
          className={styles.card__img}
          src={strCategoryThumb}
          alt={strCategory}
        />
      </div>
      <div className={`${styles.card__text} ${styles[theme]}`}>
        Description: {strCategoryDescription.slice(0, 120)}...
      </div>
      <div className={styles.card__btns}>
        <button
          onClick={() => handleLike(idCategory)}
          className={styles.button_like}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>

        <button
          className={styles.button_delete}
          onClick={() => handleDelete(idCategory)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Card;
