import classes from './MealItem.module.css';
import MealItemFrom from './MealItemForm';
function MealItem (props) {
    const price = `${props.price.toFixed(2)} тыйын`
    return (
        <li className={classes.meal}>
           <div>
               <h3>{props.name}</h3>
               <div>{props.description}</div>
               <div className={classes.price}>{price}</div>
           </div>
           <div>
               <MealItemFrom id={props.id} />
           </div>
        </li>
    )
}
export default MealItem