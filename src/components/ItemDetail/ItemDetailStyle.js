import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
`;

export const Book = styled.div`
    flex: 3;
    display: flex;
    align-items: flex-start;
    background-color: white;
    padding: 1rem 2rem;
    box-shadow: 0 0 5px 0 grey;
    margin-right: 2rem;
    position: relative;
`;

export const Img = styled.img`
    height: 450px;
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
    margin-bottom: 15px;
    padding-bottom: 10px;
`;


export const Author = styled.p`
    margin-bottom: 15px;
    font-weight: 400;
`;

export const Category = styled.ul`
    margin-bottom: 10px;
    font-weight: 400;
    width: 100%;
`;

export const Categories = styled.li`
    list-style-type: none;
    display: inline-block;
    padding-bottom: 5px;

    &::before {
        content: '|';
        margin: 0 5px;
        border-bottom: none;
    }

    &:first-child {
        &::before {
            content: '';
            border-bottom: none;
        }
    }
`;

export const Year = styled.p`
    font-weight: 400;
    margin-bottom: 30px;
`;

export const Desc = styled.p`
    margin-bottom: 20px;
`;

export const Button = styled.button`
    display: flex;
    padding: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    outline: #85aac5 solid 2px;
    color: #85aac5;
    background-color: white;
    cursor: pointer;
`;

export const Buy = styled.div`
    flex: 1;
    background-color: white;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0 0 5px 0 grey;
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
    width: 100%;
    align-items: center;
`;

export const BuyButton = styled.button`
    width: 100%;
    margin-right: 10px;
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
    color: white;
    background-color: #efd091;
`;
