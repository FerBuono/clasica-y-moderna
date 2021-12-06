import { StarBorder } from '@mui/icons-material';
import styled from 'styled-components';
import { products } from '../assets/data/data';
import Product from './Product';

const Container = styled.div`
    padding: 2rem;  
`;

const Title = styled.h2`
    padding: 1rem 0;
`;

const Books = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
`;

const ItemListContainer = () => {
    return (
        <Container>
            <Title><StarBorder /> Most Popular Books <StarBorder /></Title>
            <Books>
                {products.map(item => (
                    <Product item={item} key={item.id} />
                ))}
            </Books>
        </Container>
    )
}

export default ItemListContainer
