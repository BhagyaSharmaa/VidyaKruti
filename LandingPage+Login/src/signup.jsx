import React from "react";
import PropTypes from "prop-types";
const SignupForm = ({ handleToggle }) => {
  const inputFieldStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#4a154b",
    color: "white",
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    marginLeft: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4a154b",
    color: "white",
    cursor: "pointer",
  };

  return (
    <React.Fragment>

    <div>
      <input
        style={inputFieldStyle}
        type="text"
        placeholder="Enter your Username"
        required
        />
      <input
        style={inputFieldStyle}
        type="email"
        placeholder="Enter your Email"
        required
        />
      <input
        style={inputFieldStyle}
        type="password"
        placeholder="Enter your Password"
        required
        />
      <button style={buttonStyle}>
        Sign Up
      </button>
      <button style={buttonStyle} onClick={handleToggle}>
        Back to Login
      </button>
    </div>
    </React.Fragment>
  );
};
SignupForm.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default SignupForm;
