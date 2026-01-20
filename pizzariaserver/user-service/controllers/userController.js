const User = require("../models/userModel.model");


exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.json({ status: 0, msg: "User already exists" });
  }

  const user = new User({ name, email, password });
  await user.save();

  res.json({ status: 1, msg: "Signup successful" });
};


exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ status: 0, msg: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ status: 0, msg: "Wrong password" });
  }

  res.json({
    status: 1,
    msg: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
};