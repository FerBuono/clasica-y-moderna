import CardListContainer from "../components/CardListContainer/CardListContainer";
import { topAuthors } from '../assets/data/data';
import { sort } from "../helpers/sortHelper";

const Authors = () => {
    return (
        <CardListContainer title={'All Authors'} list={sort(topAuthors, "name")} name={'authors'}/>
    )
}

export default Authors
