import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 2.5rem;
    background-color: white;
    color: #111111;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Nav = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-right: 1.5rem;
    cursor: pointer;
    transition: all .3s ease;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #050814;
        opacity: 0;
        transition: all .3s ease;
    }

    &:hover {
        &::after {
            opacity: 1;
        }
    }
`;

export const Right = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Currencies = styled.select`
    height: 100%;
    font-weight: 500;
    cursor: pointer;
    border: none;
    margin-right: 1.5rem;
    font-size: 15px;

    &:focus {
        outline: none;
    }
`;

export const Currency = styled.option``;
