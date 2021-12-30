import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { Container, Title, Author, Year, Image, Info, BookInfo, Price, Buttons, BuyButton, Btn } from './ItemStyle';
import { NavLink } from 'react-router-dom'
import { handleWishlist, isLiked, handleLike } from '../../helpers/likeHelpers';
import { CartContext, CurrencyContext, WishlistContext } from '../../contexts';
import { useSnackbar } from 'notistack';


const Item = ({item}) => {

    const {cart, setCart} = useContext(CartContext);

    const {currency} = useContext(CurrencyContext);

    const {wishlist, setWishlist} = useContext(WishlistContext);

    const [liked, setLiked] = useState(false);

    const addToCart = (item) => {
        if(cart.some(product => product.title === item.title)) {
            cart.find(product => product.title === item.title).c += 1;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, c: 1}]);
        }
    };
    
    useEffect(() => {
        isLiked(item, setLiked, wishlist);
    }, []);

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar(`1 item added to the Cart`, {
            variant: 'success',
        });
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
                <Price>
                    {currency} {(() => {
                        switch (currency) {
                            case 'ARS$': 
                                return (Number(item.price) * 200).toFixed(0);
                            case 'US$': 
                                return Number(item.price);
                            case '€':
                                return (Number(item.price) * 0.88).toFixed(2);
                            default:
                                return;
                        };
                    })()}
                </Price>
            </Info>
            <Buttons>
                <BuyButton onClick={(e) => {
                    e.preventDefault();
                    addToCart(item);
                    handleClick();
                }}>
                    Add to Cart
                </BuyButton>
                <Btn 
                    onClick={() => {
                        handleLike(liked, setLiked);
                        handleWishlist(item, wishlist, setWishlist);
                    }}
                    title="Add to Your Wishlist"
                >
                    {
                        liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091'}} />
                    }
                </Btn>
            </Buttons>
        </Container>
    )
}

export default Item
