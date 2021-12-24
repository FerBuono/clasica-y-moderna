import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { products } from '../assets/data/data';
import { sort } from '../helpers/sortHelper';

const Home = () => {
    return (
        <>
            <ItemListContainer title="Books" prod={sort(products)} />
        </>
    )
}

export default Home
