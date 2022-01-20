import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";


export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

    const {user: [user], setUser, isSignedIn} = useContext(UserContext);

    const cartItems = isSignedIn() && user.cart || [];

    const db = getFirestore();
    
    const addItem = (item, amount) => {
        if(isSignedIn()) {
            const userRef = doc(db, 'users', user.id);

            if(isInCart(item.id)) { 
                cartItems.find(element => element.id === item.id).amount += amount;
                setUser([{...user, cart: [...cartItems]}]);
       
                updateDoc(userRef, {
                    cart: [...cartItems]
                });
                sessionStorage.setItem('user', JSON.stringify([{...user, cart: [...cartItems]}]));
            } else {
                setUser([{...user, cart: [...cartItems, {...item, amount: amount}]}]);
                updateDoc(userRef, {
                    cart: [...cartItems, {...item, amount: amount}]
                });
                sessionStorage.setItem('user', JSON.stringify([{...user, cart: [...cartItems, {...item, amount: amount}]}]));
            };
        }
    };

    const removeItem = (itemId) => {
        const userRef = doc(db, 'users', user.id);

        if(isInCart(itemId)) {
            setUser([{...user, cart: [...cartItems.filter(element => element.id !== itemId)]}]);
            updateDoc(userRef, {
                cart: [...cartItems.filter(element => element.id !== itemId)]
            });
            sessionStorage.setItem('user', JSON.stringify([{...user, cart: [...cartItems.filter(element => element.id !== itemId)]}]));
        };
    };
    
    const clear = () => {
        const userRef = doc(db, 'users', user.id);
        setUser([{...user, cart: []}]);
        updateDoc(userRef, {
            cart: []
        });
        sessionStorage.setItem('user', JSON.stringify([{...user, cart: []}]));
    };
    
    const isInCart = (id) => cartItems && cartItems.some(element => element.id === id);

    const changeOneItem = (id, action) => {
        
        if(isInCart(id)) {
            const userRef = doc(db, 'users', user.id);

            switch(action) {
                case 'add':
                    cartItems.find(element => element.id === id).amount += 1;
                    setUser([{...user, cart: [...cartItems]}]);
                    updateDoc(userRef, {
                        cart: [...cartItems]
                    });
                    sessionStorage.setItem('user', JSON.stringify([{...user, cart: [...cartItems]}]));
                    break;
                case 'remove':
                    if(cartItems.find(item => item.id === id).amount > 1) {
                        cartItems.find(element => element.id === id).amount -= 1;
                        setUser([{...user, cart: [...cartItems]}]);
                        updateDoc(userRef, {
                            cart: [...cartItems]
                        });
                        sessionStorage.setItem('user', JSON.stringify([{...user, cart: [...cartItems]}]));
                        break;
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

