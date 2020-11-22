const   express        = require("express"), 
        router         = express.Router(),
        admin          = require('firebase-admin'),
        serviceAccount = require('../../firebase/serviceAccountKey.json');

admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

router.get("/employees", async (req,res) =>{
try{
    db.collection('employees')
        .get()
        .then(employees =>{
            const employeesArr = employees.docs.map(doc =>( {id:doc.id , ...doc.data()}))
            res.send(employeesArr)
    })
}
catch(err){
    console.log(err)
}
})  
router.post("/employee", async (req,res) =>{
try{
    db.collection('employees')
             .add(req.body)
             .then((user) =>{
                console.log(`Added User with id of ${user.id}`)
                res.send()
            })
}
catch(err){
    console.log(err)
}
})
router.put("/employee", async (req,res) =>{
try{
    const employee = await db.collection('employees').doc(req.body.id)
    employee.update(req.body).then(() => {
        console.log(`Updated ${req.body.id}`);
        res.send()
    })
}
catch(err){
    console.log(err)
}
})
router.delete("/employee/:id", async (req,res) =>{
try{
    const {id} = req.params
    console.log(id);
    await db.collection('employees')
            .doc(id)
            .delete()
            .then(deleted =>{
                console.log(`Deleted User with id of ${deleted.id}`)
                res.send()
            })
}
catch(err){
    console.log(err)
}
})

module.exports = router
        