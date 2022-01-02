import { Container, Title } from './CartDetailContainerStyle';
import Spinner from '../Spinner/Spinner';
import { useState, useEffect } from 'react';
import CartDetail from '../CartDetail/CartDetail';

const CartDetailContainer = ({cart, amount}) => {

    const [list, setList] = useState(null);
    
    const getProducts = () => {
        return new Promise((resolve, reject) => {
            cart
            ? resolve([...cart])
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
    }, [cart]);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <Container>
            <Title>Your Cart<span style={{fontWeight: 400, fontSize:'20px', marginLeft: '1rem'}}>({amount} {amount === 1 ? 'item': 'items'})</span></Title>
            {
                cart.length > 0 
                    ? list 
                        ? <CartDetail cart={cart} />
                        : <Spinner />
                    : <Title>No hay libros</Title>
            }
        </Container>
    )
}

export default CartDetailContainer
