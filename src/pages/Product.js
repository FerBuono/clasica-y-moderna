import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const Product = () => {

    const {productId} = useParams()
    const [item, setItem] = useState(null);

    useEffect(() => {
        const db = getFirestore();

        const data = doc(db, 'items', productId)
        getDoc(data).then(res => {
            setItem({id: res.id, ...res.data()})
        })
    }, [productId])

    return (
        <ItemDetailContainer item={item}/>
    )
}

export default Product
