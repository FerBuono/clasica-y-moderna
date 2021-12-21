import styled from 'styled-components';
import pattern from '../../assets/images/patterns/home.png';

export const Container = styled.div`
    background-image: url(${pattern});
    background-size: 150%;
    position: relative;
    z-index: 10;
`;