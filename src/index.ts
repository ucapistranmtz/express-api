import express,{Request,Response} from 'express';
import userRoutes from './routes/user.routes';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get ('/',(req:Request,res:Response)=> {
   res.json({
    status:'ok'
   })
});

app.use('/api/users',userRoutes)

app.listen (PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
 })