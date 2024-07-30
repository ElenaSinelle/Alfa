import { useDispatch, useSelector } from "react-redux";
import { deleteCard } from "../../store/cardsSlice";
import {
  likeCard,
  unlikeCard,
  selectLikedCards,
  deleteLikedCard,
} from "../../store/likedSlice";
import { CardProps, RootState } from "../../types";
import styles from "../../styles/index.module.scss";

const Card: React.FC<CardProps> = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const dispatch = useDispatch();
  const likedCards = useSelector((state: RootState) =>
    selectLikedCards(state),
  );
  const isChecked = likedCards.includes(idCategory);

  const handleDelete = (id: string) => {
    dispatch(deleteCard(id));
    dispatch(deleteLikedCard(id));
  };

  const handleLike = (id: string) => {
    if (isChecked) {
      dispatch(unlikeCard(id));
    } else {
      dispatch(likeCard(id));
    }
  };

  return (
    <div className={styles.card}>
      <div>Dish Category: {strCategory}</div>
      <div className={styles.card__img}>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div>Description: {strCategoryDescription}</div>
      <div className={styles.item__btns}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleLike(idCategory)}
        />
        Like
        <button
          className={styles.button_delete}
          onClick={() => handleDelete(idCategory)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
