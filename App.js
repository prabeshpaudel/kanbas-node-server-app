import "dotenv/config";
import express from 'express';
import Lab5 from './Lab5.js';
import cors from 'cors';
import mongoose from 'mongoose';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import UserRoutes from './Users/routes.js';
import QuizRoutes from "./Kanbas/quizzes/routes.js";
import QuestionRoutes from "./Kanbas/questions/routes.js";
import session from 'express-session';

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

mongoose.connect(process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/kanbas');
// mongoose.connect("mongodb+srv://giuseppi:supersecretpassword@kanbas.bpl8vgp.mongodb.net/Kanbas?retryWrites=true&w=majority&appName=Kanbas");
const app = express();
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
app.use(express.json());
const sessionOptions = {
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        sameSite: "none",
        secure: true,
        domain: "kanbas-node-server-app-1-ic1i.onrender.com",
    }
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
UserRoutes(app);
QuizRoutes(app);
QuestionRoutes(app);
app.listen(process.env.PORT || 4000);