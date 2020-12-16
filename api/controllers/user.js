const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { token } = require("morgan");
const registerValidator = require("../../validator/registerValidator");
const User = require("../models/User");

const registerController = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err,
      });
    }

    let { name, email, password, confirmPassword } = req.body;
    let validate = registerValidator({
      name,
      email,
      password,
      confirmPassword,
    });
    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    }

    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "User Created Successfully",
          user: result,
        });
      })
      .catch((error) => {
        res.json({
          error,
        });
      });
  });
};

const getAllUserController = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({
        users,
      });
    })
    .catch((error) => {
      res.json({
        error,
      });
    });
};

const loginController = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({
            message: "Error Occured",
          });
        }
        if (result) {
          let token = jwt.sign({ email: user.email, _id: user._id }, "SECRET", {
            expiresIn: "2h",
          });

          res.json({
            message: "Login Successful",
            token,
          });
        } else {
          res.json({
            message: "Login Failed.Password doesn't matched",
          });
        }
      });
    } else {
      res.json({
        message: "User Not Found",
      });
    }
  });
};
/*
const logoutController = (req,res,next) => {
    res.destroy(token)
    res.json({
        message: 'Logout'
    })
}
*/
module.exports = {
  registerController,
  loginController,
  //logoutController,
  getAllUserController,
};
