function validate(username, password) {
  username = username.trim();
  password = password.trim();

  if (username.length > 12) {
    throw ERRORS.usernameTooLong(username);
  }

  if (username.length < 1) {
    throw ERRORS.usernameTooShort(username);
  }

  if (!/^[A-Za-z0-9_]+$/.test(username)) {
    throw ERRORS.usernameInvalidCharacters(username);
  }

  if (password.length > 24) {
    throw ERRORS.passwordTooLong(password);
  }

  if (password.length < 8) {
    throw ERRORS.passwordTooShort(password);
  }

  if (!/^[A-Za-z0-9;:?.,<>~*^%$ @!_]+$/.test(password)) {
    throw ERRORS.passwordInvalidCharacters(password);
  }

  if (!/[A-Z]/.test(password)) {
    throw ERRORS.passwordNoCapital(password);
  }

  if (!/[0-9]/.test(password)) {
    throw ERRORS.passwordNoNumber(password);
  }

  if (username && password.includes(username)) {
    throw ERRORS.passwordContainsUsername(password);
  }

  return true;
}
