import express from 'express';
import userRoutes from  './routes/user.routes';

const app = express();
const PORT =  process.env.PORT || 3000;

app.get('/',(req,res)=> {
    res.json({ status:'ok'})
})

app.use('/api/users',userRoutes)

app.listen(PORT,()=> {
 console.log('Server is running on port', PORT);
});