import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    const demoUser = (e) => {
        setErrors([]);
        dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
        // history.push('/');
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="login-modal-header">Log in</h3>
            <ul className="login-error-valid" style={{ color: "red", listStyle: 'none' }}>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>
                <div className="login-username">
                    Username or Email
                </div>
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label>
                <div className="login-password">
                    Password
                </div>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <div className="login-btns">
                <button className="signup-form-btn" type="submit">Log In</button>
                <span className='demo-btn'>
                    <button
                        type='submit'
                        className="demo-user-btn"
                        onClick={demoUser}
                    >
                        Demo
                    </button>
                </span>
            </div>
        </form>
    );
}

export default LoginForm;
