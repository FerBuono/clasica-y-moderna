import styled from 'styled-components';

import { ShoppingCart } from "@mui/icons-material";

const Cart = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1rem;
    background-color: #ba7735;
    font-weight: 600;
    color: white;
`;

const Total = styled.p``;

const Amount = styled.div`
    display: flex;
    align-items: center;
    margin-right: .5rem;
`;

const Divisor = styled.div`
    height: 50%;
    width: .5px;
    margin: 0 1rem;
    background-color: #ffffff81;
`;

const CartWidget = () => {
    return (
        <Cart>
            <Total>US$ 0.00</Total>
            <Divisor></Divisor>
            <Amount>0</Amount>
            <ShoppingCart />
        </Cart>
    )
}

export default CartWidget
