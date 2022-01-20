import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import { Container, Title, CheckoutDetail, Summary, PurchaseTitle, Product, Name, Price, TotalPrice } from './CheckoutFormContainerStyle';

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
