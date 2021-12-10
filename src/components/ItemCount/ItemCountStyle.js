import styled from 'styled-components';

export const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    `;

export const Counter = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
    background-color: #ffffff3d;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid white;
    background-color: white;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        color: white;
        background-color: #ba7735;
    }
`;

export const Count = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: white;
`;
