const user = require("../models/user");

async function createUser(email, password) {
  const newUser = new user({ email, password });
  await newUser.save();
}

module.exports = {
  createUser,
};
