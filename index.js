const express = require('express');

const app =  express();


app.get('/health',(req,res)=>{
    res.status(200).json({
        status:'UP',
        timestamp: new Date().toISOString()
    }).send();
});


const port = process.env.PORT || 3000;

app.listen(port,()=> {
    console.log(`Server is readcy at http://localhost:${port}`)
})