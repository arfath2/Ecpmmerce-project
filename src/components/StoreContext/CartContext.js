import React , {useState} from "react";
import { createContext } from "react";


export const Cart = createContext();

const CartContext = (props) => {

    const cartElements = [
        {
          id: 'e1',

          title: "Colors",

          price: 100,

          imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

          quantity: 2,
        },

      ];

    const [cart, setCart] = useState(cartElements);
    const [userId, setUserId] = useState('')
    return (
      <Cart.Provider value = {{cart, setCart, userId , setUserId}}>
            {props.children}
        </Cart.Provider>
    )
}

export default CartContext;