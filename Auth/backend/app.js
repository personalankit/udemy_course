import express from "express";
import mongoDB from "./db.js";

import authRoutes from './routes/auth.js'
import verifyToken from './routes/verifyToken.js'

const app = express();
mongoDB()

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/api/users/profile', verifyToken , (req, res) => {
  res.send({ success: true, data: req.user })
})

app.use(express.json());

app.use('/api/users', authRoutes)

app.listen(3000, () => {
  console.log(`Server is running on port ${3000}`);
});
