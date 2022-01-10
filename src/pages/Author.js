import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore,  query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const Author = () => {

    const {author} = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
        setProducts(null);
        const db = getFirestore();
        const data = collection(db, 'items');
        const q = query(data, where("author", "==", author));
        getDocs(q).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, [author]);

    return (
        <>
            <ItemListContainer title={`Books by: ${author}`} prod={products}/>
        </>
    )
}

export default Author
