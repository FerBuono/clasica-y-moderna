import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import { CurrencyContext } from '../../context/CurrencyContext';
import { WishlistContext } from '../../context/WishlistContext';
import ItemCount from '../ItemCount/ItemCount';

export const Container = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(0,0,0,0.1);

    &:last-child {
        border: none;
        margin-bottom: 0;
    }
`;

export const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    margin-right: 15px;
`;

export const Img = styled.img`
    height: 100%;
    width: 100%;
`;

export const Details = styled.div`
    flex: 6;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Info = styled.div`
`;

export const Title = styled.h3`
    display: inline-block;
    width: fit-content;

    &:hover {
        text-decoration: underline;
    }
`;

export const Author = styled.p`
    font-weight: 400;
`;

export const Amount = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
`;

export const Links = styled.div`
`;

export const Btn = styled.button`
    padding: 5px 10px;
    margin-right: 5px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        background-color: #85aac5;
        color: white;
    }
`;

export const PriceContainer = styled.div`
    flex: 2;
`;

export const Price = styled.h2`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-weight: 500;
    margin-bottom: 2px;
    padding-bottom: 10px;
`;

export const OriginalPrice = styled.p`
    color: grey;
    font-size: 12px;
`;

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
            <ImgContainer>
                <Img src={img}/>
            </ImgContainer>
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
