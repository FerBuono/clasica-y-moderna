import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { Container, Title } from './ItemListContainerStyle';

const ItemListContainer = ({title, prod, results}) => {

    const [list, setList] = useState(null);
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            prod
            ? resolve([...prod])
            : reject(new Error('No se pudo cargar la lista'))
        });
    };
    
    const setProductPromise = () => {
        getProducts()
        .then(setList)
        .catch(console.error);
    };
    
    useEffect(() => {
        setProductPromise();
    }, [prod]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <Container>
            <Title>{title}<span style={{fontWeight: 400, fontSize:'20px', marginLeft: '1rem'}}>({results} {results === 1 ? 'result': 'results'})</span></Title>
            {
                prod.length > 0 
                    ? list 
                        ? <ItemList list={list}/> 
                        : <Spinner />
                    : <Title>No hay libros</Title>
            }
        </Container>
    )
}

export default ItemListContainer
