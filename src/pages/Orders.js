import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import OrdersContainer from '../components/OrdersContainer/OrdersContainer';
import { UserContext } from '../context/UserContext';


const Orders = () => {

    const {isSignedIn, user: [user]} = useContext(UserContext);

    const [orders, setOrders] = useState(null);

    useEffect(() => {
        if(isSignedIn()) {
            const db = getFirestore();
            const orders = collection(db, 'orders')
            const q = query(orders, where("buyer.userId", "==", user.id));
            getDocs(q).then(res => {
                setOrders(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
            });
        }
    }, [])

    return (
        <OrdersContainer orders={orders} />
    )
}

export default Orders
