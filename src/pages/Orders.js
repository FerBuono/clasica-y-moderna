import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';


const Orders = () => {

    const {isSignedIn, user: [user]} = useContext(UserContext);

    const [state, setState] = useState([])

    useEffect(() => {
        if(isSignedIn()) {
            const db = getFirestore();
            const orders = collection(db, 'orders')
            const q = query(orders, where("buyer.userId", "==", user.id));
            getDocs(q).then(res => {
                setState(res.docs.map(doc => ({id: doc.id, ...doc.data()})))
            });
        }
    }, [])

    return (
        <div>
            <pre>{JSON.stringify(state, null, 2) }</pre>
        </div>
    )
}

export default Orders
