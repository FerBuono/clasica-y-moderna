import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || []);

    const findUser = (email, password) => {
        const db = getFirestore();
        const users = collection(db, 'users');
        const q = query(users, where("email", "==", email), where("password", "==", password));
        getDocs(q).then(res => {
            setUser(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
            localStorage.setItem('user', JSON.stringify(res.docs.map(doc => ({id: doc.id, ...doc.data()}))));
        });
    };

    const createUser = (joinData) => {
        const db = getFirestore();
        const users = collection(db, 'users');
        addDoc(users, joinData);
    };

    const signOut = () => {
        setUser([]);
        localStorage.setItem('user', JSON.stringify([]));
    };

    const isSignedIn = () => user.length > 0;

    
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                findUser,
                createUser,
                signOut,
                isSignedIn,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}