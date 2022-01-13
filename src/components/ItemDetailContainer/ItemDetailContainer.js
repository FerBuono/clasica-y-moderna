import { useEffect } from "react";
import CarouselListContainer from "../CarouselListContainer/CarouselListContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import NoResults from "../NoResults/NoResults";
import Spinner from "../Spinner/Spinner";
import { Container } from './ItemDetailContainerStyle';

const ItemDetailContainer = ({item}) => {

    useEffect(() => {
        window.scrollTo(0, 0);  
    }, []);

    return (
     
        <Container>
            {
                item 
                    ? item.hasOwnProperty('title')
                        ? 
                            (<>
                                <ItemDetail item={item} />
                                <CarouselListContainer item={item} />
                            </>)
                        : <NoResults />
                    : <Spinner />
            }
        </Container>
    )
}

export default ItemDetailContainer
