import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import { WishlistContext } from '../../context/WishlistContext';
import ItemCount from '../ItemCount/ItemCount';
import { Container, Img, Details, Title, Author, Links, Btn, Amount, PriceContainer, Price, OriginalPrice } from './CartItemStyle';

const CartItem = ({item}) => {

    const {title, author, img, id, amount} = item;
    const {removeItem, changeOneItem} = useContext(CartContext);
    const {currency, changeItemPrice} = useContext(CurrencyContext)
    const {addRemove, isLiked} = useContext(WishlistContext);

    const handleAdd = () => {
        changeOneItem(id, 'add');
    };
        
    const handleRemove = () => {
        changeOneItem(id, 'remove');
    };


    return (
        <Container>
            <NavLink 
                to={`/products/${id}`} 
                style={{height: '100%', marginRight: '15px', flex: 1}}
            >
                <Img src={img}/>
            </NavLink>
            <Details>
                <Title>
                    <NavLink 
                        to={`/products/${id}`}
                        style={{color: 'black', textDecoration: 'none'}} 
                    >
                        {title}
                    </NavLink>   
                </Title>
                <Author>
                    By (author):
                    <NavLink
                        to={`/authors/${author}`}
                        style={{color: 'black', textDecoration: 'none', marginLeft: '10px', borderBottom: '1px dotted grey'}}
                    >
                        {author}
                    </NavLink>    
                </Author>
                <Amount>Amount: <ItemCount count={amount} handleRemove={handleRemove} handleAdd={handleAdd} /></Amount>
                <Links>
                    <Btn onClick={() => removeItem(id)}>Remove</Btn>
                    <Btn><NavLink to={`/authors/${author}`} style={{color: 'inherit'}}>More from {author}</NavLink></Btn>
                    <Btn>Buy now</Btn>
                    <Btn onClick={() =>addRemove(item)}>
                        {
                            isLiked(id)
                            ? 'Remove from wishlist'
                            : 'Add to wishlist'
                        }
                    </Btn>
                </Links>
            </Details>
            <PriceContainer>
                <Price>
                    {currency} {(changeItemPrice(item) * amount).toFixed(2)}
                </Price>
                {
                    amount > 1 && <OriginalPrice>Price per unit: {currency} {changeItemPrice(item)}</OriginalPrice>
                }
            </PriceContainer>
        </Container>
    )
}

export default CartItem
