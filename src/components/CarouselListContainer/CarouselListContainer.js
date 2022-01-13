import { useEffect } from 'react';
import styled from 'styled-components';
import CarouselList from '../CarouselList/CarouselList';

export const Container = styled.div`
    width: 100%;
`;

const CarouselListContainer = ({item}) => {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, [item.id]);

    return(
        <Container>
            {
                item.categories.map(category => (
                    <CarouselList item={item} category={category} />
                ))
            }
        </Container>
    );
}

export default CarouselListContainer