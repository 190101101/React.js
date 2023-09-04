import Card from "../UI/Card";
import styles from "./ProductItem.module.css";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/CartSlice";

const ProductItem = (props) => {
  const dispatchFunction = useDispatch();

  const { id, title, price, description } = props;

  
  const addItemHandler = () => {
    dispatchFunction(cartActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addItemHandler}>Добавить в Корзину</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
