import { AddShoppingCart, FavoriteBorder, Add, Favorite } from '@mui/icons-material';
import { useState } from 'react';
import { Container, Title, Author, Year, Image, Info, BookInfo, Buttons, Button } from './ItemStyle';
import './animation.css';

const Product = ({item}) => {

    const [liked, setLiked] = useState(false);
    
    const handleLike = () => {
        setLiked(!liked);
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
                <Button onClick={handleLike}>
                    {
                        liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091', animation: 'like 1s'}} />
                    }
                </Button>
                <Button><Add /></Button>
            </Buttons>
        </Container>
    )
}

export default Product
