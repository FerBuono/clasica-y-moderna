import { KeyboardArrowDown, ShoppingCart } from '@mui/icons-material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: white;
  
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Nav = styled.p`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 600;
    margin-right: 1.5rem;
    cursor: pointer;
    transition: all .2s ease;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #050814;
        opacity: 0;
        transition: all .2s ease;
    }

    &:hover {
        &::after {
            opacity: 1;
        }
    }
`;

const Categories = styled.ul`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const Right = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Languages = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Currencies = styled.select`
    height: 100%;
    font-weight: 600;
    cursor: pointer;
    border: none;
    margin-right: 1.5rem;
    font-size: 15px;

    &:focus {
        outline: none;
    }
`;

const Currency = styled.option``;

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
                        <Currency>$ USD</Currency>
                        <Currency>£ GBP</Currency>
                        <Currency selected>$ ARS</Currency>
                    </Currencies>
                    <Cart>
                        <Total>US$ 0.00</Total>
                        <Divisor></Divisor>
                        <Amount>0</Amount>
                        <ShoppingCart />
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Bottombar
