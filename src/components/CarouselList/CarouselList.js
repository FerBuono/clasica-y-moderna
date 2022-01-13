import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore,  query, where } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';

import styled from 'styled-components';
import CarouselItems from '../CarouselItems/CarouselItems';

export const Container = styled.div`
    margin-bottom: 1rem;
    box-shadow: 0 0 5px 0 grey;
`;

const CarouselList = ({category, item}) => {

    const [products, setProducts] = useState();

    useEffect(() => {
        setProducts(null);
        const db = getFirestore();
        const data = collection(db, 'items');
        const q = query(data, where("categories", "array-contains", category));
        getDocs(q).then(res => {
            setProducts(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
    }, [item.id]);

    return (
      <Container>
        {
          products 
            ? <CarouselItems products={products} category={category} />
            : <Spinner />
        }
      </Container>
    )
}

export default CarouselList
