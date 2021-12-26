import styled from 'styled-components';
import pattern from '../../assets/images/patterns/home.png';

export const Container = styled.div`
    padding: 2rem;  
    background-image: url(${pattern});
    background-size: 150%;
`;

export const Title = styled.h2`
    padding: 1rem 10px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    background-color: white;
    box-shadow: 0 0 5px 0 grey;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    box-shadow: 0 0 5px 0 grey;
    background-color: white;
`;

export const Card = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-radius: 20px;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        box-shadow: 0 0 5px 1px grey;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

`;

export const Text = styled.h2`
    position: absolute;
    width: 80%;
    text-align: center;
    font-size: 30px;
    font-weight: 800;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    filter: drop-shadow(0 0 2px black);
`;