import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext, WishlistContext } from '../../contexts';
import { handleLike, handleWishlist, isLiked } from '../../helpers/likeHelpers';
import ItemCount from '../ItemCount/ItemCount';
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



const ItemDetail = ({item}) => {

    const {title, author, categories, year, img, stock, desc, price} = item;

    const [productStock, setProductStock] = useState(stock);
    
    const [count, setCount] = useState(0);
    
    const [liked, setLiked] = useState(false);

    const {cart, setCart} = useContext(CartContext);

    const {wishlist, setWishlist} = useContext(WishlistContext);

    const addToCart = (item, count, setCount) => {
        if (count > 0) {
            if(cart.some(product => product.title === item.title)) {
                cart.find(product => product.title === item.title).c += count;
                setCart([...cart]);
            } else {
                setCart([...cart, {...item, c: count}]);
            };
        };

        setProductStock(productStock - count);
        setCount(0);
    };
    
    useEffect(() => {
        isLiked(item, setLiked, wishlist);
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
                        handleLike(liked, setLiked);
                        handleWishlist(item, wishlist, setWishlist);
                    }}
                    title="Add to Your Wishlist"
                >
                    {
                        liked === false ? <FavoriteBorder /> : <Favorite style={{color: '#efd091'}} />
                    }
                </Button>
            </Book>
            <Buy>
                <Price>U$D {price}</Price>
                <p>Stock: {productStock}</p>
                <Amount>Amount: <ItemCount stock={productStock} count={count} setCount={setCount} /></Amount>
                <Buttons>
                    <BuyButton 
                        onClick={() => {
                            addToCart(item, count, setCount);
                        }}
                    >
                        Add to Cart ({count})
                    </BuyButton>
                    {
                        cart.length > 0 && 
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
