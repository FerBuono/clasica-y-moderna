import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Container, Title, Author, Year, Image, Info, BookInfo, Price, Buttons, BuyButton, Button } from './ItemStyle';
import { NavLink } from 'react-router-dom'
import { handleWishlist, isLiked, handleLike } from '../../helpers/likeHelpers';
import Snackbar from '../Snackbar/Snackbar';

const Item = ({item}) => {

    const [liked, setLiked] = useState(false);
    
    const [open, setOpen] = useState(false);

    const [link, setLink] = useState('');

    const [color, setColor] = useState('');

    useEffect(() => {
        isLiked(item, setLiked);
    }, []);


    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        };
    
        setOpen(false);
    };

    return (
        <Container>
            <NavLink 
                to={`/products/${item.id}`} 
                style={{height: '50%', margin: '10px 0'}}
            >
                <Image src={item.img} alt={item.title}/>
            </NavLink>
            <Info>
                <BookInfo>
                    <Title>
                        <NavLink 
                            to={`/products/${item.id}`}
                            style={{color: 'black', textDecoration: 'none'}} 
                        >
                            {item.title}
                        </NavLink>
                    </Title>
                    <Author>
                        <NavLink
                            to={`/authors/${item.author}`}
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
                <BuyButton 
                    onClick={() => {
                        handleClick();
                        setLink('cart');
                        setColor('#024f94');
                    }}
                >
                    Add to Cart
                </BuyButton>
                <Button 
                    onClick={() => {
                        handleLike(liked, setLiked, handleClick);
                        handleWishlist(item);
                        setLink('wishlist');
                        setColor('#BA7735');
                    }}
                    title="Add to Your Wishlist"
                >
                    {
                        liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091'}} />
                    }
                </Button>
            </Buttons>
            <Snackbar handleClose={handleClose} open={open} link={link} bgColor={color}/>
        </Container>
    )
}

export default Item
