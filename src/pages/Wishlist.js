import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { sort } from '../helpers/sortHelper';
import { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { UserContext } from '../context/UserContext';

const Wishlist = () => {

    const {wishlistItems} = useContext(WishlistContext);
    const {isSignedIn} = useContext(UserContext);

    return (
        <>
            <ItemListContainer title="Your Wishlist" prod={isSignedIn() ? sort(wishlistItems) : []} noResults="Your wishlist is empty."/>
        </>
    )
}

export default Wishlist
