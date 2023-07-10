const mongoose = require("mongoose");

async function connection() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("datbase connected");
  } catch (error) {
    console.log(error);
    console.log("Error while connectiong to database");
  }
}
module.exports = {
  connection,
};
