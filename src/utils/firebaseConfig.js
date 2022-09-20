// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAFRr-sr9JCEM_9s_UPdd0i2UIxmkDF-SE",
	authDomain: "react-ecomm-coderhouse.firebaseapp.com",
	projectId: "react-ecomm-coderhouse",
	storageBucket: "react-ecomm-coderhouse.appspot.com",
	messagingSenderId: "412607354277",
	appId: "1:412607354277:web:80617b4e0f5f0e5d0dc44c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch =  async(categoryId) => {
    console.log(categoryId);
	let q = query(collection(db, "items"));
	if (categoryId) {
		q = query(
			collection(db, "items"),
			where("categoryId", "==", categoryId)
		);
	} else {
		q = query(collection(db, "items"));
	}
	const querySnapshot = await getDocs(q);
	const dataFromFirestore = querySnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		};
	});
    console.log(dataFromFirestore)
	return dataFromFirestore;
};

export const getOneItem = async (id) => {
	const docRef = doc(db, "items", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
        const item = {
            id : docSnap.id,
            ...docSnap.data()
        }
        console.log(item);
        return item;

	} else {
		// doc.data() will be undefined in this case
		console.log("No such document!");
	}
};
