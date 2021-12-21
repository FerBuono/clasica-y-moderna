import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Wishlist = () => {

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    return (
        <>
            <ItemListContainer title="Your Wishlist" prod={wishlist} />
        </>
    )
}

export default Wishlist
