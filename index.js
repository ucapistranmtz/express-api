import express from 'express';
import { conf } from './conf.js';
import routes from './routes';
const app = express();

app.get('/health', (req, res) => {
  res.json({ message: 'Healthy api' });
});
app.use(express.json());
app.use(routes);
app.listen(conf.port, () => {
  console.log(`App is running at http://localhost:${conf.port}/`);
});
