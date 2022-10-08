const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE?.replace(
  "<password>",
  `${process.env.DATABASE_PASSWORD}`
);
mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
  console.log("database connection successful");
});

const Port = process.env.PORT;
app.listen(Port, () => {
  console.log(`app listening on port ${Port}`);
});

export {};
