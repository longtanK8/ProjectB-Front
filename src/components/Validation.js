var isValidataNeeded = true;

export function ValidationSignUp(values) {
  let errors = {};

  if (!values.signup_username) {
    errors.signup_username = "Username is required.";
    isValidataNeeded = false;
  }

  if (!values.signup_email) {
    errors.signup_email = "Email is required.";
    isValidataNeeded = false;
  } else if (!/\S+@\S+\.\S+/.test(values.signup_email)) {
    errors.signup_email = "Email is invalid.";
    isValidataNeeded = false;
  }

  if (!values.signup_password) {
    errors.signup_password = "Password is required.";
    isValidataNeeded = false;
  } else if (values.signup_password.length < 8) {
    errors.signup_password = "Password must be more than 8 characters.";
    isValidataNeeded = false;
  }

  if (!values.signup_confirm_password) {
    errors.signup_confirm_password = "Confirm Password is required.";
    isValidataNeeded = false;
  } else if (values.signup_password !== values.signup_confirm_password) {
    errors.signup_confirm_password =
      "Password and Confirm Password must be the same.";
    isValidataNeeded = false;
  }
  return errors;
}
export function ValidationSignIn(values) {
  let errors = {};

  if (!values.login_username) {
    errors.login_username = "Username is required.";
    isValidataNeeded = false;
  }
  if (!values.login_password) {
    errors.login_password = "Password is required.";
    isValidataNeeded = false;
  }
  return errors;
}
export function isValidate() {
  return isValidataNeeded;
}
