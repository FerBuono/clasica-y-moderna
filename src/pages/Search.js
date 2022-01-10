import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const Search = () => {

    const {input} = useParams();
    const [products, setProducts] = useState();

    const search = input.toLowerCase();

    useEffect(() => {
        setProducts(null);
        const db = getFirestore();
        const data = collection(db, 'items');
        getDocs(data).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()}))
            .filter(book => (
                book.title.toLowerCase().includes(search) || 
                book.author.toLowerCase().includes(search) || 
                book.desc.some(desc => desc.toLowerCase().includes(search)) ||
                book.categories.some(c => c.toLowerCase().includes(search))
            )))
        })
    }, [input]);

    return (
        <ItemListContainer title={`Search: "${input}"`} prod={products} />
    )
}

export default Search
