import styled from 'styled-components';
import { products } from '../../assets/data/data';

export const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
`;

export const Book = styled.div`
    height: 100%;
    flex: 3;
    display: flex;
    align-items: center;
    background-color: white;
`;

export const Img = styled.img`
    height: 100%;
`;

export const Info = styled.div`
    height: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Title = styled.h1`
    border-bottom: 1px solid lightgray;
`;

export const Author = styled.p``;

export const Year = styled.p``;

export const Buy = styled.div`
    flex: 1;
    background-color: white;
`;

export const Price = styled.h3``;

export const Buttons = styled.div``;

export const Button = styled.button``;


const ItemDetail = () => {

    const {id, title, author, year, img, stock } = products[0];

    return (
        <Container>
            <Book>
                <Img src={img} />
                <Info>
                    <Title>{title}</Title>
                    <Author>{author}</Author>
                    <Year>{year}</Year>
                </Info>
            </Book>
            <Buy>
                <Price>U$D 100</Price>
                <Buttons>
                    <Button></Button>
                    <Button></Button>
                </Buttons>
            </Buy>
        </Container>
    )
}

export default ItemDetail
