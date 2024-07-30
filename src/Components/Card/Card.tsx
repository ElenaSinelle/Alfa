import styles from "../../styles/index.module.scss";
import { deleteCard } from "../../store/cardsSlice";
import { useDispatch } from "react-redux";
import { CardProps } from "../../types";

const Card: React.FC<CardProps> = ({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteCard(id));
  };

  return (
    <div className={styles.card}>
      <div>Dish Category: {strCategory}</div>
      <div className={styles.card__img}>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div>Description: {strCategoryDescription}</div>
      <div className={styles.item__btns}>
        <input type="checkbox" />
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
