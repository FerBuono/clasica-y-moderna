import { Add, Remove } from '@mui/icons-material';
import { Container, Counter, Button, Count} from './ItemCountStyle';

const ItemCount = ({count, handleAdd, handleRemove}) => {

    return (
        <Container>
            <Counter>
                <Button onClick={handleRemove} style={{borderRadius: '20px 0 0 20px'}}>
                    <Remove />
                </Button>
                <Count>{count}</Count>
                <Button onClick={handleAdd} style={{borderRadius: '0 20px 20px 0'}}>
                    <Add />
                </Button>
            </Counter>
        </Container>
    )
}

export default ItemCount;