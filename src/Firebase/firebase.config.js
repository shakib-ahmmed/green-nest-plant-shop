// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNcgnzKpVMvL3yeaWsJAmiUVBk03XebXI",
    authDomain: "green-nest-cacc0.firebaseapp.com",
    projectId: "green-nest-cacc0",
    storageBucket: "green-nest-cacc0.firebasestorage.app",
    messagingSenderId: "603790736551",
    appId: "1:603790736551:web:df5684616e1649643e6f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app