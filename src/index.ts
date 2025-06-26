import express,{Request,Response} from 'express';
import userRouter from '../src/routes/user.route'
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/',(req:Request,res:Response)=> {
    res.status(200).json({message:'ok'});
});

app.use('/api/users',userRouter);

app.listen(PORT,()=> {

    console.log(`App is listening at this address http://localhost:${PORT}`)
});

