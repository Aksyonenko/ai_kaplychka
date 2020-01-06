import * as firebase from 'firebase'

var config = {
	apiKey: "AIzaSyBIQiFvWRJBfXzQgXRhf0uGP4XBRDank08",
	authDomain: "ai-kaplychka.firebaseapp.com",
	databaseURL: "https://ai-kaplychka.firebaseio.com",
	projectId: "ai-kaplychka",
	storageBucket: "",
	messagingSenderId: "400243788778"
};

export const initFirebase = () => firebase.initializeApp(config);