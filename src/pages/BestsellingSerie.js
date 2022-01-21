import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { FirebaseClient } from '../firebase/client';
import { useParams } from 'react-router-dom';
import { sort } from '../helpers/sortHelper';
const BestsellingSerie = () => {

    const {serie} = useParams();
    const [products, setProducts] = useState();
    const firebase = new FirebaseClient();

    useEffect(() => {
        setProducts(null);
        getProductsFromDb();
    }, [serie]);

    const getProductsFromDb = async () => {
		try {
			const value = await firebase.getProductsByGroup('series', serie);
			setProducts(value.filter(book => book.stock > 0));
		} catch (error) {
			console.error('pages/BestsellingSerie/getProductsFromDb', error);
		}
	};

    return (
        <>
            <ItemListContainer title={`Bestselling Serie: ${serie}`} prod={products && sort(products, 'year', 'decreasing')}/>
        </>
    )
}

export default BestsellingSerie
