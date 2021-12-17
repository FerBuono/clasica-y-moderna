import Item from '../Item/Item';
import { Container } from './ItemListStyle';
import Carousel from 'react-elastic-carousel';
import './carousel.css';

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 3},
    {width: 768, itemsToShow: 5},
    {width: 1200, itemsToShow: 6},
]

const ItemList = ({list}) => {
    return (
        <Container>
            <Carousel breakPoints={breakPoints}>
                {list.map(item => (
                    <Item item={item} key={item.id} />
                ))}
            </Carousel>
        </Container>
    )
}

export default ItemList
