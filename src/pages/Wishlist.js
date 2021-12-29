import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { sort } from '../helpers/sortHelper';
import { useContext } from 'react';
import { WishlistContext } from '../contexts';

const Wishlist = () => {

    const {wishlist} = useContext(WishlistContext)

    return (
        <>
            <ItemListContainer title="Your Wishlist" prod={sort(wishlist)} />
        </>
    )
}

export default Wishlist
