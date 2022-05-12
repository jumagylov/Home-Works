import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemFrom = (props) => {
    return (
        <form className={classes.form}>
            <Input label="Amount_" input={{id:'amount'+props.id, 
            type:'number',
            min:'1',
            max:'5',
            step:'1',
             defaultValue:'1'}} />
            <button> + add</button>
        </form>
    )
}
export default MealItemFrom