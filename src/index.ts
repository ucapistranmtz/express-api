import express from 'express';
import {Request,Response} from 'express'
import userRoutes from  './routes/user.routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req:Request,res:Response)=>{

    res.json({ status:'ok'})
});

app.use('/users',userRoutes);

app.listen(PORT,()=> {
    console.log(`Server is running on port http://localhost:${PORT}`);
})