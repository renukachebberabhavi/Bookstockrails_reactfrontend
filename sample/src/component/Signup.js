import axios from 'axios';
import React,{useState} from 'react';
import {
 
    Link
      
      } from "react-router-dom";
// cors error => // by using proxy in package.json
// cors error =>//by using some ruby modules

// axios for reuqest
// name,password and email,phone

//backend
// APi endpoints already made and verfied
// login and register
// registration => working with client
//


// Todo
// react-router-dom : howyouare setting the routes and linking everything;
// integrate your api endpoint of server with frontend;
//cors error =>  proxy handle

// Authentication => checking if user is registered with you or not;
// full working backend
// login  endpoint => login page
// signup endpoint => Singup page
// books api endpoint => all details of books => create a dashboard.js
// books api search by name endpoint => it will give info of that particular book; => search box =>
//Authorisation => you allow authenticated user to use some your resources

// session => create an httponly cookies.
// httponly cookie => backend =>
// authorised route  => response
// ex ; http:127.0.0.1/user => rquires me to have an authorisation or to have a session for this.

// frontend :
// sessions=> it is a server-side cookie
//Login  :ex ;http:127.0.0.1/login => session is created here
// dashboard ; ex :http:127.0.0.1/user => if


//req from client and res from server


const Signup = () => {
    let [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
         [e.target.name] : e.target.value
     })
    }
    console.log(data);

    async function sendData() {
        let res = await axios.post("http://127.0.0.1:3002/user", data)
        console.log(res.data);
    }
    return (
        <div>
            <input type="text" placeholder='username' name='name' onChange={handleChange}/>
            <input type="text" placeholder='email' name='email'  onChange={handleChange}/>
            <input type="text" placeholder='password' name='password' onChange={handleChange}/>
            <input type="text" placeholder='phone_number' name='phone_number' onChange={handleChange}/>
            <input type="text" placeholder='role_id' name='role_id' onChange={handleChange}/>
            <input type="text" placeholder='address' name='address' onChange={handleChange}/>
            <input type="submit" onClick={sendData} />
            <Link to="/">
            <p>Are you register user ? login here</p>
            </Link>
            
        </div>
    );
}

export default Signup;
