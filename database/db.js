const mongoose = require("mongoose");


const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected Successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = Connection;
