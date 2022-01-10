import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { sort } from '../helpers/sortHelper';
import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Home = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const data = collection(db, 'items')
        getDocs(data).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, [])

    return (
        <>
            <ItemListContainer title="Books" prod={products} />
        </>
    )
}

export default Home
