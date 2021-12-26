import CardListContainer from "../components/CardListContainer/CardListContainer";
import { topCategories } from '../assets/data/data';
import { sort } from "../helpers/sortHelper";

const Categories = () => {
    return (
        <CardListContainer title={'All Categories'} list={sort(topCategories, "name")} name={'categories'}/>
    )
}

export default Categories
