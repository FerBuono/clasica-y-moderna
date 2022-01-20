import styled from 'styled-components'

export const Container = styled.div`
    height: 30vh;
    background-color: #050814;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 0 5px 0 grey;
`;

export const Title = styled.h1`
    font-size: 30px;
    margin-bottom: 20px;
    text-decoration: underline;
`;

export const Desc = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
`;

export const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

export const Input = styled.input`
    flex: 8;
    border: none;
    font-size: 15px;
    padding: 15px 0 15px 15px;

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #ba7735;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;