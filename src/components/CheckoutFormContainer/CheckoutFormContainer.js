import styled from 'styled-components';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import pattern from '../../assets/images/patterns/home.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CurrencyContext } from '../../context/CurrencyContext';

export const Container = styled.div`
    padding: 2rem;  
    background-image: url(${pattern});
    background-size: 150%;
`;

export const Title = styled.h2`
    padding: 1rem 10px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 5px 0 grey;
`;


export const Summary = styled.div`
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 0 5px 0 grey;
    padding: 1rem 2rem;
`;

export const PurchaseTitle = styled.h3`
    text-decoration: underline;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const CheckoutDetail = styled.div`
    display: flex;
    align-items: flex-start;    
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding: 15px 0;
`;

export const Name = styled.p`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
`;

export const Price = styled.p``;

export const TotalPrice = styled.h3`
    padding: 15px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CheckoutFormContainer = () => {

    const {cartItems} = useContext(CartContext);
    const {currency, changeItemPrice, changeCartPrice} = useContext(CurrencyContext);

    return (
        <Container>
            <Title>Checkout</Title>
            <CheckoutDetail>
                <CheckoutForm cart={cartItems}/>
                <Summary>
                    <PurchaseTitle>Purchase Summary</PurchaseTitle>
                    {
                        cartItems.map(item => (
                            <Product>
                                <Name>{item.title} <span style={{color: 'grey', fontSize: '12px', marginLeft:'5px'}}>(x{item.amount})</span></Name>
                                <Price>{currency} {(changeItemPrice(item) * item.amount).toFixed(2)}</Price>
                            </Product>
                        ))
                    }
                    <TotalPrice>Total: <span>{currency} {(changeCartPrice(cartItems)).toFixed(2)}</span></TotalPrice>
                </Summary>
            </CheckoutDetail>
        </Container>
    )
}

export default CheckoutFormContainer
