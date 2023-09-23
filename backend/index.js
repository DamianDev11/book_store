import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(220).send("Welcome to my book store");
});

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
