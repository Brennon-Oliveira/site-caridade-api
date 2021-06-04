const express = require('express');
const app = express();
const { PORT, IP } = require('./consts');
const User = require('./database/Models/User');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res)=>{
    let user = await User({
        name: 'Brennon Gabriel de Oliveira',
        email: "brennonoliveira20014@gmail.com",
        password: 'admin',
    })

    await user.save().then(result => {
        console.log('note saved!')
        mongoose.connection.close()
      })

    res.json({"ola":'asfsdf'});
})

app.listen(PORT,IP,()=>{
    console.log(`Listen on port ${IP}:${PORT}`);
})