const express = require('express')
const app = express();
app.use(express.json());
// require('express-async-errors')

const db = require('./databes/db')
noteRoute = require('./controllers/note_controllers')

app.use('/api/note', noteRoute)
app.use((err,res,req,next)=>{
    console.log(err)
    res.status(err.status || 500).send('Une erreur est survenue!')
})

db.query('SELECT 1')
    .then(()=>{
        console.log('connexion reussi avec success')
        app.listen(3000, () =>
            console.log("Server is running on port 3000"));
    }).catch(err=>console.log('conexion db faild. \n' +err))