import styled from 'styled-components';


export const Image = styled.img`
    height: 75%;
    transition: all .2s ease;
    position: relative;
    z-index: 10;
    cursor: pointer;
`;

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
        transition: opacity .4s ease;
        opacity: 1;
    }

    &:hover ${Image} {
        height: 50%;
        transform: translateY(-40%);
    }
`;

export const Title = styled.h3`
    text-align: center;
    padding: 0 20px;
    margin-top: 10px 0;
`;

export const Author = styled.p`
    text-align: center;
    padding: 0 20px;
    margin: 10px 0;
`;


