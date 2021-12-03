// import { Button } from '@mui/material';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: grey;
    padding: 10px;
`;

const Title = styled.h1`
    flex: 1;
    font-size: 30px;
`;

const LinksContainer = styled.div`
    flex: 3;
    display: flex;
    justify-content:    space-evenly;
`; 

const Button = styled.button`
    padding: 5px 10px;
    font-size: 20px;
    background-color: #f5f5f3;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <Container>
            <Title>CLASICA y MODERNA</Title>
            <LinksContainer>
                <Button>Home</Button>
                <Button>Categories</Button>
                <Button>Authors</Button>
                <Button>Login</Button>
            </LinksContainer>
        </Container>
    )
}

export default Navbar
