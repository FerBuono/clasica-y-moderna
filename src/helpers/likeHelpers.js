
export const handleLike = (liked, setLiked) => {
    setLiked(!liked);
};

export const isLiked = (item, setLiked, wishlist) => {
    wishlist.some(product => product.id === item.id) 
        ? setLiked(true)
        : setLiked(false);
};

export const handleWishlist = (item, wishlist, setWishlist) => {
    wishlist.every(product => product.id !== item.id) 
        ? setWishlist([...wishlist, item])
        : setWishlist(wishlist.filter(product => product.id !== item.id));

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};