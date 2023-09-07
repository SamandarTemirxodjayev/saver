const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  RegisterDate: {
    type: Date,
    default: Date.now,
  }
});
const  Users = mongoose.model("users", usersSchema);

module.exports = Users;
