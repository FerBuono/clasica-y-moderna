import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { FirebaseClient } from '../firebase/client';

const Home = () => {

    const [products, setProducts] = useState(null);
    const firebase = new FirebaseClient();

    useEffect(() => {
        getProductsFromDb();
    }, []);

    const getProductsFromDb = async () => {
		try {
			const value = await firebase.getProducts();
			setProducts(value.filter(book => book.stock > 0));
		} catch (error) {
			console.error('pages/Category/getProductsFromDb', error);
		}
	};

    return (
        <>
            <ItemListContainer title="Books" prod={products} />
        </>
    )
}

export default Home
