import CartIcon from '../components/Card/CardIcon';
import classes from './HeaderButtonCar.module.css';

const HeaderButtonCar = (props) => {
    return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>3</span>
    </button>
    )
}
export default HeaderButtonCar