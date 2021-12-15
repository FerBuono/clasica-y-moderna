import { StarBorder } from '@mui/icons-material';
import ItemList from '../ItemList/ItemList';
import { Container, Title } from './ItemListContainerStyle';

const ItemListContainer = () => {
    return (
        <Container>
            <Title><StarBorder /> Most Popular Books <StarBorder /></Title>
            <ItemList />
        </Container>
    )
}

export default ItemListContainer
