const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
});

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
