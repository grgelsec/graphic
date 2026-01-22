import "dotenv/config";
import express, { request, response } from "express";
import dotenv from "dotenv";
import type { Express } from "express";
import { authRouter } from "@graphic/routes";
dotenv.config();

const app: Express = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Graphic server is live!" });
});

app.use("/auth", authRouter);
