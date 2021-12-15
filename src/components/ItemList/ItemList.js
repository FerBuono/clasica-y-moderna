import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import { Container } from './ItemListStyle';
import { products } from '../../assets/data/data';

const ItemList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const API = new Promise((resolve, reject) => {
            setTimeout(() => {
                setList([...products])
                resolve(true)
            }, 2000);
        })
    }, []);
    
    console.log(API);
    return (
        <Container>
            {list.map(item => (
                <Item item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default ItemList
