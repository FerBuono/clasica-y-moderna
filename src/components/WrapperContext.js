import { CartContextProvider } from '../context/CartContext';
import { CurrencyContextProvider } from '../context/CurrencyContext';
import { UserContextProvider } from '../context/UserContext';
import { WishlistContextProvider } from '../context/WishlistContext';

const WrapperContext = ({children}) => {
  return (
    <UserContextProvider>
      <CartContextProvider>
          <WishlistContextProvider>
              <CurrencyContextProvider>
                  {children}
              </CurrencyContextProvider>
          </WishlistContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  )
}

export default WrapperContext