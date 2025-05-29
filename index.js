const express = require('express');
const routes = require('./routes')

const app =  express();
app.use(express.json())
app.use(routes);


app.get('/health',(req,res)=>{
    res.status(200).json({
        status:'UP',
        timestamp: new Date().toISOString()
    }).send();
});


const port = process.env.PORT || 3000;

app.listen(port,()=> {
    console.log(`Server is ready at http://localhost:${port}`)
})