import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './login.css'
import { useCookies } from 'react-cookie';

// Redux import 
import { userRegister } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const Register = () => {

  // STATE
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

  // NEW VARIABLES
    const dispatch = useDispatch();
    const error = useSelector(state => state.userRegister.error);
  
  // FUNCTIONS
    const handleRegister= async (e) => {
      e.preventDefault();
      // do something with the email and password
      dispatch(userRegister(username, password,email));
    };
  
    return (
      <form className="login-form"  onSubmit={handleRegister}>
        <h2>Créer un compte </h2>
        <label>
          Username:
          <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default Register;