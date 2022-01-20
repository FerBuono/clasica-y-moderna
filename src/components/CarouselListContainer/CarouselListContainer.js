import { useEffect } from 'react';
import CarouselList from './CarouselList/CarouselList';
import { Container } from './CarouselListContainerStyle';

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