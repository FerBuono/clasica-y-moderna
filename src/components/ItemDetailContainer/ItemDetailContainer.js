import { useEffect } from "react";
import CarouselContainer from "../CarouselContainer/CarouselContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import NoResults from "../NoResults/NoResults";
import Spinner from "../Spinner/Spinner";
import { Container } from './ItemDetailContainerStyle';

const ItemDetailContainer = ({item}) => {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    console.log(item && item.hasOwnProperty('title'))

    return (
     
        <Container>
            {
                item 
                    ? item.hasOwnProperty('title')
                        ? 
                            (<>
                                <ItemDetail item={item} />
                                <CarouselContainer item={item} />
                            </>)
                        : <NoResults />
                    : <Spinner />
            }
        </Container>
    )
}

export default ItemDetailContainer
