import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  const handelChange = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/register', {name,email,password} )
    .then((result)=> {console.log(result) 
    navigate('/login');
    })
    .catch((err)=> console.log(err) );
    
    setname("");
    setemail("");
    setpassword("");
  }
 

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
    <div className="bg-secondary p-4 rounded shadow-lg" style={{ width: '18rem' }}>
      <h1 className="text-white text-2xl mb-4">Register</h1>
      
      <form action="" onSubmit={handelChange} >
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="w-100 p-3 mb-3 bg-dark text-white rounded border-0"
          onChange={(e)=> setname(e.target.value) }
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-100 p-3 mb-3 bg-dark text-white rounded border-0"
          onChange={(e)=> setemail(e.target.value) }
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-100 p-3 mb-3 bg-dark text-white rounded border-0"
          onChange={(e)=> setpassword(e.target.value) }
        />
        <button className="w-100 p-3 bg-primary rounded text-white hover:bg-primary-dark mb-2">
          Register
        </button>
      </form>

      <p className="text-white " >Already Have an Account</p>

      <Link to="/login" className="w-100 p-3 bg-primary rounded text-white hover:bg-primary-dark text-decoration-none">
        Log In
      </Link>
    </div>
  </div>

  );
};

export default Signup;