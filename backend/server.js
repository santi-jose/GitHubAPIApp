import express from "express"
import dotenv from "dotenv"
import passport from "passport"
import session from "express-session"
import path from "path"

import "./passport/github.auth.js";
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.route.js"

import connectMongoDB from "./db/connectMongoDB.js"

dotenv.config();

// express server elements
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// create session information
app.use(
    session(
        { 
            secret: "s0m3s0rTOf5EcR3T", 
            resave: false, 
            saveUninitialized: false 
        })
);

// initialize passport with session information
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// tell express where to find static files
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// create listen function for our PORT
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
    connectMongoDB();
});