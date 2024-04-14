const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(console.log("DB connection Successfull"))
    .catch((error) => {
      console.log("DB Facing Connection Issues");
      console.error(error);
      process.exit(1);
    });
};

module.exports = connect;
