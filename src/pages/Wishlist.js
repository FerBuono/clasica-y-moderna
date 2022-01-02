import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { sort } from '../helpers/sortHelper';
import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';

const Wishlist = () => {

    const {wishlistItems} = useContext(WishlistContext);

    const results = wishlistItems.length;

    return (
        <>
            <ItemListContainer title="Your Wishlist" results={results} prod={sort(wishlistItems)} />
        </>
    )
}

export default Wishlist
