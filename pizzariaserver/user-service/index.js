const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./router/userRouter");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/PIZZARIADB");

app.use("/api/users", userRoutes);

app.listen(3010, () => {
  console.log("User service running on port 3010");
});