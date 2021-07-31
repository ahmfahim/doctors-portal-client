import { useContext, useState } from 'react';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import img from '../../../images/Group 140.png'


function Login() {
    const [newUser, setNewUser] = useState(true)
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    })

    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };


    // google sign in 
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }
    // google sign out a
    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    // handle change event
    const handleBlur = (event) => {

        let isFormValid = true;
        if (event.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);

        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user }
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }

    }
    // handle submit event
    const handleSubmit = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        event.preventDefault();
    }

    // handle response 
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }


    return (
       <div className="d-flex justify-content-center">
            <div className="container row d-flex align-items-center">
                <div className="col-md-5 text-center login-form">
                    <h3 className="text-brand">Login</h3>
                    <form onSubmit={handleSubmit}>
                        {newUser && <input className="ps-3" type="text" onBlur={handleBlur} placeholder="your name" name="name" required />}
                        <br />
                        <input className="ps-3 " type="text" onBlur={handleBlur} name="email" placeholder="your email address" id="" required />
                        <br />
                        <input className="ps-3" type="password" onBlur={handleBlur} name="password" placeholder="your password" id="" required />
                        <br />
                        <input className="btn btnStyle " type="submit" value={newUser ? 'Create Account' : 'Login'} />
                    </form>
                    <div className="toggle-btn mt-2">
                        <strong className="text-brand2">Already have an account? <span className="text-danger" onClick={() => setNewUser(!newUser)}>Login</span></strong>    
                    </div>
                    <div className="display-error">
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'created' : 'Login'} successfully! </p>}
                    </div>
                    <button className="btn btnStyle" onClick={googleSignIn}> Sign in by google</button>
                </div>

                <div className="col-md-7">
                    <img className="img-fluid" src={img} alt="" />
                </div>

            </div>
       </div>
    );
}

export default Login;
