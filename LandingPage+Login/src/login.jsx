import React, { useState } from 'react';
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import SignupForm from './signup'; // Import the SignupForm component
import backgroundImage from './images/loginbg.jpeg'; // Import the background image

const LoginSignupCard = ({ onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cardStyle = {
    paddingTop: '25px',
    paddingLeft: '25px',
    paddingBottom: '25px',
    paddingRight: '40px',
    backgroundColor: '#6e3d76',
    border: '2px solid black',
    justifyContent: 'center',
    marginTop: '300px',
    marginBottom: '200px',
    marginLeft: '60px',
    marginRight: '50px',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    color: '#4a154b'
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px'
  };

  const inputFieldStyle = {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#4a154b',
    color: 'white'
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4a154b',
    color: 'white',
    cursor: 'pointer'
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  const linkStyle = {
    fontSize: '12px',
    color: 'black',
    textDecoration: 'underline',
    transition: 'color 0.3s, fontSize 0.3s',
    justifyContent: 'space-between'
  };

  const linkHoverStyle = {
    color: 'plum',
    fontSize: '13px'
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();
    if (result.status === 'success') {
      onLogin();
    }
  };

  const handleSignup = async (userData) => {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const result = await response.json();
    if (result.status === 'success') {
      setIsLogin(true);
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', margin: 0, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={cardStyle}>
          <div className="login-signup-form">
            <div style={headingStyle}>
              <button onClick={() => setIsLogin(true)} style={{ marginRight: '10px' }}>
                Login
              </button>
              <button onClick={() => setIsLogin(false)}>Signup</button>
              <button onClick={onClose} style={{ marginLeft: '10px' }}>
                Close
              </button>
            </div>
            {isLogin ? (
              <>
                <input
                  style={inputFieldStyle}
                  type="email"
                  placeholder="Enter your Registered Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onInvalid={(e) => e.target.setCustomValidity("You didn't enter an email")}
                  onInput={(e) => e.target.setCustomValidity('')}
                />
                <input
                  style={inputFieldStyle}
                  type="password"
                  placeholder="Enter your Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button style={buttonStyle} onClick={handleLogin}>
                  Let`s Go !!
                </button>
                <div style={linksStyle}>
                  <a
                    href="#"
                    style={linkStyle}
                    onMouseOver={(e) => {
                      e.target.style.color = linkHoverStyle.color;
                      e.target.style.fontSize = linkHoverStyle.fontSize;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = linkStyle.color;
                      e.target.style.fontSize = linkStyle.fontSize;
                    }}
                  >
                    Forgot your password?
                  </a>
                  <a
                    href="#"
                    style={linkStyle}
                    onClick={handleToggle}
                    onMouseOver={(e) => {
                      e.target.style.color = linkHoverStyle.color;
                      e.target.style.fontSize = linkHoverStyle.fontSize;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = linkStyle.color;
                      e.target.style.fontSize = linkStyle.fontSize;
                    }}
                  >
                    Not an Existing User? Sign up!!
                  </a>
                </div>
              </>
            ) : (
              <>
                <SignupForm handleSignup={handleSignup} /> {/* Render the SignupForm component */}
              </>
            )}
          </div>
        </Card>
        </div>
    </React.Fragment>
  );
};

LoginSignupCard.propTypes = {
  onClose: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired
};

export default LoginSignupCard;
