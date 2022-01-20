import { FavoriteBorder, Favorite } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { Container, Title, Author, Year, Image, Info, BookInfo, Price, Buttons, BuyButton, Btn } from './ItemStyle';
import { NavLink } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import { UserContext } from '../../context/UserContext';


const Item = ({item}) => {

    const {addItem} = useContext(CartContext);
    const {isSignedIn} = useContext(UserContext);
    const {isLiked, addRemove} = useContext(WishlistContext);
    const {currency, changeItemPrice} = useContext(CurrencyContext);
    const [liked, setLiked] = useState(false);
    const {enqueueSnackbar} = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar(`1 item added to the Cart`, {
            variant: 'success',
        });
    };

    useEffect(() => {
        isSignedIn() && isLiked(item.id) ? setLiked(true) : setLiked(false);
    }, [isLiked(item.id)]);

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
                    {currency} {changeItemPrice(item)}
                </Price>
            </Info>
            {
                isSignedIn()
                    ?
                        <Buttons>
                            {
                                item.stock > 0 
                                    ?
                                        <BuyButton onClick={() => {
                                            addItem(item, 1)
                                            handleClick();
                                        }}>
                                            Add to Cart
                                        </BuyButton>
                                    :
                                        <h3 style={{marginRight:"20px", color:"grey"}}>Out of stock</h3>
                            }
                            <Btn 
                                onClick={() => {
                                    addRemove(item);
                                    setLiked(!liked);
                                }}
                                title="Add to Your Wishlist"
                            >
                                {
                                    liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091'}} />
                                }
                            </Btn>
                        </Buttons>      
                    :
                        <Buttons>
                            {
                                item.stock > 0
                                    ?
                                        <BuyButton onClick={() => {
                                            enqueueSnackbar(`Sorry, you need to be signed in in order to add items to your cart.`, {
                                                variant: 'error',
                                            });
                                        }}>
                                            Add to Cart
                                        </BuyButton>
                                    :
                                        <h3 style={{marginRight:"20px", color:"grey"}}>Out of stock</h3>

                            }
                            <Btn 
                                onClick={() => {
                                    enqueueSnackbar(`Sorry, you need to be signed in in order to add items to your wishlist.`, {
                                        variant: 'error',
                                    });
                                }}
                                title="Add to Your Wishlist"
                            >
                                <FavoriteBorder />
                            </Btn>
                        </Buttons>
            }
                
        </Container>
    )
}

export default Item
