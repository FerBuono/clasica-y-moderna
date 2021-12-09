import { ShoppingCart } from "@mui/icons-material";
import { Cart, Total, Divisor, Amount } from './CartWidgetStyle';

const CartWidget = () => {
    return (
        <Cart>
            <Total>US$ 0.00</Total>
            <Divisor></Divisor>
            <Amount>0</Amount>
            <ShoppingCart />
        </Cart>
    )
}

export default CartWidget
