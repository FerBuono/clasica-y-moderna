import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { sort } from '../helpers/sortHelper';
import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const Wishlist = () => {

    const {wishlistItems} = useContext(WishlistContext);

    return (
        <>
            <ItemListContainer title="Your Wishlist" prod={sort(wishlistItems)} noResults="Your wishlist is empty."/>
        </>
    )
}

export default Wishlist
