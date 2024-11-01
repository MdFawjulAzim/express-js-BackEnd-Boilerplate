import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import body_parser from "body-parser";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";
import multer from "multer";
import nodemailer from "nodemailer";
import xss_clean from "xss-clean";
import fileUpload from "express-fileupload";

import router from "./routes/api.js";
import {MONGODB_CONNECTION,PORT,Max_JSON_SIZE,URL_ENCODER,WEB_CACHE,REQUEST_LIMIT_TIME,REQUEST_LIMIT_NUMBER} from "./app/config/config.js";

const app = express();


//Global Application Middleware
app.use(cors());
app.use(express.json({limit:Max_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODER}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

  // Rate Limiting middleware
const limit =rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limit);

//Web Caching
app.set('etag',WEB_CACHE);

//MongoDB Connection
/*
    You Need to connect mongoDB Here
*/


//Set API Routes
app.use("/api",router);

//set Application Storage
app.use(express.static('storage'));



//Run Your Express Back End Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});