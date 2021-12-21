import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Wishlist = () => {

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    return (
        <>
            <ItemListContainer title="Your Wishlist" prod={wishlist} />
        </>
    )
}

export default Wishlist
