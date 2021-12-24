export let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export const handleLike = (liked, setLiked) => {
    setLiked(!liked);
};

export const isLiked = (item, setLiked) => {
    wishlist.some(product => product.id === item.id) 
        ? setLiked(true)
        : setLiked(false);
};

export const handleWishlist = (item) => {
    wishlist = wishlist.every(product => product.id !== item.id) 
        ? [...wishlist, item]
        : wishlist.filter(product => product.id !== item.id);

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
};