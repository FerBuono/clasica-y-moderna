import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { FirebaseClient } from '../firebase/client';
import { useParams } from 'react-router-dom';

const Category = () => {

    const {category} = useParams();
    const [products, setProducts] = useState();
    const firebase = new FirebaseClient();

    useEffect(() => {
        setProducts(null);
        getProductsFromDb();
    }, [category]);

    const getProductsFromDb = async () => {
		try {
			const value = await firebase.getProductsByGroup('categories', category);
			setProducts(value.filter(book => book.stock > 0));
		} catch (error) {
			console.error('pages/Category/getProductsFromDb', error);
		}
	};

    return (
        <>
            <ItemListContainer title={`Category: ${category}`} prod={products}/>
        </>
    )
}

export default Category
