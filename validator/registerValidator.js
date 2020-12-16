const validator = require("validator");

const validate = (user) => {
  let error = {};

  if (!user.name) {
    error.name = "Please provide your name";
  }
  if (!user.email) {
    error.email = "Please provide your email";
  } else if (!validator.isEmail(user.email)) {
    error.email = "Please provide valid email";
  }
  if (!user.password) {
    error.password = "Please provide your password";
  } else if (user.password.length < 4) {
    error.password = "Please provide valid password";
  }
  if (!user.confirmPassword) {
    error.confirmPassword = "Please provide your confirmation password";
  } else if (user.password !== user.confirmPassword) {
    error.confirmPassword = "Password doesn't match";
  }

  return {
    error,
    isValid: Object.keys(error).length === 0,
  };
};
module.exports = validate;
