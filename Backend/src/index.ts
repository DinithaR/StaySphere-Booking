import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./infrastructure/db";
import hotelsRouter from "./api/hotel";
import usersRouter from "./api/user";
import bookingsRouter from "./api/booking";
import globalErrorHandlingMiddleware from "./api/middlewares/global-error-handling-middleware";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/hotels", hotelsRouter);
app.use("/api/users", usersRouter);
app.use("/api/bookings", bookingsRouter);

// error handling middleware should be last
app.use(globalErrorHandlingMiddleware);

const port = process.env.PORT ? parseInt(process.env.PORT) : 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
