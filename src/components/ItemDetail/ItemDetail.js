import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { handleLike, handleWishlist, isLiked } from '../../helpers/likeHelpers';
import ItemCount from '../ItemCount/ItemCount';
import { useSnackbar } from 'notistack';
import { 
    Container, 
    Book, 
    Img, 
    Info, 
    Button,
    Title, 
    Author,
    Category,
    Categories,   
    Year, 
    Desc, 
    Buy, 
    Price, 
    Amount, 
    Buttons, 
    BuyButton, 
} from './ItemDetailStyle';
import { CartContext } from '../../context/CartContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import { WishlistContext } from '../../context/WishlistContext';

const ItemDetail = ({item}) => {

    const {title, author, categories, year, img, stock, desc, price} = item;
    const [productStock, setProductStock] = useState(stock);
    const [count, setCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const {addItem, cartItems} = useContext(CartContext);
    const {isLiked, addRemove} = useContext(WishlistContext);
    const {currency, changeItemPrice} = useContext(CurrencyContext);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const addToCart = () => {
        if (count > 0) {
            addItem(item, count);
        };

        setProductStock(productStock - count);
        setCount(0);
    };
    
    const handleClick = () => {
        count > 0 &&
        enqueueSnackbar(`${count} ${count > 1 ? 'items' : 'item'} added to the Cart`, {
            variant: 'success',
        });
    };
  
    useEffect(() => {
        isLiked(item)
            ? setLiked(true)
            : setLiked(false);
    }, []);
    
    return (
        <Container>
            <Book>
                <Img src={img} />
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
            </Book>
            <Buy>
                <Price>
                    {currency} {changeItemPrice(item)}
                </Price>
                <p>Stock: {productStock}</p>
                <Amount>Amount: <ItemCount stock={productStock} count={count} setCount={setCount} /></Amount>
                <Buttons>
                    <BuyButton 
                        onClick={() => {
                            addToCart();
                            handleClick();
                        }}
                    >
                        Add to Cart ({count})
                    </BuyButton>
                    {
                        cartItems.length > 0 && 
                            <Link to={'/cart'} style={{width: '32px', height: '32px'}} title="Buy Now!">
                                <Button>
                                    <ShoppingCart />
                                </Button>
                            </Link>
                    }
                </Buttons>
            </Buy>
        </Container>
    )
}

export default ItemDetail
