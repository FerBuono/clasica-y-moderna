import styled from 'styled-components';
import { useState } from 'react';
import { products } from '../../assets/data/data';
import ItemCount from '../ItemCount/ItemCount';

export const Container = styled.div`
    margin-top:3rem;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: flex-start;
`;

export const Book = styled.div`
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 0 0 5px 1px lightgray;
    margin-right: 2rem;
`;

export const Img = styled.img`
    height: 100%;
`;

export const Info = styled.div`
    height: 100%;
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 10px;
    padding-bottom: 10px;
`;

export const Author = styled.p`
    margin-bottom: 10px;
    font-weight: 400;
`;

export const Link = styled.p`
    display: inline-block;
    cursor: pointer;
    border-bottom: 1px dotted grey;

    &:hover {
        border-bottom: 1px solid #333333;
    }
`;

export const Year = styled.p`
    font-weight: 400;
    margin-bottom: 30px;
`;

export const Desc = styled.p`
    margin-bottom: 20px;
`;

export const Buy = styled.div`
    flex: 1;
    background-color: white;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 0 5px 1px lightgray;
    padding: 1rem 2rem;
`;

export const Price = styled.h1`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-weight: 500;
    margin-bottom: 20px;
    padding-bottom: 10px;
    `;

export const Amount = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const BuyButton = styled.button`
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background-color: #85aac5;
    color: white;
    transition: background-color .3s ease;

    &:hover {
        background-color: #81b9e0;
    }
`;

export const WishButton = styled.button`
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    color: #85aac5;
    transition: all .3s ease;

    &:hover {
        color: white;
        background-color: #efd091;
    }
`;


const ItemDetail = () => {

    const {id, title, author, year, img, stock, desc } = products[0];

    const [productStock, setProductStock] = useState(stock);
    
    const [count, setCount] = useState(0);
    
    const onAdd = (count, setCount) => {
        setProductStock(productStock - count);
        setCount(0);
    };
    

    return (
        <Container>
            <Book>
                <Img src={img} />
                <Info>
                    <Title>{title}</Title>
                    <Author>By (author) <Link>{author}</Link></Author>
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
                <Price>U$D 100</Price>
                <Amount>Amount: <ItemCount stock={productStock} count={count} setCount={setCount} /></Amount>
                <Buttons>
                    <BuyButton onClick={() => onAdd(count, setCount)}>
                        Add to Cart ({count})
                    </BuyButton>
                    <WishButton>Add to Wishlist</WishButton>
                </Buttons>
            </Buy>
        </Container>
    )
}

export default ItemDetail
