import React, { useRef } from "react";
import {useNavigate} from 'react-router-dom'

const Login = (props) => {

    const loginEmailRef = useRef();
    const loginPassRef = useRef();
    const navigate = useNavigate();

    const submitHandler = (event) =>{
        event.preventDefault();
        const enteredLoginEmail = loginEmailRef.current.value;
        const enteredLoginPass = loginPassRef.current.value;


        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjr08BuFfWyO0Ah8gog-ZL58grRiIbOlM", {
            method: 'POST',
            body:JSON.stringify({
                email: enteredLoginEmail,
                password: enteredLoginPass,
                returnSecureToke: true

            }),
            headers:{
                'Content-Type': 'application/json'
              }
        }).then(res => {
            if(res.ok){
                console.log("Success")
                return res.json()
            }
            else{
                return res.json().then(data => {
                    let errorMessage = 'Authentication Failed!'
                    throw new Error(errorMessage)
                })

            }

        }).then((data) => {
            console.log(data)
            props.checkLogin(true)
            navigate('/store')

        }).catch((err) => {
            alert(err.message)
        }
        )

    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="loginInput">Email</label>
                <input type="text" id="loginInput" ref={loginEmailRef}></input>
                <label htmlFor="loginPass">Password</label>
                <input type="password" id="loginPass" ref={loginPassRef}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login; 