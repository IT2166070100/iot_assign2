import { Hono } from "hono";
import { cors } from "hono/cors";
import apiRouter from "./routes/api.js";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: [
      "http://localhost:5173",
      "https://iot-assign2.vercel.app"
    ],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.route("/v1", apiRouter);

export const config = {
  runtime: "edge",
};

export default handle(app);
