import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { Container, Title } from './ItemListContainerStyle';

const ItemListContainer = ({title, prod}) => {
    
    const [list, setList] = useState(null);
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                prod
                ? resolve([...prod])
                : reject(new Error('No se pudo cargar la lista'))
            }, 0);
        });
    };

    const setProductPromise = () => {
        getProducts()
            .then(setList)
            .catch(console.error)
    };

    useEffect(() => {
        setProductPromise();
    }, [prod]);

    return (
        <Container>
            <Title>{title}</Title>
            {
                list ? <ItemList list={list}/> : <Spinner />
            }
        </Container>
    )
}

export default ItemListContainer
