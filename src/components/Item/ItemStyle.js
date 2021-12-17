import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;    
    min-width: 180px;
    margin: 0 .5rem;
    padding: 1rem 10px;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

export const Image = styled.img`
    height: 60%;
    margin: 10px 0;
    position: relative;
    cursor: pointer;
`;

export const Info = styled.div`
    position: relative;
    width: 100%;
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
    height: 2.5rem;
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

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    margin-right: 10px;
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