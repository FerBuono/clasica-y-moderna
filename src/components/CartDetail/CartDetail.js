import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import CartItem from '../CartItem/CartItem';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const Cart = styled.div`
    flex: 3;
    /* height: 800px;
    overflow: auto; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: white;
    padding: 16px 10px;
    box-shadow: 0 0 5px 0 grey;
    margin-right: 2rem;
    position: relative;
`;

export const Summary = styled.div`
    flex: 1;
    background-color: white;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 0 5px 0 grey;
    padding: 1rem 2rem;
`;

export const Title = styled.h3`
    text-decoration: underline;
    font-size: 20px;
    margin-bottom: 10px;
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

export const BuyBtn = styled.button`
    margin-top: 20px;
    background-color: #85aac5;
    color: white;
    font-size: 20px;
    font-weight: 500;
    border: 2px solid #85aac5;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px 0;
    transition: all .3s ease;

    &:hover {
        background-color: #81b9e0;
        border-color: #81b9e0;
    }
`;

export const ClearBtn = styled.button`
    margin-top: 10px;
    background-color: white;
    color: #85aac5;
    font-size: 20px;
    font-weight: 500;
    border: 2px solid #85aac5;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px 0;
    transition: all .3s ease;
`;

const CartDetail = ({cart}) => {

    const {clear} = useContext(CartContext);
    const {currency, changeItemPrice, changeCartPrice} = useContext(CurrencyContext);

    return (
        <Container>
            <Cart>
                {
                    cart.map(item => <CartItem item={item}/>)
                }
            </Cart>
            <Summary>
                <Title>Purchase Summary</Title>
                {
                    cart.map(item => (
                        <Product>
                            <Name>{item.title} <span style={{color: 'grey', fontSize: '12px', marginLeft:'5px'}}>(x{item.amount})</span></Name>
                            <Price>{currency} {(changeItemPrice(item) * item.amount).toFixed(2)}</Price>
                        </Product>
                    ))
                }
                <TotalPrice>Total: <span>{currency} {(changeCartPrice(cart)).toFixed(2)}</span></TotalPrice>
                <BuyBtn>Go to checkout</BuyBtn>
                <ClearBtn onClick={clear}>Clear cart</ClearBtn>
            </Summary>
        </Container>
    )
}

export default CartDetail
