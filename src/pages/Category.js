import { useParams } from 'react-router-dom'
import { products } from '../assets/data/data';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { sort } from '../helpers/sortHelper';

const Category = () => {

    const {category} = useParams();

    const booksByCategory = sort(products.filter(book => book.categories.includes(category)), "title");

    const results = booksByCategory.length;

    return (
        <>
            <ItemListContainer title={`Category: ${category}`} results={results} prod={booksByCategory}/>
        </>
    )
}

export default Category
