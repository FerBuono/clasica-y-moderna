import Item from '../Item/Item';
import { Container } from './ItemListStyle';

const ItemList = ({list}) => {
    return (
        <Container>
            {list.map(item => (
                <Item item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default ItemList
