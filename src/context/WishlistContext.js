import { createContext, useState } from "react";

export const WishlistContext = createContext({});

export const WishlistContextProvider = ({children}) => {

    const [wishlistItems, setWishlistItems] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

    const addRemove = (item) => {

        if(isLiked(item.id)) {
            setWishlistItems([...wishlistItems.filter(element => element.id !== item.id)]);
            localStorage.setItem('wishlist', JSON.stringify([...wishlistItems.filter(element => element.id !== item.id)]));
        } else {
            setWishlistItems([...wishlistItems, item]);
            localStorage.setItem('wishlist', JSON.stringify([...wishlistItems, item]));
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

