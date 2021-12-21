import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../assets/data/data';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Author = () => {

    const {author} = useParams();

    useEffect(() => {
        console.log(author)
    }, [author])

    const booksByAuthor = products.filter(book => book.author === author);


    return (
        <>
            <ItemListContainer title={`Books by ${author}`} prod={booksByAuthor}/>
        </>
    )
}

export default Author
