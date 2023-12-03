import { useState } from "react";
import "../Css/Login.css";
import NavLogin from "./NavLogin";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  
  const [data, setData] = useState({
    fname: "",
    surname: "",
    username: "",
    password: "",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.logusername
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (username) => {

    axios.get("http://localhost:3001/member/" +username).then((res) => {
      setData(res.data[0]);
        
      })
      .catch((err) => console.log(err));
      
  };

  return (
    <>
      <div className="big">
        <NavLogin />
        <div className="ct">
          <div className="ct2">
            <form >
              <div className="mb-3">
                <label  className="form-label">
                  username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  
                  onChange={(e) => handleChange(e)}
                />
         
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  className="form-control"
              
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-3 form-check">
                <div className="si">
                  <div>
                    <p>
                      no user <Link to="/Sign">Sign in</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="submib">
                <button type="submit" className="bt " onClick={handleSubmit} >
                  Submit
                </button>
              </div>
            </form>

           
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
