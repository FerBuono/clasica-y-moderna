import { useEffect, useState } from 'react';
import { products } from '../../assets/data/data';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { Container, Title } from './ItemListContainerStyle';

const ItemListContainer = () => {

    const [list, setList] = useState(null);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                products
                ? resolve([...products])
                : reject(new Error('No se pudo cargar la lista'))
            }, 2000);
        });
    };

    const setProductPromise = () => {
        getProducts()
            .then(setList)
            .catch(console.error)
    };

    useEffect(() => {
        setProductPromise();
    }, []);

    return (
        <Container>
            <Title>Most Popular Books</Title>
            {
                list ? <ItemList list={list}/> : <Spinner />
            }
        </Container>
    )
}

export default ItemListContainer
