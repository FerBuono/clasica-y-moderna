import { useContext } from 'react';
import { CurrencyContext } from '../../contexts';
import CartWidget from '../CartWidget/CartWidget';
import Categories from '../Categories/Categories';
import { Container, Wrapper, Left, Right, Nav, Currency, Currencies } from './BottombarStyle';

const Bottombar = () => {

    const {setCurrency} = useContext(CurrencyContext);

    const handleSelect = (e) => {
        setCurrency(e.target.value)
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Categories />
                    <Nav>Bestsellers</Nav>
                    <Nav>New Releases</Nav>
                    <Nav>FAQs</Nav>
                </Left>
                <Right>
                    <Currencies defaultValue={"US$"} onChange={handleSelect}>
                        <Currency value='ARS$'>$ ARS</Currency>
                        <Currency value='€'>€ EUR</Currency>
                        <Currency value='US$'>$ USD</Currency>
                    </Currencies>
                    <CartWidget />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Bottombar
