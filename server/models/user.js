const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  role: String,
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
