import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000"
}));

app.use(express.json());

app.use("/api/courses", courseRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
