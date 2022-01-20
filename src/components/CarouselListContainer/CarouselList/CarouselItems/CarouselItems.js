import Carousel from 'react-multi-carousel';
import Item from '../../../Item/Item';
import { Container, Text } from './CarouselItemsStyle';
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
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
