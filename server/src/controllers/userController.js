const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//register
const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      res.status(400).send({ message: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    const newUser = new User({ username, email, password: hashPassword });
    const userData = await newUser.save();

    if (userData) {
      res
        .status(200)
        .send({ message: "Register Successfully", data: userData });
    }
  } catch (error) {
    console.log(error);
  }
};

//login
const loggedUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({ message: "User not found" });
    }

    const passwordValidate = await bcrypt.compare(password, user.password);

    if (!passwordValidate) {
      res.status(400).send({ message: "Invalid Credential" });
    }
    const token = jwt.sign({ user: user._id }, "helloHowAreYou", {
      expiresIn: "3d",
    });

    res.status(200).send({ message: "logged Successfully", data: user, token });
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decode = await jwt.verify(token, "helloHowAreYou");    
    const id = decode.id;
    const user = await User.findOne({ id });
    res.status(200).send({message: "Done", user});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addUser,
  loggedUser,
  getUser,
};
