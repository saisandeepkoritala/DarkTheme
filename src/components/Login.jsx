import React from 'react'

function Login() {

    return (
        <div className="appp" >
        <div className='login'>
            <h1> Login</h1>
            <div className='container'>
            <form>
                <label>E-mail</label>
                <input type='email' placeholder='Enter your email' />
                <label>Password</label>
                <input type='password' placeholder='Enter your password' />
                <button>Log In</button>
            </form>
            <div className='bottom'>
                <p>Forget your password?</p>
                <a href='/'>Reset Password</a>
            </div>
            <p className='create'>Create Account</p>
            </div>
        </div>
        </div>
    );
    }

export default Login;
