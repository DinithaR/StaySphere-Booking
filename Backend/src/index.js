import "dotenv/config";
import express from 'express';
import connectDB from "./infrastructure/db.js";

import hotelsRouter from './api/hotel';
import usersRouter from "./api/user.js";
import bookingsRouter from "./api/booking.js";

// Create an express application
const app = express();
// Middleware to parse JSON data in the request body
app.use(express.json());

connectDB();

app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);
app.use("/api/bookings", bookingsRouter)

// Define the port to run the server
const port = 8000;
app.listen(8000, console.log('Server is running on port 8000'));


// NHNKoRbQgZ9BUYj1 