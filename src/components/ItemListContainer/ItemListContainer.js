import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import NoResults from '../NoResults/NoResults';
import Spinner from '../Spinner/Spinner';
import { Container, Title } from './ItemListContainerStyle';

const ItemListContainer = ({title, prod, noResults}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <Container>
            <Title>
                {title}
                <span style={{fontWeight: 400, fontSize:'20px', marginLeft: '1rem'}}>
                    {
                        prod && (prod.length === 1 ? '(1 result)': `(${prod.length} results)`)
                    }
                </span>
            </Title>
            {
                prod
                    ? prod.length > 0
                        ? <ItemList list={prod}/>
                        : <NoResults noResults={noResults} />
                    : <Spinner />
            }
        </Container>
    )
}

export default ItemListContainer
