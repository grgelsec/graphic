import "dotenv/config";
import express, { request, response } from "express";
import dotenv from "dotenv";
import type { Express } from "express";
dotenv.config();

const app: Express = express();
const port = 3000;
