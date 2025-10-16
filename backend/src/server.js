import express from "express"
import cors from 'cors'
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app=express();
const PORT = process.env.PORT || 5001

app.use(cors({
    origin:"http://localhost:5173",
})
);
//middleware j
app.use(express.json()); // this middlewre will parse JSON bodes: req.body
app.use(rateLimiter);

//our simple custom middlware
// app.use((req,res,next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })


app.use("/api/auth", authRoutes);
app.use("/api/notes",notesRoutes);

connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server started on PORT: ",PORT);
});
});


