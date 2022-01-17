import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutFormContainer from '../components/CheckoutFormContainer/CheckoutFormContainer'
import { UserContext } from '../context/UserContext'

const Checkout = () => {

    const {isSignedIn} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        !isSignedIn() && navigate('/');
    }, []);

    return (
        <>
            <CheckoutFormContainer />  
        </>
    )
}

export default Checkout
