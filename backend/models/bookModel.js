import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  authro: {
    type: String,
    require: true,
  },
  publishYead: {
    type: String,
    require: true,
  },
});

export const Book = mongoose.model("Book", bookSchema);
