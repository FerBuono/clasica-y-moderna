import styled from 'styled-components';

export const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: #00000028;
    opacity: 0;
    transition: opacity .3s ease;
`;

export const Container = styled.div`
    flex: 1;
    margin: .5rem;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #85aac516;

    &:hover ${Info} {
        opacity: 1;
    }
`;

export const Image = styled.img`
    height: 75%;
`;
