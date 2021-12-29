import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;    
    margin: 0 .5rem;
    padding: 1rem 10px;
    height: 480px;
    max-width: 190px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

export const Image = styled.img`
    height: 100%;
    position: relative;
    cursor: pointer;
`;

export const Info = styled.div`
    position: relative;
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const BookInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.p`
    height: 2.8rem;
    cursor: pointer;
    font-weight: 600;
    overflow: hidden;
    margin-bottom: 10px;
    text-align: left;

    &:hover {
        text-decoration: underline;
    }
`;

export const Author = styled.p`
    margin-bottom: 10px;
    cursor: pointer;
    border-bottom: 1px dotted grey;
    font-size: 15px;

    &:hover {
        border-bottom: 1px solid #333333;
    }
`;

export const Year = styled.p`
    color: grey;
    font-size: 15px;
    margin-bottom: 10px;
`;

export const Price = styled.h2`
    font-weight: 500;
    margin-bottom: 10px;
    width: 100%;
    text-align: left;
`;

export const Buttons = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const BuyButton = styled.button`
    margin-right: 20px;
    display: flex;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: #85aac5 solid 2px;
    background-color: #85aac5;
    cursor: pointer;
    color: white;
    font-size: 16px;
`;

export const Btn = styled.button`
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