import { Container, Title } from './CartDetailContainerStyle';
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react';
import CartDetail from '../CartDetail/CartDetail';
import CartNoResults from '../NoResults/CartNoResults';

const CartDetailContainer = ({cart, amount}) => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    
    return (
        <Container>
            <Title>Your Cart<span style={{fontWeight: 400, fontSize:'20px', marginLeft: '1rem'}}>({amount} {amount === 1 ? 'item': 'items'})</span></Title>
            {
                cart.length > 0 
                    ? <CartDetail cart={cart} />
                    : <CartNoResults />
            }
        </Container>
    )
}

export default CartDetailContainer
