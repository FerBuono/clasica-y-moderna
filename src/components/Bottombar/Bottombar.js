import CartWidget from '../CartWidget/CartWidget';
import Categories from '../Categories/Categories';
import Languages from '../Languages/Languages';
import { Container, Wrapper, Left, Right, Nav, Currency, Currencies } from './BottombarStyle';

const Bottombar = () => {
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
                    <Languages />
                    <Currencies defaultValue={"$ USD"}>
                        <Currency>$ AUD</Currency>
                        <Currency>€ EUR</Currency>
                        <Currency>$ USD</Currency>
                        <Currency>£ GBP</Currency>
                        <Currency>$ ARS</Currency>
                    </Currencies>
                    <CartWidget />
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Bottombar
