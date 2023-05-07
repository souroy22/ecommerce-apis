require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// files
const allRouters = require("./routers");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
connectDb();

app.use("/api/v1", allRouters);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error while connecting server, ${error.message}`);
    return;
  }
  console.log(`Server is successfully running on PORT: ${PORT}`);
});
