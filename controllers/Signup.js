const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const File = require("../models/File");

exports.Signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await File.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        sucess: false,
        message: "User already exist in the database try with another email",
      });
    }

    // secure password

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "password cannot be hashed try to reduce salt round",
      });
    }

    // create user
    const user = await File.create({
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      message: "user created",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "user cannot be created ,please try again later",
    });
  }
};
