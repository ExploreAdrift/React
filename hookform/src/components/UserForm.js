import React, { useState } from "react";

const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
  };

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required!");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First Name must be greater than 2 characters!");
    } else {
      setFirstNameError("");
    }
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required!");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last Name must be greater than 2 characters!");
    } else {
      setLastNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 7) {
      setEmailError("Email must be greater than 7 characters!");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be greater than 8 characters!");
    } else {
      setPasswordError("");
    }
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length !== password) {
      setConfirmPasswordError("Passwords don't match!");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        {hasBeenSubmitted ? <h3>Thanks for submitting!</h3> : <h3>Please Submit!</h3>}
        <div>
          <label>First Name: </label>

          <input type="form-group" onChange={handlefirstName} value={firstName} />
        </div>
        {firstNameError}

        <div>
          <label>Last Name: </label>

          <input type="form-group" onChange={handleLastName} value={lastName} />
        </div>
        {lastNameError}

        <div>
          <label>Email Address: </label>
          <input type="form-group" onChange={handleEmail} value={email} />
        </div>
        {emailError}

        <div>
          <label>Password: </label>
          <input type="password" onChange={handlePassword} value={password} />
        </div>
        {passwordError}
        <div>
          <label> Confirm Password: </label>
          <input type="password" onChange={handleConfirmPassword} value={confirmPassword} />
        </div>

        {confirmPasswordError}

        <input type="submit" value="Create User" />
      </form>

      <div>
        <h6>Your Form Data</h6>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default UserForm;
