import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { sort } from '../helpers/sortHelper';
import { wishlist } from '../helpers/likeHelpers';

const Wishlist = () => {

    return (
        <>
            <ItemListContainer title="Your Wishlist" prod={sort(wishlist)} />
        </>
    )
}

export default Wishlist
