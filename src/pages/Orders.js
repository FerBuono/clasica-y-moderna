import { FirebaseClient } from '../firebase/client';
import { useContext, useEffect, useState } from 'react';
import OrdersContainer from '../components/OrdersContainer/OrdersContainer';
import { UserContext } from '../context/UserContext';

const Orders = () => {

    const {isSignedIn, user: [user]} = useContext(UserContext);
    const [orders, setOrders] = useState(null);
    const firebase = new FirebaseClient();

    useEffect(() => {
        isSignedIn() && getOrdersFromDb();
    }, []);

    const getOrdersFromDb = async () => {
		try {
			const value = await firebase.getOrders(user.id);
			setOrders(value);
		} catch (error) {
			console.error('pages/Orders/getOrdersFromDb', error);
		}
	};

    return (
        <OrdersContainer orders={orders} />
    )
}

export default Orders
