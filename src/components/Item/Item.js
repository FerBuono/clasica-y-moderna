import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Container, Title, Author, Year, Image, Info, BookInfo, Price, Buttons, BuyButton, Button } from './ItemStyle';
import { NavLink } from 'react-router-dom'
import './animation.css';
import { handleWishlist, isLiked, handleLike } from '../../helpers/likeHelpers';

const Item = ({item}) => {

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        isLiked(item, setLiked);
    }, [])

    return (
        <Container>
            <NavLink 
                to={`/product/${item.id}`} 
                style={{height: '50%', margin: '10px 0'}}
            >
                <Image src={item.img} alt={item.title}/>
            </NavLink>
            <Info>
                <BookInfo>
                    <Title>
                        <NavLink 
                            to={`/product/${item.id}`}
                            style={{color: 'black', textDecoration: 'none'}} 
                        >
                            {item.title}
                        </NavLink>
                    </Title>
                    <Author>
                        <NavLink
                            to={`/author/${item.author}`}
                            style={{color: 'black', textDecoration: 'none', borderBottom: '1px dotted grey'}} 
                        >
                            {item.author}
                        </NavLink>
                    </Author>
                    <Year>{item.year}</Year>
                </BookInfo>
                <Price>US$ {item.price}</Price>
            </Info>
            <Buttons>
                <BuyButton>Add to Cart</BuyButton>
                <Button 
                    onClick={() => {
                        handleLike(liked, setLiked);
                        handleWishlist(item);
                    }}
                >
                    {
                        liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091', animation: 'like 1s'}} />
                    }
                </Button>
            </Buttons>
        </Container>
    )
}

export default Item
