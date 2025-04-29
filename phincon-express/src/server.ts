import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
const app = express();

app.use(
    cors()
);

app.use(express.json());
app.use("/", routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
