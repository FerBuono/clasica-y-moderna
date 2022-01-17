import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/images/logos/logo-simple.png';

export const Container = styled.div`
    padding: 2rem 10px;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: #333333;
    box-shadow: 0 0 5px 0 grey;
`;

export const Title = styled.h2`
    margin-bottom: 2rem;
    text-decoration: underline;
`;

export const Img = styled.img`
    width: 10%;
    margin-bottom: 2rem;
`;

export const Text = styled.h3`
    margin-bottom: 1rem;
`;

export const List = styled.ul``;

export const Item = styled.li`
    margin-bottom: .5rem;
`;

const NoOrders = () => {
    return (
        <Container>
            <Title>Your have no orders yet.</Title>
            <Img src={logo} />
            <Text>Start buying:</Text>
            <List>
                <Item><Link to={'/authors'} style={{textDecoration:'underline'}}>Authors</Link></Item>
                <Item><Link to={'/categories'} style={{textDecoration:'underline'}}>Categories</Link></Item>
                <Item><Link to={'/'} style={{textDecoration:'underline'}}>Products</Link></Item>
            </List>
        </Container>
    )
}

export default NoOrders
