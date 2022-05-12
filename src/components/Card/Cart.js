import MealItemFrom from '../Meals/MealItem/MealItemForm';
import Modal from '../UI/Modal';
import classes from './Card.module.css';

const Card = (props) => {
    const cardItem = (
        <ul className={classes['cart-items']}>
               {[{id:'c1',name:'Samsa',amount:2,price:12.99}].map((item) => {
                   return <li>{MealItemFrom.name}</li>
               })}
        </ul>
    )
    return (
        <Modal>
          {cardItem}
          <div className={classes.total}>
              <span>ToTal Amount</span>
              <span>33.51</span>
          </div>
          <div className={classes.actions}>
              <button className={classes["button--alt"]}>Close</button>
              <button className={classes.button}>Open</button>
          </div>
        </Modal>
    )
}
export default Card