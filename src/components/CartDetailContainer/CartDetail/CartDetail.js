import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { CurrencyContext } from '../../../context/CurrencyContext';
import CartItem from './CartItem/CartItem';
import { Container, Cart, Summary, Title, Product, Name, Price, TotalPrice, BuyBtn, ClearBtn } from './CartDetailStyle';

const CartDetail = ({cart}) => {

    const {clear} = useContext(CartContext);
    const {currency, changeItemPrice, changeCartPrice} = useContext(CurrencyContext);

    return (
        <Container>
            <Cart>
                {
                    cart.map(item => <CartItem item={item} key={item.title}/>)
                }
            </Cart>
            <Summary>
                <Title>Purchase Summary</Title>
                {
                    cart.map(item => (
                        <Product key={item.title}>
                            <Name>{item.title} <span style={{color: 'grey', fontSize: '12px', marginLeft:'5px'}}>(x{item.amount})</span></Name>
                            <Price>{currency} {(changeItemPrice(item) * item.amount).toFixed(2)}</Price>
                        </Product>
                    ))
                }
                <TotalPrice>Total: <span>{currency} {(changeCartPrice(cart)).toFixed(2)}</span></TotalPrice>
                <BuyBtn><Link to={'/checkout'} style={{color:'inherit'}}>Go to checkout</Link></BuyBtn>
                <ClearBtn onClick={clear}>Clear cart</ClearBtn>
            </Summary>
        </Container>
    )
}

export default CartDetail
