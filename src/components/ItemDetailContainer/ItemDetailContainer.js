import { useEffect } from "react";
import { useState } from "react"
import { products } from "../../assets/data/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import styled from 'styled-components';
import Spinner from "../Spinner/Spinner";

const Container = styled.div`
    padding: 2rem;  
    background-color: #85aac516;
`;

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                products
                ? resolve(products[Math.floor(Math.random() * products.length)])
                : reject(new Error('No se pudo cargar el item'))
            }, 2000);
        });
    };

    const setItemPromise = () => {
        getItem()
            .then(setItem)
            .catch(console.error)
    };

    useEffect(() => {
        setItemPromise();
    }, [])

    return (
        <Container>
            {
                item ? <ItemDetail item={item} /> : <Spinner />
            }
        </Container>
    )
}

export default ItemDetailContainer
