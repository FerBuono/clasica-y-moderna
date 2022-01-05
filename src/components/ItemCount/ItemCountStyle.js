import styled from 'styled-components';

export const Container = styled.div`
    width: 150px;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const Counter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #EFEFEF;
    cursor: pointer;
    background-color: #EFEFEF;
    

    &:hover {
        background-color: #85aac5;
        color: white;
        border-color: #85aac5;
    }
`;

export const Count = styled.div`
    font-weight: 500;
    font-size: 20px;
    border-top: 1px solid #EFEFEF;
    border-bottom: 1px solid #EFEFEF;
    width: 100px;
    text-align: center;
`;
