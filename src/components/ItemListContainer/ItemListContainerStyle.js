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

    
