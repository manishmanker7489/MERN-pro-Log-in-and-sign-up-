import React from "react";
import { useState } from "react";
import axios from 'axios';

import { useNavigate } from "react-router-dom";

const LogIn = () => {
    
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [data, setdata] = useState("");
    const navigate = useNavigate();

    const handelsubmit = (e)=>{
        e.preventDefault();
    axios.post('http://localhost:3001/login', {email,password})
    .then((result)=> {
        console.log(result)
        if(result.data === "Success"){
            navigate('/home');
        } 
        setdata(result.data);
        // else{
        //     navigate('/login');
        // }
    })
    .catch((err)=> console.log(err) );
    

    setemail("");
    setpassword("");
    }

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <div className="bg-secondary p-4 rounded shadow-lg" style={{ width: '18rem' }}>
        <h1 className="text-white text-2xl mb-4">Log In</h1>
        <form method="post" onSubmit={handelsubmit} >
            <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-100 p-3 mb-4 bg-dark text-white rounded outline-none placeholder-gray-500"
            onChange={(e)=> setemail(e.target.value)}
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-100 p-3 mb-4 bg-dark text-white rounded outline-none placeholder-gray-500"
            onChange={(e)=> setpassword(e.target.value)}
            />
            <button   className="w-100 p-3 bg-primary rounded text-white hover:bg-primary-dark">
                Log In
            </button>
        </form>
        <p className=" text-white my-4" >{data}</p>
      </div>
    </div>
  );
};

export default LogIn;