import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

export const Counter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #EFEFEF;
    background-color: white;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        background-color: #EFEFEF;
    }
`;

export const Count = styled.div`
    font-weight: 600;
    font-size: 20px;
`;
