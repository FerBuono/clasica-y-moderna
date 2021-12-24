import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { handleLike, handleWishlist, isLiked } from '../../helpers/likeHelpers';
import ItemCount from '../ItemCount/ItemCount';
import { 
    Container, 
    Book, 
    Img, 
    Info, 
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
    WishButton 
} from './ItemDetailStyle';



const ItemDetail = ({item}) => {

    const {title, author, categories, year, img, stock, desc, price} = item;

    const [productStock, setProductStock] = useState(stock);
    
    const [count, setCount] = useState(0);
    
    const onAdd = (count, setCount) => {
        setProductStock(productStock - count);
        setCount(0);
    };

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        isLiked(item, setLiked);
    }, [])

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
            </Book>
            <Buy>
                <Price>U$D {price}</Price>
                <p>Stock: {productStock}</p>
                <Amount>Amount: <ItemCount stock={productStock} count={count} setCount={setCount} /></Amount>
                <Buttons>
                    <BuyButton onClick={() => onAdd(count, setCount)}>
                        Add to Cart ({count})
                    </BuyButton>
                    {
                        liked === false 
                            ? <WishButton
                                onClick={() => {
                                    handleLike(liked, setLiked);
                                    handleWishlist(item);
                                }}
                            >
                                Add to Wishlist
                            </WishButton>
                            : <WishButton 
                                style={{backgroundColor:'#F4F8FA', color:'#85aac5'}}
                                onClick={() => {
                                    handleLike(liked, setLiked);
                                    handleWishlist(item);
                                }}
                            >
                                Remove from Wishlist
                            </WishButton>
                    }
                    
                </Buttons>
            </Buy>
        </Container>
    )
}

export default ItemDetail
