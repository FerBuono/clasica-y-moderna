import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc, updateDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIRESTORE_API_KEY,
    authDomain: "coderhouse-ecommerce-5a000.firebaseapp.com",
    projectId: "coderhouse-ecommerce-5a000",
    storageBucket: "coderhouse-ecommerce-5a000.appspot.com",
    messagingSenderId: "508415434373",
    appId: "1:508415434373:web:4e569c1db1eeb914f893ec"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class FirebaseClient {
	async getProducts() {
		try {
			const q = query(collection(db, 'items'));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	}

	async getProduct(id) {
		try {
			const ref = doc(db, 'items', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				return {
					id: docSnapshot.id,
					...docSnapshot.data(),
				};
			}

			return null;
		} catch (error) {
			console.error('getProducts', error);
		}
	}

	async getProductsByGroup(type, group) {
		try {
            let q;
            type === 'author' 
                ? q = query(collection(db, 'items'), where('author', '==', group))
                : q = query(collection(db, 'items'), where(`${type}`, 'array-contains', group));
			const docSnapshot = await getDocs(q);
			return docSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data(),
			}));
		} catch (error) {
			console.error('getProducts', error);
		}
	}

    async getOrders(userId) {
        try {
            const q = query(collection(db, 'orders'), where('buyer.userId', '==', userId));
            const docSnapshot = await getDocs(q);
            return docSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
        } catch (error) {
            console.error('getOrders', error);
        }
    }

	async updateProductStockById(id, count) {
		try {
			const ref = doc(db, 'items', id);
			const docSnapshot = await getDoc(ref);
			if (docSnapshot.exists()) {
				const {stock} = docSnapshot.data();
				// Defino mi nuevo stock
				const newStock = stock === 0 || stock - count < 0 ? 0 : stock - count;
				// Actualizo el valor del stock
				await updateDoc(ref, {
					stock: newStock,
				});
				return true;
			}

			return null;
		} catch (error) {
			console.error('updateProductStockById', error);
		}
	}

	async addOrder(data, user, cart, currency, total, today, orderNumber) {
		try {
			// Mapeo mi nueva orden
			const newOrder = {
                buyer: {
                  name: `${data.firstName} ${data.lastName}`,
                  phone: data.phone,
                  email: data.email,
                  userId: user.id,
                },
                items: [
                  ...cart
                ],
                date: `${today.getDate()>9?today.getDate():'0'+today.getDate()}/${(today.getMonth()+1)>10?today.getMonth()+1:'0'+(today.getMonth()+1)}/${today.getFullYear()}`,
                total: total,
                currency: currency,
                orderNumber: orderNumber,
            };
			// Actualizo el stock de los items
			cart.forEach(async item => {
				await this.updateProductStockById(item.id, item.amount);
			});
			// Genero nueva orden
			const docRef = await addDoc(collection(db, 'orders'), newOrder);
			// Retorno el id de la nueva orden
			return docRef.id;
		} catch (error) {
			console.error('addOrder', error);
		}
	}

	// Para actualizar el stock de todos los items a 20
	async updateProductsStock() {
		try {
			const items = await this.getProducts();
			items.forEach(async item => {
				const ref = doc(db, 'products', item.id);
				const docSnapshot = await getDoc(ref);
				if (docSnapshot.exists()) {
					// Actualizo el valor del stock
					await updateDoc(ref, {
						stock: 20,
					});
					return true;
				}

				return null;
			});
		} catch (error) {
			console.error('updateProductsStock', error);
		}
	}

}