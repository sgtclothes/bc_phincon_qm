import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());
app.use("/", routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
