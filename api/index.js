const express = require("express");
const connectDB = require("../config/connectDB");
const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config();

connectDB();

app.use(express.json());

app.use("/auth", require("../routes/authRouter"));
app.use("/api/albums", require("../routes/albumRouter"));
app.use("/api/images", require("../routes/imageRouter"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Export the Express app for Vercel serverless
module.exports = app;
