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

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";

// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(cors());
// app.use(express.json());

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // Connect to MongoDB Atlas
// mongoose
//   .connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((error) => console.error("❌ MongoDB connection error:", error));

// // Routes
// app.use("/book", bookRoute);
// app.use("/user", userRoute);

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoutes from "./route/book.route.js";
import userRoutes from "./route/user.route.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors()); // allow frontend to call backend
app.use(express.json()); // parse JSON body

// ✅ Routes
app.use("/book", bookRoutes);
app.use("/user", userRoutes);

// ✅ Default route (avoid "Cannot GET /")
app.get("/", (req, res) => {
  res.send("📚 Epic Reads Backend is running...");
});

// ✅ Database + Server
const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MongoDBURI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
