import { Add, AddShoppingCart, Remove } from '@mui/icons-material';
import { Container, Counter, Button, Count} from './ItemCountStyle';

const ItemCount = ({stock, count, setCount}) => {

    const handleAdd = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    };

    const handleRemove = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Container>
            <Counter>
                <Button onClick={handleRemove}>
                    <Remove />
                </Button>
                <Count>{count}</Count>
                <Button onClick={handleAdd}>
                    <Add />
                </Button>
            </Counter>
        </Container>
    )
}

export default ItemCount;