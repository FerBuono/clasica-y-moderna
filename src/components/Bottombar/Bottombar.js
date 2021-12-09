import { KeyboardArrowDown } from '@mui/icons-material';
import CartWidget from '../CartWidget/CartWidget';
import { Container, Wrapper, Left, Right, Nav, Categories, Languages, Currency, Currencies } from './BottombarStyle';

const Bottombar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Nav>
                        <Categories>Categories <KeyboardArrowDown /></Categories>
                    </Nav>
                    <Nav>Bestsellers</Nav>
                    <Nav>New Releases</Nav>
                    <Nav>FAQ</Nav>
                </Left>
                <Right>
                    <Nav>
                        <Languages>English <KeyboardArrowDown /></Languages>
                    </Nav>
                    <Currencies>
                        <Currency>$ AUD</Currency>
                        <Currency>€ EUR</Currency>
                        <Currency selected>$ USD</Currency>
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
