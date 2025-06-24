import express from 'express';
import userRoutes from './routes/user.routes';


const app = express();
const PORT= process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => { 
    res.status(200).json({status:'ok'});
});
app.use('/api/users',userRoutes)

app.listen(PORT, ()=> {
    console.log(`Api is running on port http://localhost:${PORT}`)
});