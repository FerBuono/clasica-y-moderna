import { useParams } from 'react-router-dom';
import { products } from '../assets/data/data';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { sort } from '../helpers/sortHelper';

const Author = () => {

    const {author} = useParams();

    const booksByAuthor = sort(products.filter(book => book.author === author), "title");

    const results = booksByAuthor.length;

    return (
        <>
            <ItemListContainer title={`Books by: ${author}`} results={results} prod={booksByAuthor}/>
        </>
    )
}

export default Author
