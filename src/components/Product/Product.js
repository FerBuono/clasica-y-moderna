import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Container, Image, Info } from './ProductStyle';

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
                <ItemCount stock={productStock} initial={0} onAdd={onAdd}/>
            </Info>
        </Container>
    )
}

export default Product
