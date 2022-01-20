import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { createContext, useContext } from "react";
import { UserContext } from "./UserContext";

export const WishlistContext = createContext({});

export const WishlistContextProvider = ({children}) => {

    const {user: [user], setUser, isSignedIn} = useContext(UserContext);

    const wishlistItems = (isSignedIn() && user.wishlist) || [];
    
    const db = getFirestore();
    
    const addRemove = (item) => {
        if(isSignedIn()) {
            const userRef = doc(db, 'users', user.id);
            
            if(isLiked(item.id)) {
                setUser([{...user, wishlist: [...wishlistItems.filter(element => element.id !== item.id)]}]);
                updateDoc(userRef, {
                    wishlist: [...wishlistItems.filter(element => element.id !== item.id)]
                });
                sessionStorage.setItem('user', JSON.stringify([{...user, wishlist: [...wishlistItems.filter(element => element.id !== item.id)]}]));
            } else {
                setUser([{...user, wishlist: [...wishlistItems, item]}]);
                updateDoc(userRef, {
                    wishlist: [...wishlistItems, item]
                });
                sessionStorage.setItem('user', JSON.stringify([{...user, wishlist: [...wishlistItems, item]}]));
            };
        };
    };

    const isLiked = (id) => wishlistItems && wishlistItems.some(element => element.id === id);

    return (
        <WishlistContext.Provider
            value={{
                isLiked,
                addRemove,
                wishlistItems,
            }}
        >
            {children}
        </WishlistContext.Provider>
    )
}

