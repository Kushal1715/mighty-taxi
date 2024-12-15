import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import cors from 'cors'
import authRoutes from '../routes/auth.js'
import bcrypt from 'bcryptjs'

dotenv.config()

mongoose.connect(process.env.MONGO)
  .then(() => console.log('mongodb is connected'))
  .catch((err) => {
    console.log(err)
  })
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);


app.listen(3000, () => {
  console.log('server is running on port 3000')
})
