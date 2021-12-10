import styled from 'styled-components';

export const Container = styled.div`
    padding-top: .6rem;
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #0000003d;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;
    display: flex;
`;

export const Left = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const Link = styled.div`
    align-items: center;
    border-right: 2px solid #050814;
    color: lightgray;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    height: 100%;
    justify-content: space-evenly;
    padding: 0 1rem;
    position: relative;
    transition: .2s ease;

    &:hover {
       color: white;
    }
`;

export const Text = styled.p`
    margin-left: .5em;
`;

export const Right = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;