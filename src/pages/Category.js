import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore,  query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const Category = () => {

    const {category} = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
        setProducts(null);
        const db = getFirestore();
        const data = collection(db, 'items');
        const q = query(data, where("categories", "array-contains", category));
        getDocs(q).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, [category]);

    return (
        <>
            <ItemListContainer title={`Category: ${category}`} prod={products}/>
        </>
    )
}

export default Category
