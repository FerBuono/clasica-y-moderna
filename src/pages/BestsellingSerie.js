import { useParams } from 'react-router-dom'
import { products } from '../assets/data/data';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { sort } from '../helpers/sortHelper';

const BestsellingSerie = () => {

    const {serie} = useParams();

    const booksBySerie = sort(products.filter(book => book.series.includes(serie)), "title");

    const results = booksBySerie.length;

    return (
        <>
            <ItemListContainer title={`Bestselling Serie: ${serie}`} results={results} prod={booksBySerie}/>
        </>
    )
}

export default BestsellingSerie
