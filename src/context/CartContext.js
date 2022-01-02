import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, amount) => {

        if(isInCart(item.id)) {
            cartItems.find(element => element.id === item.id).amount += amount;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, {...item, amount: amount}]);
        };
    };

    const removeItem = (itemId) => {

        if(isInCart(itemId)) {
            setCartItems([...cartItems.filter(element => element.id !== itemId) || []]);
        };
    };
    
    const clear = () => {
        setCartItems([]);
    };
    
    const isInCart = (id) => cartItems && cartItems.some(element => element.id === id);

    const changeOneItem = (id, action) => {
        
        if(isInCart(id)) {

            switch(action) {
                case 'add':
                    cartItems.find(element => element.id === id).amount += 1;
                    return setCartItems([...cartItems]);
                case 'remove':
                    if(cartItems.find(item => item.id === id).amount > 1) {
                        cartItems.find(element => element.id === id).amount -= 1;
                        return setCartItems([...cartItems]);
                    } else {
                        return removeItem(id);
                    };
                default:
                    return;
            };
        };
    };

    const amountInCart = () => cartItems.reduce((acc, {amount}) => amount + acc, 0);

    return (
        <CartContext.Provider
            value={{
                addItem,
                removeItem,
                clear,
                isInCart,
                changeOneItem,
                cartItems,
                amountInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

