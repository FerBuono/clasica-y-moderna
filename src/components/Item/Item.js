import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Container, Title, Author, Year, Image, Info, BookInfo } from './ItemStyle';

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
                <BookInfo>
                    <Title>{item.title}</Title>
                    <Author>{item.author}</Author>
                    <Year>{item.year}</Year>
                </BookInfo>
            </Info>
            {/* <Buttons>
                <Button></Button>
                <Button></Button>
            </Buttons> */}
        </Container>
    )
}

export default Product
