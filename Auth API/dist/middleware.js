import express from "express";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";
export const setupMiddleware = (app) => {
    app.use(express.json());
    app.use(cors({
        origin: true, // Change this to the actual frontend URL in production
        credentials: true,
    }));
    app.use(logger("dev"));
    app.use(cookieParser());
};
