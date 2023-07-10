const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const fileSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

fileSchema.post("save", async function (docs) {
  try {
    console.log(docs);
    // transportar
    let transportar = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: "",
        pass: "",
      },
    });

    // send mail

    let info = await transportar.sendMail({
      from: "Ujjwal kumar",
      to: docs.email,
      subject: "New file uploaded succesfully",
      html: "<h1>hii this is ujjwal kumar singh</h1><p>hii this is ujjwal kumar</p>",
    });
    console.log(info);
  } catch (error) {
    console.log(error);
  }
});

module.exports = mongoose.model("file", fileSchema);
