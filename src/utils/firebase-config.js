import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCyYwLcap92G5bm-7Otpx2ehrvjvKOOiHk",
	authDomain: "react-netflix-clone-86297.firebaseapp.com",
	projectId: "react-netflix-clone-86297",
	storageBucket: "react-netflix-clone-86297.appspot.com",
	messagingSenderId: "215037397276",
	appId: "1:215037397276:web:f3b1d8c879c693f08a52d9",
	measurementId: "G-XVQYPRJ9WP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
