let errors = {};

export function ValidationSignUp(values) {
  errors = {};
  if (!values.signup_username) {
    errors.signup_username = "Username is required.";
  }

  if (!values.signup_email) {
    errors.signup_email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.signup_email)) {
    errors.signup_email = "Email is invalid.";
  }

  if (!values.signup_password) {
    errors.signup_password = "Password is required.";
  } else if (values.signup_password.length < 8) {
    errors.signup_password = "Password must be more than 8 characters.";
  }

  if (!values.signup_confirm_password) {
    errors.signup_confirm_password = "Confirm Password is required.";
  } else if (values.signup_password !== values.signup_confirm_password) {
    errors.signup_confirm_password =
      "Password and Confirm Password must be the same.";
  }
  return errors;
}
export function ValidationSignIn(values) {
  errors = {};
  if (!values.username) {
    errors.username = "Username is required.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  }
  return errors;
}
export function isValidate() {
  if (Object.keys(errors).length === 0) {
    return true;
  }
  return false;
}
