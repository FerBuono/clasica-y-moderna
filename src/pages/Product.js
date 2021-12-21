import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Product = () => {

    const {productId} = useParams()

    useEffect(() => {
        console.log(productId);
    }, [productId])

    return (
        <ItemDetailContainer id={productId}/>
    )
}

export default Product
