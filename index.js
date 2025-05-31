const express = require('express');
const routes = require('./routes')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.get('/health',(req,res)=> {
    res.status(200).json({messag:'Up and running'})
})

app.listen(port, ()=> {
    console.log(`App si runing at http://localhost:${port}`);
})





