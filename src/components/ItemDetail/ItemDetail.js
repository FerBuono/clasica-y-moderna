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

    const {title, author, year, img, stock, desc, price} = item;

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
                        By (author) 
                        <NavLink
                            to={`/author/${item.author}`}
                            style={{color: 'black', textDecoration: 'none', borderBottom: '1px dotted grey', marginLeft:'5px'}} 
                        >
                            {author}
                        </NavLink>
                    </Author>
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
