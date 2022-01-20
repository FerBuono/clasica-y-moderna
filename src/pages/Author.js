import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { FirebaseClient } from '../firebase/client';
import { useParams } from 'react-router-dom';

const Author = () => {

    const {author} = useParams();
    const [products, setProducts] = useState();
    const firebase = new FirebaseClient();

    useEffect(() => {
        setProducts(null);
        getProductsFromDb();
    }, [author]);

    const getProductsFromDb = async () => {
		try {
			const value = await firebase.getProductsByGroup('author', author);
			setProducts(value.filter(book => book.stock > 0));
		} catch (error) {
			console.error('pages/Author/getProductsFromDb', error);
		}
	};

    return (
        <>
            <ItemListContainer title={`Books by: ${author}`} prod={products}/>
        </>
    )
}

export default Author
