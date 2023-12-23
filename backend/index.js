import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

import mongoose from "mongoose";

const app = express();
//middleware for parsing request body
app.use(express.json());

//Allow all origins with default of cors
app.use(cors());

// app.use(
//   cors({
//     origin: "https://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(220).send("Welcome to my book store");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`DB connected successfully`);
    app.listen(PORT, () => {
      console.log(`App is listening in PORT:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed while connecting to DB", err);
  });
