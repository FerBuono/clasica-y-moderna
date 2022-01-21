import { FirebaseClient } from '../firebase/client';
import { useContext, useEffect, useState } from 'react';
import OrdersContainer from '../components/OrdersContainer/OrdersContainer';
import { UserContext } from '../context/UserContext';
import { sort } from '../helpers/sortHelper';

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
        <OrdersContainer orders={orders && sort(orders, "orderNumber")} />
    )
}

export default Orders
