import { StarBorder } from '@mui/icons-material';
import { products } from '../../assets/data/data';
import Product from '../Product/Product';
import { Container, Title, Books } from './ItemListContainerStyle';

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
