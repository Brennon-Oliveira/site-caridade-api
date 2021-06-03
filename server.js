const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json({"ola":""});
})

app.listen(9001,'0.0.0.0',()=>{
    console.log(`Listen on port 9001`);
})