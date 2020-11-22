import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwT-bl8kqCLyg-bSavSi-9JKMQS0MMXGU",
    authDomain: "react-native-employees-manager.firebaseapp.com",
    databaseURL: "https://react-native-employees-manager.firebaseio.com",
    projectId: "react-native-employees-manager",
    storageBucket: "react-native-employees-manager.appspot.com",
    messagingSenderId: "99910408997",
    appId: "1:99910408997:web:80d47a8aa911392b4098cc"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };