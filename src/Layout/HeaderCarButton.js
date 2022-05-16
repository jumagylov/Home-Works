import { useContext } from 'react';
import CartIcon from '../components/Card/CardIcon';
import CartContext from '../components/store/cart-context';
import classes from './HeaderButtonCar.module.css';

const HeaderButtonCar = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartitems = cartCtx.items.reduce((ccurNumber, item) => {
        return ccurNumber + item.amount
    }, 0)
    
    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
    )
}
export default HeaderButtonCar