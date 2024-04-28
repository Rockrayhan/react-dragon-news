import React, { useContext } from 'react';
import Navbar from './Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {
  const {createUser} = useContext(AuthContext);

  const sampleData = useContext(AuthContext)
  console.log(sampleData);

    const handleRegister = e => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        createUser( email, password )
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        })
    }

    
    return (
        <div>
           <Navbar/>
           <h2 className='text-3xl text-center my-6'> Please Register Here </h2> 

           <div className='w-2/5 mx-auto'>

            <form className='' onSubmit={handleRegister}>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Name" placeholder="Name" name='name' className="input input-bordered" required />
        </div>

            <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
        </div>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" required />
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
          <button className="btn btn-primary">Register</button>
        </div>
            </form> 
           </div>

           <div className='font-bold text-center'> Already Registered ? Please <Link to='/login'><span className='text-orange-500'>  Login  </span></Link> </div>

 
        </div>
    );
};

export default Register;