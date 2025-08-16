// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';

// import bookRoute from './route/book.route.js';
// import userRoute from './route/user.route.js';

// const app = express();

// app.use(cors());
// app.use(express.json());


// dotenv.config(); // Load environment variables from.env file

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // Cnnect to MongoDB
// try{
//     mongoose.connect(URI,{
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
      
//     });
//     console.log('Connected to MongoDB');

// } catch (error){
//     console.log("Error: ", error);
// }



// // defining Routes

// app.use("/book",bookRoute);
// app.use("/user",userRoute);

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`)
// });

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB Atlas
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB connection error:", error));

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
