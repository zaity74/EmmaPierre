import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './login.css'
import { useCookies } from 'react-cookie';

// Redux import 
import { userLogin } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';

const Login = () => {

  // STATE
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  // NEW VARIABLES
    const dispatch = useDispatch();
    const error = useSelector(state => state.userLogin.error);
    const { authToken } = useSelector(state => state.userLogin);
  
  // FUNCTIONS
    const handleLogin = async (e) => {
      e.preventDefault();
      // do something with the email and password
      dispatch(userLogin(username, password));

    };
  
    return (
      <form className="login-form"  onSubmit={handleLogin}>
        <h2>Connexion</h2>
        <label>
          Username:
          <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
        <Link to={'/Register'}>
          Créer un compte
        </Link>
      </form>
    );
  };
  
  export default Login;