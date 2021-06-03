const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json({"ola":process.env.PORT||'iosdfu'});
})

app.listen(9001,'0.0.0.0',()=>{
    console.log(`Listen on port 9001`);
})