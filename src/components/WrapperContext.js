import { CartContextProvider } from '../context/CartContext';
import { CurrencyContextProvider } from '../context/CurrencyContext';
import { WishlistContextProvider } from '../context/WishlistContext';

const WrapperContext = ({children}) => {
  return (
    <CartContextProvider>
        <WishlistContextProvider>
            <CurrencyContextProvider>
                {children}
            </CurrencyContextProvider>
        </WishlistContextProvider>
    </CartContextProvider>
  )
}

export default WrapperContext