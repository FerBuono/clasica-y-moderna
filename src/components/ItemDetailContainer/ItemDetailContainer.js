import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { Container } from './ItemDetailContainerStyle';

const ItemDetailContainer = ({item}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            {
                item ? <ItemDetail item={item} /> : <Spinner />
            }
        </Container>
    )
}

export default ItemDetailContainer
