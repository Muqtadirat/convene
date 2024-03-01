const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  password: String,
  role: String,
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
