import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Container, Title, Author, Image, Info } from './ItemStyle';

const Product = ({item}) => {

    const [productStock, setProductStock] = useState(item.stock);

    const onAdd = (count, setCount) => {
        setProductStock(productStock - count);
        productStock > 0 && setCount(0);
    }

    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Author>{item.author}</Author>
                <ItemCount stock={productStock} initial={0} onAdd={onAdd}/>
            </Info>
        </Container>
    )
}

export default Product
