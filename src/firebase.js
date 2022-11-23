// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBjABk1zg2ZD3Q0_fUtQYseLhiqH8s5vi4',
    authDomain: 'food-d2dab.firebaseapp.com',
    projectId: 'food-d2dab',
    storageBucket: 'food-d2dab.appspot.com',
    messagingSenderId: '290044706495',
    appId: '1:290044706495:web:51aaff4529032d8dc6d00a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
