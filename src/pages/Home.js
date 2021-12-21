import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { products } from '../assets/data/data';

const Home = () => {
    return (
        <>
            <ItemListContainer title="Books" prod={products} />
        </>
    )
}

export default Home
