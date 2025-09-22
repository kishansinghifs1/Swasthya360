import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/UserRoute.js";
import vaccinationRouter from "./routes/VaccinationRoute.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: "localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true 
}));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/vaccinations", vaccinationRouter);
app.use("/api/v1/swasthya360", aiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});