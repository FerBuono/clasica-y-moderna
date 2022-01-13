import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Item from '../Item/Item';
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: white;
    flex-direction: column;
    padding: 1rem 2rem;
`;

export const Text = styled.h2`
    border-bottom: 1px solid rgba(0,0,0,0.1);
    padding-bottom: 10px;
`;

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
      slidesToSlide: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
};

const CarouselItems = ({category, products}) => {
    return (
        <Container>
            <Text>Similar books by category: {category}</Text>
            <Carousel responsive={responsive}>
                {
                    products.map(product => (
                        <Item item={product} />
                    ))
                }
            </Carousel>
        </Container>
    )
}

export default CarouselItems
