import { app } from "./app.js";
import mongoose from "mongoose";
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "apiCreation",
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((e) => console.log(e));


app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});
