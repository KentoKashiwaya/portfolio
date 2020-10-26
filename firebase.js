import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDA9dr_IkDUqm7bpbXd1wenougQmnuExiw",
    authDomain: "portfolio-c6a06.firebaseapp.com",
    databaseURL: "https://portfolio-c6a06.firebaseio.com",
    projectId: "portfolio-c6a06",
    storageBucket: "portfolio-c6a06.appspot.com",
    messagingSenderId: "708582297696"   
}

firebase.initializeApp(config);