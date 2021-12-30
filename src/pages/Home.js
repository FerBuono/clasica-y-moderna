import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { products } from '../assets/data/data';
import { sort } from '../helpers/sortHelper';

const Home = () => {
    return (
        <>
            <ItemListContainer title="Books" results={products.length} prod={sort(products, "title")} />
        </>
    )
}

export default Home
