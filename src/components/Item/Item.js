import { AddShoppingCart, FavoriteBorder, Add } from '@mui/icons-material';
import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import { Container, Title, Author, Year, Image, Info, BookInfo, Buttons, Button } from './ItemStyle';

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
            <Buttons>
                <Button
                    style={{outline:'#85aac5 solid 2px', color:'white', backgroundColor:'#85aac5'}}
                >
                    <AddShoppingCart />
                </Button>
                <Button><FavoriteBorder /></Button>
                <Button><Add /></Button>
            </Buttons>
        </Container>
    )
}

export default Product
