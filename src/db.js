import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAzJawdAQyLS2uK2X-tO_Ee70PgoIlCeVU",
    authDomain: "firevuechat-a693c.firebaseapp.com",
    projectId: "firevuechat-a693c",
    storageBucket: "firevuechat-a693c.appspot.com",
    messagingSenderId: "803474013508",
    appId: "1:803474013508:web:cce195f825bf71b16feb11"
}
const db = firebase.initializeApp(config);
export default db;