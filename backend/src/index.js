import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/UserRoute.js";
import vaccinationRouter from "./routes/VaccinationRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true 
}));

app.use("/api/users", userRoutes);
app.use("/api/vaccinations", vaccinationRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
