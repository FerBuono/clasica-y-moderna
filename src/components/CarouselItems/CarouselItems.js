import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore,  query, where } from 'firebase/firestore';
import Item from '../Item/Item';
import Spinner from '../Spinner/Spinner';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

const CarouselItems = ({category}) => {

    const [products, setProducts] = useState();

    useEffect(() => {
        setProducts(null);
        const db = getFirestore();
        const data = collection(db, 'items');
        const q = query(data, where("categories", "array-contains", category));
        getDocs(q).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, []);

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

    return (
        <Carousel responsive={responsive}>
            {
                products 
                    ? products.map(product => (
                        <Item item={product} />
                    ))
                    : <Spinner />
            }
        </Carousel>
    )
}

export default CarouselItems
