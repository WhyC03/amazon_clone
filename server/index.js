const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/auth");

const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://yash:Amogh2218@cluster0.tclnbkp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());

app.use(cors());
app.use(authRouter);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log("Connected at port " + PORT);
});


app.use(
  cors({
// enter your IP Address
    origin: "http://<yourip>", // Replace with your desired origin
    credentials: true,
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);