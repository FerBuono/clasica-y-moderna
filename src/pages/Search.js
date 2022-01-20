import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { FirebaseClient } from '../firebase/client';
import { useParams } from 'react-router-dom';

const Search = () => {

    const {input} = useParams();
    const [products, setProducts] = useState();
    const search = input.toLowerCase();
    const firebase = new FirebaseClient();

    useEffect(() => {
        setProducts(null);
        getProductsFromDb();
    }, [input]);

    const getProductsFromDb = async () => {
		try {
			const value = await firebase.getProducts();
			setProducts(value.filter(book => (
                book.title.toLowerCase().includes(search) || 
                book.author.toLowerCase().includes(search) || 
                book.desc.some(desc => desc.toLowerCase().includes(search)) ||
                book.categories.some(c => c.toLowerCase().includes(search))
            )));
		} catch (error) {
			console.error('pages/Search/getProductsFromDb', error);
		}
	};

    return (
        <ItemListContainer title={`Search: "${input}"`} prod={products} />
    )
}

export default Search
