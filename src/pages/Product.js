import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import { FirebaseClient } from '../firebase/client';

const Product = () => {

    const {productId} = useParams()
    const [item, setItem] = useState(null);
    const firebase = new FirebaseClient();

    useEffect(() => {
        getProductFromDb()
    }, [productId]);

    const getProductFromDb = async () => {
        try {
            const value = await firebase.getProduct(productId);
            setItem(value);
        } catch (error) {
            console.error('pages/Product/getProductFromDb', error)
        }
    };

    return (
        <ItemDetailContainer item={item}/>
    )
}

export default Product
