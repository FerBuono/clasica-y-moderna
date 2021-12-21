import { useEffect, useState } from "react";
import { products } from "../../assets/data/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { Container } from './ItemDetailContainerStyle';

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState(null);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                products
                ? resolve(products.find(product => product.id === Number(id)))
                : reject(new Error('No se pudo cargar el item'))
            }, 0);
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
