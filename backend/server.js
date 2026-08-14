import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import courseRoutes from "./routes/courseRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import studentRoutes from "./routes/studentRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import pool from "./config/db.js";

dotenv.config();

const allowedOrigins = [
  "http://localhost:3000",
  process.env.FRONTEND_URL,
].filter(Boolean);

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/instructors", instructorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected:", result.rows[0]);
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
