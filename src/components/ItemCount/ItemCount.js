import { Add, AddShoppingCart, Remove } from '@mui/icons-material';
import { useState } from 'react';
import { Container, Counter, Button, Count} from './ItemCountStyle';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

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
            <Button onClick={() => onAdd(count, setCount)}>
                Add to Cart <AddShoppingCart />
            </Button>
        </Container>
    )
}
