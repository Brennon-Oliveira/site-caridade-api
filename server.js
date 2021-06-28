const express = require('express');
const app = express();
const { PORT, IP } = require('./consts');
const mongoose = require('mongoose');
const User = require('./database/Models/User');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', async (req, res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    var user = await new User({
        name,
        email,
        password
    })
    await user.save().then(result => {
        console.log('note saved!')
        mongoose.connection.close()
    }).catch(err => {console.log(`Houve um erro: ${err}`)})

    res.json({"ola":'asfsdf'});
})

app.listen(PORT,IP,()=>{
    console.log(`Listen on port ${IP}:${PORT}`);
})