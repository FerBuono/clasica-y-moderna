import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ItemCount from '../../ItemCount/ItemCount';
import { useSnackbar } from 'notistack';
import { Container, Book, Img, Info, Button, Title, Author, Category, Categories, Year, Desc, Buy, Price, Amount, Buttons, BuyButton } from './ItemDetailStyle';
import { CartContext } from '../../../context/CartContext';
import { CurrencyContext } from '../../../context/CurrencyContext';
import { WishlistContext } from '../../../context/WishlistContext';
import { UserContext } from '../../../context/UserContext';

const ItemDetail = ({item}) => {

    const {title, author, categories, year, img, stock, desc} = item;
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const {addItem, cartItems} = useContext(CartContext);
    const {isSignedIn} = useContext(UserContext);
    const {isLiked, addRemove} = useContext(WishlistContext);
    const {currency, changeItemPrice} = useContext(CurrencyContext);
    const {enqueueSnackbar} = useSnackbar();

    const addToCart = () => {
        if (count > 0) {
            addItem(item, count);
            enqueueSnackbar(`${count} ${count > 1 ? 'items' : 'item'} added to the Cart`, {
                variant: 'success',
            });
        };
        setCount(0);
    };

    const handleAdd = () => count < stock && setCount(count + 1);
        
    const handleRemove = () => count > 0 && setCount(count - 1);
    
    useEffect(() => {
        isSignedIn() && isLiked(item.id) ? setLiked(true) : setLiked(false);
    }, [isLiked(item.id)]);
    
    return (
        <Container>
            <Book>
                <Img src={img} alt='book image'/>
                <Info>
                    <Title>{title}</Title>
                    <Author>
                        By (author):
                        <NavLink
                            to={`/authors/${author}`}
                            style={{color: 'black', textDecoration: 'none', marginLeft: '10px', borderBottom: '1px dotted grey'}}
                        >
                            {author}
                        </NavLink>
                    </Author>
                    <Category>
                        Categories:  
                        {
                            categories.sort().map(category => (
                                <Categories>
                                    <NavLink
                                        to={`/categories/${category}`}
                                        style={{color: 'black', textDecoration: 'none', borderBottom: '1px dotted grey'}} 
                                    >
                                        {category}
                                    </NavLink>
                                </Categories>
                            ))
                        }
                    </Category>
                    <Year>First edition: {year}</Year>
                    {
                        desc.map(desc => (
                            <Desc>
                                {desc}
                            </Desc>
                        ))    
                    }
                </Info>
                {
                    isSignedIn()
                        ?
                            <Button 
                                onClick={() => {
                                    addRemove(item);
                                    setLiked(!liked);
                                }}
                                title="Add to Your Wishlist"
                            >
                                {
                                    liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091'}} />
                                }
                            </Button>
                        :
                            <Button 
                                onClick={() => {
                                    enqueueSnackbar(`Sorry, you need to be signed in in order to add items to your wishlist.`, {
                                        variant: 'error',
                                    });
                                }}
                                title="Add to Your Wishlist"
                            >
                                <FavoriteBorder />
                            </Button>
                }
            </Book>
            <Buy>
                <Price>
                    {currency} {changeItemPrice(item)}
                </Price>
                {
                    stock > 0 
                        ?<>
                            <Amount>Quantity: <ItemCount count={count} handleRemove={handleRemove} handleAdd={handleAdd} /></Amount>
                            <Buttons>
                                {
                                    isSignedIn()
                                        ?
                                            <BuyButton onClick={addToCart}>
                                                Add to Cart ({count})
                                            </BuyButton>
                                        :
                                            <BuyButton onClick={() => {
                                                enqueueSnackbar(`Sorry, you need to be signed in in order to add items to your cart.`, {
                                                    variant: 'error',
                                                });
                                            }}>
                                                Add to Cart ({count})
                                            </BuyButton>
                                }
                                
                                {
                                    cartItems.length > 0 && 
                                        <Link to={'/cart'} style={{width: '32px', height: '32px'}} title="Buy Now!">
                                            <Button>
                                                <ShoppingCart />
                                            </Button>
                                        </Link>
                                }
                            </Buttons>
                        </>
                        : <h2 style={{color: 'grey'}}>Out of stock</h2>
                            
                }
            </Buy>
        </Container>
    )
}

export default ItemDetail
