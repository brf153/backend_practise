import express from 'express';
import { PrismaClient } from '@prisma/client';
import userRoute from './routes/userRoute';

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(express.json());

app.use('/api/users', userRoute);

app.get('/', async (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
