import express from 'express';
import connectToDataBase from './Database.js';
import cors from "cors";
import multer from 'multer';
import authRoute from './router/authRoutes.js';
import courseRoute from './router/courseRoutes.js';
import userRoute from './router/userRoutes.js';

const app = express();
const PORT = 5000;  


app.use(cors());
app.use(express.json({limit: '2mb'}));

app.use("/auth", authRoute);
app.use("/course", multer().array() , courseRoute);
app.use("/user", multer().any(['image']) , userRoute);


connectToDataBase
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`app is running on http://localhost:${PORT}`); 
    }); 
  })
  .catch((err) => {
    console.log("no conncection", err);
  });
