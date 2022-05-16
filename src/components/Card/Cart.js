// import MealItemFrom from '../Meals/MealItem/MealItemForm';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import classes from './Card.module.css';
import { useContext } from 'react';

const Card = (props) => {
    const cartCtx = useContext(CartContext)

    const cardItem = cartCtx.items.map((item) => {
                return <li key={item.id}>{item.name} ${item.price}</li>
            })
    return (
        <Modal onCloseCart={props.onCloseCart}>
            <ul className={classes['cart-items']}>
                {cardItem}
            </ul>
            <div className={classes.total}>
                <span>ToTal Amount</span>
                <span>33.51</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Card