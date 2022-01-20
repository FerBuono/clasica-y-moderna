import { useEffect, useState } from 'react';
import { FirebaseClient } from '../../../firebase/client';
import Spinner from '../../Spinner/Spinner';
import CarouselItems from './CarouselItems/CarouselItems';
import { Container } from './CarouselListStyle';

const CarouselList = ({category, item}) => {

  const [products, setProducts] = useState();
  const firebase = new FirebaseClient();

  useEffect(() => {
    setProducts(null);
    getProductsFromDb();
  }, [item.id]);

  const getProductsFromDb = async () => {
    try {
      const value = await firebase.getProductsByGroup('categories', category);
      setProducts(value);
    } catch (error) {
      console.error('pages/Category/getProductsFromDb', error);
    }
  };


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
