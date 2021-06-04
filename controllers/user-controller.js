const { User } = require("../models");

const UserController = {
  // get all users
  getAllUsers(req, res) {
    User.find({})
    
  }
}