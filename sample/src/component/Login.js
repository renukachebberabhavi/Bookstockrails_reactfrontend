import axios from 'axios';
import React, { useState } from 'react';
import {
    Link
} from "react-router-dom";
// it will be integrated login api

const Login = () => {
    //     return (
    //         <div>
    //             Login componenet rendering

    //             <Link to="/signup">
    //             <button>Register with us</button>
    //             </Link>
    //         </div>
    //     );
    // }
    let [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    console.log(data);

    async function sendData() {
        let res = await axios.post("http://127.0.0.1:3002/login", data)
        console.log(res.data);
                
                if(res.data == "Logged in successfully")
                {
                console.log("Hurray logged in");
                //go to dashboard
                }
                else
                {
                console.log("Login not successful");
                }
        // if login successful go to dashboard to view bookstock

    }
    return (
        <div>
            Login
            <input type="text" placeholder='email' name='email' onChange={handleChange} />
            <input type="text" placeholder='password' name='password' onChange={handleChange} />

            <input type="submit" onClick={sendData} />
            <br></br>
            <Link to="/signup">
                <button>Not a registered user,register with us</button>
            </Link>
            <br></br>
            <Link to="/dashboard">
                <button>Go to Dashboard</button>
            </Link>

        </div>
    );
}
export default Login;
