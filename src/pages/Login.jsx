import React, { useContext } from 'react';
import Navbar from './Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const {loginUser} = useContext(AuthContext) ;

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        loginUser(email, password)
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    return (
        <div>
           <Navbar/>
           <h2 className='text-3xl text-center my-6'> This is Login Page </h2> 

           <div className='w-2/5 mx-auto'>

            <form className='' onSubmit={handleLogin}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
            </form> 
           </div>

           <div className='font-bold text-center'> New Here ? Please <Link to='/register'><span className='text-teal-500'>  Register  </span></Link> </div>

 
        </div>
    );
};

export default Login;