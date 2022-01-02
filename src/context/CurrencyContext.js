import { createContext, useState } from "react";

export const CurrencyContext = createContext({});

export const CurrencyContextProvider = ({children}) => {

    const [currency, setCurrency] = useState('US$');

    const selectCurrency = (e) => {
        setCurrency(e.target.value);
    };

    const changeCartPrice = (cartItems) => {
        switch (currency) {
            case 'ARS$': 
                return cartItems.reduce((acc, {price, amount}) => Number((price*208 * amount + acc).toFixed(2)) , 0);
            case 'US$': 
                return cartItems.reduce((acc, {price, amount}) => Number((price * amount + acc).toFixed(2)), 0);
            case '€':
                return cartItems.reduce((acc, {price, amount}) => Number((price*0.88 * amount + acc).toFixed(2)), 0);
            default:
                return;
        };
    };

    const changeItemPrice = (item) => {
        switch (currency) {
            case 'ARS$': 
                return (Number(item.price) * 208).toFixed(2);
            case 'US$': 
                return Number(item.price);
            case '€':
                return (Number(item.price) * 0.88).toFixed(2);
            default:
                return;
        };
    }

    return (
        <CurrencyContext.Provider
            value={{
                currency,
                changeCartPrice,
                changeItemPrice,
                selectCurrency,
                setCurrency,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    )
}

