const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

function getDialogue(){
    //return a promise since we'll imitating an API call
    return new Promise(function(resolve, reject) {
        resolve({
            "quote":"I'm Batman",
            "author":"Batman"
        });
    })
}

getDialogue().then(result =>{
    console.log(result)
    const obj = result
    const quoteData = {
       quote: obj.quote,
       author: obj.author
 };
    const user = {
       name: "yoni",
       position: "programmer"
 };
    return db.collection('employees')
             .add(user)
             .then((data) =>{
                console.log('new Dialogue written to database')
                console.log(data.name)}
            )
 });