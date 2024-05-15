const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const connectToDB = require("./src/utils/dbConnect");
connectToDB();

const userRoutes = require("./src/routes/userRoute");
const blogRoutes = require("./src/routes/blogRoute");


//middleware
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", blogRoutes);

app.listen(4000, () => {
    console.log("server started");
})