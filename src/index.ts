import express,{Request,Response} from 'express'
import userRoutes from '../src/routes/user.routes'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req:Request,res:Response)=>{
    res.status(200).json({message:'ok'})
});

app.use('/api/users',userRoutes);

app.listen(PORT,()=> {
    console.log( 'server running at port',PORT);
});

export default app;