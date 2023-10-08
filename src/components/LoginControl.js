import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineUser} from "react-icons/ai"
import './Navbar/navbar.css'

// REDUX IMPORT
import { userLogout } from "../redux/actions/userAction";
import { removeListViewedProduct } from "../redux/actions/productAction";


const LoginControl = () =>{
    // STATE
    const dispatch = useDispatch()
    const { isLogin, authToken} = useSelector(state => state.userLogin);
    console.log('ISLOGGIN:',isLogin)

    const handleLogout = () =>{
        dispatch(userLogout())
        dispatch(removeListViewedProduct())
    }

        return(
            <div className="login">
                {authToken.username
                    ?
                    <>
                        <Link className="link" to='/' >
                           {
                            authToken.username ? authToken.username : 'frederic'
                           }
                        </Link>
                        <Link className="log" onClick={handleLogout}  >Déconnexion</Link>
                    </> 
                    :
                    <>  
                        <Link className="link" to='/Connexion' >
                            <AiOutlineUser className="userIcons" />
                        </Link>
                        <Link className="log" to='/Connexion'>Connexion</Link>
                    </> 
                }
            </div>
        )

}

export default LoginControl