import { useEffect } from 'react';
import styled from 'styled-components';
import CarouselItems from '../CarouselItems/CarouselItems';

export const Container = styled.div`
    width: 100%;
`;

export const Items = styled.div`
    width: 100%;
    background-color: white;
    box-shadow: 0 0 5px 0 grey;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 1rem 2rem;
`;

export const Text = styled.h2`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 10px;
`;

const CarouselContainer = ({item}) => {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [item.id]);

    return(
        <Container>
            {
                item.categories.map(category => (
                    <Items>
                        <Text>Similar books by category: {category}</Text>
                        <CarouselItems category={category} />
                    </Items>        
                ))
            }
        </Container>
    );
}

export default CarouselContainer