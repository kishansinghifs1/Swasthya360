import { Hono } from "hono";
import { cors } from "hono/cors";
import { newsRouter } from "./router/newsRouter";
import { symptomsRouter } from "./router/symptomsRouter";

const app = new Hono<{
  Bindings: {
    NEWS_API_KEY: string;
  };
}>();

app.use("*", cors({
  origin: "http://localhost:5173",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"],    
}));


app.route("/api/v1/swasthya360", newsRouter);
app.route("/api/v1/swasthya360", symptomsRouter);

export default app;