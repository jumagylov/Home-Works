import { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (prevState, action) => {
    if(action.type === 'ADD') {
        let index = prevState.items.findIndex((elem)=>{
            return elem.id === action.item.id;
        })
        let updateItems = [];
        if(index === -1){
            updateItems = prevState.items.concat(action.item)
        } else {
            const arr = prevState.items.map((elem, idx)=>{
               if(idx === index){
                   return {
                       ...elem,
                       price: elem.price + action.item.amount * action.item.price,
                       amount: elem.amount + 1
                   }
               } else {
                   return elem;
               }
            })

            console.log(arr)
            updateItems = arr;
        }
       
        const updateTotalAmount = prevState.totalAmount + action.item.price * action.item.amount
        return {
            items: updateItems,
            totalAmount: updateTotalAmount
        }
    }
    return defaultCartState
}

const CartProvaider = (props) => {
    const[cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const additemToCardHandler = (item) => {
        dispatchCart({type: 'ADD', item: item})
    }
    
    const removeFromCartHandler = (id) => {}


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: additemToCardHandler,
        removeItem: removeFromCartHandler 

    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvaider