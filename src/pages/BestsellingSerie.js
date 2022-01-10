import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore,  query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const BestsellingSerie = () => {

    const {serie} = useParams();
    const [products, setProducts] = useState();

    useEffect(() => {
        setProducts(null);
        const db = getFirestore();
        const data = collection(db, 'items');
        const q = query(data, where("series", "array-contains", serie));
        getDocs(q).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, [serie]);

    return (
        <>
            <ItemListContainer title={`Bestselling Serie: ${serie}`} prod={products}/>
        </>
    )
}

export default BestsellingSerie
