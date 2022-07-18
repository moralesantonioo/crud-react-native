import { firebaseApp } from '../database/firebase'
import {
    collection,
    getFirestore,
    doc,
    setDoc
} from "firebase/firestore";

class CreatedUsers {
    db = getFirestore(firebaseApp);
    async registerUser(data) {
        const newUsers = doc(collection(this.db, "profiles"));
        await setDoc(newUsers, data);
    }
}

export default CreatedUsers;